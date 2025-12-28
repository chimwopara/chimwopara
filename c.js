/**
 * Dynamic Challenge Data Loader
 * This script loads challenge data from sessionStorage and configures logicbody.html
 */
(function() {
    'use strict';

// Default challenges (fallback) - EXACT format matching logicbody expectations
const defaultChallenges = [
    {
        goal: "Print 'Hello World' using Python.",
        concepts: "Basic I/O, print function",
        sequence: [
            { 
                correct: 'print("Hello World")', 
                distractors: [
                    {text: 'echo "Hello World"', reason: 'echo is a shell command, not Python'}, 
                    {text: 'console.log("Hello World")', reason: 'console.log is JavaScript, not Python'}
                ], 
                indent: 0, 
                explanation: "Print the message to the console using Python's print function." 
            }
        ]
    }
];

// Challenge data variables
let challengesData = defaultChallenges;
let currentLanguage = 'Python';
let challengeTitle = 'Code Challenge';
let challengeId = null;

// Try to load challenge from sessionStorage
function loadChallengeData() {
    console.log('[c.js] === LOADING CHALLENGE DATA ===');
    
    try {
        const challengeDataStr = sessionStorage.getItem('currentChallengeData');
        
        if (!challengeDataStr) {
            console.log('[c.js] No data in sessionStorage, using defaults');
            return false;
        }
        
        console.log('[c.js] Found sessionStorage data, length:', challengeDataStr.length);
        
        const data = JSON.parse(challengeDataStr);
        console.log('[c.js] Parsed data structure:', {
            hasChallengData: !!data.challengesData,
            isArray: Array.isArray(data.challengesData),
            length: data.challengesData?.length,
            language: data.language,
            title: data.title
        });
        
        if (!data.challengesData || !Array.isArray(data.challengesData) || data.challengesData.length === 0) {
            console.error('[c.js] Invalid challengesData structure');
            return false;
        }
        
        const challenge = data.challengesData[0];
        console.log('[c.js] Challenge structure:', {
            goal: challenge.goal?.substring(0, 50),
            concepts: challenge.concepts,
            sequenceLength: challenge.sequence?.length,
            hasSequence: !!challenge.sequence
        });
        
        if (!challenge.sequence || !Array.isArray(challenge.sequence) || challenge.sequence.length === 0) {
            console.error('[c.js] Invalid sequence in challenge');
            return false;
        }
        
        // Log first step for debugging
        const firstStep = challenge.sequence[0];
        console.log('[c.js] First step:', {
            correct: firstStep.correct?.substring(0, 50),
            indent: firstStep.indent,
            distractorsCount: firstStep.distractors?.length,
            hasExplanation: !!firstStep.explanation
        });
        
        // Validate and fix each step
        challenge.sequence = challenge.sequence.map((step, idx) => {
            // Ensure distractors is an array with proper format
            let distractors = step.distractors;
            if (!Array.isArray(distractors) || distractors.length === 0) {
                console.warn(`[c.js] Step ${idx} has no distractors, adding defaults`);
                distractors = [
                    {text: '// Alternative option A', reason: 'This is not the correct syntax'},
                    {text: '// Alternative option B', reason: 'This approach is incorrect'}
                ];
            } else {
                // Ensure each distractor has text and reason
                distractors = distractors.map(d => ({
                    text: d.text || '// Unknown option',
                    reason: d.reason || 'This is incorrect'
                }));
            }
            
            return {
                correct: step.correct || '',
                distractors: distractors,
                indent: typeof step.indent === 'number' ? step.indent : 0,
                explanation: step.explanation || `Step ${idx + 1}`
            };
        });
        
        // Set global variables
        challengesData = data.challengesData;
        currentLanguage = data.language || challenge.language || 'Python';
        challengeTitle = data.title || 'Code Challenge';
        challengeId = data.id || null;
        
        console.log('[c.js] Successfully loaded challenge:', {
            language: currentLanguage,
            title: challengeTitle,
            stepsCount: challenge.sequence.length
        });
        
        return true;
        
    } catch (e) {
        console.error('[c.js] Error loading challenge:', e);
        return false;
    }
}

// Initialize on load
const hasCustomChallenge = loadChallengeData();

// Export for use in logicbody.html
window.challengesData = challengesData;
window.currentLanguage = currentLanguage;
window.challengeTitle = challengeTitle;

console.log('[c.js] Exported to window:', {
    challengesDataLength: window.challengesData.length,
    firstChallengeGoal: window.challengesData[0]?.goal?.substring(0, 30),
    sequenceLength: window.challengesData[0]?.sequence?.length
});

// Update page elements when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('[c.js] DOM ready');
    
    // Update title
    const titleElement = document.querySelector('title');
    if (titleElement) {
        titleElement.textContent = `${currentLanguage} Challenge`;
    }
    
    // Add language indicator after a short delay
    setTimeout(addLanguageIndicator, 200);
});

// Add language indicator to code display area (bottom-left, matching Attempts style)
function addLanguageIndicator() {
    const codeContainer = document.getElementById('code-display-container');
    
    if (codeContainer && !document.getElementById('lang-indicator')) {
        const langEl = document.createElement('div');
        langEl.id = 'lang-indicator';
        langEl.style.cssText = `
            position: absolute;
            bottom: 8px;
            left: 12px;
            font-size: 0.75rem;
            color: var(--text-muted-color, #9ca3af);
            pointer-events: none;
            z-index: 10;
        `;
        langEl.textContent = currentLanguage;
        codeContainer.appendChild(langEl);
    }
}

// Notify parent window when challenge is completed
function notifyChallengeComplete(success, stepsUsed, stars = 0) {
    if (window.parent !== window) {
        window.parent.postMessage({
            type: 'challengeCompleted',
            success: success,
            stepsUsed: stepsUsed,
            stars: stars,
            language: currentLanguage,
            challengeId: challengeId
        }, '*');
    }
}

window.notifyChallengeComplete = notifyChallengeComplete;

})(); // End IIFE
