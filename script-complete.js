        const languages = [
            { id: 'assembly', name: 'Assembly', desc: 'Low-level hardware control', img: 'Assembly.png' },
            { id: 'bash', name: 'Bash', desc: 'Command line scripting', img: 'Bash.png' },
            { id: 'c', name: 'C', desc: 'System programming', img: 'C.png' },
            { id: 'csharp', name: 'C#', desc: '.NET development', img: 'C%23.png' },
            { id: 'cpp', name: 'C++', desc: 'High-performance apps', img: 'C++.png' },
            { id: 'css', name: 'CSS', desc: 'Web styling', img: 'Css.png' },
            { id: 'go', name: 'Go', desc: 'Scalable cloud services', img: 'Go.png' },
            { id: 'html', name: 'HTML', desc: 'Web page structure', img: 'Html.png' },
            { id: 'java', name: 'Java', desc: 'Enterprise applications', img: 'Java.png' },
            { id: 'javascript', name: 'JavaScript', desc: 'Web interactivity', img: 'Javascript.png' },
            { id: 'kotlin', name: 'Kotlin', desc: 'Android development', img: 'Kotlin.png' },
            { id: 'php', name: 'PHP', desc: 'Server-side scripting', img: 'Php.png' },
            { id: 'python', name: 'Python', desc: 'Data science & AI', img: 'Python.png' },
            { id: 'r', name: 'R', desc: 'Statistical computing', img: 'R.png' },
            { id: 'rust', name: 'Rust', desc: 'Memory safety', img: 'Rust.png' },
            { id: 'swift', name: 'Swift', desc: 'iOS development', img: 'Swift.png' },
            { id: 'typescript', name: 'TypeScript', desc: 'Typed JavaScript', img: 'Typescrpt.png' },
            { id: 'zsh', name: 'Z Shell', desc: 'Extended shell', img: 'Z.png' },
            { id: 'custom', name: 'Other', desc: 'Non listed language', icon: '✨', isSpecial: true }
        ];

       const themes = [
  // Original 41 (slightly polished where needed)
  { id: 'default',     name: 'Midnight (Default)', start: '#1c1c1e', end: '#000000', accent: '#0a84ff' },
  { id: 'ocean',       name: 'Ocean Blue',         start: '#005f73', end: '#0a9396', accent: '#94d2bd' },
  { id: 'sunset',      name: 'Sunset Orange',      start: '#941b0c', end: '#bc3908', accent: '#f6aa1c' },
  { id: 'forest',      name: 'Forest Green',       start: '#1b4332', end: '#2d6a4f', accent: '#52b788' },
  { id: 'lavender',    name: 'Lavender Dream',  start: '#240046', end: '#3c096c', accent: '#c77dff' },
  { id: 'cherry',      name: 'Cherry Blossom',     start: '#590d22', end: '#800f2f', accent: '#ff6b9d' },
  { id: 'gold',        name: 'Royal Gold',         start: '#332900', end: '#4d3d00', accent: '#ffd700' },
  { id: 'neon',        name: 'Neon Cyber',         start: '#0d0d0d', end: '#1a1a1a', accent: '#00ff9f' },
  { id: 'slate',       name: 'Slate Minimal',      start: '#334155', end: '#475569', accent: '#cbd5e1' },
  { id: 'coffee',      name: 'Coffee',             start: '#4a3529', end: '#5c4739', accent: '#d4a373' },
  { id: 'dracula',     name: 'Dracula',            start: '#44475a', end: '#6272a4', accent: '#ff79c6' },
  { id: 'arctic',      name: 'Arctic Ice',         start: '#003f5c', end: '#2f4b7c', accent: '#a5f3fc' },
  { id: 'mint',        name: 'Fresh Mint',         start: '#164e44', end: '#065f46', accent: '#6ee7b7' },
  { id: 'matrix',      name: 'The Matrix',         start: '#001a00', end: '#003300', accent: '#39ff14' },
  { id: 'vaporwave',   name: 'Vaporwave',          start: '#5b2c6f', end: '#d60270', accent: '#00e5ff' },
  { id: 'ruby',        name: 'Ruby Red',           start: '#3d0000', end: '#9b2226', accent: '#ff6b6b' },
  { id: 'sapphire',    name: 'Sapphire Deep',      start: '#001233', end: '#002855', accent: '#4cc9f0' },
  { id: 'emerald',     name: 'Emerald City',       start: '#013a1a', end: '#014f25', accent: '#34d399' },
  { id: 'amethyst',    name: 'Amethyst Geode',     start: '#240046', end: '#5a189a', accent: '#e0aaff' },
  { id: 'tokyo',       name: 'Tokyo Night',        start: '#19002e', end: '#3a0ca3', accent: '#f72585' },
  { id: 'miami',       name: 'Miami Vice',       start: '#c71585', end: '#4b0082', accent: '#00ffff' },
  { id: 'nordic',      name: 'Nordic Frost',       start: '#2e3440', end: '#4c566a', accent: '#88c0d0' },
  { id: 'graphite',    name: 'Graphite',           start: '#212121', end: '#424242', accent: '#e0e0e0' },
  { id: 'sepia',       name: 'Old Sepia',          start: '#3e2723', end: '#5d4037', accent: '#d7ccc8' },
  { id: 'cotton',      name: 'Cotton Candy',       start: '#ffcbf2', end: '#a2d2ff', accent: '#1e293b', textColor: 'dark' },
  { id: 'cyber',       name: 'Cyber Yellow',       start: '#1a1a00', end: '#333300', accent: '#ffff00' },
  { id: 'bordeaux',    name: 'Bordeaux Wine',      start: '#2b0000', end: '#5c001e', accent: '#ff8fab' },
  { id: 'gunmetal',    name: 'Gunmetal',           start: '#263238', end: '#37474f', accent: '#b0bec5' },
  { id: 'sky',         name: 'Deep Sky',           start: '#0c4a6e', end: '#075985', accent: '#7dd3fc' },
  { id: 'rose',        name: 'Dusty Rose',         start: '#4a0404', end: '#7f1d1d', accent: '#fda4af' },
  { id: 'storm',       name: 'Stormy Night',       start: '#1f2937', end: '#374151', accent: '#fbbf24' },
  { id: 'moss',        name: 'Spanish Moss',       start: '#354f52', end: '#52796f', accent: '#cad2c5' },
  { id: 'pumpkin',     name: 'Spiced Pumpkin',     start: '#7c2d12', end: '#9a3412', accent: '#fdba74' },
  { id: 'void',        name: 'The Void',           start: '#000000', end: '#0a0a0a', accent: '#ffffff' },
  { id: 'indigo',      name: 'Indigo Flow',        start: '#312e81', end: '#4338ca', accent: '#a5b4fc' },
  { id: 'terminal',    name: 'Retro Terminal',     start: '#1a1a1a', end: '#0f0f0f', accent: '#39ff14' },
  { id: 'coral',        name: 'Living Coral',       start: '#7f1d1d', end: '#991b1b', accent: '#ff7f50' },
  { id: 'glacier',     name: 'Glacier Blue',       start: '#082f49', end: '#0369a1', accent: '#bae6fd' },
  { id: 'plum',        name: 'Sugar Plum',         start: '#4a044e', end: '#701a75', accent: '#f0abfc' },
  { id: 'sand',        name: 'Desert Sand',         start: '#451a03', end: '#78350f', accent: '#fcd34d' },
  { id: 'teal',        name: 'Teal Depth',         start: '#042f2e', end: '#115e59', accent: '#5eead4' },
  { id: 'blueprint',   name: 'Blueprint',          start: '#1e3a8a', end: '#1d4ed8', accent: '#ffffff' },

  // 50 NEW — ALL 100% READABLE (light themes have dark text)
  { id: 'aurora',      name: 'Aurora Borealis',    start: '#0b132b', end: '#1c2a48', accent: '#00ff9f' },
  { id: 'peacock',     name: 'Peacock Feathers',   start: '#0a3d62', end: '#134e4a', accent: '#00f5d4' },
  { id: 'bloodorange', name: 'Blood Orange',       start: '#3d0000', end: '#991b00', accent: '#ff8c42' },
  { id: 'frostbite',   name: 'Frostbite',          start: '#e0f2fe', end: '#bae6fd', accent: '#0c4a6e', textColor: 'dark' },
  { id: 'obsidian',    name: 'Polished Obsidian',  start: '#0c0a09', end: '#1c1917', accent: '#ff4d78' },
  { id: 'limepunch',   name: 'Lime Punch',         start: '#1a2e05', end: '#2d5a0a', accent: '#a3e635' },
  { id: 'royalpurple', name: 'Royal Velvet',       start: '#240046', end: '#5a189a', accent: '#e0aaff' },
  { id: 'copper',      name: 'Burnished Copper',   start: '#3c1f0c', end: '#6b3a1a', accent: '#ff9f1c' },
  { id: 'abyss',       name: 'Deep Abyss',         start: '#000814', end: '#001d3d', accent: '#ffc300' },
  { id: 'flamingo',    name: 'Flamingo Pink',      start: '#78001a', end: '#c71585', accent: '#ff8fab' },
  { id: 'olive',       name: 'Mediterranean Olive',start: '#283618', end: '#3d4f24', accent: '#b5e48c' },
  { id: 'crimson',     name: 'Crimson Tide',       start: '#450000', end: '#8b0000', accent: '#ff6b6b' },
  { id: 'turquoise',   name: 'Caribbean Turquoise',start: '#014f4f', end: '#016666', accent: '#99f6e4' },
  { id: 'charcoal',    name: 'Charcoal Ember',     start: '#1e1e1e', end: '#2d2d2d', accent: '#ff453a' },
  { id: 'lilac',       name: 'Spring Lilac',       start: '#6b5b95', end: '#8876b3', accent: '#e0c3fc' },
  { id: 'electric',    name: 'Electric Violet',    start: '#1e0038', end: '#3d0075', accent: '#c77dff' },
  { id: 'maroon',      name: 'Vintage Maroon',     start: '#3f0000', end: '#720026', accent: '#ff6b6b' },
  { id: 'seaglass',    name: 'Sea Glass',          start: '#ccfbf1', end: '#99f6e4', accent: '#134e4a', textColor: 'dark' },
  { id: 'amber',       name: 'Golden Amber',       start: '#4a2c00', end: '#783c00', accent: '#ffbf00' },
  { id: 'midnightblue',name: 'Midnight Sapphire',  start: '#03071e', end: '#370617', accent: '#48cae4' },
  { id: 'matcha',      name: 'Matcha Latte',       start: '#3a5a40', end: '#588157', accent: '#d4e6b8' },
  { id: 'onyx',        name: 'Onyx Shine',         start: '#0f0f0f', end: '#1f1f1f', accent: '#00d4ff' },
  { id: 'orchid',      name: 'Wild Orchid',        start: '#660066', end: '#990099', accent: '#ff99ff' },
  { id: 'rust',        name: 'Rusted Iron',        start: '#4a1e04', end: '#7f3300', accent: '#ff6b35' },
  { id: 'aquamarine',  name: 'Aquamarine Glow',    start: '#007f7f', end: '#009999', accent: '#66ffff' },
  { id: 'slateblue',   name: 'Slate Blue',         start: '#2b2d42', end: '#3d4060', accent: '#a0a9e6' },
  { id: 'tangerine',   name: 'Tangerine Dream',    start: '#992b00', end: '#cc3d00', accent: '#ff8c38' },
  { id: 'evergreen',   name: 'Evergreen Forest',    start: '#0a3d2a', end: '#1a5c42', accent: '#34d399' },
  { id: 'wine',        name: 'Mulled Wine',        start: '#420420', end: '#6b0a3d', accent: '#f72585' },
  { id: 'cyanide',     name: 'Toxic Cyanide',      start: '#001a1a', end: '#003333', accent: '#00f5d4' },
  { id: 'mauve',       name: 'Dusty Mauve',        start: '#5c2a3d', end: '#8a4a6b', accent: '#e8b4d9' },
  { id: 'bronze',      name: 'Ancient Bronze',      start: '#4a2e0a', end: '#7d4e1a', accent: '#e6b86e' },
  { id: 'bubblegum',   name: 'Bubblegum Pop',      start: '#ffb3d9', end: '#ff99c8', accent: '#2d1b3a' },   // dark accent
  { id: 'deepsea',     name: 'Deep Sea Trench',    start: '#000033', end: '#000066', accent: '#00d0ff' },
  { id: 'hazelnut',    name: 'Toasted Hazelnut',   start: '#5c3d2e', end: '#8b5a3c', accent: '#e6b8a2' },
  { id: 'fuchsia',     name: 'Hot Fuchsia',        start: '#9d0b54', end: '#c71585', accent: '#ff66ff' },
  { id: 'ivory',       name: 'Ivory Tower',        start: '#f5f5dc', end: '#e8e8d0', accent: '#3a3a2a', textColor: 'dark' },
  { id: 'scarlet',     name: 'Scarlet Letter',     start: '#800000', end: '#a41313', accent: '#ff6b6b' },
  { id: 'lagoon',      name: 'Tropical Lagoon',     start: '#006d77', end: '#0099aa', accent: '#83c5be' },
  { id: 'mystic',      name: 'Mystic Purple',      start: '#2e1a47', end: '#4d2a7a', accent: '#c8b6ff' },
  { id: 'citrine',    name: 'Citrine Crystal',     start: '#5c4400', end: '#8b6600', accent: '#fff350' },
  { id: 'violet',      name: 'Imperial Violet',     start: '#3f0071', end: '#7209b7', accent: '#e0aaff' },
  { id: 'pine',        name: 'Pine Needle',         start: '#173019', end: '#254d28', accent: '#76b947' },
  { id: 'cerulean',    name: 'Cerulean Sky',       start: '#1e40af', end: '#2563eb', accent: '#93c5fd' },
  { id: 'garnet',      name: 'Garnet Gem',         start: '#5e0a1a', end: '#8b1129', accent: '#ff6b6b' },
  { id: 'honey',       name: 'Wild Honey',          start: '#783900', end: '#a0522d', accent: '#ffdb58' },
  { id: 'phantom',     name: 'Phantom Gray',        start: '#1a1a2e', end: '#16213e', accent: '#94a3b8' },
  { id: 'vermillion',  name: 'Vermillion Fire',     start: '#a63d00', end: '#d94f00', accent: '#ff8c38' },
  { id: 'pearl',       name: 'Moonlit Pearl',      start: '#f8f9fa', end: '#e9ecef', accent: '#212529', textColor: 'dark' },    // almost black accent
  // 92–100 — Brand new, beautiful & 100% readable
  { id: 'dawn',        name: 'Soft Dawn',          start: '#ffe4e6', end: '#fecaca', accent: '#991b1b', textColor: 'dark' },
  { id: 'twilight',    name: 'Twilight Haze',      start: '#1e1b4b', end: '#312e81', accent: '#c4b5fd' },
  { id: 'sherbet',     name: 'Lemon Sherbet',      start: '#fff7ed', end: '#fed7aa', accent: '#9a3412', textColor: 'dark' },
  { id: 'midnightrose',name: 'Midnight Rose',      start: '#4c1d95', end: '#7c3aed', accent: '#f0abfc' },
  { id: 'cantaloupe',  name: 'Ripe Cantaloupe',    start: '#ffedd5', end: '#fdba74', accent: '#7c2d12', textColor: 'dark' },
  { id: 'obsidianfire',name: 'Obsidian Fire',      start: '#0c0a09', end: '#1a0d00', accent: '#ff6b35' },
  { id: 'mintcream',   name: 'Mint Cream',         start: '#f0fdfa', end: '#ccfbf1', accent: '#115e59', textColor: 'dark' },
  { id: 'bloodmoon',   name: 'Blood Moon',         start: '#450a0a', end: '#7f1d1d', accent: '#fca5a5' },
  { id: 'polar',       name: 'Polar Lights',       start: '#ecfeff', end: '#cffafe', accent: '#155e75', textColor: 'dark' },  // very light → deep cyan accent
];
        
        let unlockedThemes = ['default'];
        let isPremium = false;
        let currentPlan = null;
        let linesRemaining = 250;
        let selectedFaculty = null;
        
        // Enrollment State
        let isEnrolled = localStorage.getItem('isEnrolled') === 'true';
        let enrolledFaculty = localStorage.getItem('enrolledFaculty') || null;
        let currentWeek = 1; // Locked to week 1 for now

