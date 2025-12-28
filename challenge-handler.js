/**
 * Challenge Handler Module
 * Manages the generation, display, and history of P&L challenges
 */

const ChallengeHandler = {
    currentChallenge: null,
    challengeHistory: [],
    
    /**
     * Initialize the handler
     */
    init() {
        // Load challenge history from localStorage
        const saved = localStorage.getItem('pnlChallengeHistory');
        if (saved) {
            try {
                this.challengeHistory = JSON.parse(saved);
            } catch (e) {
                this.challengeHistory = [];
            }
        }
        
        // Render initial history
        this.renderHistory();
        
        // Listen for messages from iframe
        window.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'challengeCompleted') {
                this.handleChallengeComplete(event.data);
            }
        });
        
        // Check for shared challenge in URL
        const urlParams = new URLSearchParams(window.location.search);
        const sharedPnl = urlParams.get('pnl');
        if (sharedPnl) {
            console.log('[ChallengeHandler] Loading shared P&L:', sharedPnl);
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                const loaded = this.loadFromShareId(sharedPnl);
                if (!loaded) {
                    if (typeof showAlert === 'function') {
                        showAlert('Challenge not found or expired', true, 3000);
                    }
                }
            }, 500);
        }
    },
    
    /**
     * Show loading state in center
     */
    showLoading() {
        const greeting = document.getElementById('greetingSection');
        const loading = document.getElementById('centerLoading');
        const challenge = document.getElementById('challengeDisplay');
        
        if (greeting) greeting.style.display = 'none';
        if (challenge) challenge.classList.remove('active');
        if (loading) loading.classList.add('active');
    },
    
    /**
     * Hide loading state
     */
    hideLoading() {
        const loading = document.getElementById('centerLoading');
        if (loading) loading.classList.remove('active');
    },
    
    /**
     * Show greeting (initial state)
     */
    showGreeting() {
        const greeting = document.getElementById('greetingSection');
        const loading = document.getElementById('centerLoading');
        const challenge = document.getElementById('challengeDisplay');
        
        if (loading) loading.classList.remove('active');
        if (challenge) challenge.classList.remove('active');
        if (greeting) greeting.style.display = 'block';
    },
    
    /**
     * Show challenge display
     */
    showChallenge() {
        const greeting = document.getElementById('greetingSection');
        const loading = document.getElementById('centerLoading');
        const challenge = document.getElementById('challengeDisplay');
        
        if (greeting) greeting.style.display = 'none';
        if (loading) loading.classList.remove('active');
        if (challenge) challenge.classList.add('active');
    },
    
    /**
     * Handle general (non-code) chat questions
     */
    async handleGeneralChat(question) {
        const generateBtn = document.getElementById('generateBtn');
        const questionInput = document.getElementById('questionInput');
        
        // Clear input
        if (questionInput) {
            questionInput.value = '';
        }
        
        // Show loading
        this.showLoading();
        
        if (generateBtn) generateBtn.disabled = true;
        
        try {
            // Call Claude API for general chat
            const response = await window.ClaudeAPI.generalChat(question);
            
            // Display the response in the main area
            this.displayChatResponse(question, response);
            
        } catch (error) {
            console.error('General chat failed:', error);
            this.showGreeting();
            if (typeof showAlert === 'function') {
                showAlert(error.message || 'Failed to get response', true, 5000);
            }
        } finally {
            if (generateBtn) generateBtn.disabled = true;
            if (typeof checkSelections === 'function') {
                checkSelections();
            }
        }
    },
    
    /**
     * Display a chat response (not a P&L challenge)
     */
    displayChatResponse(question, response) {
        const greeting = document.getElementById('greetingSection');
        const loading = document.getElementById('centerLoading');
        const challenge = document.getElementById('challengeDisplay');
        const inputArea = document.querySelector('.input-area-wrapper');
        
        // Hide loading
        if (loading) loading.classList.remove('active');
        
        // Use the greeting area to display response
        if (greeting) {
            greeting.style.display = 'block';
            greeting.innerHTML = `
                <div style="text-align: left; max-width: 800px; width: 100%;">
                    <div style="margin-bottom: 16px; padding: 12px 16px; background: rgba(255,255,255,0.05); border-radius: 12px; color: var(--text-secondary); font-size: 0.9rem;">
                        <strong>You asked:</strong> ${this.escapeHtml(question)}
                    </div>
                    <div style="color: var(--text-primary); font-size: 1rem; line-height: 1.6; white-space: pre-wrap;">${this.formatResponse(response)}</div>
                    <button onclick="ChallengeHandler.showGreeting(); ChallengeHandler.resetGreeting();" class="minimal-btn" style="margin-top: 24px; padding: 10px 20px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        Ask another question
                    </button>
                </div>
            `;
        }
        
        // Keep input area visible for general chat (allow follow-up)
    },
    
    /**
     * Reset greeting to original state
     */
    resetGreeting() {
        const greeting = document.getElementById('greetingSection');
        if (greeting) {
            greeting.innerHTML = `
                <h1>Learn Different</h1>
                <p>Master coding one perfect line at a time</p>
            `;
        }
    },
    
    /**
     * Escape HTML to prevent XSS
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },
    
    /**
     * Format response with basic markdown-like styling
     */
    formatResponse(text) {
        // Escape HTML first
        let formatted = this.escapeHtml(text);
        // Convert **bold** to <strong>
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Convert `code` to <code>
        formatted = formatted.replace(/`(.*?)`/g, '<code style="background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px; font-family: monospace;">$1</code>');
        // Convert numbered lists
        formatted = formatted.replace(/^(\d+)\. (.*)$/gm, '<div style="margin-left: 20px;">$1. $2</div>');
        // Convert bullet points
        formatted = formatted.replace(/^[-•] (.*)$/gm, '<div style="margin-left: 20px;">• $1</div>');
        return formatted;
    },
    
    /**
     * Generate and display a new challenge
     * @param {string} question - User's question
     * @param {string} language - Programming language (optional)
     * @param {string} difficulty - Difficulty level
     */
    async generateChallenge(question, language = null, difficulty = 'intermediate') {
        const generateBtn = document.getElementById('generateBtn');
        const questionInput = document.getElementById('questionInput');
        
        // Clear input immediately so user knows it was sent
        if (questionInput) {
            questionInput.value = '';
        }
        
        // Show loading state in center
        this.showLoading();
        
        // Disable button while generating
        if (generateBtn) generateBtn.disabled = true;
        
        try {
            // Call Claude API to generate the challenge
            const challengeData = await window.ClaudeAPI.generateChallenge(question, language, difficulty);
            
            // Create challenge entry
            const challengeEntry = {
                id: window.ClaudeAPI.generateChallengeId(),
                title: this.generateTitle(question),
                question: question,
                language: challengeData.language,
                difficulty: difficulty,
                challenge: challengeData,
                timestamp: new Date().toISOString(),
                completed: false,
                stars: 0
            };
            
            // Store current challenge
            this.currentChallenge = challengeEntry;
            
            // Add to history
            this.addToHistory(challengeEntry);
            
            // Display the challenge
            this.displayChallenge(challengeEntry);
            
            // Deduct lines based on sequence length (each code line costs 1 line)
            const linesUsed = challengeData.sequence?.length || 5;
            if (typeof deductLines === 'function') {
                deductLines(linesUsed);
            }
            
            // Show success
            if (typeof showAlert === 'function') {
                showAlert('Challenge generated!', false, 2000);
            }
            
        } catch (error) {
            console.error('Challenge generation failed:', error);
            
            // Show greeting again on error
            this.showGreeting();
            
            if (typeof showAlert === 'function') {
                showAlert(error.message || 'Failed to generate challenge', true, 5000);
            }
        } finally {
            // Re-enable button
            if (generateBtn) generateBtn.disabled = true; // Keep disabled since input is empty
            
            // Re-check selections
            if (typeof checkSelections === 'function') {
                checkSelections();
            }
        }
    },
    
    /**
     * Generate a short title from the question
     */
    generateTitle(question) {
        // Take first 50 characters and add ellipsis if needed
        let title = question.trim();
        if (title.length > 50) {
            title = title.substring(0, 47) + '...';
        }
        return title;
    },
    
    /**
     * Display a challenge in the center area
     */
    displayChallenge(challengeEntry) {
        const frame = document.getElementById('challengeFrame');
        
        if (!frame) {
            console.error('Challenge frame not found');
            return;
        }
        
        // Store challenge data in sessionStorage for logicbody.html
        const challengeForIframe = {
            challengesData: [challengeEntry.challenge],
            language: challengeEntry.language,
            title: challengeEntry.title,
            id: challengeEntry.id
        };
        
        // Debug logging
        console.log('[ChallengeHandler] Sending to iframe:', {
            language: challengeEntry.language,
            title: challengeEntry.title,
            goal: challengeEntry.challenge?.goal,
            sequenceLength: challengeEntry.challenge?.sequence?.length,
            firstStep: challengeEntry.challenge?.sequence?.[0]
        });
        
        sessionStorage.setItem('currentChallengeData', JSON.stringify(challengeForIframe));
        
        // Verify it was stored
        const stored = sessionStorage.getItem('currentChallengeData');
        console.log('[ChallengeHandler] Stored data length:', stored?.length);
        
        // Load logicbody.html in iframe with cache-busting
        frame.src = 'logicbody.html?t=' + Date.now();
        
        // Show challenge display (this hides loading)
        this.showChallenge();
        
        // Hide the prompt bar (no back-and-forth in same conversation)
        const inputArea = document.querySelector('.input-area-wrapper');
        if (inputArea) {
            inputArea.style.display = 'none';
        }
        
        // Add to P&L Store with public URL
        this.addToStore(challengeEntry);
    },
    
    /**
     * Add challenge to the P&L Store with a public URL
     */
    addToStore(challengeEntry) {
        // Get existing store items
        let storeItems = [];
        try {
            storeItems = JSON.parse(localStorage.getItem('pnlStoreItems')) || [];
        } catch (e) {
            storeItems = [];
        }
        
        // Create a short, shareable ID
        const shareId = this.generateShareId();
        
        // Create store entry
        const storeEntry = {
            id: challengeEntry.id,
            shareId: shareId,
            title: challengeEntry.title,
            language: challengeEntry.language,
            difficulty: challengeEntry.difficulty,
            goal: challengeEntry.challenge?.goal,
            concepts: challengeEntry.challenge?.concepts,
            stepsCount: challengeEntry.challenge?.sequence?.length || 0,
            challenge: challengeEntry.challenge,
            createdAt: new Date().toISOString(),
            plays: 0,
            rating: 0
        };
        
        // Add to beginning of array
        storeItems.unshift(storeEntry);
        
        // Limit store to 100 items
        if (storeItems.length > 100) {
            storeItems = storeItems.slice(0, 100);
        }
        
        // Save to localStorage
        localStorage.setItem('pnlStoreItems', JSON.stringify(storeItems));
        
        // Generate and show the public URL
        const publicUrl = this.getPublicUrl(shareId);
        console.log('[ChallengeHandler] Challenge added to store:', { shareId, publicUrl });
        
        // Show the share URL to user
        if (typeof showAlert === 'function') {
            showAlert(`P&L created! Share: ${shareId}`, false, 5000);
        }
        
        // Store current challenge's share ID for easy access
        this.currentShareId = shareId;
        
        // Refresh store display if visible
        if (typeof loadChallengeStore === 'function') {
            loadChallengeStore();
        }
    },
    
    /**
     * Generate a short shareable ID
     */
    generateShareId() {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    },
    
    /**
     * Get the public URL for a challenge
     */
    getPublicUrl(shareId) {
        const baseUrl = window.location.origin + window.location.pathname;
        return `${baseUrl}?pnl=${shareId}`;
    },
    
    /**
     * Load a challenge from a share ID (called on page load)
     */
    loadFromShareId(shareId) {
        try {
            const storeItems = JSON.parse(localStorage.getItem('pnlStoreItems')) || [];
            const challenge = storeItems.find(item => item.shareId === shareId);
            
            if (challenge) {
                // Increment play count
                challenge.plays = (challenge.plays || 0) + 1;
                localStorage.setItem('pnlStoreItems', JSON.stringify(storeItems));
                
                // Create challenge entry format
                const challengeEntry = {
                    id: challenge.id,
                    title: challenge.title,
                    language: challenge.language,
                    difficulty: challenge.difficulty,
                    challenge: challenge.challenge,
                    timestamp: challenge.createdAt
                };
                
                // Display it
                this.displayChallenge(challengeEntry);
                return true;
            }
        } catch (e) {
            console.error('Failed to load shared challenge:', e);
        }
        return false;
    },
    
    /**
     * Add challenge to history
     */
    addToHistory(challengeEntry) {
        // Add to beginning of array
        this.challengeHistory.unshift(challengeEntry);
        
        // Limit history to 50 items
        if (this.challengeHistory.length > 50) {
            this.challengeHistory = this.challengeHistory.slice(0, 50);
        }
        
        // Save to localStorage
        this.saveHistory();
        
        // Re-render history
        this.renderHistory();
    },
    
    /**
     * Save history to localStorage
     */
    saveHistory() {
        try {
            localStorage.setItem('pnlChallengeHistory', JSON.stringify(this.challengeHistory));
        } catch (e) {
            console.error('Failed to save history:', e);
        }
    },
    
    /**
     * Render challenge history in sidebar
     */
    renderHistory() {
        const historyList = document.getElementById('historyList');
        if (!historyList) return;
        
        historyList.innerHTML = '';
        
        if (this.challengeHistory.length === 0) {
            historyList.innerHTML = '<div class="history-item" style="color: var(--text-tertiary); font-style: italic;">No challenges yet</div>';
            return;
        }
        
        // Group by date
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        
        let currentGroup = '';
        
        this.challengeHistory.forEach((challenge, index) => {
            const challengeDate = new Date(challenge.timestamp);
            let groupLabel = '';
            
            if (this.isSameDay(challengeDate, today)) {
                groupLabel = 'Today';
            } else if (this.isSameDay(challengeDate, yesterday)) {
                groupLabel = 'Yesterday';
            } else {
                groupLabel = challengeDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            }
            
            // Add group header if needed
            if (groupLabel !== currentGroup) {
                currentGroup = groupLabel;
                const header = document.createElement('div');
                header.className = 'history-group-header';
                header.style.cssText = 'font-size: 0.7rem; color: var(--text-tertiary); padding: 12px 12px 4px 12px; text-transform: uppercase; letter-spacing: 0.05em;';
                header.textContent = groupLabel;
                historyList.appendChild(header);
            }
            
            // Create history item
            const item = document.createElement('div');
            item.className = 'history-item';
            item.style.cssText = 'display: flex; align-items: center; gap: 8px;';
            
            // Language icon - use bullet point instead of emoji
            const icon = document.createElement('span');
            icon.style.cssText = 'font-size: 0.8rem; opacity: 0.6;';
            icon.textContent = '•';
            
            // Title
            const title = document.createElement('span');
            title.style.cssText = 'flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;';
            title.textContent = challenge.title;
            
            // Completed indicator
            if (challenge.completed) {
                const check = document.createElement('span');
                check.style.cssText = 'color: var(--success); font-size: 0.8rem;';
                check.textContent = '✓';
                item.appendChild(icon);
                item.appendChild(title);
                item.appendChild(check);
            } else {
                item.appendChild(icon);
                item.appendChild(title);
            }
            
            // Click handler
            item.onclick = () => this.loadChallenge(index);
            
            historyList.appendChild(item);
        });
    },
    
    /**
     * Check if two dates are the same day
     */
    isSameDay(date1, date2) {
        return date1.getFullYear() === date2.getFullYear() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getDate() === date2.getDate();
    },
    
    /**
     * Load a challenge from history
     */
    loadChallenge(index) {
        const challenge = this.challengeHistory[index];
        if (!challenge) return;
        
        this.currentChallenge = challenge;
        this.displayChallenge(challenge);
    },
    
    /**
     * Handle challenge completion message from iframe
     */
    handleChallengeComplete(data) {
        if (!this.currentChallenge) return;
        
        // Update challenge in history
        const index = this.challengeHistory.findIndex(c => c.id === this.currentChallenge.id);
        if (index !== -1) {
            this.challengeHistory[index].completed = data.success;
            this.challengeHistory[index].stars = data.stars || 0;
            this.saveHistory();
            this.renderHistory();
        }
        
        if (data.success) {
            if (typeof showAlert === 'function') {
                showAlert('🎉 Challenge completed!', false, 4000);
            }
        }
    },
    
    /**
     * Start a new challenge (show greeting)
     */
    newChallenge() {
        this.showGreeting();
        this.resetGreeting();
        this.currentChallenge = null;
        this.currentShareId = null;
        
        // Show the prompt bar again
        const inputArea = document.querySelector('.input-area-wrapper');
        if (inputArea) {
            inputArea.style.display = '';
        }
        
        // Clear iframe
        const frame = document.getElementById('challengeFrame');
        if (frame) frame.src = '';
        
        // Focus on input
        const input = document.getElementById('questionInput');
        if (input) {
            input.focus();
        }
    },
    
    /**
     * Delete a challenge from history
     */
    deleteChallenge(index) {
        if (index < 0 || index >= this.challengeHistory.length) return;
        
        this.challengeHistory.splice(index, 1);
        this.saveHistory();
        this.renderHistory();
    },
    
    /**
     * Clear all history
     */
    clearHistory() {
        if (confirm('Are you sure you want to clear all challenge history?')) {
            this.challengeHistory = [];
            this.saveHistory();
            this.renderHistory();
        }
    }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    ChallengeHandler.init();
});

