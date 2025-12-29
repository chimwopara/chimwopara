/**
 * COMPREHENSIVE FIXES
 * 1. Structured keyword tapping - show explanations
 * 2. Real-time keyword highlighting in input
 * 3. Sidebar toggle fix for mobile
 * 4. Login required for submit
 */

// ============================================
// 1. STRUCTURED KEYWORD INFO
// ============================================
const keywordDefinitions = {
    'in': { category: 'Start', desc: 'Specifies the programming language or framework.', example: '*in* swift ; *create* button' },
    'for': { category: 'Start', desc: 'Defines the target platform or device.', example: '*in* swift ; *for* iPhone ; *create* tab bar' },
    'context': { category: 'References', desc: 'References a saved context by number or name.', example: '*context* 1 ; *refactor* with comments' },
    'line': { category: 'References', desc: 'References a specific line number in the current context.', example: '*line* 42 ; *explain* this function' },
    'chimcontext': { category: 'References', desc: 'References a Pro context from the store.', example: '*chimcontext* "auth-flow" ; *create* login screen' },
    'prompt': { category: 'References', desc: 'References a saved prompt.', example: '*prompt* 1 ; run with current context' },
    'chimprompt': { category: 'References', desc: 'References a Pro prompt from the store.', example: '*chimprompt* "code-review" ; *context* 1' },
    'file': { category: 'References', desc: 'References an uploaded file.', example: '*file* "design.png" ; *create* matching UI' },
    'error': { category: 'References', desc: 'References an error message for debugging.', example: '*error* "undefined is not a function" ; *debug*' },
    'spawn': { category: 'Generation', desc: 'Generates multiple variations or instances of something.', example: '*spawn* 5 color variations ; *from* context 1' },
    'rare': { category: 'Generation', desc: 'Generates unique, creative, or unconventional solutions.', example: '*rare* ; *create* loading animation' },
    'create': { category: 'Generation', desc: 'Generates new code or UI components from scratch.', example: '*create* dropdown menu ; *like* Apple' },
    'refactor': { category: 'Generation', desc: 'Improves existing code structure without changing functionality.', example: '*context* 1 ; *refactor* to use hooks' },
    'explain': { category: 'Generation', desc: 'Provides detailed explanation of code or concepts.', example: '*context* 1 ; *explain* line by line' },
    'optimize': { category: 'Generation', desc: 'Improves code performance, efficiency, or resource usage.', example: '*context* 1 ; *optimize* for speed' },
    'debug': { category: 'Generation', desc: 'Finds and fixes bugs or issues in the code.', example: '*error* "null reference" ; *debug* ; *explain* fix' },
    'from': { category: 'Attributes', desc: 'References a design or functionality from an existing app as inspiration.', example: '*create* chat bubble ; *from* WhatsApp' },
    'makeit': { category: 'Attributes', desc: 'Applies a specific quality or characteristic to the output.', example: '*create* button ; *makeit* rounded ; *makeit* animated' },
    'like': { category: 'Attributes', desc: 'Makes the output similar to a referenced style or example.', example: '*create* navbar ; *like* Apple.com' },
    'but': { category: 'Attributes', desc: 'Modifies or overrides a specific aspect of the reference.', example: '*like* Instagram stories ; *but* vertical scroll' },
    'with': { category: 'Attributes', desc: 'Includes additional features or elements.', example: '*create* form ; *with* validation ; *with* dark mode' },
    'without': { category: 'Attributes', desc: 'Excludes specific features or elements.', example: '*create* modal ; *without* close button ; *without* backdrop' },
    'prefer': { category: 'Attributes', desc: 'Sets a preference for approach, library, or method.', example: '*prefer* flexbox ; *create* grid layout' },
    'format': { category: 'Attributes', desc: 'Specifies the output format or structure.', example: '*explain* API ; *format* bullet points' },
    'steps': { category: 'Attributes', desc: 'Requests output broken into numbered steps or phases.', example: '*create* auth flow ; *steps* 5' },
    'between': { category: 'Attributes', desc: 'Specifies a range or constraint between values.', example: '*spawn* icons ; *between* 24px and 48px' },
    'nextto': { category: 'Position & Style', desc: 'Positions an element relative to another element.', example: '*create* tooltip ; *nextto* button' },
    'blame': { category: 'Position & Style', desc: 'Highlights or annotates specific parts of code with explanations.', example: '*blame* ; *context* 1 ; show problem areas' },
    'animate': { category: 'Position & Style', desc: 'Adds animation or motion to elements.', example: '*create* card ; *animate* on hover ; *like* Material' },
    'background': { category: 'Position & Style', desc: 'Specifies background styling for elements.', example: '*create* hero section ; *background* gradient blue' },
    'font': { category: 'Position & Style', desc: 'Specifies typography settings.', example: '*create* heading ; *font* Inter ; *makeit* bold' },
    'style': { category: 'Position & Style', desc: 'Applies general styling or a design system.', example: '*style* glassmorphism ; *create* card component' },
    'maybe': { category: 'Organization', desc: 'Marks something as optional or conditional in the output.', example: '*create* form ; *with* email ; *maybe* phone number' },
    'then': { category: 'Organization', desc: 'Chains sequential actions or defines what happens next.', example: '*create* button ; *then* show modal on click' },
    'forge': { category: 'Organization', desc: 'Combines multiple prompts or contexts into a reusable template.', example: '*forge* "auth-flow" ; *from* login + signup + reset' },
    'mold': { category: 'Organization', desc: 'Creates a reusable pattern or template from existing code.', example: '*mold* "api-call" ; *from* context 1' },
    'jump': { category: 'Organization', desc: 'Skips to a specific section or jumps between contexts.', example: '*jump* line 100 ; *explain* from there' },
    'using': { category: 'Organization', desc: 'Specifies libraries, frameworks, or tools to use.', example: '*create* chart ; *using* Chart.js ; *in* React' }
};

