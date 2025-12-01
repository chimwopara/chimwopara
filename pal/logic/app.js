// ==========================================
// 1. GLOBAL VARIABLES & CONFIG
// ==========================================
let tokenClient;
let userProfile = null;

// Plan & Lines
let linesRemaining = 250; 
let maxLines = 250;
let isPremium = false;
let currentPlan = 'Free Plan';

// Content Data
let challengeHistory = JSON.parse(localStorage.getItem('challengeHistory') || '[]');
let unlockedThemes = ['default'];
let currentChallenge = null;

// University State
let isEnrolled = localStorage.getItem('isEnrolled') === 'true';
let enrolledFaculty = localStorage.getItem('enrolledFaculty') || null;
let currentWeek = 1; 
let selectedFaculty = null;


// ==========================================
// 2. INITIALIZATION & RESTORE
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // A. Restore Theme
    const savedTheme = localStorage.getItem('savedTheme');
    if (savedTheme) applyTheme(savedTheme);
    populateThemeGrid();

    // B. Restore User Session
    const savedUser = localStorage.getItem('userProfile');
    if (savedUser) {
        try {
            renderLoginState(JSON.parse(savedUser));
        } catch (e) {
            localStorage.removeItem('userProfile');
        }
    }

    // C. Restore Premium Plan
    const savedPlan = localStorage.getItem('savedPlan');
    if (savedPlan) {
        // Restore plan without popup
        activatePremium(savedPlan, 0, true);
        const savedLines = localStorage.getItem('savedLines');
        if (savedLines) linesRemaining = parseInt(savedLines);
    }

    // D. Initialize UI Components
    updateLinesDisplay();
    updatePremiumModalUI();
    loadChallengeStore();
    renderHistory();
    
    // E. Restore Text Draft
    const qInput = document.getElementById('questionInput');
    const savedDraft = localStorage.getItem('promptDraft');
    if (qInput && savedDraft) {
        qInput.value = savedDraft;
        checkSelections();
    }
    if (qInput) {
        qInput.addEventListener('input', () => {
            localStorage.setItem('promptDraft', qInput.value);
            checkSelections();
        });
    }

    // F. URL Params (Auto-open University)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('action') === 'university') {
        checkEnrollmentAndOpen();
    }

    // G. Modal Listeners
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                if(modal.id === 'signinModal') closeSigninModal();
                updateToggleButtonVisibility();
            }
        });
    });
});

// Initialize Google Client
window.addEventListener('load', () => {
    try {
        tokenClient = google.accounts.oauth2.initTokenClient({
            client_id: "9571013902-q69a5hulb67vquu8ud41qmr3l135pdbj.apps.googleusercontent.com",
            scope: 'email profile openid',
            callback: handleTokenResponse,
            error_callback: (error) => console.error("Google Sign-In Error:", error)
        });
        
        const customBtn = document.getElementById('customGoogleSignInBtn');
        if (customBtn) customBtn.addEventListener('click', triggerGoogleLogin);
        
    } catch (error) {
        console.error("Error initializing Google Token Client:", error);
    }
});

// ==========================================
// 3. AUTHENTICATION LOGIC
// ==========================================
function triggerGoogleLogin() {
    if (tokenClient) tokenClient.requestAccessToken();
}

function handleTokenResponse(tokenResponse) {
    if (tokenResponse && tokenResponse.access_token) {
        fetchUserInfo(tokenResponse.access_token);
    }
}

async function fetchUserInfo(accessToken) {
    try {
        const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        if (!response.ok) throw new Error('Failed to fetch user info');
        
        const userObject = await response.json();
        localStorage.setItem('userProfile', JSON.stringify(userObject));
        renderLoginState(userObject);
        
        closeSigninModal(); 
        showAlert(`👋 Welcome, ${userObject.given_name}!`, false, 4000);

    } catch (error) { 
        console.error("Error fetching user info:", error); 
        showAlert("Sign-in failed.", true); 
    }
}

