# P&L Challenge Generator - Claude API Integration

## Overview
This update integrates Claude AI API to automatically convert any user question into an interactive P&L (Programming & Logic) code sequencing challenge.

## New Files Added

### `claude-api.js`
Handles communication with the Anthropic Claude API:
- Sends user questions to Claude
- Receives structured challenge data in JSON format
- Parses and validates the response

### `challenge-handler.js`
Manages the challenge lifecycle:
- Generates challenges from user questions
- Displays challenges in the iframe viewer
- Manages challenge history in the sidebar
- Handles completion events from the iframe

### Updated Files

#### `c.js` (Dynamic Challenge Loader)
Updated to:
- Load challenges from sessionStorage (set by the main app)
- Display language indicators
- Communicate completion status back to parent

#### `index.html`
Added script imports for the new modules

#### `3-modals-portals.css`
Enhanced challenge viewer styles:
- Better responsive layout
- Improved iframe sizing
- Mobile-friendly adjustments

#### `logicbody.html`
Modified to:
- Load challenges from c.js (via sessionStorage)
- Support dynamic language detection
- Work within iframe context

## How It Works

1. **User enters a question** in the main input field (in "General" mode)
2. **Click the generate button** (arrow icon)
3. **Claude API generates** a structured code challenge:
   - Goal description
   - Key concepts
   - Step-by-step code sequence
   - Distractors with explanations
4. **Challenge displays** in the side panel (logicbody.html in iframe)
5. **Challenge saved** to history in the sidebar under "Recents"

## Challenge Data Format

```javascript
{
    "goal": "What the code accomplishes",
    "concepts": "Key concepts covered",
    "language": "Programming language",
    "sequence": [
        {
            "correct": "The correct code line",
            "distractors": [
                {"text": "Wrong option 1", "reason": "Why it's wrong"},
                {"text": "Wrong option 2", "reason": "Why it's wrong"}
            ],
            "indent": 0,
            "explanation": "What this line does"
        }
    ]
}
```

## API Configuration

The Claude API key is configured in `claude-api.js`. The current configuration:
- Model: `claude-sonnet-4-20250514`
- Max tokens: 4096
- Endpoint: `https://api.anthropic.com/v1/messages`

## Modes

- **General Mode**: Enter any programming question, Claude generates appropriate challenge
- **Code Mode**: Specify language and difficulty for more targeted challenges
- **Structured Mode**: Use keywords for precise prompt engineering

## Notes

- Challenges are stored in localStorage under `pnlChallengeHistory`
- Up to 50 challenges are kept in history
- Completed challenges show a checkmark in history
- The iframe communicates with parent via postMessage API

## Browser Requirements

- Modern browser with ES6+ support
- CORS-enabled for API calls
- LocalStorage/SessionStorage support
