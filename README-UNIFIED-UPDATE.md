# P&L Unified System - Complete Update

## What Changed

### 1. **Unified Smart Detection** - No More Mode Selector!
The dropdown with "General / Code / Structured" is **completely removed**. The system automatically detects:

| You type... | System detects | Result |
|-------------|---------------|--------|
| "how to update iOS" | **How-To** | Step-by-step P&L challenge |
| "python for loop" | **Code** | Code sequencing P&L challenge |
| "button like Apple; card like Stripe" | **Structured** | UI preview with copyable code |

### 2. **Login Required**
Users must sign in with Google before generating any challenges.

### 3. **Recents Fixed**
Challenges now properly show in the sidebar under "Recents".

### 4. **Google Sign-In Fixed**
Improved initialization timing and error handling.

### 5. **Sidebar Toggle Fixed**
- Works properly on mobile
- Moves to right side when sidebar is open

### 6. **Structured Keywords Work**
- Tapping keywords in the Structured P&L modal now shows explanations
- Real-time keyword highlighting as you type (when you use `;`)

---

## Files to Update

### New Files (copy to your project):

| File | Location | Purpose |
|------|----------|---------|
| `claude-api.js` | Root folder | Smart detection + unified API calls |
| `challenge-handler.js` | Root folder | Unified routing for all challenge types |
| `8-structured-preview.css` | Root folder | Styles for UI preview |
| `script-fixes.js` | Root folder | **All fixes**: Google sign-in, sidebar toggle, keyword highlighting, login requirement |
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

**3. DELETE lines 261-289** - Remove the modeSelect dropdown and codeTools div entirely.
Leave the `<div class="input-tools"></div>` empty.

**4. Add script before `</body>`:**
```html
<script src="script-fixes.js"></script>
```

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