// All structured keywords for highlighting
const structuredKeywords = Object.keys(keywordDefinitions);

// Show keyword info
window.showKeywordInfo = function(keyword) {
    const info = keywordDefinitions[keyword];
    if (!info) return;
    
    // UI Updates
    document.querySelectorAll('.struct-chip').forEach(chip => chip.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    
    const defaultExample = document.getElementById('keywordDefaultExample');
    if (defaultExample) defaultExample.style.display = 'none';
    
    const infoBox = document.getElementById('keywordInfoBox');
    if (!infoBox) return;
    
    infoBox.style.display = 'block';
    
    const nameEl = document.getElementById('keywordInfoName');
    const catEl = document.getElementById('keywordInfoCategory');
    const descEl = document.getElementById('keywordInfoDesc');
    const exampleEl = document.getElementById('keywordInfoExample');
    
    if (nameEl) nameEl.textContent = keyword;
    if (catEl) catEl.textContent = info.category;
    if (descEl) descEl.textContent = info.desc;
    if (exampleEl) {
        exampleEl.innerHTML = info.example.replace(/\*(\w+)\*/g, '<span style="color: #5AC8FA; font-weight: bold;">$1</span>');
    }
    infoBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};

// ============================================
// 2. REAL-TIME KEYWORD HIGHLIGHTING
// ============================================
function setupKeywordHighlighting() {
    const input = document.getElementById('questionInput');
    const overlay = document.getElementById('highlightOverlay');
    
    if (!input || !overlay) {
        setTimeout(setupKeywordHighlighting, 500);
        return;
    }
    
    const keywordPattern = new RegExp(`\\b(${structuredKeywords.join('|')})\\b`, 'gi');
    
    function updateHighlight() {
        const text = input.value;
        if (text.includes(';')) {
            const highlighted = text
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(keywordPattern, '<span class="h-keyword" style="color: #5AC8FA; font-weight: 600;">$1</span>')
                .replace(/;/g, '<span style="color: #FF6B9D; font-weight: 600;">;</span>');
            
            overlay.innerHTML = highlighted + '<br>'; // Add break to ensure scrolling
            input.classList.add('structured-active');
            overlay.style.display = 'block';
        } else {
            overlay.innerHTML = '';
            input.classList.remove('structured-active');
            overlay.style.display = 'none';
        }
    }
    
    input.addEventListener('input', updateHighlight);
    input.addEventListener('scroll', () => {
        overlay.scrollTop = input.scrollTop;
        overlay.scrollLeft = input.scrollLeft;
    });
}

// ============================================
// 3. SIDEBAR TOGGLE (Global)
// ============================================
window.toggleSidebar = function() {
    const sidebar = document.querySelector('.sidebar');
    const btn = document.getElementById('toggleSidebarBtn');
    const mainContent = document.querySelector('.main-content');
    
    if (!sidebar || !btn) return;
    
    sidebar.classList.toggle('hidden');
    btn.classList.toggle('collapsed');
    
    if (sidebar.classList.contains('hidden')) {
        if (mainContent) mainContent.classList.add('sidebar-hidden');
    } else {
        if (mainContent) mainContent.classList.remove('sidebar-hidden');
    }
    
    // Mobile positioning
    if (window.innerWidth <= 768) {
        if (sidebar.classList.contains('hidden')) {
            btn.style.left = '12px';
            btn.style.right = 'auto';
        } else {
            btn.style.left = 'auto';
            btn.style.right = '12px';
        }
    }
};

window.addEventListener('resize', () => {
    const btn = document.getElementById('toggleSidebarBtn');
    const sidebar = document.querySelector('.sidebar');
    if (!btn || !sidebar) return;
    
    if (window.innerWidth > 768) {
        btn.style.left = '';
        btn.style.right = '';
    } else {
        if (sidebar.classList.contains('hidden')) {
            btn.style.left = '12px';
            btn.style.right = 'auto';
        } else {
            btn.style.left = 'auto';
            btn.style.right = '12px';
        }
    }
});

// ============================================
// 4. CHECK SELECTIONS (Enable Button)
// ============================================
window.checkSelections = function() {
    const question = document.getElementById('questionInput')?.value?.trim();
    const generateBtn = document.getElementById('generateBtn');
    const userProfile = localStorage.getItem('userProfile');
    
    if (generateBtn) {
        generateBtn.disabled = !question || question.length < 3;
        generateBtn.title = userProfile ? 'Generate' : 'Sign in to generate';
    }
};

// ============================================
// 5. INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(setupKeywordHighlighting, 200);
    
    const questionInput = document.getElementById('questionInput');
    if (questionInput) {
        questionInput.addEventListener('input', window.checkSelections);
    }
    
    console.log('[P&L Fixes] Script loaded successfully');
});