function renderLoginState(userObject) {
    userProfile = userObject;
    const sidebarFooter = document.querySelector('.sidebar-footer');
    const signInButton = document.getElementById('customGoogleSignInBtn');

    if (sidebarFooter && signInButton) {
        signInButton.style.display = 'none';
        if (document.querySelector('.user-menu-container')) return;

        const container = document.createElement('div');
        container.className = 'user-menu-container';

        // Popup Menu HTML
        container.innerHTML = `
            <div class="user-menu-popup" id="userMenuPopup">
                <div class="menu-header-email">${userObject.email}</div>
                <button class="menu-item" onclick="triggerSupportEmail()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> Settings
                </button>
                <button class="menu-item" onclick="triggerSupportEmail()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> Get help
                </button>
                <div class="menu-divider"></div>
                <button class="menu-item" onclick="showPremiumModal()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg> Upgrade plan
                </button>
                <button class="menu-item" onclick="window.location.href='terms.html'">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg> Learn more
                </button>
                <div class="menu-divider"></div>
                <button class="menu-item" onclick="handleLogout()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg> Log out
                </button>
            </div>
        `;

        // Visible Profile Button
        const profileBtn = document.createElement('div');
        profileBtn.className = 'google-signin-btn profile-active';
        profileBtn.style.cssText = `cursor: pointer; gap: 12px; justify-content: flex-start; padding: 8px; border-radius: 8px; width: 100%; display: flex; align-items: center; transition: background 0.2s;`;
        
        const userImg = document.createElement('img');
        userImg.src = userObject.picture;
        userImg.style.cssText = "width: 28px; height: 28px; border-radius: 50%; object-fit: cover;";
        const userName = document.createElement('div');
        userName.style.cssText = "font-size: 0.9rem; font-weight: 500; color: white;";
        userName.textContent = userObject.name;

        profileBtn.appendChild(userImg);
        profileBtn.appendChild(userName);
        profileBtn.onclick = (e) => {
            e.stopPropagation();
            const menu = document.getElementById('userMenuPopup');
            if (menu) menu.classList.toggle('active');
        };

        container.appendChild(profileBtn);
        sidebarFooter.appendChild(container);

        // Click outside listener
        document.addEventListener('click', (e) => {
            const menu = document.getElementById('userMenuPopup');
            if (menu && menu.classList.contains('active') && !container.contains(e.target)) {
                menu.classList.remove('active');
            }
        });
    }
}

function handleLogout() {
    userProfile = null;
    // Reset to Free Plan
    isPremium = false;
    currentPlan = 'Free Plan';
    maxLines = 250;
    linesRemaining = 250;
    
    // Clear Storage
    localStorage.removeItem('userProfile');
    localStorage.removeItem('savedPlan');
    localStorage.removeItem('savedLines');

    // UI Reset
    const container = document.querySelector('.user-menu-container');
    if (container) container.remove();
    document.getElementById('customGoogleSignInBtn').style.display = 'flex';
    
    updateLinesDisplay();
    updatePremiumModalUI();
    showAlert("Logged out successfully.", false);
}

