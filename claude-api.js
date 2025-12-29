/**
 * Claude API Integration for P&L Challenge Generation
 * UNIFIED VERSION - Smart detection for code, how-to, and structured modes
 */
const ClaudeAPI = {
    API_URL: 'https://cerulean-sawine-dd190b.netlify.app/.netlify/functions/askClaude',

    /**
     * Detect the type of question:
     * - 'code': Programming/coding questions
     * - 'howto': Step-by-step process questions (non-code)
     * - 'structured': UI description with references (contains ";" and UI keywords)
     * - 'chat': General conversation (fallback)
     */
    detectQuestionType(question) {
        const q = question.toLowerCase().trim();
        
        // 1. STRUCTURED: Contains ";" and UI-related keywords
        const structuredPattern = /;/;
        const uiKeywords = ['button', 'modal', 'card', 'navbar', 'header', 'footer', 'sidebar', 
                           'dropdown', 'input', 'form', 'layout', 'grid', 'flex', 'component',
                           'like', 'similar to', 'style of', 'design', 'ui', 'interface'];
        const hasStructuredSyntax = structuredPattern.test(question);
        const hasUIKeywords = uiKeywords.some(kw => q.includes(kw));
        
        if (hasStructuredSyntax && hasUIKeywords) {
            return 'structured';
        }
        
        // 2. CODE: Programming-related keywords
        const codeKeywords = [
            'code', 'program', 'function', 'variable', 'loop', 'array', 'string',
            'int', 'float', 'class', 'object', 'method', 'api', 'algorithm',
            'python', 'javascript', 'java', 'c++', 'c#', 'ruby', 'php', 'swift',
            'html', 'css', 'sql', 'database', 'react', 'node', 'angular', 'vue',
            'compile', 'debug', 'syntax', 'error', 'exception', 'import', 'export',
            'async', 'await', 'promise', 'callback', 'recursion', 'sort', 'search',
            'binary', 'tree', 'graph', 'hash', 'stack', 'queue', 'linked list',
            'print', 'console', 'log', 'return', 'if else', 'switch', 'while',
            'for loop', 'foreach', 'map', 'filter', 'reduce', 'lambda'
        ];
        
        const isCodeQuestion = codeKeywords.some(kw => q.includes(kw));
        if (isCodeQuestion) {
            return 'code';
        }
        
        // 3. HOW-TO: Process/step-based questions
        const howtoPatterns = [
            /^how (to|do|can|should)/i,
            /^what('s| is| are) the (steps?|process|way|method)/i,
            /^can you (show|explain|teach|help).*(how|steps)/i,
            /^(guide|tutorial|instructions?) (for|on|to)/i,
            /^(steps?|process) (to|for)/i,
            /update|install|setup|configure|enable|disable|turn on|turn off/i,
            /navigate|go to|open|click|tap|swipe|scroll/i,
            /sign up|sign in|log in|register|create account/i,
            /download|upload|transfer|sync|backup/i,
            /connect|pair|link|disconnect/i
        ];
        
        const isHowTo = howtoPatterns.some(pattern => pattern.test(q));
        if (isHowTo) {
            return 'howto';
        }
        
        // 4. Additional code detection: questions about making/building things
        const buildPatterns = [
            /^(make|create|build|write|implement|develop) (a |an |the )?.*\b(app|website|script|bot|tool|game|calculator|converter)\b/i,
            /^(make|create|build|write) (a |an )?.*\b(that|which|to)\b/i
        ];
        
        if (buildPatterns.some(pattern => pattern.test(q))) {
            return 'code';
        }
        
        // 5. Default: If it's a question about doing something, treat as how-to
        if (/^(how|what|where|when|why|can|should|would|could)/i.test(q) && q.length > 20) {
            // Longer questions starting with question words are likely how-to
            return 'howto';
        }
        
        // Fallback to chat for very short or unclear questions
        return 'chat';
    },

    /**
     * Detect programming language from question
     */
    detectLanguage(question) {
        const q = question.toLowerCase();
        const languages = {
            'python': ['python', 'py', 'django', 'flask', 'pandas', 'numpy'],
            'javascript': ['javascript', 'js', 'node', 'react', 'vue', 'angular', 'express', 'npm'],
            'java': ['java', 'spring', 'maven', 'gradle', 'jvm'],
            'c': [' c ', ' c,', 'c programming', 'stdio', 'printf', 'scanf', 'malloc'],
            'c++': ['c++', 'cpp', 'iostream', 'stl'],
            'c#': ['c#', 'csharp', '.net', 'unity', 'xamarin'],
            'swift': ['swift', 'ios', 'xcode', 'swiftui', 'uikit'],
            'kotlin': ['kotlin', 'android'],
            'rust': ['rust', 'cargo', 'rustc'],
            'go': ['golang', ' go ', 'go programming'],
            'php': ['php', 'laravel', 'wordpress'],
            'ruby': ['ruby', 'rails', 'erb'],
            'sql': ['sql', 'mysql', 'postgresql', 'database query', 'select from'],
            'html': ['html', 'webpage', 'web page'],
            'css': ['css', 'stylesheet', 'flexbox', 'grid layout'],
            'bash': ['bash', 'shell', 'terminal', 'command line', 'linux command'],
            'typescript': ['typescript', 'ts']
        };
        
        for (const [lang, keywords] of Object.entries(languages)) {
            if (keywords.some(kw => q.includes(kw))) {
                return lang.charAt(0).toUpperCase() + lang.slice(1);
            }
        }
        
        return 'Python'; // Default
    },

    /**
     * Main entry point - unified question handler
     */
    async processQuestion(question) {
        const type = this.detectQuestionType(question);
        console.log('[ClaudeAPI] Detected question type:', type);
        
        switch (type) {
            case 'code':
                const language = this.detectLanguage(question);
                return await this.generateCodeChallenge(question, language);
            
            case 'howto':
                return await this.generateHowToChallenge(question);
            
            case 'structured':
                return await this.generateStructuredUI(question);
            
            case 'chat':
            default:
                // For very short/unclear questions, still try how-to format
                if (question.length > 15) {
                    return await this.generateHowToChallenge(question);
                }
                return await this.generalChat(question);
        }
    },

    /**
     * Generate CODE challenge (programming)
     */
    async generateCodeChallenge(question, language = 'Python') {
        const systemPrompt = `You are an expert programming instructor creating interactive code sequencing challenges.

RESPOND ONLY WITH VALID JSON. No markdown, no explanation, no code blocks.

JSON Schema:
{
    "type": "code",
    "goal": "string - what the code accomplishes",
    "concepts": "string - comma-separated concepts",
    "language": "string - programming language",
    "sequence": [
        {
            "correct": "string - the correct code line",
            "distractors": [
                {"text": "string - wrong option", "reason": "string - why wrong"},
                {"text": "string - wrong option", "reason": "string - why wrong"}
            ],
            "indent": number (0, 1, 2...),
            "explanation": "string - what this line does"
        }
    ]
}

Rules:
- 5-8 steps for typical challenges
- Distractors should be plausible beginner mistakes
- Include imports/headers and proper structure
- Use proper indentation levels`;

        const userPrompt = `Create a code sequencing challenge:

Topic: ${question}
Language: ${language}

Respond ONLY with JSON.`;

        return await this._callAPI(systemPrompt, userPrompt, 'code', { language });
    },

    /**
     * Generate HOW-TO challenge (step-by-step process)
     */
    async generateHowToChallenge(question) {
        const systemPrompt = `You are an expert instructor creating interactive step-by-step challenges for real-world tasks.

RESPOND ONLY WITH VALID JSON. No markdown, no explanation.

JSON Schema:
{
    "type": "howto",
    "goal": "string - what the user will accomplish",
    "concepts": "string - key concepts/skills involved",
    "category": "string - e.g., 'iOS', 'macOS', 'Windows', 'Android', 'Web', 'Life Skills', etc.",
    "sequence": [
        {
            "correct": "string - the correct action (e.g., 'Open Settings', 'Tap General', 'Click Apply')",
            "distractors": [
                {"text": "string - wrong action", "reason": "string - why this is wrong"},
                {"text": "string - wrong action", "reason": "string - why this is wrong"}
            ],
            "indent": number (0 for main steps, 1 for sub-steps),
            "explanation": "string - why this step is needed"
        }
    ]
}

Rules:
- 4-10 steps depending on complexity
- Each step should be a clear, actionable instruction
- Distractors should be plausible wrong choices
- Use familiar UI terms (Tap, Click, Open, Select, Enter, etc.)
- For device settings, be specific about menu paths`;

        const userPrompt = `Create a step-by-step challenge:

Task: ${question}

Make the steps clear and sequential. Include common mistakes as distractors.
Respond ONLY with JSON.`;

        return await this._callAPI(systemPrompt, userPrompt, 'howto', { category: 'General' });
    },

    /**
     * Generate STRUCTURED UI preview
     */
    async generateStructuredUI(question) {
        const systemPrompt = `You are a UI/UX expert that converts structured descriptions into visual components.

The user describes UI elements using references to existing designs (e.g., "button like Apple; card similar to Stripe").

RESPOND ONLY WITH VALID JSON:

{
    "type": "structured",
    "description": "string - what the UI does",
    "components": [
        {
            "name": "string - component name",
            "type": "string - button/card/modal/input/etc",
            "style": "string - style reference (e.g., 'Apple-style', 'Minimal')",
            "html": "string - HTML code for the component",
            "css": "string - CSS code for the component"
        }
    ],
    "fullCode": {
        "html": "string - complete HTML",
        "css": "string - complete CSS",
        "preview": "string - combined HTML with embedded CSS for preview"
    }
}

Rules:
- Parse the semicolon-separated parts as different components or properties
- Generate clean, modern CSS
- Make the preview self-contained (inline styles or embedded CSS)
- Use CSS variables for easy customization`;

        const userPrompt = `Convert this UI description to code:

${question}

Generate clean, modern HTML/CSS that matches the style references.
Respond ONLY with JSON.`;

        return await this._callAPI(systemPrompt, userPrompt, 'structured', {});
    },

    /**
     * Core API call with error handling
     */
    async _callAPI(systemPrompt, userPrompt, expectedType, metadata = {}) {
        try {
            const response = await fetch(this.API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: userPrompt,
                    system: systemPrompt
                })
            });
            
            const data = await response.json();
            
            if (!response.ok || data.error) {
                throw new Error(data.error?.message || `API Error: ${response.status}`);
            }
            
            const content = data.content?.[0]?.text || '';
            if (!content) throw new Error('Empty response from API');
            
            return this._parseResponse(content, expectedType, metadata);
            
        } catch (error) {
            console.error('[ClaudeAPI] Error:', error);
            throw error;
        }
    },

    /**
     * Parse and validate API response
     */
    _parseResponse(content, expectedType, metadata) {
        let jsonStr = content.trim();
        
        // Remove markdown code blocks if present
        if (jsonStr.startsWith('```')) {
            jsonStr = jsonStr.replace(/```json?\n?/g, '').replace(/```$/g, '').trim();
        }
        
        try {
            const parsed = JSON.parse(jsonStr);
            
            // Validate structure
            if (!parsed.goal && !parsed.description) {
                throw new Error('Missing goal/description in response');
            }
            
            // Normalize sequence items
            if (parsed.sequence) {
                parsed.sequence = parsed.sequence.map((step, idx) => ({
                    correct: step.correct || '',
                    distractors: step.distractors || [
                        { text: 'Alternative A', reason: 'Not the right approach' },
                        { text: 'Alternative B', reason: 'Incorrect for this step' }
                    ],
                    indent: typeof step.indent === 'number' ? step.indent : 0,
                    explanation: step.explanation || `Step ${idx + 1}`
                }));
            }
            
            // Add metadata
            parsed.type = parsed.type || expectedType;
            parsed.generatedAt = new Date().toISOString();
            Object.assign(parsed, metadata);
            
            return parsed;
            
        } catch (e) {
            console.error('[ClaudeAPI] Parse error:', e);
            console.error('[ClaudeAPI] Raw content:', content);
            throw new Error('Failed to parse API response');
        }
    },

    /**
     * Simple chat fallback (no P&L format)
     */
    async generalChat(question) {
        try {
            const response = await fetch(this.API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: question,
                    system: `You are a helpful assistant. Provide clear, concise answers.`
                })
            });
            
            const data = await response.json();
            
            if (!response.ok || data.error) {
                throw new Error(data.error?.message || 'API Error');
            }
            
            return {
                type: 'chat',
                response: data.content?.[0]?.text || 'No response'
            };
            
        } catch (error) {
            console.error('[ClaudeAPI] Chat error:', error);
            throw error;
        }
    },

    /**
     * Generate unique challenge ID
     */
    generateChallengeId() {
        return 'pnl_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }
};

window.ClaudeAPI = ClaudeAPI;
