# P&L Unified System - Complete Update

## What Changed

### 1. **Unified Smart Detection** - No More Mode Selector!
The dropdown with "General / Code / Structured" is removed. Now the system automatically detects:

| You type... | System detects | Result |
|-------------|---------------|--------|
| "how to update iOS" | **How-To** | Step-by-step P&L challenge |
| "python for loop" | **Code** | Code sequencing P&L challenge |
| "button like Apple; card like Stripe" | **Structured** | UI preview with copyable code |
| "what time is it" | **Chat** | Simple text response |

### 2. **Google Sign-In Fixed**
- Added proper initialization timing
- Button handlers now attach correctly
- Better error messages

### 3. **New Structured Mode**
When you use UI description syntax (keywords + semicolons), you get:
- Live UI preview in an iframe
- Copyable HTML code
- Copyable CSS code
- Component breakdown

---

## Files to Update

### New Files (copy to your project):

| File | Location | Purpose |
|------|----------|---------|
| `claude-api.js` | Root folder | Smart detection + unified API calls |
| `challenge-handler.js` | Root folder | Unified routing for all challenge types |
| `8-structured-preview.css` | Root folder | Styles for UI preview |
| `script-additions.js` | Root folder | Google Sign-In fix + helper functions |
| `netlify/functions/askClaude.js` | Netlify folder | Improved error handling |

### Files to Modify:

#### `index.html`

**1. Add new CSS** (after line with `7-responsive.css`):
```html
<link rel="stylesheet" href="8-structured-preview.css">
```

**2. Add structured preview container** (after `#challengeDisplay`):
```html
<div id="structuredPreview" class="structured-preview-container"></div>
```

**3. Replace the input footer** (~lines 259-299):

**REMOVE THIS:**
```html
<div class="input-footer">
    <div class="input-tools">
        <select id="modeSelect" class="minimal-select" onchange="toggleMode()">
            <option value="general" selected>General</option>
            <option value="code">Code</option>
            <option value="structured">Structured</option>
        </select>
        <div id="codeTools" style="display: none; ...">
            ... language/difficulty selects ...
        </div>
    </div>
    ...
</div>
```

**REPLACE WITH:**
```html
<div class="input-footer">
    <div class="input-tools">
        <span style="font-size: 0.75rem; color: var(--text-tertiary);">
            Auto-detects: code, how-to, or UI
        </span>
    </div>
    <div style="display: flex; gap: 8px; align-items: center;">
        <button class="save-btn" onclick="openSaveModal()" title="Save">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
        </button>
        <button class="send-btn" onclick="generateChallenge()" id="generateBtn" title="Generate" disabled>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
        </button>
    </div>
</div>
```

**4. Add new script** (before `</body>`):
```html
<script src="script-additions.js"></script>
```

#### `script-complete.js`

You can either:
- **Option A:** Delete the `toggleMode()` function and replace `checkSelections()` with the simpler version in `script-additions.js`
- **Option B:** Just load `script-additions.js` after `script-complete.js` (it will override the necessary functions)

---

## How the Detection Works

```javascript
// In claude-api.js - detectQuestionType()

1. STRUCTURED: Has ";" AND UI keywords (button, modal, card, etc.)
   → Generates UI preview with code

2. CODE: Has programming keywords (python, loop, function, etc.)
   → Generates code sequencing P&L challenge

3. HOW-TO: Starts with "how to", mentions update/install/configure, etc.
   → Generates step-by-step P&L challenge

4. CHAT: Short/unclear questions
   → Falls back to simple text response
```

---

## Examples

### Code Detection
- "python for loop" → Code P&L (Python)
- "javascript async await" → Code P&L (JavaScript)  
- "how to print hello world in C" → Code P&L (C)

### How-To Detection
- "how to update iOS" → Step P&L: Unlock → Settings → General → Software Update
- "how to create a Gmail account" → Step P&L: Go to Gmail → Click Create → Enter details...
- "how to tie a shoelace" → Step P&L: Cross laces → Make loop → Wrap around...

### Structured Detection
- "button like Apple; rounded corners; blue gradient" → UI Preview + Code
- "card similar to Stripe; shadow; hover effect" → UI Preview + Code

---

## Troubleshooting

### Google Sign-In Not Working
1. Make sure `script-additions.js` is loaded
2. Check browser console for `[Google Auth]` messages
3. Ensure the Google client ID is correct
4. Try in an incognito window (to rule out extension conflicts)

### API Errors
1. Check Netlify environment variable `ANTHROPIC_API_KEY` is set
2. Check Netlify function logs for errors
3. Make sure you redeployed after setting the env variable

### Challenge Not Loading
1. Check browser console for `[ChallengeHandler]` messages
2. Verify `sessionStorage` has `currentChallengeData`
3. Make sure `logicbody.html` is in the same directory