// --- Minimalist Logic: Count Upwards ---

function updateLinesDisplay() {
    // 1. Calculate Used Lines
    let linesUsed = maxLines - linesRemaining;
    
    // 2. Calculate Percentage Filled (0% at start, 100% when out of lines)
    let percentage = Math.max(0, Math.min(100, (linesUsed / maxLines) * 100));
    
    const bar = document.getElementById('linesProgressBar');

    if (bar) {
        // Set Width (Fills up as you use lines)
        bar.style.width = `${percentage}%`;

        // Update Colors
        bar.className = 'usage-progress-fill'; // Reset classes
        
        if (linesRemaining <= 0) {
            bar.classList.add('full'); // Turn red when out of lines
        } 
    }
}

function checkUpgradeStatus() {
    // Opens premium modal if clicked
    showPremiumModal();
    if (linesRemaining <= 0) {
        showAlert("⚠️ You are out of lines. Upgrade to continue.", true);
    }
}

function activatePremium(planName, addedLines, isRestore = false) {
    // 1. Auth Gate
    if (!userProfile && !isRestore) {
        closePremiumModal();
        openSigninModal();
        return; 
    }
    isPremium = true;
    currentPlan = planName;
    
    // Set max lines based on plan
    if (planName.includes('Boost')) maxLines = 1000;
    else if (planName.includes('Pro')) maxLines = 5000;
    else if (planName.includes('Super')) maxLines = 10000;
    else if (planName.includes('Demo')) maxLines = 99999;

    // Premium users get all themes - no need to modify unlockedThemes array
    // The populateThemeGrid() function will check isPremium status
    
    // UNLOCK ALL THEMES
    unlockedThemes = themes.map(t => t.id);
    localStorage.setItem('unlockedThemes', JSON.stringify(unlockedThemes));
    console.log('Themes unlocked:', unlockedThemes.length); // Debug log
    
    // Only reset lines if this is a new activation, not a page reload
    if (!isRestore) {
        linesRemaining = maxLines; 
        localStorage.setItem('savedPlan', planName);
        localStorage.setItem('savedLines', linesRemaining);
        localStorage.setItem('isPremium', 'true'); // Save premium status
        showAlert(`🌟 ${planName} activated! All themes unlocked!`, false, 4000);
    }
    
    updateLinesDisplay();
    updatePremiumModalUI();
    populateThemeGrid(); // Refresh grid to remove locks
    if (!isRestore) closePremiumModal();
}

// Initialize bar on load
document.addEventListener('DOMContentLoaded', () => {
    updateLinesDisplay();
});

