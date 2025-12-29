/**
 * SCRIPT ADDITIONS FOR UNIFIED P&L SYSTEM
 * Add this code to script-complete.js or as a separate file loaded after it
 */

// ============================================
// 1. SIMPLIFIED checkSelections (replaces old version)
// ============================================
function checkSelections() {
    const question = document.getElementById('questionInput')?.value?.trim();
    const generateBtn = document.getElementById('generateBtn');
    
    if (generateBtn) {
        // Enable if there's at least 3 characters
        generateBtn.disabled = !question || question.length < 3;
    }
}

// ============================================
// 2. REMOVE toggleMode function - no longer needed
// ============================================
// The old toggleMode() function can be deleted entirely
// All mode detection is now automatic in claude-api.js

// ============================================
// 3. IMPROVED GOOGLE SIGN-IN INITIALIZATION
// ============================================
let tokenClientReady = false;

function initGoogleSignIn() {
    // Check if Google API is loaded
    if (typeof google === 'undefined' || !google.accounts || !google.accounts.oauth2) {
        console.log('[Google Auth] API not loaded yet, retrying in 500ms...');
        setTimeout(initGoogleSignIn, 500);
        return;
    }
    
    try {
        // Initialize token client
        window.tokenClient = google.accounts.oauth2.initTokenClient({
            client_id: "9571013902-q69a5hulb67vquu8ud41qmr3l135pdbj.apps.googleusercontent.com",
            scope: 'email profile openid',
            callback: handleTokenResponse,
            error_callback: (error) => {
                console.error("[Google Auth] Error:", error);
                if (typeof showAlert === 'function') {
                    showAlert("Sign-in failed. Please try again.", true, 3000);
                }
            }
        });
        
        tokenClientReady = true;
        console.log('[Google Auth] Token client initialized successfully');
        
        // Attach click handlers to ALL Google sign-in buttons
        attachGoogleButtonHandlers();
        
    } catch (error) {
        console.error("[Google Auth] Initialization error:", error);
        if (typeof showAlert === 'function') {
            showAlert("Could not load Google Sign-In.", true, 3000);
        }
    }
}

function attachGoogleButtonHandlers() {
    // Sidebar button
    const sidebarBtn = document.getElementById('customGoogleSignInBtn');
    if (sidebarBtn) {
        sidebarBtn.onclick = handleGoogleButtonClick;
        console.log('[Google Auth] Attached handler to sidebar button');
    }
    
    // Modal button (if exists)
    const modalBtns = document.querySelectorAll('[onclick*="triggerGoogleLogin"]');
    modalBtns.forEach(btn => {
        btn.onclick = handleGoogleButtonClick;
        console.log('[Google Auth] Attached handler to modal button');
    });
}

function handleGoogleButtonClick(e) {
    if (e) e.preventDefault();
    
    if (!tokenClientReady || !window.tokenClient) {
        console.log('[Google Auth] Not ready yet, initializing...');
        if (typeof showAlert === 'function') {
            showAlert('Loading Google Sign-In...', false, 2000);
        }
        initGoogleSignIn();
        return;
    }
    
    console.log('[Google Auth] Requesting access token...');
    window.tokenClient.requestAccessToken();
}

// Override triggerGoogleLogin to use our improved handler
function triggerGoogleLogin() {
    handleGoogleButtonClick();
}

// ============================================
// 4. TOKEN RESPONSE HANDLER (keep existing or use this)
// ============================================
function handleTokenResponse(tokenResponse) {
    console.log('[Google Auth] Token response received');
    
    if (tokenResponse && tokenResponse.access_token) {
        fetchUserInfo(tokenResponse.access_token);
    } else {
        console.error('[Google Auth] No access token in response');
        if (typeof showAlert === 'function') {
            showAlert('Sign-in failed. Please try again.', true, 3000);
        }
    }
}

async function fetchUserInfo(accessToken) {
    try {
        console.log('[Google Auth] Fetching user info...');
        
        const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch user info: ' + response.status);
        }
        
        const userObject = await response.json();
        console.log('[Google Auth] User info received:', userObject.email);
        
        // Save to localStorage
        localStorage.setItem('userProfile', JSON.stringify(userObject));
        
        // Close sign-in modal if open
        if (typeof closeSigninModal === 'function') {
            closeSigninModal();
        }
        
        // Render logged-in state
        if (typeof renderLoginState === 'function') {
            renderLoginState(userObject);
        }
        
        // Show welcome message
        if (typeof showAlert === 'function') {
            showAlert(`👋 Welcome, ${userObject.given_name || userObject.name}!`, false, 4000);
        }
        
    } catch (error) {
        console.error('[Google Auth] Error fetching user info:', error);
        if (typeof showAlert === 'function') {
            showAlert('Sign-in failed. Please try again.', true, 3000);
        }
    }
}

// ============================================
// 5. INITIALIZE ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure Google script is loaded
    setTimeout(initGoogleSignIn, 100);
    
    // Check for saved user profile
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
        try {
            const userObject = JSON.parse(savedProfile);
            if (typeof renderLoginState === 'function') {
                renderLoginState(userObject);
            }
        } catch (e) {
            console.error('Error loading saved profile:', e);
            localStorage.removeItem('userProfile');
        }
    }
});

// Backup initialization on window load
window.addEventListener('load', () => {
    if (!tokenClientReady) {
        console.log('[Google Auth] Backup initialization on window.load');
        initGoogleSignIn();
    }
});

// ============================================
// 6. INPUT HANDLING - Enable button on text input
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const questionInput = document.getElementById('questionInput');
    if (questionInput) {
        // Check on input
        questionInput.addEventListener('input', checkSelections);
        
        // Submit on Enter (without Shift)
        questionInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                const generateBtn = document.getElementById('generateBtn');
                if (generateBtn && !generateBtn.disabled) {
                    generateBtn.click();
                }
            }
        });
    }
});

console.log('[P&L Unified] Script additions loaded');