// ==========================================
// 4. GENERATION & CORE LOGIC
// ==========================================
async function generateChallenge() {
    // --- 1. AUTH GATE ---
    if (!userProfile) {
        openSigninModal();
        return; 
    }

    // --- 2. LINE GATE ---
    if (linesRemaining <= 0) {
        checkUpgradeStatus();
        return;
    }

    const question = document.getElementById('questionInput').value.trim();
    let language = document.getElementById('languageSelect').value;
    const customLanguageInput = document.getElementById('customLanguageInput');
    const difficulty = document.getElementById('difficultySelect').value;
    
    if (!question) {
        showAlert('Please enter a coding question', true);
        return;
    }
    
    if (language === 'custom') {
        const customLang = customLanguageInput.value.trim();
        if (!customLang) {
            showAlert('Please enter a custom language name', true);
            return;
        }
        language = customLang;
    }
    
    // Loading State
    const generateBtn = document.getElementById('generateBtn');
    const loadingIndicator = document.getElementById('loadingIndicator');
    generateBtn.disabled = true;
    loadingIndicator.classList.add('active');
    
    try {
        // --- SIMULATED AI DELAY (Mock) ---
        await new Promise(r => setTimeout(r, 1500)); 
        
        // Mock Success Data
        const serialNumber = 'C' + Math.random().toString(36).substr(2, 8).toUpperCase();
        
        // Deduct Lines
        linesRemaining--; 
        localStorage.setItem('savedLines', linesRemaining);
        updateLinesDisplay(); 
        
        // Create History Entry
        const entry = {
            title: question.substring(0, 30) + (question.length > 30 ? '...' : ''),
            serial: serialNumber,
            language: language || 'General',
            timestamp: new Date().toISOString()
        };
        
        challengeHistory.unshift(entry);
        localStorage.setItem('challengeHistory', JSON.stringify(challengeHistory));
        renderHistory();

        // Simulate "Shared" Data for Store
        addToStore(entry);

        showAlert(`Challenge created! Serial: ${serialNumber}`);
        document.getElementById('questionInput').value = '';
        checkSelections(); // Disable button
        
    } catch (error) {
        console.error('Error generating:', error);
        showAlert('Failed to generate. Try again.', true);
    } finally {
        generateBtn.disabled = false;
        loadingIndicator.classList.remove('active');
    }
}

function addToStore(entry) {
    const shared = JSON.parse(localStorage.getItem('sharedChallenges') || '[]');
    const storeItem = {
        id: Date.now(),
        title: entry.title,
        language: entry.language,
        difficulty: 'Medium',
        lines: Math.floor(Math.random() * 50) + 10,
        sharedAt: entry.timestamp
    };
    shared.unshift(storeItem);
    localStorage.setItem('sharedChallenges', JSON.stringify(shared));
}

function renderHistory() {
    const list = document.getElementById('historyList');
    if (!list) return;
    list.innerHTML = '';
    challengeHistory.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.textContent = `${item.title} (${item.language})`;
        list.appendChild(div);
    });
}

// ==========================================
// 5. PREMIUM & LINES LOGIC
// ==========================================
function updateLinesDisplay() {
    let linesUsed = maxLines - linesRemaining;
    let percentage = Math.max(0, Math.min(100, (linesUsed / maxLines) * 100));
    
    const bar = document.getElementById('linesProgressBar');
    if (bar) {
        bar.style.width = `${percentage}%`;
        bar.className = 'usage-progress-fill'; 
        if (linesRemaining <= 0) bar.classList.add('full');
    }
}

function checkUpgradeStatus() {
    showPremiumModal();
    if (linesRemaining <= 0) {
        showAlert("⚠️ You are out of lines. Upgrade to continue.", true);
    }
}

function activatePremium(planName, addedLines, isRestore = false) {
    // Gate: Must be logged in to upgrade
    if (!userProfile && !isRestore) {
        closePremiumModal();
        openSigninModal();
        return; 
    }

    isPremium = true;
    currentPlan = planName;
    
    // Set Capacities
    if (planName.includes('Boost')) maxLines = 1000;
    else if (planName.includes('Pro')) maxLines = 5000;
    else if (planName.includes('Super')) maxLines = 10000;
    else if (planName.includes('Demo')) maxLines = 99999;
    else maxLines = 250; // Fallback

    if (!isRestore) {
        linesRemaining = maxLines; 
        // Save plan to storage
        localStorage.setItem('savedPlan', planName);
        localStorage.setItem('savedLines', linesRemaining);
        showAlert(`🌟 ${planName} activated!`, false, 4000);
    }
    
    updateLinesDisplay();
    updatePremiumModalUI();
    if (!isRestore) closePremiumModal();
}

