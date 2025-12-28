/**
 * Claude API Integration for P&L Challenge Generation
 * This module handles communication with the Anthropic Claude API
 * to convert user questions into interactive coding challenges.
 */
const ClaudeAPI = {
    // API Configuration
   // Inside ClaudeAPI.js

// API_KEY: REMOVED! We don't need it here anymore.
// API_URL: Changed to point to your internal function
API_URL: '/.netlify/functions/askClaude', 

async generateChallenge(question, language = null, difficulty = 'intermediate') {
    const systemPrompt = this.buildSystemPrompt();
    const userPrompt = this.buildUserPrompt(question, language, difficulty);
    
    try {
        // We are now calling YOUR server, not Anthropic directly
        const response = await fetch(this.API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // No API Key header here!
                // No "dangerous-browser-access" header here!
            },
            body: JSON.stringify({
                // We just pass the text data to our function
                prompt: userPrompt,
                system: systemPrompt
            })
        });
        
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        const content = data.content[0]?.text || '';
        
        return this.parseResponse(content, question, language, difficulty);
        
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
},
    
    /**
     * Build the system prompt for challenge generation
     */
    buildSystemPrompt() {
        return `You are an expert programming instructor that creates interactive code sequencing challenges. Your task is to convert any programming question or concept into a step-by-step code construction challenge.

IMPORTANT: You must respond ONLY with a valid JSON object. No markdown, no explanation, no code blocks - just pure JSON.

The challenge format requires:
1. A clear goal explaining what the code accomplishes
2. Key concepts being taught
3. A sequence of code lines where each step has:
   - The correct code line
   - 2 plausible distractors with explanations of why they're wrong
   - Proper indentation level (0, 1, 2, etc.)
   - An explanation of what this line does

JSON Schema:
{
    "goal": "string - clear description of what the code does",
    "concepts": "string - comma-separated list of concepts",
    "language": "string - programming language",
    "sequence": [
        {
            "correct": "string - the correct code line",
            "distractors": [
                {"text": "string - wrong option 1", "reason": "string - why it's wrong"},
                {"text": "string - wrong option 2", "reason": "string - why it's wrong"}
            ],
            "indent": number,
            "explanation": "string - what this line does"
        }
    ]
}

Rules:
- Each sequence should have 5-10 steps
- Distractors should be plausible mistakes beginners might make
- Include proper imports/headers at the start
- Include proper program structure (main function, return statements, etc.)
- Escape special characters in strings properly (use \\n for newlines, \\" for quotes)
- Indent levels: 0 for top-level, 1 for inside functions/blocks, 2 for nested blocks`;
    },
    
    /**
     * Build the user prompt with the question
     */
    buildUserPrompt(question, language, difficulty) {
        let prompt = `Create a code sequencing challenge for the following:\n\nQuestion/Topic: ${question}`;
        
        if (language) {
            prompt += `\n\nProgramming Language: ${language}`;
        } else {
            prompt += `\n\nDetermine the most appropriate programming language based on the question, or use Python as default.`;
        }
        
        prompt += `\n\nDifficulty Level: ${difficulty}`;
        
        if (difficulty === 'beginner') {
            prompt += '\n(Keep it simple with 5-6 steps, basic concepts only)';
        } else if (difficulty === 'advanced') {
            prompt += '\n(Include advanced concepts, 8-10 steps, complex logic)';
        } else {
            prompt += '\n(Medium complexity, 6-8 steps)';
        }
        
        prompt += '\n\nRespond ONLY with the JSON object, nothing else.';
        
        return prompt;
    },
    
    /**
     * Parse and validate the API response
     */
    parseResponse(content, originalQuestion, requestedLanguage, difficulty) {
        // Try to extract JSON from the response
        let jsonStr = content.trim();
        
        // Remove any markdown code blocks if present
        if (jsonStr.startsWith('```')) {
            jsonStr = jsonStr.replace(/```json?\n?/g, '').replace(/```$/g, '').trim();
        }
        
        try {
            const challengeData = JSON.parse(jsonStr);
            
            // Validate required fields
            if (!challengeData.goal || !challengeData.sequence || !Array.isArray(challengeData.sequence)) {
                throw new Error('Invalid challenge format: missing required fields');
            }
            
            // Ensure each sequence item has required fields
            challengeData.sequence = challengeData.sequence.map((step, index) => ({
                correct: step.correct || '',
                distractors: step.distractors || [
                    { text: 'Option A', reason: 'Incorrect syntax' },
                    { text: 'Option B', reason: 'Wrong approach' }
                ],
                indent: typeof step.indent === 'number' ? step.indent : 0,
                explanation: step.explanation || `Step ${index + 1}`
            }));
            
            // Add metadata
            challengeData.language = challengeData.language || requestedLanguage || 'Python';
            challengeData.concepts = challengeData.concepts || 'Programming fundamentals';
            challengeData.difficulty = difficulty;
            challengeData.originalQuestion = originalQuestion;
            challengeData.generatedAt = new Date().toISOString();
            
            return challengeData;
            
        } catch (parseError) {
            console.error('JSON Parse Error:', parseError);
            console.error('Raw content:', content);
            throw new Error('Failed to parse challenge data from API response');
        }
    },
    
    /**
     * Generate a unique ID for the challenge
     */
    generateChallengeId() {
        return 'pnl_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    },
    
    /**
     * Handle general (non-code) chat questions
     */
    async generalChat(question) {
        try {
            const response = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.apiKey,
                    'anthropic-version': '2023-06-01',
                    'anthropic-dangerous-direct-browser-access': 'true'
                },
                body: JSON.stringify({
                    model: this.model,
                    max_tokens: 1024,
                    messages: [{
                        role: 'user',
                        content: question
                    }],
                    system: `You are a helpful assistant. Provide clear, concise answers to general questions. 
Format your responses nicely with:
- Short paragraphs
- Numbered steps when explaining processes
- Bullet points for lists
Keep responses focused and practical.`
                })
            });
            
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error?.message || `API Error: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (!data.content || !data.content[0] || !data.content[0].text) {
                throw new Error('Invalid response from API');
            }
            
            return data.content[0].text;
            
        } catch (error) {
            console.error('General chat error:', error);
            throw error;
        }
    }
};

// Export for use in other scripts
window.ClaudeAPI = ClaudeAPI;
