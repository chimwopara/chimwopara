const schoolData = {
    media: {
        title: 'Faculty of Media',
        description: 'Transforming artists into "Hybrid Creators" by mastering the full spectrum of manual and AI-driven media production.',
        tags: ['Video Editing', 'Image Generation', 'Audio Production', 'AI Workflows'],
        syllabus: [
            // Month 1
            'Week 1: Hardware & Specs. Topic: CPU vs GPU for rendering, RAM requirements, SSD vs HDD. Quiz: Hardware Logic - Given a specific bottleneck (e.g., "Video playback is stuttering but render speed is fine"), identify which component needs upgrading.',
            'Week 2: File Management & Formats. Topic: Lossless vs Lossy (WAV/FLAC vs MP3), Container types (PNG, JPEG, MOV, MP4, MKV) and converting between them. Quiz: Format Logic - Scenario-based questions (e.g., "Client needs a transparent video background; which format do you choose?").',
            'Week 3: The Audio Interface. Topic: Audio input, Audio Repair, Audio replacement. Quiz: Signal Flow Logic - Trace the path of sound from microphone to computer, then remove the noise and echo, then change the voice.',
            'Week 4: Screen Recording & Extraction. Topic: In built recording and capture, extracting audio from video files, isolating tracks. Quiz: Troubleshooting - Identify why a screen recording has a black screen or desynced audio based on settings screenshots.',
            // Month 2
            'Week 5: DAW Interface Navigation. Topic: Tracks, Timeline, Mixer, VST plugins. Quiz: UI Navigation - "Click where the master volume fader is" (Hotspot quiz) or identifying icons for mute/solo.',
            'Week 6: Rhythm & Structure. Topic: Bars, Beats, Time Signatures, Intro/Verse/Chorus structure. Quiz: Structural Logic - Listen to a clip and identify the "1" count or drag-and-drop song sections into the correct order.',
            'Week 7: Splicing & Fades. Topic: Cutting audio, crossfades, snapping to grid. Quiz: Editing Logic - "Which crossfade type (Linear vs Logarithmic) prevents a sudden volume drop?"',
            'Week 8: Intro to Generative Audio (Suno). Topic: The Suno Interface, Tags vs Lyrics, Extending tracks. Quiz: Tag Logic - Match the music genre to the correct style tags (e.g., "Lo-fi" vs "Synthwave").',
            // Month 3
            'Week 9: Resolution & Aspect Ratios. Topic: DPI/PPI, 16:9 vs 9:16, Upscaling artifacts, cropping. Quiz: Dimension Logic - Calculate the pixel dimensions for a 4K 16:9 image vs a 1080p vertical story.',
            'Week 10: Composition Rules. Topic: Rule of Thirds, Leading Lines, Golden Ratio. Quiz: Visual Analysis - Identify which rule of composition is being used in a provided image.',
            'Week 11: Layers & Masking. Topic: Photoshop/GIMP basics, Alpha channels, Blending modes. Quiz: Layer Logic - "If Layer A is set to "Multiply" over Layer B, what happens to the white pixels?"',
            'Week 12: Intro to Image Gen (Midjourney/DALL-E). Topic: Parameters (--ar, --v), Seeds, Weights. Quiz: Parameter Logic - Identify what error a specific parameter caused (e.g., "Why is this image square when I wanted landscape?").',
            // Month 4
            'Week 13: Timelines & Frame Rates. Topic: 24fps vs 30fps vs 60fps, Drop frame timecode. Quiz: Time Logic - "If you slow down 24fps footage by 50%, why does it look choppy?"',
            'Week 14: Cutting & Pacing. Topic: J-cuts, L-cuts, Jump cuts, Matching action. Quiz: Edit Logic - Identify a J-cut from a visual timeline representation.',
            'Week 15: Keyframing Basics. Topic: Interpolation (Linear vs Bezier), Ease-in/Ease-out. Quiz: Motion Logic - Predict the movement of an object based on a graph curve (Speed vs Time).',
            'Week 16: Exporting & Codecs. Topic: H.264 vs H.265, Bitrate settings. Quiz: Compression Logic - "Why is this exported file 10GB? Spot the wrong setting."',
            // Month 5
            'Week 17: Principles of Animation. Topic: Squash and Stretch, Anticipation. Quiz: Physics Logic - Identify the missing frame in a bouncing ball sequence.',
            'Week 18: Prompting for Motion. Topic: Camera movements (Pan, Tilt, Zoom, Truck). Quiz: Camera Logic - Match the video clip to the correct camera term.',
            'Week 19: Interpolation (AI Video). Topic: How AI "dreams" between frames. Quiz: Artifact Spotting - Identify where the AI morphing failed in a sequence.',
            'Week 20: Looping Fundamentals. Topic: Creating seamless loops, boomerang effects. Quiz: Loop Logic - Find the "seam" or error in a looping texture.',
            // Month 6
            'Week 21: Syncing Audio to Video. Topic: Waveform alignment, visual cues. Quiz: Sync Logic - "Is the audio ahead or behind the video in this clip?" (Test reaction/perception).',
            'Week 22: Audio Mixing for Video. Topic: Ducking, EQ for speech vs music. Quiz: Frequency Logic - Identify which frequency range makes speech sound "muddy."',
            'Week 23: Color Correction Basics. Topic: White balance, Saturation, Contrast. Quiz: Color Logic - "The image looks too blue; which color slider do you adjust to fix it?"',
            'Week 24: The Rough Cut (Alpha). Topic: Review workflows, Version control. Quiz: Workflow Logic - Organize a messy file folder structure into the correct hierarchy.',
            // Phase 2: AI Mastery - Month 7
            'Week 25: The Anatomy of a Prompt. Topic: Subject + Medium + Style + Lighting + Color + Vibe. Economics and Limitations. Quiz: Prompt Debugging - "Here is a bad prompt and the result. Fix the specific word causing the issue."',
            'Week 26: Iterative Prompting. Topic: Rerolling, Variations, Strong vs Weak variations. Quiz: Iteration Logic - "Which variation setting (High vs Low) would you use to fix a hand without changing the face?"',
            'Week 27: Negative Prompting. Topic: Removing unwanted elements (--no parameters). Quiz: Negative Logic - "The image has text overlays. What command removes them?"',
            'Week 28: Image-to-Image Styles. Topic: Using reference images, Style weights. Quiz: Weight Logic - Predict the output based on the image weight setting (IW).',
            // Month 8
            'Week 29: Consistency Characters. Topic: Seed locking, Character sheets in video. Quiz: Consistency Logic - Identify which of 4 clips has a "character drift" error.',
            'Week 30: AI In-Painting for Video. Topic: Changing background elements in moving footage. Quiz: Masking Logic - Select the correct area to mask for a specific effect.',
            'Week 31: Frame Interpolation. Topic: Increasing frame rate with AI (Slow motion). Quiz: Motion Artifacts - Identify "ghosting" artifacts in slow-mo footage.',
            'Week 32: Lip Syncing AI. Topic: Syncing audio to AI avatars (HeyGen, SyncLabs). Quiz: Lip Sync Logic - "Why is the mouth movement not matching the phoneme \'B\'?"',
            // Month 9
            'Week 33: Voice Cloning Tech. Topic: ElevenLabs parameters (Stability, Similarity). Quiz: Parameter Logic - "The voice sounds too emotional and cracked. Which slider do you lower?"',
            'Week 34: Text-to-Song Prompting. Topic: Metatags [Verse], [Chorus], [Solo]. Quiz: Structure Prompting - Write the correct metatags to force a guitar solo after the second chorus.',
            'Week 35: Stem Splitting. Topic: AI separation of vocals and instrumentals. Quiz: Audio Isolation - Identify bleed-through artifacts in an extracted vocal track.',
            'Week 36: Audio Cleanup. Topic: AI De-noise and De-reverb. Quiz: Spectral Logic - Identify the visual representation of "noise" in a spectral graph.',
            // Month 10
            'Week 37: Hallucination Spotting. Topic: Hands, Text, Physics errors. Quiz: "Where\'s Waldo" Error Spotting - Find the 5 AI errors in a complex image.',
            'Week 38: Out-Painting (Expanding Canvas). Topic: Changing aspect ratios post-generation. Quiz: Perspective Logic - "If we expand this image left, what should be there based on the perspective lines?"',
            'Week 39: Upscaling Workflows. Topic: Creative Upscale vs Faithful Upscale. Quiz: Upscale Logic - "The upscale added details that weren\'t there. Which mode was used?"',
            'Week 40: Fixing AI Hands/Faces. Topic: Photoshop Generative Fill for specific fixes. Quiz: Selection Logic - "Draw the optimal selection shape to fix this distorted hand."',
            // Month 11
            'Week 41: Batch Generation. Topic: Generating assets in bulk (Permutations). Quiz: Permutation Logic - Calculate how many images {Red, Blue} {Cat, Dog} --v 5 will generate.',
            'Week 42: Automation Scripts. Topic: Automating file naming and sorting. Quiz: Sorting Logic - Create a logical rule for organizing 1000 files by date and type.',
            'Week 43: Content Repurposing. Topic: Turning 1 video into 3 Shorts/Reels. Quiz: Cropping Logic - Choose the best crop area for vertical video from a horizontal shot.',
            'Week 44: Speed Editing. Topic: Keyboard shortcuts and AI cut detection. Quiz: Shortcut Memory - Timed quiz on essential keyboard shortcuts.',
            // Month 12
            'Week 45: Portfolio Packaging. Topic: Behance/ArtStation layouts. Quiz: Curation Logic - Select the strongest 3 images from a set of 10.',
            'Week 46: Presentation Skills. Topic: Explaining your AI workflow to clients. Quiz: Client Comm Logic - "How do you explain to a client why you can\'t just \'change the angle\' of a generated image?"',
            'Week 47: Final Polish. Topic: Final render checks. Quiz: QC Logic - Final Quality Control checklist.',
            'Week 48: Graduation. Topic: Live Presentation. Quiz: Reflection - Self-assessment logic.',
            // Phase 3: The Incubator (Group Project)
            'Week 49: The Triad Formation. Topic: Merging the Top 1% (Media + Biz + Code) into founders. Equity & IP. Quiz: Co-Founder Logic - "Resolve a dispute between the CEO and CTO regarding feature scope vs launch date."',
            'Week 50: The Integrated MVP. Topic: Combining Media Assets, Business Logic, and Codebase into a single product. Quiz: Dependency Logic - "The marketing video promises a feature the code doesn\'t support yet. Fix the disconnect."',
            'Week 51: Market Simulation. Topic: Stress testing the company with live AI traffic and customer support swarms. Quiz: Crisis Logic - "Server costs spiked 500% overnight due to a viral video. Find the loop error."',
            'Week 52: The Venture Pitch. Topic: Final Defense before Investors. Valuation and Exit Strategy. Quiz: Exit Logic - "Negotiate the terms of the acquisition based on your MRR."'
        ]
    },
    business: {
        title: 'Faculty of Business',
        description: 'Transforming managers into "System Architects" by building autonomous enterprises.',
        tags: ['Automation', 'Analytics', 'Strategy', 'CRM Logic'],
        syllabus: [
            // Month 1
            'Week 1: Niche Selection & Research. Topic: Identifying viable markets, Competitor analysis basics. Quiz: Market Logic - "Given these 3 competitor prices, find the gap in the market."',
            'Week 2: Business Models & Strategy. Topic: B2B vs B2C logic, ROI, CAC (Customer Acquisition Cost). Quiz: Strategy Logic - "Is this service better suited for a subscription or a one-time fee model?"',
            'Week 3: Digital Security Fundamentals. Topic: VPNs, 2FA, Password Managers, Phishing recognition. Quiz: Security Logic - "Which of these emails is a phishing attempt?"',
            'Week 4: Business Computing Specs. Topic: Hardware for multitasking, multiple monitors, cloud storage vs local. Quiz: Tech Logic - "Which laptop spec is most critical for running 50 browser tabs?"',
            // Month 2
            'Week 5: Form Logic Fundamentals. Topic: Conditional Logic (If/Then), Branching questions. Quiz: Conditional Logic - "If the user selects \'No\' to question 2, which question should they skip to?"',
            'Week 6: Database Basics. Topic: Relational vs Flat databases, CSV files, Data types. Quiz: Data Structure Logic - "Match the data (Phone Number) to the correct field type (Integer vs String)."',
            'Week 7: Privacy & Compliance. Topic: GDPR basics, Data handling, Privacy policies. Quiz: Compliance Logic - "Identify the violation in this data collection form."',
            'Week 8: Creating Intake Forms. Topic: Building the Client Intake flow (Fillout/Typeform). Quiz: UX Logic - "Why did the user abandon the form at Step 3?"',
            // Month 3
            'Week 9: Email Protocols. Topic: SMTP, IMAP, DNS records for email (DKIM/SPF). Quiz: Protocol Logic - "Why did this email go to spam? Check the DNS settings."',
            'Week 10: Writing Copy. Topic: Hooks, CTAs (Call to Action), Tone of voice. Quiz: Copy Logic - "Identify the weak \'Call to Action\' in this email."',
            'Week 11: VOIP & Phone Systems. Topic: Virtual numbers, Call routing, Voicemail logic. Quiz: Routing Logic - "Design a call flow: Press 1 for Sales, Press 2 for Support."',
            'Week 12: CRM Fundamentals. Topic: Manual CRM entry, Lead statuses, Pipelines. Quiz: Pipeline Logic - "Where does this lead belong? (Cold, Warm, Hot)."',
            // Month 4
            'Week 13: Calendar Architecture. Topic: Calendar APIs, Syncing multiple calendars. Quiz: Sync Logic - "Why is the calendar showing \'Busy\' when I\'m free?"',
            'Week 14: Time Zone Logistics. Topic: UTC, Time zone math, DST handling. Quiz: Scheduling Logic - "If it\'s 3PM EST, what time is it in Tokyo? Will this meeting conflict?"',
            'Week 15: Conflict Resolution. Topic: Manual scheduling buffers, Overbooking prevention. Quiz: Logic Puzzle - "Fit these 4 meetings into this 2-hour window."',
            'Week 16: Booking Page Setup. Topic: Setting up Calendly/Cal.com, Integration testing. Quiz: Settings Logic - "User can\'t book on Fridays. Find the setting error."',
            // Month 5
            'Week 17: Payment Gateways. Topic: Stripe/PayPal setup, API keys (Test vs Live). Quiz: Gateway Logic - "The payment failed with Error 402. What does this code usually mean?"',
            'Week 18: Invoicing Logic. Topic: Invoice terms (Net30), Line items, VAT/Tax. Quiz: Billing Logic - "Calculate the total tax for this invoice based on the region."',
            'Week 19: Refunds & Disputes. Topic: Handling chargebacks, Refund policies. Quiz: Policy Logic - "Is this customer eligible for a refund based on the policy text?"',
            'Week 20: Financial Dashboarding. Topic: Reading dashboards, MRR, Churn rates. Quiz: Metric Logic - "Churn increased by 5%. Look at the data and guess why."',
            // Month 6
            'Week 21: Empathy & Psychology. Topic: De-escalation techniques, Reading customer sentiment. Quiz: Sentiment Analysis - "Is this ticket Angry, Frustrated, or Confused?"',
            'Week 22: Tagging & Categorization. Topic: Ticket routing, Priority levels. Quiz: Categorization Logic - "Tag these 5 support tickets with the correct category (Billing, Tech, Feature Request)."',
            'Week 23: Standard Operating Procedures (SOPs). Topic: Writing clear instructions, Process mapping. Quiz: Process Logic - "Reorder these steps to make the SOP efficient."',
            'Week 24: Knowledge Base Construction. Topic: Structuring help articles, Searchability. Quiz: Information Architecture - "Where should the \'How to Reset Password\' article live in the menu?"',
            // Phase 2: AI Automation - Month 7
            'Week 25: Prompting for Tone. Topic: Adjusting AI persona (Professional vs Casual). Quiz: Tone Logic - "This email sounds too aggressive. Select the prompt modifier that softens it."',
            'Week 26: AI Rewriting & Editing. Topic: Using AI to refine copy, Expanding bullets to paragraphs. Quiz: Editing Logic - "Select the AI output that best summarizes this meeting transcript."',
            'Week 27: AI Translation. Topic: Localization, Handling idioms with AI. Quiz: Localization Logic - "The AI translated this literally. Spot the cultural error."',
            'Week 28: Automated Summaries. Topic: Extracting action items from text. Quiz: Extraction Logic - "Identify the 3 action items the AI missed in this summary."',
            // Month 8
            'Week 29: Chatbot Architecture. Topic: Decision trees vs LLMs, Knowledge base linking. Quiz: Flow Logic - "Draw the path the bot takes when the user says \'Refund\'."',
            'Week 30: Training Data Formatting. Topic: Cleaning data for RAG (Retrieval-Augmented Generation). Quiz: Data Prep - "Which of these documents will confuse the bot?"',
            'Week 31: Temperature & Parameters. Topic: Hallucination control, Creativity settings. Quiz: Parameter Logic - "The bot made up a fake product. Was the Temperature too high or low?"',
            'Week 32: Security & Injection Defense. Topic: Prompt injection attacks, Guardrails. Quiz: Safety Logic - "User tried to trick the bot into giving a discount. Did the bot fail?"',
            // Month 9
            'Week 33: Triggers & Actions. Topic: Webhooks, Polling, Instant triggers. Quiz: Trigger Logic - "Why didn\'t the automation fire when the form was submitted?"',
            'Week 34: API Keys & Auth. Topic: Connecting services, Secret management. Quiz: Connection Logic - "The connection failed. Identify the invalid API Key format."',
            'Week 35: Data Payloads. Topic: JSON in automation, Mapping fields. Quiz: Mapping Logic - "You mapped \'First Name\' to the \'Email\' field. Spot the error."',
            'Week 36: Error Handling. Topic: Filters, Routers, Error paths. Quiz: Workflow Logic - "The automation failed at Step 3. Look at the data payload and find the null value."',
            // Month 10
            'Week 37: AI Data Cleaning. Topic: Formatting messy CSVs with prompts. Quiz: Cleanup Logic - "Write a prompt to remove all duplicate emails from this list."',
            'Week 38: Trend Analysis. Topic: Spotting patterns in large datasets. Quiz: Data Logic - "The AI says sales doubled, but the graph is flat. Identify the hallucination."',
            'Week 39: Chart Generation. Topic: Visualizing data with AI tools. Quiz: Visualization Logic - "Which chart type (Bar vs Line) is best for showing growth over time?"',
            'Week 40: Predictive Concepts. Topic: Forecasting basics using historical data. Quiz: Prediction Logic - "Based on this trend, predict next month\'s revenue."',
            // Month 11
            'Week 41: Circular Workflows. Topic: Loops, Iterators in automation. Quiz: Loop Logic - "Design a workflow that checks for new emails every hour."',
            'Week 42: Multi-step Agents. Topic: AI agents that browse, scrape, and report. Quiz: Agent Logic - "The agent got stuck in a loop. Identify the missing \'Stop\' condition."',
            'Week 43: System Stress Testing. Topic: Load testing, Rate limits. Quiz: System Logic - "Design a workflow that retries a failed payment email 3 times before giving up."',
            'Week 44: Redundancy. Topic: Backups, Fallback automations. Quiz: Backup Logic - "If OpenAI goes down, which fallback service should triggers?"',
            // Month 12
            'Week 45: Cost Optimization. Topic: Token usage, API costs. Quiz: Optimization Logic - "This workflow costs $0.50 per run. How do we optimize the token usage to get it to $0.10?"',
            'Week 46: Documentation Generation. Topic: Using AI to write technical docs. Quiz: Doc Logic - "Does this AI-generated manual match the actual workflow?"',
            'Week 47: Launch Prep. Topic: Final system checks, User acceptance testing. Quiz: Launch Logic - "Create a \'Go/No-Go\' checklist for launch."',
            'Week 48: Graduation. Topic: Final Demo Day. Quiz: Reflection - "How would you improve this system v2.0?"',
            // Phase 3: The Incubator (Group Project)
            'Week 49: The Triad Formation. Topic: Merging the Top 1% (Media + Biz + Code) into founders. Equity & IP. Quiz: Co-Founder Logic - "Resolve a dispute between the CEO and CTO regarding feature scope vs launch date."',
            'Week 50: The Integrated MVP. Topic: Combining Media Assets, Business Logic, and Codebase into a single product. Quiz: Dependency Logic - "The marketing video promises a feature the code doesn\'t support yet. Fix the disconnect."',
            'Week 51: Market Simulation. Topic: Stress testing the company with live AI traffic and customer support swarms. Quiz: Crisis Logic - "Server costs spiked 500% overnight due to a viral video. Find the loop error."',
            'Week 52: The Venture Pitch. Topic: Final Defense before Investors. Valuation and Exit Strategy. Quiz: Exit Logic - "Negotiate the terms of the acquisition based on your MRR."'
        ]
    },
    coding: {
        title: 'Faculty of Coding',
        description: 'Transforming coders into "Software Conductors" by orchestrating complex ecosystems with AI.',
        tags: ['Web Development', 'App Development', 'Game Development', 'AI Architecture'],
        syllabus: [
            // Month 1
            'Week 1: Hardware & OS. Topic: Specs for compiling, Mac vs Windows vs Linux for devs. Quiz: Hardware Logic - "Which OS is native for iOS development?"',
            'Week 2: VS Code Setup. Topic: IDEs, Extensions (Prettier, ESLint), Themes. Quiz: IDE Logic - "Which extension would fix this messy indentation automatically?"',
            'Week 3: Terminal Basics. Topic: Navigation (cd, ls), File manipulation (mkdir, touch). Quiz: Terminal Logic - "Navigate around the terminal till you find the file \'P&L.md\'?"',
            'Week 4: Version Control (Git). Topic: Git init, commit, push, pull. Quiz: Git Logic - "You tried to push but got a \'conflict\' error. Why?"',
            // Month 2
            'Week 5: How the Web Works. Topic: DNS, IP addresses, Servers, Hosting. Quiz: Network Logic - "Type the URL into the browser. What happens next?"',
            'Week 6: HTML Structure. Topic: Semantic HTML, Tags, Attributes. Quiz: Structure Logic - "Spot the unclosed tag in this HTML snippet."',
            'Week 7: CSS Fundamentals. Topic: Box Model (Margin/Padding), Flexbox. Quiz: CSS Logic - "The text is overflowing the box. Which CSS property is missing?"',
            'Week 8: DOM Manipulation. Topic: JavaScript basics for selecting elements. Quiz: DOM Logic - "Write the selector to find the button with id=\'submit\'."',
            // Month 3
            'Week 9: JSON Structure. Topic: Objects, Arrays, Key-Value pairs. Quiz: JSON Logic - "Find the syntax error (missing comma) in this JSON snippet."',
            'Week 10: API Endpoints. Topic: GET vs POST, Status codes (200, 404, 500). Quiz: API Logic - "You sent data but got a 404. What does that mean?"',
            'Week 11: Authentication. Topic: API Keys, Bearer Tokens, OAuth flow. Quiz: Auth Logic - "Where do you put the API key? (Header vs Body)."',
            'Week 12: Hashing & Security. Topic: Encryption basics, Salting passwords. Quiz: Security Logic - "Why is storing passwords in plain text bad?"',
            // Month 4
            'Week 13: Engine Interfaces. Topic: Unity/Roblox Studio UI, Scene view vs Game view. Quiz: Engine Logic - "Switch the camera from Perspective to Orthographic view."',
            'Week 14: Coordinate Systems. Topic: X, Y, Z axis, World space vs Local space. Quiz: 3D Logic - "If the parent object moves +10 on X, where does the child object go?"',
            'Week 15: Physics & Rigidbodies. Topic: Gravity, Mass, Velocity. Quiz: Physics Logic - "Why did the object fall through the floor? (Missing Collider)."',
            'Week 16: Colliders & Triggers. Topic: Box colliders, Mesh colliders, OnEnter events. Quiz: Event Logic - "Trigger the sound only when the player enters the zone."',
            // Month 5
            'Week 17: Mobile Constraints. Topic: Screen sizes, Touch targets, Battery usage. Quiz: UX Logic - "Is this button too small for a thumb tap?"',
            'Week 18: Responsive Breakpoints. Topic: Media queries, Fluid layouts. Quiz: Responsive Logic - "On a mobile screen, the menu disappears. Check the Media Query breakpoint."',
            'Week 19: Emulation. Topic: Simulators vs Emulators vs Real Devices. Quiz: Testing Logic - "The feature works on simulator but fails on device. Why?"',
            'Week 20: App Store Guidelines. Topic: Review process, Sandbox restrictions. Quiz: Policy Logic - "Apple rejected the app. Find the guideline violation."',
            // Month 6
            'Week 21: Variables & Types. Topic: Strings, Integers, Booleans, Scope. Quiz: Type Logic - "What happens if you add \'5\' (string) + 5 (number)?"',
            'Week 22: Control Flow. Topic: If/Else, Switch statements. Quiz: Logic Flow - "Trace the path of this function if x=10."',
            'Week 23: Loops. Topic: For loops, While loops, Iteration. Quiz: Loop Logic - "How many times will this for loop run before crashing?"',
            'Week 24: Functions. Topic: Arguments, Returns, Reusability. Quiz: Function Logic - "Refactor this code into a reusable function."',
            // Phase 2: AI-Assisted Dev - Month 7
            'Week 25: Context Management. Topic: Token limits, providing context files. Quiz: Context Logic - "The AI forgot the code from the previous file. Why? (Token limit exceeded)."',
            'Week 26: System Prompts. Topic: Setting the AI persona ("Act as a Senior Dev"). Quiz: Prompt Logic - "Write a system prompt that forces the AI to use Python."',
            'Week 27: Boilerplate Generation. Topic: Generating project skeletons. Quiz: Scaffolding Logic - "Generate a React folder structure."',
            'Week 28: Pastebin & Sharing. Topic: Formatting code for AI (Markdown blocks). Quiz: Formatting Logic - "The AI misread the indentation. Fix the paste format."',
            // Month 8
            'Week 29: Error Logs. Topic: Reading stack traces, identifying root causes. Quiz: Debug Logic - "Here is a stack trace. Select the prompt that correctly asks AI to fix the specific line."',
            'Week 30: AI Debugging Workflows. Topic: Paste-to-Debug, Iterative fixing. Quiz: Fix Logic - "The AI suggested 3 fixes. Which one breaks the least amount of other code?"',
            'Week 31: Refactoring. Topic: Cleaning up code, optimization prompts. Quiz: Clean Code Logic - "Ask AI to rename these variables to be more descriptive."',
            'Week 32: Commenting. Topic: Auto-generating JSDoc/Docstrings. Quiz: Doc Logic - "Does the comment match the function behavior?"',
            // Month 9
            'Week 33: NLP to Code. Topic: Codex, Copilot, Ghostwriter. Quiz: NLP Logic - "Translate this user requirement (\'I want the door to open when I have the key\') into an If/Then logic statement."',
            'Week 34: Game Scripting. Topic: Generating C# / Lua behaviors. Quiz: Script Logic - "Generate a script to make the player jump."',
            'Week 35: NPC Logic. Topic: State machines generated by AI. Quiz: AI Behavior - "The NPC is stuck walking into a wall. Debug the state machine."',
            'Week 36: Complex Logic. Topic: Algorithms, Sorting logic. Quiz: Algo Logic - "Ask AI to write the most efficient sorting algorithm for this list."',
            // Month 10
            'Week 37: Framework Translation. Topic: Converting React to React Native. Quiz: Translation Logic - "The AI used a Web-only library for a Mobile app. Spot the invalid import."',
            'Week 38: Platform Fixes. Topic: Android vs iOS specific bugs. Quiz: Platform Logic - "This permission works on Android but fails on iOS. Why?"',
            'Week 39: Dependency Management. Topic: npm, yarn, AI package suggestions. Quiz: Package Logic - "The AI suggested a deprecated package. Find the modern alternative."',
            'Week 40: Optimization. Topic: Memory leaks, Performance profiling. Quiz: Perf Logic - "Identify the memory leak in this loop."',
            // Month 11
            'Week 41: AI Red Teaming. Topic: Asking AI to hack your own code. Quiz: Security Logic - "The AI generated code that allows a user to delete the database. Spot the vulnerability."',
            'Week 42: SQL Injection. Topic: Sanitizing inputs with AI checks. Quiz: Injection Logic - "Spot the un-sanitized input field."',
            'Week 43: Big O Notation. Topic: Efficiency, Complexity analysis. Quiz: Complexity Logic - "Which of these 2 functions is O(n) vs O(n^2)?"',
            'Week 44: Stress Testing. Topic: Simulating high load. Quiz: Load Logic - "The server crashed at 1000 users. Why?"',
            // Month 12
            'Week 45: ReadMe Generation. Topic: Writing clear instructions for users. Quiz: Documentation Logic - "Match the function to the correct AI-generated description."',
            'Week 46: Release Notes. Topic: Changelogs, Versioning (SemVer). Quiz: Version Logic - "Is this update a Patch, Minor, or Major version?"',
            'Week 47: Deployment Scripts. Topic: CI/CD pipelines, Dockerfiles. Quiz: Deploy Logic - "The build failed in the pipeline. Check the logs."',
            'Week 48: Final Launch. Topic: Live Demo. Quiz: Final Exam - Comprehensive logic check.',
            // Phase 3: The Incubator (Group Project)
            'Week 49: The Triad Formation. Topic: Merging the Top 1% (Media + Biz + Code) into founders. Equity & IP. Quiz: Co-Founder Logic - "Resolve a dispute between the CEO and CTO regarding feature scope vs launch date."',
            'Week 50: The Integrated MVP. Topic: Combining Media Assets, Business Logic, and Codebase into a single product. Quiz: Dependency Logic - "The marketing video promises a feature the code doesn\'t support yet. Fix the disconnect."',
            'Week 51: Market Simulation. Topic: Stress testing the company with live AI traffic and customer support swarms. Quiz: Crisis Logic - "Server costs spiked 500% overnight due to a viral video. Find the loop error."',
            'Week 52: The Venture Pitch. Topic: Final Defense before Investors. Valuation and Exit Strategy. Quiz: Exit Logic - "Negotiate the terms of the acquisition based on your MRR."'
        ]
    }
};