// Restore unlocked themes
const savedUnlockedThemes = localStorage.getItem('unlockedThemes');
if (savedUnlockedThemes) {
    unlockedThemes = JSON.parse(savedUnlockedThemes);
}

        function populateThemeGrid() {
    const grid = document.getElementById('themeGrid');
    grid.innerHTML = '';
    themes.forEach(theme => {
        // If premium, all themes are unlocked. If free, only default is unlocked.
        const isLocked = !isPremium && theme.id !== 'default';
                const wrapper = document.createElement('div');
                wrapper.className = 'theme-wrapper';
                wrapper.title = theme.name;
                wrapper.onclick = () => {
                    if (!isLocked) { applyTheme(theme.id); } 
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

        function applyTheme(themeId) {
    const theme = themes.find(t => t.id === themeId);
    if (!theme) return;
    
    // 1. SAVE TO STORAGE
    localStorage.setItem('savedTheme', themeId); 

    const root = document.documentElement;
    root.style.backgroundColor = ''; // Clear inline style from initial script
    
    // 2. UPDATE THEME-COLOR META TAG (for mobile status bar)
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
        metaThemeColor = document.createElement('meta');
        metaThemeColor.name = 'theme-color';
        document.head.appendChild(metaThemeColor);
    }
    
    const setTextColor = (color) => {
        if (color === 'dark') {
            root.style.setProperty('--text-primary', '#1D1D1F');
            root.style.setProperty('--text-secondary', 'rgba(0, 0, 0, 0.6)');
            root.style.setProperty('--text-tertiary', 'rgba(0, 0, 0, 0.3)');
            root.style.setProperty('--border-glass', 'rgba(0, 0, 0, 0.1)'); 
        } else {
            root.style.removeProperty('--text-primary');
            root.style.removeProperty('--text-secondary');
            root.style.removeProperty('--text-tertiary');
            root.style.removeProperty('--border-glass');
        }
    };

    if (themeId === 'default') {
        root.style.removeProperty('--bg-app');
        root.style.removeProperty('--bg-gradient-start');
        root.style.removeProperty('--bg-gradient-end');
        root.style.removeProperty('--bg-glass');
        root.style.removeProperty('--accent-primary');
        root.style.removeProperty('--accent-highlight');
        setTextColor('light');
        // Set default theme color for status bar
        metaThemeColor.content = '#1c1c1e';
    } else {
        root.style.setProperty('--bg-app', theme.start);
        root.style.setProperty('--bg-gradient-start', theme.start);
        root.style.setProperty('--bg-gradient-end', theme.end);
        root.style.setProperty('--bg-glass', `${theme.start}BF`);
        root.style.setProperty('--accent-primary', theme.accent);
        root.style.setProperty('--accent-highlight', theme.accent);
        
        setTextColor(theme.textColor || 'light');
        // Set theme color for status bar to match gradient start
        metaThemeColor.content = theme.start;
    }
    closeThemeStoreModal();
}

        window.alertTimeout = null;
        function showAlert(message, isError = false, duration = 5000) {
            const successMsg = document.getElementById('successMessage');
            const errorMsg = document.getElementById('errorMessage');
            const alertBox = isError ? errorMsg : successMsg;
            const otherBox = isError ? successMsg : errorMsg;
            otherBox.classList.remove('active');
            const textSpan = alertBox.querySelector('.alert-text');
            if (textSpan) textSpan.textContent = message;
            alertBox.classList.add('active');
            if (window.alertTimeout) clearTimeout(window.alertTimeout);
            if (duration > 0) { window.alertTimeout = setTimeout(() => { alertBox.classList.remove('active'); }, duration); }
        }

        function unlockAllThemes() { closeThemeStoreModal(); showPremiumModal(); }

       
function openSigninModal() {
    document.getElementById('signinModal').classList.add('active');
}

function closeSigninModal() {
    document.getElementById('signinModal').classList.remove('active');
}

function triggerGoogleLogin() {
    if (tokenClient) {
        tokenClient.requestAccessToken();
        // The modal will be closed by handleTokenResponse success
    } else {
        console.error("Google Token Client not initialized");
    }
}
// Update UI to target the correct button IDs (btn-Pro)
// Function to calculate and update bar widths dynamically
function updatePlanVisuals() {
    // 1. Determine Current Capacity based on plan name
    let currentCap = 250; // Default Free
    if (isPremium && currentPlan) {
        if (currentPlan.includes('Boost')) currentCap = 1000;
        else if (currentPlan.includes('Pro')) currentCap = 5000;
        else if (currentPlan.includes('Super')) currentCap = 10000;
    }

    const maxScale = 10000; // The Super plan is 100% width

    // 2. Define the Plans to loop through
    const plans = [
        { id: 'boost', cap: 1000 },
        { id: 'pro',   cap: 5000 },
        { id: 'super', cap: 10000 }
    ];

    // 3. Loop and update each card
    plans.forEach(p => {
        const baseEl = document.getElementById(`p-bar-${p.id}-base`);
        const extraEl = document.getElementById(`p-bar-${p.id}-extra`);
        
        if (!baseEl || !extraEl) return;

        // Reset styles
        extraEl.classList.remove('lv-bar-loss');

        if (currentCap < p.cap) {
            // SCENARIO: UPGRADE (Show Blue Current + Green Gain)
            const bluePct = (currentCap / maxScale) * 100;
            const greenPct = ((p.cap - currentCap) / maxScale) * 100;
            
            baseEl.style.width = `${bluePct}%`;
            extraEl.style.width = `${greenPct}%`;
        } 
        else if (currentCap > p.cap) {
            // SCENARIO: DOWNGRADE (Show Blue Target + Red Loss)
            // Example: You have 5000, target is 1000.
            // Blue = 1000 (What you keep). Red = 4000 (What you lose).
            const bluePct = (p.cap / maxScale) * 100;
            const redPct = ((currentCap - p.cap) / maxScale) * 100;

            baseEl.style.width = `${bluePct}%`;
            extraEl.style.width = `${redPct}%`;
            extraEl.classList.add('lv-bar-loss'); // Turn red
        } 
        else {
            // SCENARIO: CURRENT PLAN (Show only Blue)
            const bluePct = (currentCap / maxScale) * 100;
            baseEl.style.width = `${bluePct}%`;
            extraEl.style.width = `0%`; // No gain or loss
        }
    });
}

// Main Update UI Function
function updatePremiumModalUI() {
    // 1. Run the visual bar update
    updatePlanVisuals();

    // 2. Button Logic (Enable/Disable based on plan)
    const btnShy = document.getElementById('btn-shy');
    const btnPro = document.getElementById('btn-Pro');
    const btnSuper = document.getElementById('btn-super');

    // Reset buttons
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

        function downgradeToFree() {
    isPremium = false; 
    currentPlan = null; 
    unlockedThemes = ['default'];
    localStorage.removeItem('unlockedThemes'); // Clear saved themes
    localStorage.removeItem('savedPlan');
    localStorage.removeItem('savedLines');
    applyTheme('default'); 
    populateThemeGrid(); 
    updatePremiumModalUI();
            const premiumBtn = document.getElementById('sidebarPremiumBtn');
            if (premiumBtn) premiumBtn.textContent = 'Upgrade';
            closePremiumModal();
        }

        function demoUnlockThemes() { activatePremium('Demo Mode', 99999); }
        document.addEventListener('keydown', (e) => {
             if (e.shiftKey && e.altKey && e.key.toLowerCase() === 'd') {
                 const demoBtn = document.getElementById('demoThemesBtn');
                 demoBtn.style.opacity = '1'; demoBtn.style.pointerEvents = 'auto';
             }
        });

        function populateLanguageGrid() {
            const grid = document.getElementById('languageGrid');
            grid.innerHTML = '';
            languages.forEach(lang => {
                const card = document.createElement('div');
                card.className = `language-card ${lang.isSpecial ? 'special-card' : ''}`;
                card.onclick = () => selectLanguage(lang.id, lang.name);
                card.dataset.name = lang.name.toLowerCase();
                let iconContent = lang.img ? `<img src="images/${lang.img}" alt="${lang.name}" onerror="this.parentNode.innerText='${lang.name[0]}' ">` : (lang.icon || lang.name[0]);
                card.innerHTML = `<div class="lang-icon">${iconContent}</div><div class="lang-info"><div class="lang-name">${lang.name}</div><div class="lang-desc">${lang.desc}</div></div>`;
                grid.appendChild(card);
            });
        }

        function filterLanguages() {
            const query = document.getElementById('languageSearch').value.toLowerCase();
            document.querySelectorAll('.language-card').forEach(card => {
                card.style.display = card.dataset.name.includes(query) ? 'flex' : 'none';
            });
        }

        function selectLanguage(id, name) {
            let select = document.getElementById('languageSelect');
            if (!select.querySelector(`option[value="${id}"]`)) {
                const opt = document.createElement('option');
                opt.value = id; opt.textContent = name; select.appendChild(opt);
            }
            select.value = id; select.dispatchEvent(new Event('change'));
            document.getElementById('currentLanguageLabel').textContent = name;
            document.getElementById('languageTrigger').classList.add('active-lang');
            closeLanguageModal();
            const customInput = document.getElementById('customLanguageInput');
            if (id === 'custom') { customInput.classList.remove('hidden'); customInput.focus(); } else { customInput.classList.add('hidden'); }
            checkSelections();
        }

        function openLanguageModal() { populateLanguageGrid(); document.getElementById('languageModal').classList.add('active'); setTimeout(() => document.getElementById('languageSearch').focus(), 100); }
        function closeLanguageModal() { document.getElementById('languageModal').classList.remove('active'); }
        function showStoreModal() { document.getElementById('storeModal').classList.add('active'); loadChallengeStore(); updateToggleButtonVisibility(); }
        function closeStoreModal() { document.getElementById('storeModal').classList.remove('active'); updateToggleButtonVisibility(); }
        function showThemeStoreModal() { document.getElementById('themeStoreModal').classList.add('active'); updateToggleButtonVisibility(); }
        function closeThemeStoreModal() { document.getElementById('themeStoreModal').classList.remove('active'); updateToggleButtonVisibility(); }
        function showPremiumModal() { document.getElementById('premiumModal').classList.add('active'); updateToggleButtonVisibility(); }
        function closePremiumModal() { document.getElementById('premiumModal').classList.remove('active'); updateToggleButtonVisibility(); }

        // University Logic
        function showUniversityModal() {
            document.getElementById('universityModal').classList.add('active');
            renderUniversityUI();
            updateToggleButtonVisibility();
        }
        function closeUniversityModal() { document.getElementById('universityModal').classList.remove('active'); updateToggleButtonVisibility(); }
        
        function renderUniversityUI() {
            const grid = document.getElementById('facultyGrid');
            grid.innerHTML = '';
            
            if (typeof schoolData === 'undefined') { console.error('Syllabus data not loaded!'); return; }

            Object.keys(schoolData).forEach(key => {
                const school = schoolData[key];
                const card = document.createElement('div');
                card.className = 'faculty-card';
                if (selectedFaculty === key) card.classList.add('selected');
                
                card.onclick = (e) => {
                    if (e.target.closest('.syllabus-box')) return;
                    document.querySelectorAll('.faculty-card').forEach(c => c.classList.remove('selected'));
                    card.classList.add('selected');
                    selectedFaculty = key;
                    document.getElementById('selectedFacultyName').textContent = school.title;
                };

                const imgSrc = `${key}.png`; 
                let tagsHtml = school.tags.map(tag => `<span class="program-tag">${tag}</span>`).join('');
                let syllabusHtml = school.syllabus.map(item => `<li class="syllabus-item">${item}</li>`).join('');

                card.innerHTML = `
                    <div class="faculty-header">
                        <img src="${imgSrc}" class="faculty-icon" onerror="this.style.display='none'">
                        <div class="faculty-info">
                            <div class="faculty-title">${school.title}</div>
                            <div class="faculty-desc">${school.description}</div>
                        </div>
                    </div>
                    <div class="syllabus-box protected-content" oncopy="return false" oncontextmenu="return false"><div class="syllabus-title">Curriculum</div><ul class="syllabus-list">${syllabusHtml}</ul></div>
                    <div class="program-tags">${tagsHtml}</div>
                `;
                grid.appendChild(card);
            });
        }

        // New Admission & Portal Logic
        function checkEnrollmentAndOpen() {
            if (isEnrolled && enrolledFaculty) {
                openStudentPortal();
            } else {
                showUniversityModal();
            }
        }

        function handleAdmissionSubmit(e) {
            e.preventDefault();
            if (!selectedFaculty) {
                showAlert('Please select a faculty first.', true);
                return;
            }
            closeUniversityModal();
            // Open Payment Modal
            document.getElementById('paymentModal').classList.add('active');
            updateToggleButtonVisibility();
        }

        function closePaymentModal() {
            document.getElementById('paymentModal').classList.remove('active');
            updateToggleButtonVisibility();
        }

        function processPayment() {
            // Mock Processing
            const btn = document.querySelector('#paymentModal button');
            const originalText = btn.textContent;
            btn.textContent = "Processing...";
            btn.disabled = true;

            setTimeout(() => {
                closePaymentModal();
                btn.textContent = originalText;
                btn.disabled = false;
                
                // Enrollment Success
                isEnrolled = true;
                enrolledFaculty = selectedFaculty;
                localStorage.setItem('isEnrolled', 'true');
                localStorage.setItem('enrolledFaculty', enrolledFaculty);
                
                showAlert('Payment successful! Welcome to the University.', false, 5000);
                openStudentPortal();
            }, 1500);
        }

        function openStudentPortal() {
            const portal = document.getElementById('studentPortal');
            portal.classList.add('active');
            
            // Set Faculty Name
            const facultyName = schoolData[enrolledFaculty]?.title || "University";
            document.getElementById('enrolledFacultyName').textContent = `Enrolled: ${facultyName}`;
            
            renderWeeks();
            loadWeekContent(currentWeek);
        }

        function closeStudentPortal() {
            document.getElementById('studentPortal').classList.remove('active');
        }

        function renderWeeks() {
            const sidebar = document.getElementById('weeksSidebar');
            sidebar.innerHTML = '';
            
            for (let i = 1; i <= 52; i++) {
                const isLocked = i > currentWeek;
                const div = document.createElement('div');
                div.className = `week-card ${i === currentWeek ? 'active' : ''} ${isLocked ? 'locked' : ''}`;
                
                let icon = isLocked ? 
                    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>` : 
                    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
                
                if (i === currentWeek) {
                    icon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;
                }

                div.innerHTML = `
                    <div class="week-info">
                        <div class="week-num">Week ${i}</div>
                        <div class="week-status">${isLocked ? 'Locked' : (i === currentWeek ? 'In Progress' : 'Completed')}</div>
                    </div>
                    ${icon}
                `;
                
                if (!isLocked) {
                    div.onclick = () => {
                        document.querySelectorAll('.week-card').forEach(c => c.classList.remove('active'));
                        div.classList.add('active');
                        loadWeekContent(i);
                    };
                }
                
                sidebar.appendChild(div);
            }
        }

        function loadWeekContent(weekNum) {
            document.getElementById('viewWeekTitle').textContent = `Week ${weekNum}`;
            
            // Progress Bar Update
            const progressPercent = (weekNum / 52) * 100;
            document.getElementById('portalProgressBar').style.width = `${progressPercent}%`;
            
            // Mock descriptions based on syllabus
            let desc = "Focus on completing your weekly projects and reviewing lecture notes.";
            if (schoolData[enrolledFaculty] && schoolData[enrolledFaculty].syllabus[weekNum-1]) {
                desc = schoolData[enrolledFaculty].syllabus[weekNum-1];
            }
            document.getElementById('viewWeekDesc').textContent = desc;
            
            // Update Time-Locked Resources
            updateTimeLocks(weekNum);
        }
        
        function updateTimeLocks(weekNum) {
            // DEBUG MODE: Set 'mockDay' to test states.
            // 1 = Monday (Both Locked)
            // 3 = Wednesday (P&L Unlocked, Project Locked)
            // 5 = Friday (Both Unlocked)
            const mockDay = 1; // FOR DEMO: Set to 1 (Monday) to visually LOCK everything.
            
            const day = mockDay; // In production use: new Date().getDay();
            
            // P&L Challenge: Locked until Wednesday (Day 3)
            const pnlCard = document.getElementById('pnlCard');
            const pnlLock = document.getElementById('pnlLock');
            if (day < 3) {
                pnlCard.classList.add('locked');
                pnlLock.style.display = 'block';
                pnlCard.onclick = () => showAlert('P&L Challenges unlock every Wednesday.', true);
            } else {
                pnlCard.classList.remove('locked');
                pnlLock.style.display = 'none';
                pnlCard.onclick = openPnLChallenge;
            }
            
            // Weekly Project: Open only on Fridays (Day 5)
            const projectCard = document.getElementById('projectCard');
            const projectLock = document.getElementById('projectLock');
            if (day !== 5) {
                projectCard.classList.add('locked');
                projectLock.style.display = 'block';
                projectCard.onclick = () => showAlert('Weekly Projects are only open on Fridays for 24 hours.', true);
            } else {
                projectCard.classList.remove('locked');
                projectLock.style.display = 'none';
                projectCard.onclick = openWeeklyProject;
            }
            
            // Notes Card Update with Dynamic Path
            const notesCard = document.getElementById('notesCard');
            // We store the weekNum in a dataset attribute to access it in the click handler
            notesCard.dataset.week = weekNum;
        }
        
        function openClassNotes() {
            const weekNum = document.getElementById('notesCard').dataset.week || 1;
            // Map full faculty name to short code if needed, but here we used keys 'media', 'business', 'coding'
            // enrolledFaculty variable holds the key (e.g., 'media')
            const pdfPath = `university/faculty/${enrolledFaculty}/${enrolledFaculty}week${weekNum}.pdf`;
            
            // Check if we can actually open it (in a real app, you'd check existence)
            // For now, we simulate opening it
            console.log(`Opening PDF: ${pdfPath}`);
            window.open(pdfPath, '_blank');
        }
        
        function openPnLChallenge() {
            alert('Starting Weekly P&L Challenge...');
        }
        
        function openWeeklyProject() {
            alert('Opening Weekly Project Environment...');
        }

        const viewerObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.target.id === 'challengeViewer' && mutation.attributeName === 'class') {
                    const isNowActive = mutation.target.classList.contains('active');
                    document.getElementById('mainContentArea').classList.toggle('has-viewer', isNowActive);
                }
            });
        });
        viewerObserver.observe(document.getElementById('challengeViewer'), { attributes: true });

        function closeViewer() {
            document.getElementById('challengeViewer').classList.remove('active');
            document.getElementById('creatorPanel').style.display = 'flex';
        }
        
        function toggleMode() {
            const mode = document.getElementById('modeSelect').value;
            const codeTools = document.getElementById('codeTools');
            
            if (mode === 'code') {
                codeTools.style.display = 'flex';
                checkSelections();
            } else {
                codeTools.style.display = 'none';
                // For general mode, we enable the button
                document.getElementById('generateBtn').disabled = false;
            }
        }

        function checkSelections() {
            const questionInput = document.getElementById('questionInput').value.trim();
            const mode = document.getElementById('modeSelect').value;
            const generateBtn = document.getElementById('generateBtn');

            const hasInput = questionInput.length > 0;

            if (mode === 'general') {
                generateBtn.disabled = !hasInput;
                return;
            }

            // Code mode logic
            const language = document.getElementById('languageSelect').value;
            const difficulty = document.getElementById('difficultySelect').value;
            const customLanguage = document.getElementById('customLanguageInput').value;

            let isLanguageValid = language !== "";
            if (language === 'custom') isLanguageValid = customLanguage.trim() !== "";
            const isDifficultyValid = difficulty !== "";

            generateBtn.disabled = !(hasInput && isLanguageValid && isDifficultyValid);
        }

        document.addEventListener('DOMContentLoaded', () => {
             populateThemeGrid();
             updatelinesDisplay();
             updatePremiumModalUI();
             loadChallengeStore();
             
             // Check URL params for auto-open
             const urlParams = new URLSearchParams(window.location.search);
             if (urlParams.get('action') === 'university') {
                 checkEnrollmentAndOpen();
             }
             
             document.querySelectorAll('.modal').forEach(modal => {
                 modal.addEventListener('click', (e) => {
                     if (e.target === modal) {
                         modal.classList.remove('active');
                         updateToggleButtonVisibility();
                     }
                 });
             });
             
// Mobile: Tap main content or tabs to dismiss sidebar
if (window.innerWidth <= 768) {
    document.addEventListener('click', (e) => {
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');
        const toggleBtn = document.querySelector('.toggle-sidebar-btn');
        
        // Check if sidebar is open
        if (sidebar && !sidebar.classList.contains('hidden')) {
            // Check if click is outside sidebar AND not on toggle button
            if (!sidebar.contains(e.target) && 
                !toggleBtn?.contains(e.target) &&
                !document.querySelector('.modal.active')) {
                toggleSidebar();
            }
        }
    });
}
             
             // Initial check for button state
             checkSelections();
        });
        
        // --- CONTENT PROTECTION LOGIC ---
        window.addEventListener('blur', () => { document.querySelectorAll('.protected-content').forEach(el => { el.classList.add('privacy-blur'); }); });
        window.addEventListener('focus', () => { document.querySelectorAll('.protected-content').forEach(el => { el.classList.remove('privacy-blur'); }); });
        document.addEventListener('keyup', (e) => {
            if (e.key === 'PrintScreen') {
                const elements = document.querySelectorAll('.protected-content');
                elements.forEach(el => el.classList.add('privacy-blur'));
                alert('Screenshots are not permitted for curriculum content.');
                setTimeout(() => { elements.forEach(el => el.classList.remove('privacy-blur')); }, 2000);
            }
        });

        function updateToggleButtonVisibility() {
            const btn = document.getElementById('toggleSidebarBtn');
            const anyModalActive = document.querySelector('.modal.active');
            if (window.innerWidth <= 768 && anyModalActive) { btn.classList.add('hide-on-modal'); } else { btn.classList.remove('hide-on-modal'); }
        }

        window.toggleSidebar = () => {
            const sidebar = document.querySelector('.sidebar');
            const btn = document.getElementById('toggleSidebarBtn');
            sidebar.classList.toggle('hidden');
            btn.classList.toggle('collapsed');
            if (window.innerWidth <= 768 && !sidebar.classList.contains('hidden')) {
                setTimeout(() => {
                    const mainContent = document.querySelector('.main-content');
                    if (mainContent && !mainContent.dataset.sidebarTapListener) {
                        mainContent.dataset.sidebarTapListener = 'true';
                    }
                }, 100);
            }
        };
        
        function loadChallengeStore() {
            const sharedChallenges = JSON.parse(localStorage.getItem('sharedChallenges') || '[]');
            const grid = document.getElementById('challengeStoreGrid');
            const noChals = document.getElementById('noSharedChallenges');
            if (sharedChallenges.length === 0) { grid.style.display = 'none'; noChals.style.display = 'block'; return; }
            grid.style.display = 'grid'; noChals.style.display = 'none'; grid.innerHTML = '';
            
            sharedChallenges.reverse().forEach((challenge, index) => {
                const card = document.createElement('div');
                card.style.cssText = `background: var(--bg-glass); backdrop-filter: blur(20px); border: 1px solid var(--border-glass); border-radius: 16px; padding: 20px; display: flex; flex-direction: column; gap: 12px; transition: all 0.3s ease; cursor: pointer;`;
                card.onmouseover = () => { card.style.borderColor = 'var(--accent-primary)'; card.style.transform = 'translateY(-4px)'; card.style.boxShadow = '0 10px 30px rgba(10, 132, 255, 0.3)'; };
                card.onmouseout = () => { card.style.borderColor = 'var(--border-glass)'; card.style.transform = 'translateY(0)'; card.style.boxShadow = 'none'; };
                const title = document.createElement('div');
                title.style.cssText = 'font-weight: 600; font-size: 1.1rem; color: var(--text-primary);'; title.textContent = challenge.title;
                const meta = document.createElement('div');
                meta.style.cssText = 'display: flex; gap: 12px; font-size: 0.85rem; color: var(--text-secondary);';
                meta.innerHTML = `<span>${challenge.language}</span><span>•</span><span>${challenge.difficulty}</span><span>•</span><span>${challenge.lines} lines</span>`;
                const date = document.createElement('div');
                date.style.cssText = 'font-size: 0.75rem; color: var(--text-tertiary);';
                const shareDate = new Date(challenge.sharedAt); date.textContent = `Shared ${shareDate.toLocaleDateString()}`;
                const playBtn = document.createElement('button');
                playBtn.className = 'minimal-btn'; playBtn.style.cssText = 'width: 100%; justify-content: center; margin-top: auto; background: var(--accent-primary); color: white;';
                playBtn.textContent = 'Play Challenge';
                playBtn.onclick = (e) => { e.stopPropagation(); loadSharedChallenge(challenge); };
                card.appendChild(title); card.appendChild(meta); card.appendChild(date); card.appendChild(playBtn);
                grid.appendChild(card);
            });
        }
        
        function loadSharedChallenge(challenge) {
            closeStoreModal();
            const challengeEntry = { id: challenge.id, title: challenge.title, question: challenge.question, language: challenge.language, difficulty: challenge.difficulty, challenge: challenge.challengeData, timestamp: challenge.sharedAt, isShared: true };
            loadChallenge(challengeEntry);
        }
        
        window.shareCurrentChallenge = function() {
            if (!currentChallenge) { alert('No challenge to share!'); return; }
            const shareId = 'ch_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            const sharedChallenges = JSON.parse(localStorage.getItem('sharedChallenges') || '[]');
            const sharedChallenge = { id: shareId, title: currentChallenge.title || currentChallenge.question.substring(0, 50), question: currentChallenge.question, language: currentChallenge.language, difficulty: currentChallenge.difficulty, challengeData: currentChallenge.challenge, lines: currentChallenge.challenge.sequence.length, sharedAt: new Date().toISOString(), sharedBy: 'You' };
            sharedChallenges.push(sharedChallenge); localStorage.setItem('sharedChallenges', JSON.stringify(sharedChallenges));
            const shareUrl = window.location.origin + window.location.pathname + '?challenge=' + shareId;
            navigator.clipboard.writeText(shareUrl).then(() => { alert('✅ Challenge shared! Link copied to clipboard:\n\n' + shareUrl); }).catch(() => { prompt('Challenge shared! Copy this link:', shareUrl); });
            loadChallengeStore();
        };

       // --- AUTH & PERSISTENCE LOGIC ---
let tokenClient;
let userProfile = null;

// 1. Handle Google Response
function handleTokenResponse(tokenResponse) {
    if (tokenResponse && tokenResponse.access_token) {
        fetchUserInfo(tokenResponse.access_token);
    }
}

// 2. Fetch Data from Google (Only happens on fresh sign-in)
async function fetchUserInfo(accessToken) {
    try {
        const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: { 'Authorization': `Bearer ${accessToken}` }
        });
        if (!response.ok) throw new Error('Failed to fetch user info');
        
        const userObject = await response.json();
        
        // SAVE TO STORAGE
        localStorage.setItem('userProfile', JSON.stringify(userObject));
        
        // Render UI
        renderLoginState(userObject);
        showAlert(`👋 Welcome, ${userObject.given_name}!`, false, 4000);

    } catch (error) { 
        console.error("Error fetching user info:", error); 
        showAlert("Sign-in failed.", true); 
    }
}

// 3. Render the Menu UI (Called by fetch OR by page load restore)
function renderLoginState(userObject) {
closeSigninModal();
    userProfile = userObject; // Set global variable
    const sidebarFooter = document.querySelector('.sidebar-footer');
    const signInButton = document.getElementById('customGoogleSignInBtn');

    if (sidebarFooter && signInButton) {
        signInButton.style.display = 'none';

        // Check if menu already exists (prevent duplicates)
        if (document.querySelector('.user-menu-container')) return;

        const container = document.createElement('div');
        container.className = 'user-menu-container';

        const menuHtml = `
            <div class="user-menu-popup" id="userMenuPopup">
                <div class="menu-header-email">${userObject.email}</div>
                
                <button class="menu-item" onclick="triggerSupportEmail()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                    Settings
                </button>
                <button class="menu-item" onclick="triggerSupportEmail()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    Get help
                </button>

                <div class="menu-divider"></div>

                <button class="menu-item" onclick="showPremiumModal()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
                    Upgrade plan
                </button>
                <button class="menu-item" onclick="window.location.href='terms.html'">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                    Learn more
                </button>

                <div class="menu-divider"></div>

                <button class="menu-item" onclick="handleLogout()">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                    Log out
                </button>
            </div>
        `;
        container.innerHTML = menuHtml;

        // Create Visible Profile Button
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

        // Toggle Logic
        profileBtn.onclick = (e) => {
            e.stopPropagation();
            const menu = document.getElementById('userMenuPopup');
            if (menu) menu.classList.toggle('active');
        };

        container.appendChild(profileBtn);
        sidebarFooter.appendChild(container);

        // Close menu if clicking outside
        document.addEventListener('click', (e) => {
            const menu = document.getElementById('userMenuPopup');
            if (menu && menu.classList.contains('active') && !container.contains(e.target)) {
                menu.classList.remove('active');
            }
        });
    }
}

// 4. Logout Logic (Clear Storage)
function handleLogout() {
    userProfile = null;
    isPremium = false;
    currentPlan = null;
    maxLines = 250;
    linesRemaining = 250;
    
    // Clear ALL saved data
    localStorage.removeItem('userProfile');
    localStorage.removeItem('savedPlan');
    localStorage.removeItem('savedLines');
    localStorage.removeItem('isPremium');
    localStorage.removeItem('savedTheme'); // Reset to default theme
    
    // Reset to default theme
    applyTheme('default');

    // ... rest of your existing logout UI cleanup code ...
    const container = document.querySelector('.user-menu-container');
    if (container) container.remove();
    
    const signInButton = document.getElementById('customGoogleSignInBtn');
    if (signInButton) signInButton.style.display = 'flex';
    
    updateLinesDisplay();
    updatePremiumModalUI(); // Reset UI to free
    showAlert("Logged out successfully.", false);
}

function triggerSupportEmail() {
    window.location.href = "mailto:support@chimwopara.com";
}

        window.addEventListener('load', () => {
            try {
                tokenClient = google.accounts.oauth2.initTokenClient({
                    client_id: "9571013902-q69a5hulb67vquu8ud41qmr3l135pdbj.apps.googleusercontent.com",
                    scope: 'email profile openid',
                    callback: handleTokenResponse,
                    error_callback: (error) => {
                        console.error("Google Sign-In Error:", error);
                        showAlert("Sign-in failed. Please try again.", true);
                    }
                });
                const customBtn = document.getElementById('customGoogleSignInBtn');
                if (customBtn) { customBtn.addEventListener('click', () => { tokenClient.requestAccessToken(); }); }
            } catch (error) { console.error("Error initializing Google Token Client:", error); showAlert("Could not load Google Sign-In.", true); }
        });

        // ============ TABS SYSTEM ============
        function switchMainTab(tabName) {
            document.querySelectorAll('.main-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            document.querySelector(`.main-tab[data-tab="${tabName}"]`).classList.add('active');
            document.getElementById(tabName + 'Tab').classList.add('active');
            
            if (tabName === 'contexts') renderContexts();
            if (tabName === 'prompts') renderPrompts();
        }
        
        function switchSubTab(parent, subTabId) {
            const container = document.getElementById(parent + 'Tab');
            container.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
            container.querySelectorAll('.sub-tab-content').forEach(t => t.classList.remove('active'));
            container.querySelector(`.sub-tab[data-subtab="${subTabId}"]`).classList.add('active');
            document.getElementById(subTabId).classList.add('active');
        }

        // ============ STRUCTURED MODAL ============
        function showStructuredModal() { document.getElementById('structuredModal').classList.add('active'); updateToggleButtonVisibility(); }
        function closeStructuredModal() { document.getElementById('structuredModal').classList.remove('active'); updateToggleButtonVisibility(); }

        // Keyword definitions
        const keywordDefinitions = {
            // Start
            'in': { category: 'Start', desc: 'Specifies the programming language or environment for your request.', example: '*in* swift ; *create* login screen' },
            'for': { category: 'Start', desc: 'Defines the target platform or device.', example: '*for* iPhone ; *create* navigation bar' },
            
            // References
            'context': { category: 'References', desc: 'References a saved context by its serial number. Use to include previously saved code or specifications.', example: '*context* #C23b5js8 ; *refactor* with new API' },
            'line': { category: 'References', desc: 'References specific line numbers in your code or context.', example: '*line* 45-60 ; *explain* this function' },
            'chimcontext': { category: 'References', desc: 'References a public store context shared by other users.', example: '*chimcontext* #C8hn2k4m ; *create* similar layout' },
            'prompt': { category: 'References', desc: 'References one of your saved prompts by its serial number.', example: '*prompt* %P9x2k3m1 ; apply to new project' },
            'chimprompt': { category: 'References', desc: 'References a public store prompt shared by other users.', example: '*chimprompt* #Pab3k9x2 ; customize for my needs' },
            'file': { category: 'References', desc: 'References an uploaded file or attachment.', example: '*file* design.png ; *create* matching UI' },
            'error': { category: 'References', desc: 'References an error message to help debug or explain the issue.', example: '*error* "undefined is not a function" ; *debug*' },
            
            // Generation
            'spawn': { category: 'Generation', desc: 'Generates multiple variations or instances of something.', example: '*spawn* 5 color themes ; *like* Material Design' },
            'rare': { category: 'Generation', desc: 'Requests unique, uncommon, or creative solutions instead of standard approaches.', example: '*rare* ; *create* loading animation' },
            'create': { category: 'Generation', desc: 'The primary command to generate new code, components, or content.', example: '*create* user profile card ; *with* avatar and bio' },
            'refactor': { category: 'Generation', desc: 'Improves existing code structure without changing its behavior.', example: '*context* 1 ; *refactor* for better readability' },
            'explain': { category: 'Generation', desc: 'Provides detailed explanation of code, concepts, or logic.', example: '*line* 20-35 ; *explain* step by step' },
            'optimize': { category: 'Generation', desc: 'Improves code performance, efficiency, or resource usage.', example: '*context* 1 ; *optimize* for speed' },
            'debug': { category: 'Generation', desc: 'Finds and fixes bugs or issues in the code.', example: '*error* "null reference" ; *debug* ; *explain* fix' },
            
            // Attributes
            'from': { category: 'Attributes', desc: 'References a design or functionality from an existing app or source as inspiration.', example: '*create* chat bubble ; *from* WhatsApp' },
            'makeit': { category: 'Attributes', desc: 'Applies a specific quality or characteristic to the output.', example: '*create* button ; *makeit* rounded ; *makeit* animated' },
            'like': { category: 'Attributes', desc: 'Makes the output similar to a referenced style or example.', example: '*create* navbar ; *like* Apple.com' },
            'but': { category: 'Attributes', desc: 'Modifies or overrides a specific aspect of the reference.', example: '*like* Instagram stories ; *but* vertical scroll' },
            'with': { category: 'Attributes', desc: 'Includes additional features or elements.', example: '*create* form ; *with* validation ; *with* dark mode' },
            'without': { category: 'Attributes', desc: 'Excludes specific features or elements.', example: '*create* modal ; *without* close button ; *without* backdrop' },
            'prefer': { category: 'Attributes', desc: 'Sets a preference for approach, library, or method.', example: '*prefer* flexbox ; *create* grid layout' },
            'format': { category: 'Attributes', desc: 'Specifies the output format or structure.', example: '*explain* API ; *format* bullet points' },
            'steps': { category: 'Attributes', desc: 'Requests output broken into numbered steps or phases.', example: '*create* auth flow ; *steps* 5' },
            'between': { category: 'Attributes', desc: 'Specifies a range or constraint between values.', example: '*spawn* icons ; *between* 24px and 48px' },
            
            // Position & Style
            'nextto': { category: 'Position & Style', desc: 'Positions an element relative to another element.', example: '*create* tooltip ; *nextto* button' },
            'blame': { category: 'Position & Style', desc: 'Highlights or annotates specific parts of code with explanations.', example: '*blame* ; *context* 1 ; show problem areas' },
            'animate': { category: 'Position & Style', desc: 'Adds animation or motion to elements.', example: '*create* card ; *animate* on hover ; *like* Material' },
            'background': { category: 'Position & Style', desc: 'Specifies background styling for elements.', example: '*create* hero section ; *background* gradient blue' },
            'font': { category: 'Position & Style', desc: 'Specifies typography settings.', example: '*create* heading ; *font* Inter ; *makeit* bold' },
            'style': { category: 'Position & Style', desc: 'Applies general styling or a design system.', example: '*style* glassmorphism ; *create* card component' },
            
            // Organization
            'maybe': { category: 'Organization', desc: 'Marks something as optional or conditional in the output.', example: '*create* form ; *with* email ; *maybe* phone number' },
            'then': { category: 'Organization', desc: 'Chains sequential actions or defines what happens next.', example: '*create* button ; *then* show modal on click' },
            'forge': { category: 'Organization', desc: 'Combines multiple prompts or contexts into a reusable template.', example: '*forge* "auth-flow" ; *from* login + signup + reset' },
            'mold': { category: 'Organization', desc: 'Creates a reusable pattern or template from existing code.', example: '*mold* "api-call" ; *from* context 1' },
            'jump': { category: 'Organization', desc: 'Skips to a specific section or jumps between contexts.', example: '*jump* line 100 ; *explain* from there' },
            'using': { category: 'Organization', desc: 'Specifies libraries, frameworks, or tools to use.', example: '*create* chart ; *using* Chart.js ; *in* React' }
        };

        function showKeywordInfo(keyword) {
            const info = keywordDefinitions[keyword];
            if (!info) return;
            
            // Remove active class from all chips
            document.querySelectorAll('.struct-chip').forEach(chip => chip.classList.remove('active'));
            // Add active class to clicked chip
            event.target.classList.add('active');
            
            // Hide default example, show info box
            document.getElementById('keywordDefaultExample').style.display = 'none';
            const infoBox = document.getElementById('keywordInfoBox');
            infoBox.style.display = 'block';
            
            // Populate info
            document.getElementById('keywordInfoName').textContent = keyword;
            document.getElementById('keywordInfoCategory').textContent = info.category;
            document.getElementById('keywordInfoDesc').textContent = info.desc;
            document.getElementById('keywordInfoExample').innerHTML = info.example.replace(/\*(\w+)\*/g, '<span style="color: #5AC8FA;">*$1*</span>');
            
            // Scroll to info box
            infoBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // ============ SAVE MODAL ============
        let saveType = 'context';
        
        function openSaveModal() {
            const content = document.getElementById('questionInput').value.trim();
            if (!content) { showAlert('Please enter some content first.', true); return; }
            document.getElementById('saveModal').classList.add('active');
            updateToggleButtonVisibility();
        }
        
        function closeSaveModal() {
            document.getElementById('saveModal').classList.remove('active');
            document.getElementById('saveTitle').value = '';
            document.getElementById('saveDescription').value = '';
            document.getElementById('savePublic').checked = false;
            document.getElementById('visibilityLabel').textContent = 'Private';
            updateToggleButtonVisibility();
        }
        
        function setSaveType(type) {
            saveType = type;
            document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
            document.querySelector(`.type-btn[data-type="${type}"]`).classList.add('active');
        }
        
document.addEventListener('DOMContentLoaded', () => {
    // 1. Restore Premium Status FIRST
    const savedPremiumStatus = localStorage.getItem('isPremium');
    if (savedPremiumStatus === 'true') {
        isPremium = true;
    }
    
    // 2. Restore Plan (which will set isPremium again)
    const savedPlan = localStorage.getItem('savedPlan');
    if (savedPlan) {
        activatePremium(savedPlan, 0, true); // isRestore = true
        const savedCount = localStorage.getItem('savedLines');
        if (savedCount) linesRemaining = parseInt(savedCount);
        updateLinesDisplay();
    }
    
    // 3. Restore Theme (only if premium or default)
    const savedTheme = localStorage.getItem('savedTheme');
    if (savedTheme) {
        if (isPremium || savedTheme === 'default') {
            applyTheme(savedTheme);
        } else {
            applyTheme('default'); // Fallback to default if not premium
        }
    }
    
    populateThemeGrid();

    // 2. Restore Text Input
    const qInput = document.getElementById('questionInput');
    const savedDraft = localStorage.getItem('promptDraft');
    if (qInput && savedDraft) {
        qInput.value = savedDraft;
        checkSelections(); // Update button state
    }
    // Save text as you type
    if (qInput) {
        qInput.addEventListener('input', () => {
            localStorage.setItem('promptDraft', qInput.value);
            checkSelections();
        });
    }

    // Restore User Session
    const savedUser = localStorage.getItem('userProfile');
    if (savedUser) {
        try {
            const userObj = JSON.parse(savedUser);
            renderLoginState(userObj);
        } catch (e) {
            localStorage.removeItem('userProfile');
        }
    }
    const savePublicToggle = document.getElementById('savePublic');
    if (savePublicToggle) {
        savePublicToggle.addEventListener('change', () => {
            document.getElementById('visibilityLabel').textContent = savePublicToggle.checked ? 'Public' : 'Private';
        });
    }

    // 4. Initialize UI Elements
    updatelinesDisplay();
    updatePremiumModalUI();
    loadChallengeStore();
    
    // ... (Existing URL params logic) ...
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('action') === 'university') {
        checkEnrollmentAndOpen();
    }
    
    // ... (Existing Modal click listeners) ...
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                updateToggleButtonVisibility();
            }
        });
    });
});

// 5. Initialize Google Client (Wait for window load to ensure script is ready)
window.addEventListener('load', () => {
    try {
        tokenClient = google.accounts.oauth2.initTokenClient({
            client_id: "9571013902-q69a5hulb67vquu8ud41qmr3l135pdbj.apps.googleusercontent.com",
            scope: 'email profile openid',
            callback: handleTokenResponse,
            error_callback: (error) => {
                console.error("Google Sign-In Error:", error);
            }
        });
        const customBtn = document.getElementById('customGoogleSignInBtn');
        if (customBtn) { 
            customBtn.addEventListener('click', () => { 
                tokenClient.requestAccessToken(); 
            }); 
        }
    } catch (error) { 
        console.error("Error initializing Google Token Client:", error); 
    }
});
        function generateSerial() {
            const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
            let serial = '';
            for (let i = 0; i < 8; i++) serial += chars[Math.floor(Math.random() * chars.length)];
            return serial;
        }
        
        function confirmSave() {
            const title = document.getElementById('saveTitle').value.trim();
            const description = document.getElementById('saveDescription').value.trim();
            const isPublic = document.getElementById('savePublic').checked;
            const content = document.getElementById('questionInput').value.trim();
            
            if (!title) { showAlert('Please enter a title.', true); return; }
            
            const serial = generateSerial();
            const prefix = saveType === 'context' ? 'C' : 'P';
            const fullSerial = prefix + serial;
            
            const item = {
                title,
                serial: fullSerial,
                content,
                description,
                isPublic,
                createdAt: new Date().toISOString()
            };
            
            if (saveType === 'context') {
                const contexts = JSON.parse(localStorage.getItem('savedContexts') || '[]');
                contexts.push(item);
                localStorage.setItem('savedContexts', JSON.stringify(contexts));
            } else {
                const prompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
                prompts.push(item);
                localStorage.setItem('savedPrompts', JSON.stringify(prompts));
            }
            
            const refSymbol = isPublic ? '#' : '%';
            showAlert(`Saved! Reference: ${refSymbol}${fullSerial}`, false);
            closeSaveModal();
        }

        // ============ EDIT MODAL ============
        function closeEditModal() {
            document.getElementById('editModal').classList.remove('active');
        }
        
        function confirmEdit() {
            const type = document.getElementById('editItemType').value;
            const index = parseInt(document.getElementById('editItemSerial').value);
            const title = document.getElementById('editTitle').value.trim();
            const content = document.getElementById('editContent').value.trim();
            const description = document.getElementById('editDescription').value.trim();
            const isPublic = document.getElementById('editPublic').checked;
            
            if (!title) { showAlert('Please enter a title.', true); return; }
            
            if (type === 'context') {
                const contexts = JSON.parse(localStorage.getItem('savedContexts') || '[]');
                contexts[index].title = title;
                contexts[index].content = content;
                contexts[index].description = description;
                contexts[index].isPublic = isPublic;
                localStorage.setItem('savedContexts', JSON.stringify(contexts));
                renderContexts();
            } else {
                const prompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
                prompts[index].title = title;
                prompts[index].content = content;
                prompts[index].description = description;
                prompts[index].isPublic = isPublic;
                localStorage.setItem('savedPrompts', JSON.stringify(prompts));
                renderPrompts();
            }
            
            showAlert('Changes saved!', false);
            closeEditModal();
        }
        
        // Edit modal visibility toggle listener
        document.addEventListener('DOMContentLoaded', () => {
            const editPublicToggle = document.getElementById('editPublic');
            if (editPublicToggle) {
                editPublicToggle.addEventListener('change', () => {
                    document.getElementById('editVisibilityLabel').textContent = editPublicToggle.checked ? 'Public' : 'Private';
                });
            }
        });

        // ============ CONTEXTS CRUD ============
        function renderContexts() {
            const container = document.getElementById('contextsContainer');
            const contexts = JSON.parse(localStorage.getItem('savedContexts') || '[]');
            container.innerHTML = '';
            
            contexts.forEach((ctx, index) => {
                const refSymbol = ctx.isPublic ? '#' : '%';
                const card = document.createElement('div');
                card.className = 'item-card';
                card.innerHTML = `
                    <div class="item-header">
                        <input type="text" class="item-title-input" value="${escapeHtml(ctx.title)}" onchange="updateContextTitle(${index}, this.value)">
                        <div class="item-controls">
                            <span class="serial-badge">${refSymbol}${ctx.serial}</span>
                            <span class="visibility-label">${ctx.isPublic ? 'Public' : 'Private'}</span>
                            <label class="toggle-switch">
                                <input type="checkbox" ${ctx.isPublic ? 'checked' : ''} onchange="toggleContextVisibility(${index})">
                                <span class="toggle-slider"></span>
                            </label>
                            <button class="icon-btn" onclick="editContext(${index})" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                            </button>
                            <button class="icon-btn delete" onclick="deleteContext(${index})" title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="item-content">${escapeHtml(ctx.content)}</div>
                    ${ctx.description ? `<div class="item-description">${escapeHtml(ctx.description)}</div>` : ''}
                `;
                container.appendChild(card);
            });
        }
        
        function addNewContext() {
            const contexts = JSON.parse(localStorage.getItem('savedContexts') || '[]');
            contexts.push({
                title: 'New Context',
                serial: 'C' + generateSerial(),
                content: '',
                description: '',
                isPublic: false,
                createdAt: new Date().toISOString()
            });
            localStorage.setItem('savedContexts', JSON.stringify(contexts));
            renderContexts();
        }
        
        function updateContextTitle(index, title) {
            const contexts = JSON.parse(localStorage.getItem('savedContexts') || '[]');
            contexts[index].title = title;
            localStorage.setItem('savedContexts', JSON.stringify(contexts));
        }
        
        function toggleContextVisibility(index) {
            const contexts = JSON.parse(localStorage.getItem('savedContexts') || '[]');
            contexts[index].isPublic = !contexts[index].isPublic;
            localStorage.setItem('savedContexts', JSON.stringify(contexts));
            renderContexts();
        }
        
        function deleteContext(index) {
            if (!confirm('Delete this context?')) return;
            const contexts = JSON.parse(localStorage.getItem('savedContexts') || '[]');
            contexts.splice(index, 1);
            localStorage.setItem('savedContexts', JSON.stringify(contexts));
            renderContexts();
        }
        
        function editContext(index) {
            const contexts = JSON.parse(localStorage.getItem('savedContexts') || '[]');
            const context = contexts[index];
            document.getElementById('editModalTitle').textContent = 'Edit Context';
            document.getElementById('editItemType').value = 'context';
            document.getElementById('editItemSerial').value = index;
            document.getElementById('editTitle').value = context.title;
            document.getElementById('editContent').value = context.content;
            document.getElementById('editDescription').value = context.description || '';
            document.getElementById('editPublic').checked = context.isPublic;
            document.getElementById('editVisibilityLabel').textContent = context.isPublic ? 'Public' : 'Private';
            document.getElementById('editModal').classList.add('active');
        }

        // ============ PROMPTS CRUD ============
        function renderPrompts() {
            const container = document.getElementById('promptsContainer');
            const prompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
            container.innerHTML = '';
            
            prompts.forEach((p, index) => {
                const refSymbol = p.isPublic ? '#' : '%';
                const card = document.createElement('div');
                card.className = 'item-card';
                card.innerHTML = `
                    <div class="item-header">
                        <input type="text" class="item-title-input" value="${escapeHtml(p.title)}" onchange="updatePromptTitle(${index}, this.value)">
                        <div class="item-controls">
                            <span class="serial-badge">${refSymbol}${p.serial}</span>
                            <span class="visibility-label">${p.isPublic ? 'Public' : 'Private'}</span>
                            <label class="toggle-switch">
                                <input type="checkbox" ${p.isPublic ? 'checked' : ''} onchange="togglePromptVisibility(${index})">
                                <span class="toggle-slider"></span>
                            </label>
                            <button class="icon-btn" onclick="editPrompt(${index})" title="Edit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                            </button>
                            <button class="icon-btn delete" onclick="deletePrompt(${index})" title="Delete">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="item-content">${formatPromptContent(p.content)}</div>
                    ${p.description ? `<div class="item-description">${escapeHtml(p.description)}</div>` : ''}
                `;
                container.appendChild(card);
            });
        }
        
        function addNewPrompt() {
            const prompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
            prompts.push({
                title: 'New Prompt',
                serial: 'P' + generateSerial(),
                content: '',
                description: '',
                isPublic: false,
                createdAt: new Date().toISOString()
            });
            localStorage.setItem('savedPrompts', JSON.stringify(prompts));
            renderPrompts();
        }
        
        function updatePromptTitle(index, title) {
            const prompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
            prompts[index].title = title;
            localStorage.setItem('savedPrompts', JSON.stringify(prompts));
        }
        
        function togglePromptVisibility(index) {
            const prompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
            prompts[index].isPublic = !prompts[index].isPublic;
            localStorage.setItem('savedPrompts', JSON.stringify(prompts));
            renderPrompts();
        }
        
        function deletePrompt(index) {
            if (!confirm('Delete this prompt?')) return;
            const prompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
            prompts.splice(index, 1);
            localStorage.setItem('savedPrompts', JSON.stringify(prompts));
            renderPrompts();
        }
        
        function editPrompt(index) {
            const prompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
            const prompt = prompts[index];
            document.getElementById('editModalTitle').textContent = 'Edit Prompt';
            document.getElementById('editItemType').value = 'prompt';
            document.getElementById('editItemSerial').value = index;
            document.getElementById('editTitle').value = prompt.title;
            document.getElementById('editContent').value = prompt.content;
            document.getElementById('editDescription').value = prompt.description || '';
            document.getElementById('editPublic').checked = prompt.isPublic;
            document.getElementById('editVisibilityLabel').textContent = prompt.isPublic ? 'Public' : 'Private';
            document.getElementById('editModal').classList.add('active');
        }
        
        function formatPromptContent(content) {
            const keywords = ['in', 'for', 'context', 'line', 'chimcontext', 'prompt', 'chimprompt', 'file', 'error', 'spawn', 'rare', 'create', 'refactor', 'explain', 'optimize', 'debug', 'from', 'makeit', 'like', 'but', 'with', 'without', 'prefer', 'format', 'steps', 'between', 'nextto', 'blame', 'animate', 'background', 'font', 'style', 'maybe', 'then', 'forge', 'mold', 'jump', 'using'];
            let formatted = escapeHtml(content);
            keywords.forEach(kw => {
                const regex = new RegExp(`\\b${kw}\\b`, 'gi');
                formatted = formatted.replace(regex, `<span class="keyword-highlight">$&</span>`);
            });
            return formatted;
        }
        
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        // ============ STRUCTURED HIGHLIGHTING ============
        function updateStructuredHighlights(text) {
            const overlay = document.getElementById('highlightOverlay');
            if (!overlay || document.getElementById('modeSelect').value !== 'structured') return;
            
            const keywords = ['in', 'for', 'context', 'line', 'chimcontext', 'prompt', 'chimprompt', 'file', 'error', 'spawn', 'rare', 'create', 'refactor', 'explain', 'optimize', 'debug', 'from', 'makeit', 'like', 'but', 'with', 'without', 'prefer', 'format', 'steps', 'between', 'nextto', 'blame', 'animate', 'background', 'font', 'style', 'maybe', 'then', 'forge', 'mold', 'jump', 'using'];
            
            let formatted = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            
            // Highlight references (#C, #P, %C, %P)
            formatted = formatted.replace(/([#%])([CP])([a-z0-9]{8,9})/gi, '<span class="h-reference">$&</span>');
            
            // Highlight keywords (bold only now)
            keywords.forEach(kw => {
                const regex = new RegExp(`\\b${kw}\\b`, 'gi');
                formatted = formatted.replace(regex, `<span class="h-keyword">$&</span>`);
            });
            if (formatted[formatted.length - 1] === '\n') formatted += '&nbsp;';
            overlay.innerHTML = formatted;
            overlay.scrollTop = document.getElementById('questionInput').scrollTop;
        }

        // Update toggleMode to handle structured mode
        const originalToggleMode = typeof toggleMode !== 'undefined' ? toggleMode : null;
        function toggleMode() {
            const mode = document.getElementById('modeSelect').value;
            const codeTools = document.getElementById('codeTools');
            const overlay = document.getElementById('highlightOverlay');
            
            if (mode === 'code') {
                codeTools.style.display = 'flex';
            } else {
                codeTools.style.display = 'none';
            }
            
            if (mode === 'structured') {
                checkSelections();
            } else if (overlay) {
                overlay.innerHTML = '';
            }
            
            checkSelections();
        }

        // Update checkSelections to handle structured mode
        const originalCheckSelections = typeof checkSelections !== 'undefined' ? checkSelections : null;
        function checkSelections() {
            const questionInput = document.getElementById('questionInput');
            const val = questionInput.value;
            const mode = document.getElementById('modeSelect').value;
            const generateBtn = document.getElementById('generateBtn');
            const hasInput = val.trim().length > 0;

            if (mode === 'general') {
                generateBtn.disabled = !hasInput;
                return;
            }
            
            if (mode === 'structured') {
                generateBtn.disabled = !hasInput;
                updateStructuredHighlights(val);
                return;
            }

            // Code mode
            const language = document.getElementById('languageSelect').value;
            const difficulty = document.getElementById('difficultySelect').value;
            const customLanguage = document.getElementById('customLanguageInput').value;
            let isLanguageValid = language !== "";
            if (language === 'custom') isLanguageValid = customLanguage.trim() !== "";
            const isDifficultyValid = difficulty !== "";
            generateBtn.disabled = !(hasInput && isLanguageValid && isDifficultyValid);
        }

        // Scroll sync for structured mode
        document.addEventListener('DOMContentLoaded', () => {
            const qInput = document.getElementById('questionInput');
            const overlay = document.getElementById('highlightOverlay');
            if (qInput && overlay) {
                qInput.addEventListener('scroll', () => {
                    overlay.scrollTop = qInput.scrollTop;
                });
            }
        });

        // ============ REFERENCE EXPANSION ============
        // Expands #Cxxxxxx, #Pxxxxxx, %Cxxxxxx, %Pxxxxxx references to their content
        function expandReferences(text) {
            const contexts = JSON.parse(localStorage.getItem('savedContexts') || '[]');
            const prompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
            
            // Pattern matches #C, #P, %C, %P followed by alphanumeric serial
            const refPattern = /([#%])([CP])([a-z0-9]{8,9})/gi;
            
            return text.replace(refPattern, (match, symbol, type, serial) => {
                const fullSerial = type.toUpperCase() + serial.toLowerCase();
                let found = null;
                
                if (type.toUpperCase() === 'C') {
                    found = contexts.find(c => c.serial.toLowerCase() === fullSerial.toLowerCase());
                } else {
                    found = prompts.find(p => p.serial.toLowerCase() === fullSerial.toLowerCase());
                }
                
                if (found) {
                    // Recursively expand nested references
                    return expandReferences(found.content);
                }
                return match; // Return original if not found
            });
        }
        
        // Get expanded text for sending
        function getExpandedInput() {
            const input = document.getElementById('questionInput').value;
            return expandReferences(input);
        }
        
        // Preview expansion on hover or for display
        function getReferencedItem(serial) {
            const contexts = JSON.parse(localStorage.getItem('savedContexts') || '[]');
            const prompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
            
            const type = serial.charAt(0).toUpperCase();
            if (type === 'C') {
                return contexts.find(c => c.serial.toLowerCase() === serial.toLowerCase());
            } else if (type === 'P') {
                return prompts.find(p => p.serial.toLowerCase() === serial.toLowerCase());
            }
            return null;
        }
// Mobile Swipe Gesture for Sidebar
if (window.innerWidth <= 768) {
    let touchStartX = 0;
    let touchEndX = 0;
    
    function handleSwipe() {
        const swipeDistance = touchEndX - touchStartX;
        const sidebar = document.querySelector('.sidebar');
        
        // Swipe right to open (at least 100px swipe)
        if (swipeDistance > 100 && sidebar.classList.contains('hidden')) {
            toggleSidebar();
        }
        // Swipe left to close (at least 100px swipe)
        else if (swipeDistance < -100 && !sidebar.classList.contains('hidden')) {
            toggleSidebar();
        }
    }
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
}