// Export globally
window.ChallengeHandler = ChallengeHandler;

// Global functions for button handlers
window.generateChallenge = async function() {
    const mode = document.getElementById('modeSelect')?.value || 'general';
    const question = document.getElementById('questionInput')?.value?.trim();
    
    if (!question) {
        if (typeof showAlert === 'function') {
            showAlert('Please enter a question or topic', true);
        }
        return;
    }
    
    // Handle General mode - just chat, no P&L generation (no auth required)
    if (mode === 'general') {
        await ChallengeHandler.handleGeneralChat(question);
        return;
    }
    
    // For Code mode - REQUIRE SIGN IN to use Claude tokens
    const userProfile = localStorage.getItem('userProfile');
    if (!userProfile) {
        if (typeof showAlert === 'function') {
            showAlert('Please sign in to create P&L challenges', true, 3000);
        }
        // Open sign-in modal
        if (typeof openSigninModal === 'function') {
            openSigninModal();
        }
        return;
    }
    
    // Code mode - validate language selection
    if (mode === 'code') {
        let language = document.getElementById('languageSelect')?.value;
        if (language === 'custom') {
            language = document.getElementById('customLanguageInput')?.value?.trim();
        }
        
        // Check if language is selected
        if (!language) {
            if (typeof showAlert === 'function') {
                showAlert('Please select a programming language first', true, 3000);
            }
            // Focus the language button
            document.getElementById('languageTrigger')?.focus();
            return;
        }
        
        const difficulty = document.getElementById('difficultySelect')?.value || 'intermediate';
        await ChallengeHandler.generateChallenge(question, language, difficulty);
        return;
    }
    
    // Structured mode - TBD
    if (mode === 'structured') {
        if (typeof showAlert === 'function') {
            showAlert('Structured mode coming soon!', false, 2000);
        }
        return;
    }
};

window.newChallenge = function() {
    ChallengeHandler.newChallenge();
};

window.loadChallenge = function(challenge) {
    ChallengeHandler.displayChallenge(challenge);
};
