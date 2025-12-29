/**
 * Challenge Handler Module - UNIFIED VERSION
 * Handles code, how-to, and structured challenges with smart detection
 */

const ChallengeHandler = {
    currentChallenge: null,
    challengeHistory: [],
    
    init() {
        // Load history
        const saved = localStorage.getItem('pnlChallengeHistory');
        if (saved) {
            try {
                this.challengeHistory = JSON.parse(saved);
            } catch (e) {
                this.challengeHistory = [];
            }
        }
        
        this.renderHistory();
        
        // Listen for iframe messages
        window.addEventListener('message', (event) => {
            if (event.data?.type === 'challengeCompleted') {
                this.handleChallengeComplete(event.data);
            }
        });
        
        // Check for shared challenge in URL
        const urlParams = new URLSearchParams(window.location.search);
        const sharedPnl = urlParams.get('pnl');
        if (sharedPnl) {
            setTimeout(() => {
                const loaded = this.loadFromShareId(sharedPnl);
                if (!loaded && typeof showAlert === 'function') {
                    showAlert('Challenge not found or expired', true, 3000);
                }
            }, 500);
        }
    },
    
    // === UI STATE MANAGEMENT ===
    
    showLoading() {
        const greeting = document.getElementById('greetingSection');
        const loading = document.getElementById('centerLoading');
        const challenge = document.getElementById('challengeDisplay');
        const structured = document.getElementById('structuredPreview');
        
        if (greeting) greeting.style.display = 'none';
        if (challenge) challenge.classList.remove('active');
        if (structured) structured.classList.remove('active');
        if (loading) loading.classList.add('active');
    },
    
    hideLoading() {
        const loading = document.getElementById('centerLoading');
        if (loading) loading.classList.remove('active');
    },
    
    showGreeting() {
        const greeting = document.getElementById('greetingSection');
        const loading = document.getElementById('centerLoading');
        const challenge = document.getElementById('challengeDisplay');
        const structured = document.getElementById('structuredPreview');
        
        if (loading) loading.classList.remove('active');
        if (challenge) challenge.classList.remove('active');
        if (structured) structured.classList.remove('active');
        if (greeting) greeting.style.display = 'block';
    },
    
    showChallenge() {
        const greeting = document.getElementById('greetingSection');
        const loading = document.getElementById('centerLoading');
        const challenge = document.getElementById('challengeDisplay');
        const structured = document.getElementById('structuredPreview');
        
        if (greeting) greeting.style.display = 'none';
        if (loading) loading.classList.remove('active');
        if (structured) structured.classList.remove('active');
        if (challenge) challenge.classList.add('active');
    },
    
    showStructuredPreview() {
        const greeting = document.getElementById('greetingSection');
        const loading = document.getElementById('centerLoading');
        const challenge = document.getElementById('challengeDisplay');
        const structured = document.getElementById('structuredPreview');
        
        if (greeting) greeting.style.display = 'none';
        if (loading) loading.classList.remove('active');
        if (challenge) challenge.classList.remove('active');
        if (structured) structured.classList.add('active');
    },
    
    // === MAIN UNIFIED HANDLER ===
    
    async processQuestion(question) {
        const generateBtn = document.getElementById('generateBtn');
        const questionInput = document.getElementById('questionInput');
        
        // Clear input
        if (questionInput) questionInput.value = '';
        
        // Show loading
        this.showLoading();
        if (generateBtn) generateBtn.disabled = true;
        
        try {
            // Use unified API processor
            const result = await window.ClaudeAPI.processQuestion(question);
            console.log('[ChallengeHandler] Result type:', result.type);
            
            // Route to appropriate display handler
            switch (result.type) {
                case 'code':
                case 'howto':
                    await this.handlePnLChallenge(question, result);
                    break;
                    
                case 'structured':
                    await this.handleStructuredUI(question, result);
                    break;
                    
                case 'chat':
                default:
                    this.displayChatResponse(question, result.response);
                    break;
            }
            
        } catch (error) {
            console.error('[ChallengeHandler] Error:', error);
            this.showGreeting();
            if (typeof showAlert === 'function') {
                showAlert(error.message || 'Failed to process question', true, 5000);
            }
        } finally {
            if (generateBtn) generateBtn.disabled = true;
            if (typeof checkSelections === 'function') checkSelections();
        }
    },
    
    // === P&L CHALLENGE HANDLER (Code + How-To) ===
    
    async handlePnLChallenge(question, challengeData) {
        const challengeEntry = {
            id: window.ClaudeAPI.generateChallengeId(),
            title: this.generateTitle(question),
            question: question,
            type: challengeData.type,
            language: challengeData.language || challengeData.category || 'Steps',
            challenge: challengeData,
            timestamp: new Date().toISOString(),
            completed: false,
            stars: 0
        };
        
        this.currentChallenge = challengeEntry;
        this.addToHistory(challengeEntry);
        this.displayChallenge(challengeEntry);
        
        // Deduct lines
        const linesUsed = challengeData.sequence?.length || 5;
        if (typeof deductLines === 'function') deductLines(linesUsed);
        
        if (typeof showAlert === 'function') {
            const typeLabel = challengeData.type === 'code' ? 'Code' : 'How-To';
            showAlert(`${typeLabel} challenge generated!`, false, 2000);
        }
    },
    
    displayChallenge(challengeEntry) {
        const frame = document.getElementById('challengeFrame');
        if (!frame) {
            console.error('Challenge frame not found');
            return;
        }
        
        // Store for logicbody.html
        const challengeForIframe = {
            challengesData: [challengeEntry.challenge],
            language: challengeEntry.language,
            title: challengeEntry.title,
            id: challengeEntry.id,
            type: challengeEntry.type
        };
        
        console.log('[ChallengeHandler] Sending to iframe:', challengeForIframe);
        sessionStorage.setItem('currentChallengeData', JSON.stringify(challengeForIframe));
        
        // Load logicbody
        frame.src = 'logicbody.html?t=' + Date.now();
        
        this.showChallenge();
        
        // Hide input area
        const inputArea = document.querySelector('.input-area-wrapper');
        if (inputArea) inputArea.style.display = 'none';
        
        this.addToStore(challengeEntry);
    },
    
    // === STRUCTURED UI HANDLER ===
    
    async handleStructuredUI(question, uiData) {
        console.log('[ChallengeHandler] Structured UI data:', uiData);
        
        // Create or get the structured preview container
        let previewContainer = document.getElementById('structuredPreview');
        if (!previewContainer) {
            previewContainer = document.createElement('div');
            previewContainer.id = 'structuredPreview';
            previewContainer.className = 'structured-preview-container';
            
            // Insert after greeting section
            const greeting = document.getElementById('greetingSection');
            if (greeting && greeting.parentNode) {
                greeting.parentNode.insertBefore(previewContainer, greeting.nextSibling);
            }
        }
        
        // Build the preview UI
        previewContainer.innerHTML = this.buildStructuredPreviewHTML(question, uiData);
        
        // Initialize copy buttons
        this.initCopyButtons(previewContainer);
        
        this.showStructuredPreview();
        
        // Hide input area
        const inputArea = document.querySelector('.input-area-wrapper');
        if (inputArea) inputArea.style.display = 'none';
        
        if (typeof showAlert === 'function') {
            showAlert('UI Preview generated!', false, 2000);
        }
    },
    
    buildStructuredPreviewHTML(question, uiData) {
        const previewHTML = uiData.fullCode?.preview || '';
        const htmlCode = uiData.fullCode?.html || '';
        const cssCode = uiData.fullCode?.css || '';
        
        return `
            <div class="structured-preview">
                <div class="preview-header">
                    <h3>UI Preview</h3>
                    <p class="preview-description">${this.escapeHtml(uiData.description || question)}</p>
                    <button class="minimal-btn" onclick="ChallengeHandler.newChallenge()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        Back
                    </button>
                </div>
                
                <div class="preview-live">
                    <div class="preview-frame">
                        <iframe id="structuredFrame" srcdoc="${this.escapeHtml(previewHTML)}" sandbox="allow-scripts"></iframe>
                    </div>
                </div>
                
                <div class="preview-code-tabs">
                    <div class="code-tab-buttons">
                        <button class="code-tab-btn active" onclick="ChallengeHandler.switchCodeTab('html')">HTML</button>
                        <button class="code-tab-btn" onclick="ChallengeHandler.switchCodeTab('css')">CSS</button>
                    </div>
                    
                    <div class="code-tab-content active" id="htmlTab">
                        <div class="code-header">
                            <span>HTML</span>
                            <button class="copy-btn" data-code="html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                Copy
                            </button>
                        </div>
                        <pre class="code-block"><code id="htmlCode">${this.escapeHtml(htmlCode)}</code></pre>
                    </div>
                    
                    <div class="code-tab-content" id="cssTab">
                        <div class="code-header">
                            <span>CSS</span>
                            <button class="copy-btn" data-code="css">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                Copy
                            </button>
                        </div>
                        <pre class="code-block"><code id="cssCode">${this.escapeHtml(cssCode)}</code></pre>
                    </div>
                </div>
                
                ${uiData.components?.length ? this.buildComponentsList(uiData.components) : ''}
            </div>
        `;
    },
    
    buildComponentsList(components) {
        return `
            <div class="components-list">
                <h4>Components</h4>
                ${components.map(comp => `
                    <div class="component-item">
                        <span class="comp-name">${this.escapeHtml(comp.name)}</span>
                        <span class="comp-type">${this.escapeHtml(comp.type)}</span>
                        <span class="comp-style">${this.escapeHtml(comp.style || '')}</span>
                    </div>
                `).join('')}
            </div>
        `;
    },
    
    switchCodeTab(tab) {
        document.querySelectorAll('.code-tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.code-tab-content').forEach(content => content.classList.remove('active'));
        
        document.querySelector(`.code-tab-btn[onclick*="${tab}"]`)?.classList.add('active');
        document.getElementById(tab + 'Tab')?.classList.add('active');
    },
    
    initCopyButtons(container) {
        container.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const codeType = btn.dataset.code;
                const codeEl = document.getElementById(codeType + 'Code');
                if (codeEl) {
                    navigator.clipboard.writeText(codeEl.textContent).then(() => {
                        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!`;
                        setTimeout(() => {
                            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy`;
                        }, 2000);
                    });
                }
            });
        });
    },
    
    // === CHAT RESPONSE HANDLER ===
    
    displayChatResponse(question, response) {
        const greeting = document.getElementById('greetingSection');
        
        this.hideLoading();
        
        if (greeting) {
            greeting.style.display = 'block';
            greeting.innerHTML = `
                <div style="text-align: left; max-width: 800px; width: 100%;">
                    <div style="margin-bottom: 16px; padding: 12px 16px; background: rgba(255,255,255,0.05); border-radius: 12px; color: var(--text-secondary); font-size: 0.9rem;">
                        <strong>You asked:</strong> ${this.escapeHtml(question)}
                    </div>
                    <div style="color: var(--text-primary); font-size: 1rem; line-height: 1.6; white-space: pre-wrap;">${this.formatResponse(response)}</div>
                    <button onclick="ChallengeHandler.newChallenge()" class="minimal-btn" style="margin-top: 24px; padding: 10px 20px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        Ask another question
                    </button>
                </div>
            `;
        }
    },
    
    // === UTILITY FUNCTIONS ===
    
    generateTitle(question) {
        let title = question.trim();
        if (title.length > 50) {
            title = title.substring(0, 47) + '...';
        }
        return title;
    },
    
    escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },
    
    formatResponse(text) {
        let formatted = this.escapeHtml(text);
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        formatted = formatted.replace(/`(.*?)`/g, '<code style="background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px;">$1</code>');
        formatted = formatted.replace(/^(\d+)\. (.*)$/gm, '<div style="margin-left: 20px;">$1. $2</div>');
        formatted = formatted.replace(/^[-•] (.*)$/gm, '<div style="margin-left: 20px;">• $1</div>');
        return formatted;
    },
    
    resetGreeting() {
        const greeting = document.getElementById('greetingSection');
        if (greeting) {
            greeting.innerHTML = `
                <h1>Learn Different.</h1>
                <p>Prompt it, we make it work, you solve it logically.</p>
            `;
        }
    },
    
    newChallenge() {
        this.showGreeting();
        this.resetGreeting();
        this.currentChallenge = null;
        
        const inputArea = document.querySelector('.input-area-wrapper');
        if (inputArea) inputArea.style.display = '';
        
        const frame = document.getElementById('challengeFrame');
        if (frame) frame.src = '';
        
        const input = document.getElementById('questionInput');
        if (input) input.focus();
    },
    
    // === HISTORY MANAGEMENT ===
    
    addToHistory(challengeEntry) {
        this.challengeHistory.unshift(challengeEntry);
        if (this.challengeHistory.length > 50) {
            this.challengeHistory = this.challengeHistory.slice(0, 50);
        }
        this.saveHistory();
        this.renderHistory();
    },
    
    saveHistory() {
        localStorage.setItem('pnlChallengeHistory', JSON.stringify(this.challengeHistory));
    },
    
    renderHistory() {
        const historyList = document.getElementById('historyList');
        if (!historyList) return;
        
        if (this.challengeHistory.length === 0) {
            historyList.innerHTML = '<div class="no-challenges" style="padding: 12px; color: var(--text-tertiary); font-size: 0.85rem;">No challenges yet</div>';
            return;
        }
        
        historyList.innerHTML = '';
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
            
            if (groupLabel !== currentGroup) {
                currentGroup = groupLabel;
                const header = document.createElement('div');
                header.className = 'history-group-header';
                header.style.cssText = 'font-size: 0.7rem; color: var(--text-tertiary); padding: 12px 12px 4px 12px; text-transform: uppercase; letter-spacing: 0.05em;';
                header.textContent = groupLabel;
                historyList.appendChild(header);
            }
            
            const item = document.createElement('div');
            item.className = 'history-item';
            item.style.cssText = 'display: flex; align-items: center; gap: 8px;';
            
            // Type indicator
            const icon = document.createElement('span');
            icon.style.cssText = 'font-size: 0.75rem; opacity: 0.6;';
            icon.textContent = challenge.type === 'code' ? '💻' : challenge.type === 'howto' ? '📋' : '•';
            
            const title = document.createElement('span');
            title.style.cssText = 'flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;';
            title.textContent = challenge.title;
            
            item.appendChild(icon);
            item.appendChild(title);
            
            if (challenge.completed) {
                const check = document.createElement('span');
                check.style.cssText = 'color: var(--success); font-size: 0.8rem;';
                check.textContent = '✓';
                item.appendChild(check);
            }
            
            item.onclick = () => this.loadChallenge(index);
            historyList.appendChild(item);
        });
    },
    
    isSameDay(date1, date2) {
        return date1.getFullYear() === date2.getFullYear() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getDate() === date2.getDate();
    },
    
    loadChallenge(index) {
        const challenge = this.challengeHistory[index];
        if (!challenge) return;
        
        this.currentChallenge = challenge;
        this.displayChallenge(challenge);
    },
    
    handleChallengeComplete(data) {
        if (!this.currentChallenge) return;
        
        const index = this.challengeHistory.findIndex(c => c.id === this.currentChallenge.id);
        if (index !== -1) {
            this.challengeHistory[index].completed = data.success;
            this.challengeHistory[index].stars = data.stars || 0;
            this.saveHistory();
            this.renderHistory();
        }
        
        if (data.success && typeof showAlert === 'function') {
            showAlert('🎉 Challenge completed!', false, 4000);
        }
    },
    
    addToStore(challengeEntry) {
        // P&L Store logic if needed
    },
    
    loadFromShareId(shareId) {
        // Load from share logic if needed
        return false;
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    ChallengeHandler.init();
});

window.ChallengeHandler = ChallengeHandler;

// === GLOBAL FUNCTION ===
window.generateChallenge = async function() {
    const question = document.getElementById('questionInput')?.value?.trim();
    
    if (!question) {
        if (typeof showAlert === 'function') {
            showAlert('Please enter a question or topic', true);
        }
        return;
    }
    
    // Check if signed in
    const userProfile = localStorage.getItem('userProfile');
    if (!userProfile) {
        // Show sign-in modal directly
        const modal = document.getElementById('signinModal');
        if (modal) {
            modal.classList.add('active');
        }
        return;
    }
    
    // Process question
    await ChallengeHandler.processQuestion(question);
};

window.newChallenge = function() {
    ChallengeHandler.newChallenge();
};
