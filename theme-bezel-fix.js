/**
 * THEME BEZEL SYNC FIX
 * This script ensures browser status bar and home indicator match the theme color
 * with zero visual breaks or delays.
 * 
 * Add this script BEFORE your main script in the HTML.
 */

(function() {
    'use strict';
    
    // Helper to update all bezel-related elements instantly
    function syncBezelColor(color) {
        // 1. Update meta theme-color (status bar on mobile browsers)
        let metaTheme = document.querySelector('meta[name="theme-color"]');
        if (!metaTheme) {
            metaTheme = document.createElement('meta');
            metaTheme.name = 'theme-color';
            document.head.appendChild(metaTheme);
        }
        metaTheme.content = color;
        
        // 2. Update html background (extends to safe areas)
        document.documentElement.style.backgroundColor = color;
        
        // 3. Update body background-color (fallback)
        document.body.style.backgroundColor = color;
        
        // 4. Update CSS variable for pseudo-elements
        document.documentElement.style.setProperty('--bg-gradient-start', color);
    }
    
    // Expose globally for use by theme switching code
    window.syncBezelColor = syncBezelColor;
    
    // Initial sync on page load
    document.addEventListener('DOMContentLoaded', function() {
        const savedTheme = localStorage.getItem('savedTheme');
        const themeColors = {
            'default': '#1c1c1e',
            'ocean': '#005f73',
            'sunset': '#941b0c',
            'forest': '#1b4332',
            'lavender': '#240046',
            'cherry': '#590d22',
            'gold': '#332900',
            'neon': '#0d0d0d',
            'slate': '#334155',
            'coffee': '#4a3529',
            'dracula': '#44475a',
            'arctic': '#003f5c',
            'mint': '#164e44',
            'matrix': '#001a00',
            'vaporwave': '#5b2c6f',
            'ruby': '#3d0000',
            'sapphire': '#001233',
            'emerald': '#013a1a',
            'amethyst': '#240046',
            'tokyo': '#19002e',
            'miami': '#c71585',
            'nordic': '#2e3440',
            'graphite': '#212121',
            'sepia': '#3e2723',
            'cotton': '#ffcbf2',
            'cyber': '#1a1a00',
            'bordeaux': '#2b0000',
            'gunmetal': '#263238',
            'sky': '#0c4a6e',
            'rose': '#4a0404',
            'storm': '#1f2937',
            'moss': '#354f52',
            'pumpkin': '#7c2d12',
            'void': '#000000',
            'indigo': '#312e81',
            'terminal': '#1a1a1a',
            'coral': '#7f1d1d',
            'glacier': '#082f49',
            'plum': '#4a044e',
            'sand': '#451a03',
            'teal': '#042f2e',
            'blueprint': '#1e3a8a',
            'aurora': '#0b132b',
            'peacock': '#0a3d62',
            'bloodorange': '#3d0000',
            'frostbite': '#e0f2fe',
            'obsidian': '#0c0a09',
            'limepunch': '#1a2e05',
            'royalpurple': '#240046',
            'copper': '#3c1f0c',
            'abyss': '#000814',
            'flamingo': '#78001a',
            'olive': '#283618',
            'crimson': '#450000',
            'turquoise': '#014f4f',
            'charcoal': '#1e1e1e',
            'lilac': '#6b5b95',
            'electric': '#1e0038',
            'maroon': '#3f0000',
            'seaglass': '#ccfbf1',
            'amber': '#4a2c00',
            'midnightblue': '#03071e',
            'matcha': '#3a5a40',
            'onyx': '#0f0f0f',
            'orchid': '#660066',
            'rust': '#4a1e04',
            'aquamarine': '#007f7f',
            'slateblue': '#2b2d42',
            'tangerine': '#992b00',
            'evergreen': '#0a3d2a',
            'wine': '#420420',
            'cyanide': '#001a1a',
            'mauve': '#5c2a3d',
            'bronze': '#4a2e0a',
            'bubblegum': '#ffb3d9',
            'deepsea': '#000033',
            'hazelnut': '#5c3d2e',
            'fuchsia': '#9d0b54',
            'ivory': '#f5f5dc',
            'scarlet': '#800000',
            'lagoon': '#006d77',
            'mystic': '#2e1a47',
            'citrine': '#5c4400',
            'violet': '#3f0071',
            'pine': '#173019',
            'cerulean': '#1e40af',
            'garnet': '#5e0a1a',
            'honey': '#783900',
            'phantom': '#1a1a2e',
            'vermillion': '#a63d00',
            'pearl': '#f8f9fa',
            'dawn': '#ffe4e6',
            'twilight': '#1e1b4b',
            'sherbet': '#fff7ed',
            'midnightrose': '#4c1d95',
            'cantaloupe': '#ffedd5',
            'obsidianfire': '#0c0a09',
            'mintcream': '#f0fdfa',
            'bloodmoon': '#450a0a',
            'polar': '#ecfeff'
        };
        
        const color = themeColors[savedTheme] || themeColors['default'];
        syncBezelColor(color);
    });
})();

/**
 * PATCHED applyTheme function
 * Replace your existing applyTheme function with this one
 */
function applyThemePatched(themeId) {
    const themes = window.themes || []; // Your themes array
    const theme = themes.find(t => t.id === themeId);
    if (!theme) return;
    
    // 1. SAVE TO STORAGE
    localStorage.setItem('savedTheme', themeId); 

    const root = document.documentElement;
    
    // 2. INSTANT BEZEL SYNC - Do this FIRST before any other changes
    if (window.syncBezelColor) {
        window.syncBezelColor(theme.start);
    }
    
    // 3. Update CSS variables
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
    } else {
        root.style.setProperty('--bg-app', theme.start);
        root.style.setProperty('--bg-gradient-start', theme.start);
        root.style.setProperty('--bg-gradient-end', theme.end);
        root.style.setProperty('--bg-glass', `${theme.start}BF`);
        root.style.setProperty('--accent-primary', theme.accent);
        root.style.setProperty('--accent-highlight', theme.accent);
        setTextColor(theme.textColor || 'light');
    }
    
    // Close theme modal if open
    if (typeof closeThemeStoreModal === 'function') {
        closeThemeStoreModal();
    }
}