function updatePremiumModalUI() {
    updatePlanVisuals(); // Update the visual bars

    const btnShy = document.getElementById('btn-shy');
    const btnPro = document.getElementById('btn-Pro');
    const btnSuper = document.getElementById('btn-super');

    // Reset
    if (btnShy) { btnShy.textContent = 'Select'; btnShy.disabled = false; }
    if (btnPro) { btnPro.textContent = 'Select'; btnPro.disabled = false; }
    if (btnSuper) { btnSuper.textContent = 'Select'; btnSuper.disabled = false; }

    if (isPremium && currentPlan) {
        let activeBtn;
        if (currentPlan.includes('Boost')) activeBtn = btnShy;
        if (currentPlan.includes('Pro')) activeBtn = btnPro;
        if (currentPlan.includes('Super')) activeBtn = btnSuper;
        
        if (activeBtn) {
            activeBtn.textContent = 'Current Plan';
            activeBtn.disabled = true;
        }
        document.getElementById('downgradeOption').style.display = 'block';
    } else {
        document.getElementById('downgradeOption').style.display = 'none';
    }
}

// Logic for Blue/Green Bar Comparison
function updatePlanVisuals() {
    let currentCap = 250; // Free baseline
    if (isPremium && currentPlan) {
        if (currentPlan.includes('Boost')) currentCap = 1000;
        else if (currentPlan.includes('Pro')) currentCap = 5000;
        else if (currentPlan.includes('Super')) currentCap = 10000;
    }

    const maxScale = 10000; // Super plan is 100% width reference
    const plans = [{ id: 'boost', cap: 1000 }, { id: 'pro', cap: 5000 }, { id: 'super', cap: 10000 }];

    plans.forEach(p => {
        const baseEl = document.getElementById(`p-bar-${p.id}-base`);
        const extraEl = document.getElementById(`p-bar-${p.id}-extra`);
        if (!baseEl || !extraEl) return;

        extraEl.classList.remove('lv-bar-loss');

        if (currentCap < p.cap) {
            // Upgrade: Blue = Current, Green = Gain
            baseEl.style.width = `${(currentCap / maxScale) * 100}%`;
            extraEl.style.width = `${((p.cap - currentCap) / maxScale) * 100}%`;
        } else if (currentCap > p.cap) {
            // Downgrade: Blue = Target, Red = Loss
            baseEl.style.width = `${(p.cap / maxScale) * 100}%`;
            extraEl.style.width = `${((currentCap - p.cap) / maxScale) * 100}%`;
            extraEl.classList.add('lv-bar-loss');
        } else {
            // Equal
            baseEl.style.width = `${(currentCap / maxScale) * 100}%`;
            extraEl.style.width = `0%`;
        }
    });
}

function downgradeToFree() {
    isPremium = false; 
    currentPlan = 'Free Plan'; 
    maxLines = 250; 
    linesRemaining = 250;
    
    localStorage.removeItem('savedPlan');
    localStorage.setItem('savedLines', 250);
    
    updateLinesDisplay();
    updatePremiumModalUI();
    closePremiumModal();
    showAlert("Plan reset to Free.", false);
}

// ==========================================
// 6. HELPER & UI FUNCTIONS
// ==========================================
function openSigninModal() { document.getElementById('signinModal').classList.add('active'); }
function closeSigninModal() { document.getElementById('signinModal').classList.remove('active'); }
function triggerSupportEmail() { window.location.href = "mailto:support@chimwopara.com"; }

function applyTheme(themeId) {
    const theme = themes.find(t => t.id === themeId);
    if (!theme) return;
    localStorage.setItem('savedTheme', themeId);
    const root = document.documentElement;
    
    if (themeId === 'default') {
        root.style.removeProperty('--bg-app');
        root.style.removeProperty('--bg-gradient-start');
        root.style.removeProperty('--bg-gradient-end');
        root.style.removeProperty('--bg-glass');
        root.style.removeProperty('--accent-primary');
        root.style.removeProperty('--accent-highlight');
        // Reset Text Colors
        root.style.setProperty('--text-primary', '#FFFFFF');
        root.style.setProperty('--text-secondary', 'rgba(235, 235, 245, 0.6)');
        root.style.setProperty('--text-tertiary', 'rgba(235, 235, 245, 0.3)');
        root.style.setProperty('--border-glass', 'rgba(255, 255, 255, 0.1)'); 
    } else {
        root.style.setProperty('--bg-app', theme.start);
        root.style.setProperty('--bg-gradient-start', theme.start);
        root.style.setProperty('--bg-gradient-end', theme.end);
        root.style.setProperty('--bg-glass', `${theme.start}BF`);
        root.style.setProperty('--accent-primary', theme.accent);
        root.style.setProperty('--accent-highlight', theme.accent);
        
        if (theme.textColor === 'dark') {
            root.style.setProperty('--text-primary', '#1D1D1F');
            root.style.setProperty('--text-secondary', 'rgba(0, 0, 0, 0.6)');
            root.style.setProperty('--text-tertiary', 'rgba(0, 0, 0, 0.3)');
            root.style.setProperty('--border-glass', 'rgba(0, 0, 0, 0.1)');
        } else {
            // Light text logic
            root.style.setProperty('--text-primary', '#FFFFFF');
            root.style.setProperty('--text-secondary', 'rgba(235, 235, 245, 0.6)');
            root.style.setProperty('--text-tertiary', 'rgba(235, 235, 245, 0.3)');
            root.style.setProperty('--border-glass', 'rgba(255, 255, 255, 0.1)');
        }
    }
    closeThemeStoreModal();
}

function populateThemeGrid() {
    const grid = document.getElementById('themeGrid');
    grid.innerHTML = '';
    themes.forEach(theme => {
        const isLocked = !unlockedThemes.includes(theme.id);
        const wrapper = document.createElement('div');
        wrapper.className = 'theme-wrapper';
        wrapper.title = theme.name;
        wrapper.onclick = () => {
            if (!isLocked) applyTheme(theme.id);
            else { closeThemeStoreModal(); showPremiumModal(); }
        };
        const option = document.createElement('div');
        option.className = `theme-option ${isLocked ? 'locked' : ''}`;
        option.style.background = `linear-gradient(135deg, ${theme.start}, ${theme.end})`;
        const nameLabel = document.createElement('div');
        nameLabel.className = 'theme-name';
        nameLabel.textContent = theme.name;
        wrapper.appendChild(option);
        wrapper.appendChild(nameLabel);
        grid.appendChild(wrapper);
    });
}

function newChallenge() {
    document.getElementById('creatorPanel').style.display = 'flex';
    document.getElementById('challengeViewer')?.classList.remove('active');
    document.getElementById('questionInput').value = '';
    checkSelections();
}

function showAlert(message, isError = false, duration = 5000) {
    const successMsg = document.getElementById('successMessage');
    const errorMsg = document.getElementById('errorMessage');
    const alertBox = isError ? errorMsg : successMsg;
    document.querySelectorAll('.error-message, .success-message').forEach(el => el.classList.remove('active'));
    const textSpan = alertBox.querySelector('.alert-text');
    if (textSpan) textSpan.textContent = message;
    alertBox.classList.add('active');
    if (window.alertTimeout) clearTimeout(window.alertTimeout);
    window.alertTimeout = setTimeout(() => alertBox.classList.remove('active'), duration);
}

// ... (University & Enrollment Logic from original snippet) ...
function checkEnrollmentAndOpen() {
    if (isEnrolled && enrolledFaculty) openStudentPortal();
    else showUniversityModal();
}
function openStudentPortal() {
    document.getElementById('studentPortal').classList.add('active');
    // ... render weeks logic can go here if needed ...
}
function closeStudentPortal() { document.getElementById('studentPortal').classList.remove('active'); }
function showUniversityModal() { document.getElementById('universityModal').classList.add('active'); renderUniversityUI(); }
function closeUniversityModal() { document.getElementById('universityModal').classList.remove('active'); }
function renderUniversityUI() {
    // Needs syllabus.js loaded
    const grid = document.getElementById('facultyGrid');
    if(!grid || typeof schoolData === 'undefined') return;
    grid.innerHTML = '';
    Object.keys(schoolData).forEach(key => {
        const school = schoolData[key];
        const card = document.createElement('div');
        card.className = 'faculty-card';
        card.onclick = () => {
            document.querySelectorAll('.faculty-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedFaculty = key;
            document.getElementById('selectedFacultyName').textContent = school.title;
        };
        // Simplified content for brevity
        card.innerHTML = `<div class="faculty-title">${school.title}</div><div class="faculty-desc">${school.description}</div>`;
        grid.appendChild(card);
    });
}
function handleAdmissionSubmit(e) {
    e.preventDefault();
    if (!selectedFaculty) { showAlert('Please select a faculty first.', true); return; }
    closeUniversityModal();
    document.getElementById('paymentModal').classList.add('active');
}
function processPayment() {
    const btn = document.querySelector('#paymentModal button');
    btn.textContent = "Processing...";
    setTimeout(() => {
        document.getElementById('paymentModal').classList.remove('active');
        btn.textContent = "Pay Now";
        isEnrolled = true;
        enrolledFaculty = selectedFaculty;
        localStorage.setItem('isEnrolled', 'true');
        localStorage.setItem('enrolledFaculty', enrolledFaculty);
        showAlert('Welcome to the University.', false);
        openStudentPortal();
    }, 1500);
}
// Store Loaders
function loadChallengeStore() {
    const shared = JSON.parse(localStorage.getItem('sharedChallenges') || '[]');
    const grid = document.getElementById('challengeStoreGrid');
    const noMsg = document.getElementById('noSharedChallenges');
    if (!grid) return;
    
    if (shared.length === 0) {
        grid.style.display = 'none';
        if (noMsg) noMsg.style.display = 'block';
    } else {
        grid.style.display = 'grid';
        if (noMsg) noMsg.style.display = 'none';
        grid.innerHTML = '';
        shared.forEach(item => {
            const card = document.createElement('div');
            card.className = 'item-card';
            card.innerHTML = `<div class="item-header"><b>${item.title}</b></div><div class="item-content">${item.language} • ${item.lines} lines</div>`;
            grid.appendChild(card);
        });
    }
}
function showStoreModal() { document.getElementById('storeModal').classList.add('active'); loadChallengeStore(); }
function closeStoreModal() { document.getElementById('storeModal').classList.remove('active'); }
function showThemeStoreModal() { document.getElementById('themeStoreModal').classList.add('active'); }
function closeThemeStoreModal() { document.getElementById('themeStoreModal').classList.remove('active'); }
function showPremiumModal() { document.getElementById('premiumModal').classList.add('active'); }
function closePremiumModal() { document.getElementById('premiumModal').classList.remove('active'); }
function showStructuredModal() { document.getElementById('structuredModal').classList.add('active'); }
function closeStructuredModal() { document.getElementById('structuredModal').classList.remove('active'); }
function openLanguageModal() { document.getElementById('languageModal').classList.add('active'); populateLanguageGrid(); }
function closeLanguageModal() { document.getElementById('languageModal').classList.remove('active'); }
function checkSelections() {
    const val = document.getElementById('questionInput')?.value.trim();
    const btn = document.getElementById('generateBtn');
    if(btn) btn.disabled = !val || val.length === 0;
}
function toggleMode() {
    const mode = document.getElementById('modeSelect').value;
    const tools = document.getElementById('codeTools');
    if(tools) tools.style.display = (mode === 'code') ? 'flex' : 'none';
}
function demoUnlockThemes() { activatePremium('Demo Mode', 99999); }
document.addEventListener('keydown', (e) => {
    if (e.shiftKey && e.altKey && e.key.toLowerCase() === 'd') {
        document.getElementById('demoThemesBtn').style.opacity = '1';
        document.getElementById('demoThemesBtn').style.pointerEvents = 'auto';
    }
});