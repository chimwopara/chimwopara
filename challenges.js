/**
 * Weekly Challenges - Hardcoded Challenge Data
 * 26 comprehensive challenges for the curriculum
 */

window.weeklyChallenges = [
    // CHALLENGE 1: Microsoft Excel AI Productivity
    {
        id: 1,
        title: "Microsoft Excel AI Productivity with Claude",
        goal: "Master using Claude to enhance Excel productivity and data analysis",
        concepts: "Excel basics, Claude AI integration, formulas, data manipulation, automation",
        language: "Excel/AI",
        sequence: [
            { type: "goal", text: "Opening Applications" },
            {
                correct: "Open Microsoft Excel and create a new blank workbook",
                indent: 0,
                explanation: "Start with a fresh Excel workbook to practice AI-enhanced productivity",
                distractors: [
                    { text: "Open Microsoft Word instead", reason: "Word is for documents, not spreadsheets. We need Excel for data analysis" },
                    { text: "Open Google Sheets", reason: "While similar, we're specifically learning Excel's features with Claude" }
                ]
            },
            {
                correct: "Open Claude.ai in your web browser alongside Excel",
                indent: 0,
                explanation: "Claude can help generate formulas, analyze data, and automate tasks",
                distractors: [
                    { text: "Close all browser windows", reason: "We need Claude open to assist with Excel tasks" },
                    { text: "Open ChatGPT instead", reason: "This course focuses on Claude's capabilities with Excel" }
                ]
            },
            { type: "goal", text: "Setting Up Template" },
            {
                correct: "Prompt Claude: 'Help me create a monthly budget template in Excel'",
                indent: 0,
                explanation: "Claude can generate structured templates with formulas",
                distractors: [
                    { text: "Ask Claude to open Excel for you", reason: "Claude can't control your applications, it provides guidance and formulas" },
                    { text: "Just start typing random data", reason: "Strategic prompting helps Claude give you better structured solutions" }
                ]
            },
            {
                correct: "Copy Claude's suggested column headers into Row 1 of Excel",
                indent: 0,
                explanation: "Claude provides organized structure - implement its recommendations",
                distractors: [
                    { text: "Ignore Claude's suggestions and make your own", reason: "Claude's suggestions are optimized and follow best practices" },
                    { text: "Put headers in random cells", reason: "Row 1 is the standard location for column headers" }
                ]
            },
            { type: "goal", text: "Using Formulas" },
            {
                correct: "Ask Claude: 'Give me a SUM formula to total my expenses'",
                indent: 0,
                explanation: "Claude can generate exact Excel formulas for your needs",
                distractors: [
                    { text: "Manually add all numbers with a calculator", reason: "Excel formulas are dynamic and update automatically" },
                    { text: "Use the AVERAGE function instead", reason: "We need SUM for totaling, AVERAGE gives the mean" }
                ]
            },
            {
                correct: "Paste Claude's formula into the appropriate cell (e.g., =SUM(B2:B10))",
                indent: 0,
                explanation: "Copy the exact formula Claude provides for accurate calculations",
                distractors: [
                    { text: "Modify the formula without understanding it", reason: "Claude's formulas are precise - changing them randomly causes errors" },
                    { text: "Type the formula in as plain text", reason: "Formulas must start with '=' to function properly" }
                ]
            },
            { type: "goal", text: "Data Validation" },
            {
                correct: "Prompt Claude: 'How do I create a dropdown list in Excel?'",
                indent: 0,
                explanation: "Claude teaches Excel features step-by-step",
                distractors: [
                    { text: "Skip data validation features", reason: "Dropdowns prevent errors and standardize data entry" },
                    { text: "Guess how to do it yourself", reason: "Claude can provide exact steps saving you time" }
                ]
            },
            {
                correct: "Follow Claude's instructions: Select cells → Data → Data Validation → List",
                indent: 0,
                explanation: "Data validation creates professional, error-free spreadsheets",
                distractors: [
                    { text: "Use Insert → Table instead", reason: "Tables don't create dropdowns; Data Validation does" },
                    { text: "Right-click and hope to find dropdown option", reason: "Data Validation is in the Data tab, not context menus" }
                ]
            },
            { type: "goal", text: "Advanced Features" },
            {
                correct: "Ask Claude: 'Generate a VLOOKUP formula to match customer names to IDs'",
                indent: 0,
                explanation: "VLOOKUP is essential for cross-referencing data",
                distractors: [
                    { text: "Manually search and copy each match", reason: "VLOOKUP automates this for thousands of entries instantly" },
                    { text: "Use CONCATENATE instead", reason: "CONCATENATE joins text; VLOOKUP searches and retrieves data" }
                ]
            },
            {
                correct: "Request: 'Help me create a pivot table to analyze sales by region'",
                indent: 0,
                explanation: "Claude guides you through complex features like Pivot Tables",
                distractors: [
                    { text: "Manually calculate totals for each region", reason: "Pivot Tables automatically aggregate and analyze large datasets" },
                    { text: "Skip pivot tables entirely", reason: "Pivot Tables are crucial for data analysis and reporting" }
                ]
            }
        ]
    },

    // CHALLENGE 2: PowerPoint & Word AI Productivity
    {
        id: 2,
        title: "PowerPoint & Word AI Productivity with Claude",
        goal: "Use Claude to create professional presentations and documents efficiently",
        concepts: "PowerPoint design, Word formatting, AI content generation, templates",
        language: "Office/AI",
        sequence: [
            { type: "goal", text: "Planning with AI" },
            {
                correct: "Open Claude and prompt: 'Create an outline for a 10-slide presentation about AI in business'",
                indent: 0,
                explanation: "Start with AI-generated structure before opening PowerPoint",
                distractors: [
                    { text: "Open PowerPoint and stare at blank slides", reason: "Planning with Claude first saves time and ensures better structure" },
                    { text: "Search Google for presentation ideas", reason: "Claude generates custom, tailored content instantly" }
                ]
            },
            { type: "goal", text: "Creating Presentation Structure" },
            {
                correct: "Open PowerPoint and create a new blank presentation",
                indent: 0,
                explanation: "Now implement Claude's structure in PowerPoint",
                distractors: [
                    { text: "Use a random built-in template", reason: "Claude's custom outline is better than generic templates" },
                    { text: "Open Word instead", reason: "We're creating a presentation, not a document" }
                ]
            },
            {
                correct: "Copy each slide title from Claude's outline into PowerPoint slides",
                indent: 0,
                explanation: "Implement the AI-generated structure systematically",
                distractors: [
                    { text: "Make up your own titles randomly", reason: "Claude's outline is researched and logical" },
                    { text: "Put all content on one slide", reason: "One idea per slide is presentation best practice" }
                ]
            },
            {
                correct: "Ask Claude: 'Write 3 bullet points for slide 1: Introduction to AI'",
                indent: 0,
                explanation: "Claude fills in detailed content for each slide",
                distractors: [
                    { text: "Write vague, generic points yourself", reason: "Claude provides researched, specific content" },
                    { text: "Copy paragraphs from Wikipedia", reason: "Claude creates original, concise bullet points perfect for slides" }
                ]
            },
            { type: "goal", text: "Applying Design" },
            {
                correct: "Request: 'Suggest a color scheme for a professional tech presentation'",
                indent: 0,
                explanation: "Claude provides design guidance, not just content",
                distractors: [
                    { text: "Use rainbow colors randomly", reason: "Professional presentations need cohesive, purposeful color schemes" },
                    { text: "Keep everything black and white", reason: "Strategic color enhances comprehension and engagement" }
                ]
            },
            {
                correct: "Apply Claude's suggested colors: Design → Themes → Colors → Custom Colors",
                indent: 0,
                explanation: "PowerPoint's design tools implement Claude's recommendations",
                distractors: [
                    { text: "Manually color each element individually", reason: "Theme colors apply consistently across all slides automatically" },
                    { text: "Ignore color consistency", reason: "Consistent design looks professional and is easier to read" }
                ]
            },
            { type: "goal", text: "Creating Word Document" },
            {
                correct: "Open Microsoft Word for the accompanying report",
                indent: 0,
                explanation: "Professional projects often need both presentations and documents",
                distractors: [
                    { text: "Use Notepad for the report", reason: "Word offers formatting, styles, and professional features" },
                    { text: "Skip the written report", reason: "Documentation is crucial for comprehensive project delivery" }
                ]
            },
            {
                correct: "Prompt Claude: 'Write a 500-word executive summary about AI adoption'",
                indent: 0,
                explanation: "Claude generates professional written content on demand",
                distractors: [
                    { text: "Write 2 sentences and call it done", reason: "Executive summaries need comprehensive yet concise coverage" },
                    { text: "Copy/paste your slides into Word", reason: "Reports need different structure and depth than presentations" }
                ]
            },
            {
                correct: "Use Word's Styles: Apply 'Heading 1' to your title, 'Normal' to body text",
                indent: 0,
                explanation: "Styles ensure consistent formatting and enable auto-generated tables of contents",
                distractors: [
                    { text: "Manually bold and resize each heading", reason: "Styles save time and maintain consistency throughout the document" },
                    { text: "Use all the same formatting", reason: "Visual hierarchy helps readers navigate your document" }
                ]
            },
            { type: "goal", text: "Professional Communication" },
            {
                correct: "Ask Claude: 'Generate a professional email to send this presentation'",
                indent: 0,
                explanation: "Complete the workflow with professional communication",
                distractors: [
                    { text: "Send the file with no message", reason: "Professional communication requires context and courtesy" },
                    { text: "Write: 'Here's the thing u asked for'", reason: "Professional emails need proper grammar, clarity, and structure" }
                ]
            }
        ]
    },

    // CHALLENGE 3: Create GitHub Account
    {
        id: 3,
        title: "Create a GitHub Account",
        goal: "Set up a professional GitHub account for version control and collaboration",
        concepts: "GitHub registration, profile setup, security, SSH keys",
        language: "Git/GitHub",
        sequence: [
            { type: "goal", text: "Creating Account" },
            {
                correct: "Navigate to github.com in your web browser",
                indent: 0,
                explanation: "GitHub is the starting point for version control and code hosting",
                distractors: [
                    { text: "Go to gitlab.com", reason: "While similar, this course focuses on GitHub specifically" },
                    { text: "Download Git first", reason: "Create your account first, then install Git tools" }
                ]
            },
            {
                correct: "Click 'Sign up' in the top right corner",
                indent: 0,
                explanation: "The sign-up process creates your developer identity",
                distractors: [
                    { text: "Click 'Sign in' instead", reason: "You don't have an account yet, you need to sign up" },
                    { text: "Search for repositories first", reason: "You need an account to interact with repositories" }
                ]
            },
            { type: "goal", text: "Account Credentials" },
            {
                correct: "Enter your email address (use a professional email you check regularly)",
                indent: 0,
                explanation: "This email receives all GitHub notifications and collaboration requests",
                distractors: [
                    { text: "Use a temporary/disposable email", reason: "You'll lose access to your account if you can't verify emails" },
                    { text: "Enter someone else's email", reason: "You need access to the email for verification and notifications" }
                ]
            },
            {
                correct: "Create a strong password with 15+ characters including numbers and symbols",
                indent: 0,
                explanation: "Strong passwords protect your code and contributions",
                distractors: [
                    { text: "Use 'password123'", reason: "Weak passwords put your entire codebase at risk" },
                    { text: "Use your birthday", reason: "Personal info is easily guessed by attackers" }
                ]
            },
            {
                correct: "Choose a username that's professional and represents you (e.g., firstname-lastname)",
                indent: 0,
                explanation: "Your username is public and appears on all your contributions",
                distractors: [
                    { text: "Use 'coolguy420' or similar", reason: "Unprofessional usernames hurt your credibility with employers" },
                    { text: "Use special characters and emojis", reason: "GitHub usernames must be alphanumeric and professional" }
                ]
            },
            { type: "goal", text: "Verification & Security" },
            {
                correct: "Complete the puzzle verification to prove you're human",
                indent: 0,
                explanation: "GitHub uses CAPTCHA to prevent bot accounts",
                distractors: [
                    { text: "Skip the verification", reason: "Verification is required to create an account" },
                    { text: "Refresh until it goes away", reason: "Security verification is mandatory for all users" }
                ]
            },
            {
                correct: "Check your email and click the verification link",
                indent: 0,
                explanation: "Email verification activates your account and proves ownership",
                distractors: [
                    { text: "Ignore the email", reason: "Unverified accounts have limited functionality" },
                    { text: "Wait for GitHub to auto-verify", reason: "You must manually click the verification link" }
                ]
            },
            {
                correct: "Set up two-factor authentication (2FA) in Settings → Security",
                indent: 0,
                explanation: "2FA is essential security for protecting your code repositories",
                distractors: [
                    { text: "Skip 2FA setup", reason: "Without 2FA, your account is vulnerable to attacks" },
                    { text: "Write your backup codes on a Post-it", reason: "Backup codes should be stored securely, not on your desk" }
                ]
            },
            { type: "goal", text: "Profile & SSH Setup" },
            {
                correct: "Add a profile photo and bio in Settings → Profile",
                indent: 0,
                explanation: "Professional profiles make you discoverable and credible",
                distractors: [
                    { text: "Leave everything blank", reason: "A complete profile helps with networking and job opportunities" },
                    { text: "Use a meme as your profile picture", reason: "Professional image builds professional reputation" }
                ]
            },
            {
                correct: "Generate an SSH key: Settings → SSH and GPG keys → New SSH key",
                indent: 0,
                explanation: "SSH keys enable secure, password-free authentication",
                distractors: [
                    { text: "Use HTTPS and type password every time", reason: "SSH keys are more secure and convenient for regular use" },
                    { text: "Share your SSH private key with others", reason: "Private keys must NEVER be shared - they're like passwords" }
                ]
            }
        ]
    },

    // CHALLENGE 4: Set up IDEs
    {
        id: 4,
        title: "Set Up and Learn IDEs (VS Code, Xcode)",
        goal: "Install and configure professional development environments",
        concepts: "IDE installation, extensions, themes, keyboard shortcuts, debugging",
        language: "Tools/IDEs",
        sequence: [
            { type: "goal", text: "Installing VS Code" },
            {
                correct: "Download VS Code from code.visualstudio.com",
                indent: 0,
                explanation: "VS Code is the industry-standard free code editor",
                distractors: [
                    { text: "Use Notepad for coding", reason: "Notepad lacks syntax highlighting, autocomplete, and debugging tools" },
                    { text: "Download Visual Studio (full IDE)", reason: "VS Code is lighter and more suitable for web development" }
                ]
            },
            {
                correct: "Install VS Code using the downloaded installer (accept default settings)",
                indent: 0,
                explanation: "Default settings include important PATH additions",
                distractors: [
                    { text: "Cancel installation halfway through", reason: "Incomplete installation causes missing features and errors" },
                    { text: "Uncheck 'Add to PATH'", reason: "PATH integration allows opening VS Code from terminal" }
                ]
            },
            { type: "goal", text: "Essential Extensions" },
            {
                correct: "Open VS Code and install the 'Live Server' extension",
                indent: 0,
                explanation: "Live Server enables real-time preview of HTML/CSS/JS changes",
                distractors: [
                    { text: "Skip all extensions", reason: "Extensions provide essential functionality for web development" },
                    { text: "Install every extension you see", reason: "Too many extensions slow down VS Code unnecessarily" }
                ]
            },
            {
                correct: "Install 'Prettier - Code formatter' extension",
                indent: 0,
                explanation: "Prettier automatically formats code to industry standards",
                distractors: [
                    { text: "Manually format all your code", reason: "Prettier saves hours and ensures consistency" },
                    { text: "Install 'Beautify' instead", reason: "Prettier is more modern and configurable" }
                ]
            },
            {
                correct: "Enable Format on Save: Settings → Format On Save ✓",
                indent: 0,
                explanation: "Auto-formatting on save ensures consistent, clean code",
                distractors: [
                    { text: "Manually run format after every change", reason: "Format on Save automates this tedious task" },
                    { text: "Never format your code", reason: "Unformatted code is hard to read and unprofessional" }
                ]
            },
            {
                correct: "Install 'GitHub Copilot' extension (if you have access)",
                indent: 0,
                explanation: "Copilot provides AI-powered code suggestions and completions",
                distractors: [
                    { text: "Copy all code from Stack Overflow", reason: "Copilot generates contextual, original code" },
                    { text: "Reject all AI coding tools", reason: "AI assistants are industry-standard productivity tools" }
                ]
            },
            { type: "goal", text: "Installing Xcode (Mac)" },
            {
                correct: "For Mac users: Download Xcode from the Mac App Store",
                indent: 0,
                explanation: "Xcode is required for iOS/macOS development and provides essential command-line tools",
                distractors: [
                    { text: "Use VS Code for iOS apps", reason: "iOS apps require Xcode and Swift compiler" },
                    { text: "Download Xcode from random websites", reason: "Only download from official App Store to avoid malware" }
                ]
            },
            {
                correct: "Install Xcode Command Line Tools: xcode-select --install in Terminal",
                indent: 0,
                explanation: "Command Line Tools provide git, make, and essential development utilities",
                distractors: [
                    { text: "Skip command line tools", reason: "Many development workflows require these tools" },
                    { text: "Download tools from third-party sites", reason: "Use official Apple installation for security and compatibility" }
                ]
            },
            { type: "goal", text: "Testing Setup" },
            {
                correct: "Create a test HTML file in VS Code to verify setup",
                indent: 0,
                explanation: "Testing confirms your environment is working properly",
                distractors: [
                    { text: "Assume everything works without testing", reason: "Always verify your setup before starting real projects" },
                    { text: "Write code in Microsoft Word", reason: "Word adds formatting that breaks code - use a code editor" }
                ]
            },
            {
                correct: "Right-click the HTML file and select 'Open with Live Server'",
                indent: 0,
                explanation: "Live Server launches a local development server with auto-reload",
                distractors: [
                    { text: "Double-click to open in browser", reason: "Live Server provides hot-reload and proper HTTP serving" },
                    { text: "Upload to a web host to test", reason: "Local testing is faster and safer for development" }
                ]
            }
        ]
    },

    // CHALLENGE 5: Terminal & Bash
    {
        id: 5,
        title: "Terminal & Bash Commands",
        goal: "Master command-line navigation and essential bash commands",
        concepts: "Terminal basics, file system navigation, bash commands, shortcuts",
        language: "Bash/Terminal",
        sequence: [
            { type: "goal", text: "Opening Terminal" },
            {
                correct: "Open Terminal (Mac: Cmd+Space, type 'Terminal') or (Windows: Git Bash)",
                indent: 0,
                explanation: "The terminal is your direct interface to the operating system",
                distractors: [
                    { text: "Look for a button to click instead", reason: "Command-line interfaces are text-based, not GUI-based" },
                    { text: "Open Command Prompt on Mac", reason: "Mac uses Terminal; Command Prompt is Windows-only" }
                ]
            },
            { type: "goal", text: "Navigation Commands" },
            {
                correct: "Type: pwd (Print Working Directory)",
                indent: 0,
                explanation: "pwd shows your current location in the file system",
                distractors: [
                    { text: "Type: password", reason: "pwd stands for Print Working Directory, not password" },
                    { text: "Type: dir", reason: "dir is Windows CMD; pwd is the bash command" }
                ]
            },
            {
                correct: "Type: ls (list files and folders in current directory)",
                indent: 0,
                explanation: "ls shows what's in your current folder",
                distractors: [
                    { text: "Type: list", reason: "The command is 'ls', not 'list'" },
                    { text: "Type: show files", reason: "Bash uses short commands: ls, not phrases" }
                ]
            },
            {
                correct: "Type: ls -la (shows all files including hidden, with details)",
                indent: 0,
                explanation: "Flags modify commands: -l for details, -a for all including hidden",
                distractors: [
                    { text: "Type: ls all details", reason: "Flags use hyphens: -la, not words" },
                    { text: "Click to show hidden files", reason: "Terminal is command-based, use ls -la" }
                ]
            },
            {
                correct: "Type: cd Documents (Change Directory to Documents folder)",
                indent: 0,
                explanation: "cd navigates to different folders in your file system",
                distractors: [
                    { text: "Type: open Documents", reason: "open launches files; cd navigates to folders" },
                    { text: "Type: goto Documents", reason: "The command is 'cd', not 'goto'" }
                ]
            },
            {
                correct: "Type: cd .. (go up one directory level)",
                indent: 0,
                explanation: ".. represents the parent directory in file paths",
                distractors: [
                    { text: "Type: cd back", reason: "Use 'cd ..' to go up, not 'cd back'" },
                    { text: "Type: up", reason: "The command is 'cd ..', not 'up'" }
                ]
            },
            { type: "goal", text: "File & Folder Operations" },
            {
                correct: "Type: mkdir my-project (create a new directory)",
                indent: 0,
                explanation: "mkdir makes new directories/folders",
                distractors: [
                    { text: "Type: create folder my-project", reason: "The command is 'mkdir', not 'create folder'" },
                    { text: "Type: new my-project", reason: "Use 'mkdir' to make directories" }
                ]
            },
            {
                correct: "Type: touch index.html (create a new file)",
                indent: 0,
                explanation: "touch creates empty files quickly from terminal",
                distractors: [
                    { text: "Type: make index.html", reason: "'make' is for build automation, use 'touch' for files" },
                    { text: "Type: create index.html", reason: "The command is 'touch', not 'create'" }
                ]
            },
            {
                correct: "Type: rm -rf old-folder (remove folder and contents)",
                indent: 0,
                explanation: "rm removes files; -rf forces recursive deletion of folders",
                distractors: [
                    { text: "Type: delete old-folder", reason: "'rm -rf' is the bash command for recursive deletion" },
                    { text: "Type: rm old-folder (without -rf)", reason: "Folders need -rf flag; files use rm alone" }
                ]
            },
            { type: "goal", text: "Terminal Maintenance" },
            {
                correct: "Type: clear (clear the terminal screen)",
                indent: 0,
                explanation: "clear removes clutter and gives you a fresh workspace",
                distractors: [
                    { text: "Close and reopen Terminal", reason: "'clear' cleans the screen without losing your session" },
                    { text: "Type: cls", reason: "'cls' is Windows CMD; 'clear' is bash" }
                ]
            }
        ]
    },

    // CHALLENGE 6: Git & GitHub Basics
    {
        id: 6,
        title: "Git & GitHub Basics",
        goal: "Master version control with Git and GitHub collaboration",
        concepts: "Git init, commits, branches, push/pull, merge, repositories",
        language: "Git/GitHub",
        sequence: [
            { type: "goal", text: "Initializing Local Repository" },
            {
                correct: "Open Terminal and navigate to your project folder: cd ~/Documents/my-project",
                indent: 0,
                explanation: "You must be inside your project folder to initialize Git",
                distractors: [
                    { text: "Initialize Git from any random folder", reason: "Git tracks the folder you're in - be in the right project" },
                    { text: "Skip navigation, just type commands", reason: "Git needs to know which folder to track" }
                ]
            },
            {
                correct: "Type: git init (initialize a new Git repository)",
                indent: 0,
                explanation: "git init creates a .git folder that tracks all changes",
                distractors: [
                    { text: "Type: git start", reason: "The command is 'git init', not 'git start'" },
                    { text: "Type: create git", reason: "Use 'git init' to initialize version control" }
                ]
            },
            { type: "goal", text: "Making First Commit" },
            {
                correct: "Type: git status (check what files are untracked)",
                indent: 0,
                explanation: "git status shows the current state of your working directory",
                distractors: [
                    { text: "Type: git check", reason: "'git status' is the command to see file states" },
                    { text: "Assume Git is tracking everything", reason: "Always check status before committing" }
                ]
            },
            {
                correct: "Type: git add . (stage all files for commit)",
                indent: 0,
                explanation: "Staging prepares files to be committed to history",
                distractors: [
                    { text: "Type: git add all", reason: "Use 'git add .' where . means all files" },
                    { text: "Skip staging and commit directly", reason: "Git requires staging before commits" }
                ]
            },
            {
                correct: "Type: git commit -m 'Initial commit' (save changes with message)",
                indent: 0,
                explanation: "Commits create snapshots of your code with descriptive messages",
                distractors: [
                    { text: "Type: git save", reason: "'git commit' is how you save changes to history" },
                    { text: "Commit without a message", reason: "-m flag with message documents what changed" }
                ]
            },
            { type: "goal", text: "Connecting to GitHub" },
            {
                correct: "Create a new repository on GitHub.com (click + → New repository)",
                indent: 0,
                explanation: "GitHub hosts your code remotely for backup and collaboration",
                distractors: [
                    { text: "Keep everything only on your computer", reason: "Remote repositories enable backup, sharing, and collaboration" },
                    { text: "Create repo in GitLab instead", reason: "We're using GitHub for this course" }
                ]
            },
            {
                correct: "Copy the SSH URL from GitHub (e.g., [email protected]:username/repo.git)",
                indent: 0,
                explanation: "SSH URLs enable secure, password-free authentication",
                distractors: [
                    { text: "Use the HTTPS URL instead", reason: "SSH is more secure and convenient for regular use" },
                    { text: "Make up your own URL", reason: "GitHub provides the exact URL - copy it precisely" }
                ]
            },
            {
                correct: "Type: git remote add origin [SSH URL] (link local repo to GitHub)",
                indent: 0,
                explanation: "'origin' is the conventional name for your main remote repository",
                distractors: [
                    { text: "Type: git connect github", reason: "The command is 'git remote add origin [URL]'" },
                    { text: "Skip adding remote", reason: "Without remote, you can't push to GitHub" }
                ]
            },
            { type: "goal", text: "Pushing & Branching" },
            {
                correct: "Type: git push -u origin main (push your code to GitHub)",
                indent: 0,
                explanation: "-u sets upstream tracking so future pushes just need 'git push'",
                distractors: [
                    { text: "Type: git upload", reason: "'git push' is the command to send code to remote" },
                    { text: "Manually upload files to GitHub", reason: "Git push handles transfer and version control automatically" }
                ]
            },
            {
                correct: "Type: git branch feature-branch (create a new branch)",
                indent: 0,
                explanation: "Branches let you work on features without affecting main code",
                distractors: [
                    { text: "Always work on main branch", reason: "Branches enable safe experimentation and collaboration" },
                    { text: "Type: new branch feature-branch", reason: "The command is 'git branch [name]'" }
                ]
            }
        ]
    },

    // CHALLENGE 7-26: Continue with remaining challenges...
    // Due to length, I'll provide the structure for a few more and you can expand

    // CHALLENGE 7: Porkbun Account
    {
        id: 7,
        title: "Set Up a Porkbun Account",
        goal: "Create an account on Porkbun for domain registration",
        concepts: "Domain registrars, account setup, security, payment methods",
        language: "Web/Domains",
        sequence: [
            { type: "goal", text: "Creating Account" },
            {
                correct: "Navigate to porkbun.com in your browser",
                indent: 0,
                explanation: "Porkbun is a domain registrar with competitive pricing",
                distractors: [
                    { text: "Go to GoDaddy instead", reason: "This course uses Porkbun for its better pricing and features" },
                    { text: "Search Google for 'cheap domains'", reason: "Porkbun is already the recommended registrar" }
                ]
            },
            {
                correct: "Click 'Sign Up' in the top right corner",
                indent: 0,
                explanation: "Creating an account is required before purchasing domains",
                distractors: [
                    { text: "Search for domains without account", reason: "You need an account to complete purchases" },
                    { text: "Click 'Login' instead", reason: "You don't have an account yet" }
                ]
            },
            { type: "goal", text: "Account Setup" },
            {
                correct: "Enter your email address (use one you check regularly)",
                indent: 0,
                explanation: "This email receives domain renewals and important notices",
                distractors: [
                    { text: "Use a temporary email", reason: "You'll lose domain access if you can't receive emails" },
                    { text: "Enter a fake email", reason: "Valid email is required for domain ownership verification" }
                ]
            },
            {
                correct: "Create a strong password with 12+ characters",
                indent: 0,
                explanation: "Strong passwords protect your domain portfolio",
                distractors: [
                    { text: "Use 'password'", reason: "Weak passwords risk domain hijacking" },
                    { text: "Use your pet's name", reason: "Personal info is easily guessed" }
                ]
            },
            { type: "goal", text: "Security & Payment" },
            {
                correct: "Enable two-factor authentication in Account Settings",
                indent: 0,
                explanation: "2FA prevents unauthorized access to your domains",
                distractors: [
                    { text: "Skip 2FA", reason: "Without 2FA, attackers can steal your domains" },
                    { text: "Use SMS 2FA only", reason: "App-based 2FA is more secure than SMS" }
                ]
            },
            {
                correct: "Add a payment method (credit card or PayPal)",
                indent: 0,
                explanation: "Payment methods enable domain purchases and renewals",
                distractors: [
                    { text: "Wait to add payment later", reason: "You need payment to buy domains" },
                    { text: "Use someone else's card", reason: "Use your own payment method for legal ownership" }
                ]
            },
            { type: "goal", text: "Verification & Contact Info" },
            {
                correct: "Verify your email address by clicking the confirmation link",
                indent: 0,
                explanation: "Email verification activates your account",
                distractors: [
                    { text: "Ignore the verification email", reason: "Unverified accounts can't purchase domains" },
                    { text: "Wait for auto-verification", reason: "You must manually click the link" }
                ]
            },
            {
                correct: "Review account settings and ensure contact info is accurate",
                indent: 0,
                explanation: "Accurate WHOIS info is legally required for domain ownership",
                distractors: [
                    { text: "Use fake contact information", reason: "ICANN requires accurate registrant data" },
                    { text: "Leave contact info blank", reason: "Complete contact info is mandatory" }
                ]
            },
            { type: "goal", text: "Platform Familiarization" },
            {
                correct: "Familiarize yourself with the domain search interface",
                indent: 0,
                explanation: "Understanding search helps you find available domains efficiently",
                distractors: [
                    { text: "Buy the first domain you see", reason: "Research and compare before purchasing" },
                    { text: "Skip learning the interface", reason: "Knowing tools saves time when buying domains" }
                ]
            },
            {
                correct: "Review Porkbun's pricing and renewal rates",
                indent: 0,
                explanation: "Know ongoing costs before purchasing domains",
                distractors: [
                    { text: "Ignore renewal prices", reason: "Renewals can be expensive - know costs upfront" },
                    { text: "Assume all domains are the same price", reason: "Different TLDs have different prices" }
                ]
            }
        ]
    },

    // CHALLENGE 8: Buy a Domain
    {
        id: 8,
        title: "Buy a Domain on Porkbun",
        goal: "Purchase your first domain name",
        concepts: "Domain search, TLDs, pricing, checkout, DNS basics",
        language: "Web/Domains",
        sequence: [
            { type: "goal", text: "Domain Research" },
            {
                correct: "Think of a domain name related to your project or brand",
                indent: 0,
                explanation: "Your domain is your online identity - choose wisely",
                distractors: [
                    { text: "Pick random letters and numbers", reason: "Domains should be memorable and meaningful" },
                    { text: "Use special characters", reason: "Domains can only contain letters, numbers, and hyphens" }
                ]
            },
            {
                correct: "Enter your domain idea in Porkbun's search box (e.g., 'myproject.com')",
                indent: 0,
                explanation: "Search shows availability and suggests alternatives",
                distractors: [
                    { text: "Buy without searching", reason: "You must check availability first" },
                    { text: "Type a full URL with https://", reason: "Just enter the domain name without protocol" }
                ]
            },
            {
                correct: "Review available TLDs (.com, .io, .dev, etc.) and choose one",
                indent: 0,
                explanation: ".com is most common; .io and .dev are popular for tech",
                distractors: [
                    { text: "Only consider .com", reason: "Other TLDs can be great alternatives if .com is taken" },
                    { text: "Choose .xxx for a business site", reason: "TLD choice affects credibility - choose appropriately" }
                ]
            },
            { type: "goal", text: "Cart & Configuration" },
            {
                correct: "Add your chosen domain to cart",
                indent: 0,
                explanation: "Cart holds your selection while you configure options",
                distractors: [
                    { text: "Buy immediately without reviewing", reason: "Review cart for add-ons and pricing first" },
                    { text: "Add 20 domains at once", reason: "Start with one domain to learn the process" }
                ]
            },
            {
                correct: "Select '1 year' for your first domain registration",
                indent: 0,
                explanation: "1 year is standard; extend later if project succeeds",
                distractors: [
                    { text: "Buy 10 years immediately", reason: "Test with 1 year first; projects change" },
                    { text: "Select 1 month", reason: "Domains are registered annually, not monthly" }
                ]
            },
            {
                correct: "Enable 'WHOIS Privacy Protection' (usually free)",
                indent: 0,
                explanation: "WHOIS privacy hides your personal contact info from public searches",
                distractors: [
                    { text: "Disable privacy protection", reason: "Without privacy, your email and address are public" },
                    { text: "Pay extra for privacy if free", reason: "Porkbun includes privacy free - don't pay extra" }
                ]
            },
            {
                correct: "Disable auto-renewal for now (you can enable later)",
                indent: 0,
                explanation: "Auto-renewal prevents accidental charges for unused domains",
                distractors: [
                    { text: "Enable auto-renewal on all domains", reason: "Only auto-renew domains you're actively using" },
                    { text: "Ignore renewal settings", reason: "Control when and what gets renewed to manage costs" }
                ]
            },
            { type: "goal", text: "Checkout & Confirmation" },
            {
                correct: "Review your cart total and proceed to checkout",
                indent: 0,
                explanation: "Double-check domain spelling before purchasing",
                distractors: [
                    { text: "Don't review - just buy", reason: "Typos in domain names can't be refunded" },
                    { text: "Add every suggested upsell", reason: "Only buy what you need" }
                ]
            },
            {
                correct: "Complete payment using your verified payment method",
                indent: 0,
                explanation: "Payment finalizes domain registration",
                distractors: [
                    { text: "Use a payment method you haven't added", reason: "Payment must be pre-verified" },
                    { text: "Close the window before paying", reason: "Incomplete checkout loses your domain" }
                ]
            },
            {
                correct: "Check your email for domain confirmation and welcome message",
                indent: 0,
                explanation: "Confirmation email contains important account and domain info",
                distractors: [
                    { text: "Ignore confirmation emails", reason: "These contain crucial domain management links" },
                    { text: "Mark as spam", reason: "Registrar emails are essential for domain management" }
                ]
            }
        ]
    },

    // CHALLENGE 9: Domain Transfers
    {
        id: 9,
        title: "Transfer an Existing Domain",
        goal: "Safely transfer a domain from one registrar to another",
        concepts: "Domain transfers, EPP codes, registrar locks, DNS preservation, WHOIS",
        language: "Web/Domains",
        sequence: [
            { type: "goal", text: "Preparing at Current Registrar" },
            {
                correct: "Log into your current registrar (where the domain is now)",
                indent: 0,
                explanation: "You must access the current registrar to initiate the transfer process",
                distractors: [
                    { text: "Log into Porkbun first", reason: "Start at the current registrar, not the destination" },
                    { text: "Contact domain support immediately", reason: "First step is logging in to check transfer eligibility" }
                ]
            },
            {
                correct: "Navigate to domain management and locate your domain",
                indent: 0,
                explanation: "Find the specific domain you want to transfer in your account",
                distractors: [
                    { text: "Delete the domain first", reason: "NEVER delete! You'll lose the domain permanently" },
                    { text: "Change nameservers first", reason: "Don't modify DNS until after transfer completes" }
                ]
            },
            {
                correct: "Unlock the domain (disable registrar lock/transfer lock)",
                indent: 0,
                explanation: "Registrar locks prevent unauthorized transfers - you must disable it",
                distractors: [
                    { text: "Keep the domain locked", reason: "Locked domains cannot be transferred" },
                    { text: "Delete domain protection", reason: "Unlock, don't delete security features" }
                ]
            },
            { type: "goal", text: "Getting EPP Code" },
            {
                correct: "Request the EPP code (authorization code/transfer code)",
                indent: 0,
                explanation: "EPP code is like a password proving you own the domain",
                distractors: [
                    { text: "Make up your own transfer code", reason: "EPP codes are generated by the registrar, not created by you" },
                    { text: "Use your account password", reason: "Account password ≠ EPP code; they're different security measures" }
                ]
            },
            {
                correct: "Check your email for the EPP code (usually sent within minutes)",
                indent: 0,
                explanation: "Registrars send EPP codes to the domain's registered email",
                distractors: [
                    { text: "The EPP code appears on screen immediately", reason: "EPP codes are emailed for security, not displayed on screen" },
                    { text: "Call support for the code", reason: "Email delivery is automatic and faster than support calls" }
                ]
            },
            {
                correct: "Copy the EPP code exactly (including any dashes or special characters)",
                indent: 0,
                explanation: "EPP codes are case-sensitive and must be exact",
                distractors: [
                    { text: "Type the code from memory", reason: "EPP codes are complex - always copy to avoid typos" },
                    { text: "Share the EPP code publicly", reason: "EPP codes are secrets - sharing them risks domain theft" }
                ]
            },
            { type: "goal", text: "Initiating Transfer at Porkbun" },
            {
                correct: "Log into Porkbun and go to 'Transfer Domain'",
                indent: 0,
                explanation: "The destination registrar (Porkbun) handles the actual transfer",
                distractors: [
                    { text: "Wait for the old registrar to transfer it", reason: "You must initiate transfer at the new registrar" },
                    { text: "Register a new domain instead", reason: "Transferring preserves your existing domain and registration time" }
                ]
            },
            {
                correct: "Enter your domain name and EPP code when prompted",
                indent: 0,
                explanation: "Porkbun needs both pieces of information to initiate transfer",
                distractors: [
                    { text: "Enter only the domain name", reason: "EPP code is required to authorize the transfer" },
                    { text: "Enter your old registrar login", reason: "Porkbun needs the EPP code, not your old account credentials" }
                ]
            },
            { type: "goal", text: "Completing Transfer" },
            {
                correct: "Complete payment (transfers typically cost the same as 1-year renewal)",
                indent: 0,
                explanation: "Transfers add 1 year to your domain registration",
                distractors: [
                    { text: "Transfers are always free", reason: "Transfers include a 1-year renewal, which costs money" },
                    { text: "Pay at your old registrar", reason: "Payment goes to the new registrar (Porkbun)" }
                ]
            },
            {
                correct: "Check your email and approve the transfer request (usually required)",
                indent: 0,
                explanation: "Email confirmation prevents unauthorized transfers",
                distractors: [
                    { text: "Ignore all emails during transfer", reason: "You must approve the transfer via email confirmation" },
                    { text: "Transfer completes instantly", reason: "Transfers take 5-7 days and require email approval" }
                ]
            }
        ]
    },

    // CHALLENGE 10: Art of Prompting
    {
        id: 10,
        title: "The Art of Prompting AI",
        goal: "Master effective prompting techniques for AI tools like Claude and ChatGPT",
        concepts: "Prompt engineering, context, specificity, iterative refinement, AI capabilities",
        language: "AI/Prompting",
        sequence: [
            { type: "goal", text: "Clear & Specific Prompts" },
            {
                correct: "Start with a clear, specific goal instead of vague requests",
                indent: 0,
                explanation: "AI performs best with precise instructions",
                distractors: [
                    { text: "Ask: 'Help me with code'", reason: "Too vague - what code? What language? What problem?" },
                    { text: "Use single-word prompts", reason: "AI needs context and details to provide useful responses" }
                ]
            },
            {
                correct: "Provide context: 'I'm building a React app for...'",
                indent: 0,
                explanation: "Context helps AI understand your specific situation and constraints",
                distractors: [
                    { text: "Never mention your tech stack", reason: "AI needs to know your tools to give relevant advice" },
                    { text: "Assume AI knows your project", reason: "AI has no memory between sessions - always provide context" }
                ]
            },
            { type: "goal", text: "Format & Constraints" },
            {
                correct: "Specify the format you want: 'Give me code with comments'",
                indent: 0,
                explanation: "Output format instructions ensure you get usable results",
                distractors: [
                    { text: "Let AI choose any format", reason: "Specifying format saves time reformatting later" },
                    { text: "Accept whatever AI gives you", reason: "Request exactly what you need: code, explanation, steps, etc." }
                ]
            },
            {
                correct: "Include constraints: 'No external libraries' or 'Must work in vanilla JS'",
                indent: 0,
                explanation: "Constraints prevent solutions you can't use",
                distractors: [
                    { text: "Accept solutions with any dependencies", reason: "Specifying constraints ensures practical, usable solutions" },
                    { text: "Install libraries AI mentions", reason: "State constraints upfront to avoid incompatible solutions" }
                ]
            },
            { type: "goal", text: "Learning & Examples" },
            {
                correct: "Ask for step-by-step explanations: 'Explain each line of code'",
                indent: 0,
                explanation: "Explanations help you learn and debug",
                distractors: [
                    { text: "Just copy code without understanding", reason: "Understanding helps you modify and fix code later" },
                    { text: "Skip explanations to save time", reason: "Learning now prevents confusion and errors later" }
                ]
            },
            {
                correct: "Use examples: 'Like this... but for my use case'",
                indent: 0,
                explanation: "Examples show AI exactly what you mean",
                distractors: [
                    { text: "Never show examples of what you want", reason: "Examples prevent misunderstandings and save iterations" },
                    { text: "Describe everything in abstract terms", reason: "Concrete examples are clearer than abstract descriptions" }
                ]
            },
            { type: "goal", text: "Iteration & Refinement" },
            {
                correct: "Iterate and refine: 'Make it more concise' or 'Add error handling'",
                indent: 0,
                explanation: "Follow-up prompts improve results progressively",
                distractors: [
                    { text: "Accept the first response always", reason: "Refining prompts leads to better solutions" },
                    { text: "Start over with a new chat", reason: "Build on existing context - AI remembers the conversation" }
                ]
            },
            {
                correct: "Specify your skill level: 'Explain like I'm a beginner'",
                indent: 0,
                explanation: "Matching explanations to your level improves understanding",
                distractors: [
                    { text: "Pretend to be an expert", reason: "Honest skill level gets you appropriate explanations" },
                    { text: "Use advanced jargon you don't understand", reason: "Clear communication beats impressive vocabulary" }
                ]
            },
            {
                correct: "Ask AI to show you what it changed when iterating",
                indent: 0,
                explanation: "Tracking changes helps you learn what improvements were made",
                distractors: [
                    { text: "Compare versions yourself manually", reason: "AI can highlight changes faster and more accurately" },
                    { text: "Ignore what changed", reason: "Understanding changes teaches you better coding practices" }
                ]
            },
            { type: "goal", text: "Verification & Testing" },
            {
                correct: "Test AI outputs yourself - don't assume they work",
                indent: 0,
                explanation: "AI makes mistakes; always verify code before deploying",
                distractors: [
                    { text: "Deploy AI code without testing", reason: "AI can produce plausible-looking but broken code" },
                    { text: "Assume AI is always correct", reason: "AI hallucinates facts and makes logic errors - always verify" }
                ]
            }
        ]
    },

    // CHALLENGE 11: Pages & File Structure
    {
        id: 11,
        title: "Pages, File Structure & File Referencing",
        goal: "Organize web projects with proper file structure and navigation",
        concepts: "File organization, relative paths, linking pages, favicon, assets folders",
        language: "Web/HTML",
        sequence: [
            { type: "goal", text: "Project Structure Setup" },
            {
                correct: "Create a root project folder: mkdir my-website",
                indent: 0,
                explanation: "Root folder contains all project files",
                distractors: [
                    { text: "Put all files in random folders", reason: "Organized structure makes projects maintainable" },
                    { text: "Work directly in Desktop", reason: "Dedicated project folders keep work organized" }
                ]
            },
            {
                correct: "Create index.html in root (homepage - required name)",
                indent: 0,
                explanation: "index.html is automatically served as the homepage",
                distractors: [
                    { text: "Name it homepage.html", reason: "Servers look for 'index.html' by default" },
                    { text: "Name it main.html", reason: "index.html is the web standard for default pages" }
                ]
            },
            {
                correct: "Create additional pages: about.html, contact.html, etc.",
                indent: 0,
                explanation: "Separate pages for different sections improves organization",
                distractors: [
                    { text: "Put all content on one infinitely scrolling page", reason: "Multiple pages improve navigation and SEO" },
                    { text: "Create pages in subfolders randomly", reason: "Keep main pages in root for simple URLs" }
                ]
            },
            { type: "goal", text: "Creating Asset Folders" },
            {
                correct: "Create /css folder for stylesheets",
                indent: 0,
                explanation: "Dedicated folders organize different file types",
                distractors: [
                    { text: "Put CSS files in root with HTML", reason: "Folders prevent clutter and improve organization" },
                    { text: "Name it /styles", reason: "While it works, /css is more standard and clear" }
                ]
            },
            {
                correct: "Create /js folder for JavaScript files",
                indent: 0,
                explanation: "Separate JavaScript from HTML for cleaner structure",
                distractors: [
                    { text: "Put all JS in HTML <script> tags", reason: "External JS files are reusable and cacheable" },
                    { text: "Mix JS and CSS in one folder", reason: "Separate folders by file type for clarity" }
                ]
            },
            {
                correct: "Create /images (or /img) folder for media files",
                indent: 0,
                explanation: "Centralized image storage simplifies asset management",
                distractors: [
                    { text: "Put images directly in root", reason: "Image folders prevent root clutter" },
                    { text: "Create a new folder per image", reason: "All images go in one folder for easy management" }
                ]
            },
            { type: "goal", text: "Linking Files" },
            {
                correct: "Link CSS with: <link rel='stylesheet' href='css/style.css'>",
                indent: 0,
                explanation: "Relative path from HTML file to CSS file",
                distractors: [
                    { text: "Use absolute path: href='/Users/...'", reason: "Absolute paths break when deployed - use relative paths" },
                    { text: "href='style.css' (missing css/ folder)", reason: "Path must match your folder structure" }
                ]
            },
            {
                correct: "Link between pages: <a href='about.html'>About</a>",
                indent: 0,
                explanation: "Simple filename for pages in same folder",
                distractors: [
                    { text: "href='http://localhost/about.html'", reason: "Use relative paths - they work everywhere" },
                    { text: "href='/about' (missing .html)", reason: "Include .html extension for static sites" }
                ]
            },
            {
                correct: "Add favicon.ico to root: <link rel='icon' href='favicon.ico'>",
                indent: 0,
                explanation: "Favicon appears in browser tabs and bookmarks",
                distractors: [
                    { text: "Put favicon in /images folder", reason: "Favicon traditionally lives in root for browser auto-detection" },
                    { text: "Skip favicon entirely", reason: "Favicons make sites look professional" }
                ]
            },
            { type: "goal", text: "Testing Links" },
            {
                correct: "Test all links locally before deploying",
                indent: 0,
                explanation: "Broken links are unprofessional and hurt UX",
                distractors: [
                    { text: "Upload without testing", reason: "Test locally to catch broken links before users see them" },
                    { text: "Assume all links work", reason: "Typos in paths are common - always verify" }
                ]
            }
        ]
    },

    // CHALLENGE 12: DNS & Hosting
    {
        id: 12,
        title: "DNS & Hosting Connections",
        goal: "Connect domains to hosting servers using DNS settings",
        concepts: "DNS records, A records, CNAME, nameservers, propagation, TTL",
        language: "Web/DNS",
        sequence: [
            { type: "goal", text: "Understanding DNS" },
            {
                correct: "Understand: DNS translates domain names to IP addresses",
                indent: 0,
                explanation: "DNS is the internet's phone book",
                distractors: [
                    { text: "DNS hosts your website files", reason: "DNS points to hosts; hosting stores files" },
                    { text: "DNS is the same as your domain", reason: "DNS is a system; your domain uses DNS to route traffic" }
                ]
            },
            {
                correct: "Log into your hosting provider and find your server IP address",
                indent: 0,
                explanation: "IP address is where your files live",
                distractors: [
                    { text: "Use your home WiFi IP", reason: "Hosting server IP is different from your personal IP" },
                    { text: "Make up an IP address", reason: "Use the exact IP provided by your hosting service" }
                ]
            },
            { type: "goal", text: "Configuring DNS Records" },
            {
                correct: "Log into Porkbun and go to DNS settings for your domain",
                indent: 0,
                explanation: "DNS settings control where your domain points",
                distractors: [
                    { text: "Go to hosting provider's DNS settings", reason: "DNS is managed at the domain registrar" },
                    { text: "Email the hosting company", reason: "You configure DNS yourself in registrar settings" }
                ]
            },
            {
                correct: "Create an A record pointing @ to your server IP (e.g., 192.0.2.1)",
                indent: 0,
                explanation: "A record maps your root domain to server IP",
                distractors: [
                    { text: "Create a CNAME for root domain", reason: "Root domain needs A record; CNAME is for subdomains" },
                    { text: "Point to domain name instead of IP", reason: "A records require IP addresses, not domain names" }
                ]
            },
            {
                correct: "Create an A record pointing www to the same IP",
                indent: 0,
                explanation: "Ensures both example.com and www.example.com work",
                distractors: [
                    { text: "Skip www - nobody uses it", reason: "Many users type www - both should work" },
                    { text: "Use different IPs for www", reason: "Same IP for consistency unless you have specific architecture" }
                ]
            },
            {
                correct: "Set TTL (Time To Live) to 300 seconds (5 minutes) initially",
                indent: 0,
                explanation: "Low TTL allows quick changes during setup",
                distractors: [
                    { text: "Set TTL to 86400 (1 day)", reason: "High TTL makes corrections take 24 hours to propagate" },
                    { text: "Delete TTL field", reason: "TTL controls how long DNS info is cached" }
                ]
            },
            { type: "goal", text: "Testing & Verification" },
            {
                correct: "Wait 5-10 minutes, then test: ping yourdomain.com",
                indent: 0,
                explanation: "Ping shows if DNS is resolving to correct IP",
                distractors: [
                    { text: "Test immediately", reason: "DNS changes need time to propagate" },
                    { text: "Wait 72 hours before testing", reason: "With low TTL, changes appear in minutes, not days" }
                ]
            },
            {
                correct: "Visit http://yourdomain.com in browser to verify",
                indent: 0,
                explanation: "Browser test confirms website is accessible",
                distractors: [
                    { text: "Only test with ping command", reason: "Browser test ensures HTTP/HTTPS works, not just DNS" },
                    { text: "Assume ping success means website works", reason: "DNS can work while web server has issues" }
                ]
            },
            { type: "goal", text: "Optimization & Global Check" },
            {
                correct: "Once working, increase TTL to 3600 (1 hour) or higher",
                indent: 0,
                explanation: "Higher TTL reduces DNS server load and speeds up site",
                distractors: [
                    { text: "Keep TTL at 300 forever", reason: "Low TTL wastes resources once setup is stable" },
                    { text: "Set TTL to 0", reason: "TTL of 0 is not allowed and causes errors" }
                ]
            },
            {
                correct: "Check DNS propagation globally: use whatsmydns.net",
                indent: 0,
                explanation: "DNS propagates gradually across global servers",
                distractors: [
                    { text: "Assume your local test means global success", reason: "DNS caches vary - check multiple locations" },
                    { text: "Restart your computer to speed propagation", reason: "Propagation happens on DNS servers, not your computer" }
                ]
            }
        ]
    },

    // CHALLENGE 13: GitHub Pages
    {
        id: 13,
        title: "Deploy with GitHub Pages",
        goal: "Host static websites for free using GitHub Pages",
        concepts: "Git deployment, static hosting, custom domains, gh-pages branch",
        language: "Git/Deployment",
        sequence: [
            { type: "goal", text: "Creating Repository" },
            {
                correct: "Create a repository named: yourusername.github.io",
                indent: 0,
                explanation: "Special naming enables automatic GitHub Pages deployment",
                distractors: [
                    { text: "Name it 'my-website'", reason: "yourusername.github.io gets automatic subdomain" },
                    { text: "Name it anything random", reason: "Special format unlocks GitHub Pages features" }
                ]
            },
            {
                correct: "Clone the repository to your local machine",
                indent: 0,
                explanation: "Local copy lets you work on files and push changes",
                distractors: [
                    { text: "Work only on GitHub.com", reason: "Local development is faster and more flexible" },
                    { text: "Download as ZIP and re-upload", reason: "Git clone maintains version control" }
                ]
            },
            { type: "goal", text: "Adding Files & Deploying" },
            {
                correct: "Add your index.html and other website files to the repo",
                indent: 0,
                explanation: "index.html is required as the homepage",
                distractors: [
                    { text: "Create README.md only", reason: "GitHub Pages serves HTML, not just documentation" },
                    { text: "Upload PHP or backend files", reason: "GitHub Pages only supports static files (HTML/CSS/JS)" }
                ]
            },
            {
                correct: "git add . (stage all files)",
                indent: 0,
                explanation: "Staging prepares files for commit",
                distractors: [
                    { text: "git push immediately", reason: "Must stage and commit before pushing" },
                    { text: "Skip staging", reason: "Git requires staging before commits" }
                ]
            },
            {
                correct: "git commit -m 'Initial website deployment'",
                indent: 0,
                explanation: "Commits create a snapshot with descriptive message",
                distractors: [
                    { text: "git commit (no message)", reason: "-m flag and message document what changed" },
                    { text: "git save", reason: "Command is 'git commit', not 'git save'" }
                ]
            },
            {
                correct: "git push origin main (or master)",
                indent: 0,
                explanation: "Pushing uploads your code to GitHub",
                distractors: [
                    { text: "git upload", reason: "Command is 'git push', not 'git upload'" },
                    { text: "Manually upload via GitHub UI", reason: "Git push is faster and maintains version history" }
                ]
            },
            { type: "goal", text: "Verification & Updates" },
            {
                correct: "Wait 1-2 minutes, then visit: https://yourusername.github.io",
                indent: 0,
                explanation: "GitHub automatically builds and deploys your site",
                distractors: [
                    { text: "Visit immediately", reason: "Build process takes 1-2 minutes" },
                    { text: "Enable GitHub Pages manually", reason: "yourusername.github.io repos auto-deploy" }
                ]
            },
            {
                correct: "To update: edit files locally, commit, and push again",
                indent: 0,
                explanation: "Every push triggers automatic redeployment",
                distractors: [
                    { text: "Delete repo and create new one", reason: "Just push updates - no need to recreate" },
                    { text: "Email files to GitHub", reason: "Use git push for all updates" }
                ]
            },
            { type: "goal", text: "Custom Domain Setup" },
            {
                correct: "For custom domain: Add CNAME file with your domain name",
                indent: 0,
                explanation: "CNAME file tells GitHub what custom domain to use",
                distractors: [
                    { text: "Put domain in README", reason: "Domain goes in CNAME file, not documentation" },
                    { text: "Custom domains cost money on GitHub", reason: "Custom domains are free if you own the domain" }
                ]
            },
            {
                correct: "In domain DNS: Create CNAME record pointing to yourusername.github.io",
                indent: 0,
                explanation: "DNS connects your custom domain to GitHub Pages",
                distractors: [
                    { text: "Point A record to GitHub IP", reason: "CNAME is better - IP addresses can change" },
                    { text: "No DNS changes needed", reason: "DNS must point to GitHub for custom domains to work" }
                ]
            }
        ]
    },

    // CHALLENGE 14: Netlify Hosting
    {
        id: 14,
        title: "Deploy with Netlify",
        goal: "Use Netlify for continuous deployment with automatic builds",
        concepts: "Continuous deployment, build commands, environment variables, forms",
        language: "Deployment/CI",
        sequence: [
            { type: "goal", text: "Account & Git Setup" },
            {
                correct: "Create an account at netlify.com",
                indent: 0,
                explanation: "Netlify offers free hosting with powerful features",
                distractors: [
                    { text: "Skip account creation", reason: "Account required to deploy sites" },
                    { text: "Create account on netlify.io", reason: "Correct domain is netlify.com" }
                ]
            },
            {
                correct: "Click 'Add new site' → 'Import an existing project'",
                indent: 0,
                explanation: "Connect your Git repository for automatic deployments",
                distractors: [
                    { text: "Drag and drop files manually", reason: "Git connection enables automatic deployments on every push" },
                    { text: "Email your files to Netlify", reason: "Use Git integration for proper workflow" }
                ]
            },
            {
                correct: "Connect to GitHub (or GitLab/Bitbucket) and authorize",
                indent: 0,
                explanation: "Git integration enables automatic deployments",
                distractors: [
                    { text: "Skip Git connection", reason: "Git connection is Netlify's core feature" },
                    { text: "Upload via FTP", reason: "Netlify uses Git, not FTP" }
                ]
            },
            { type: "goal", text: "Build Configuration" },
            {
                correct: "Select your repository from the list",
                indent: 0,
                explanation: "Choose which project to deploy",
                distractors: [
                    { text: "Select all repositories", reason: "Deploy one project at a time" },
                    { text: "Create new repo in Netlify", reason: "Use existing Git repos" }
                ]
            },
            {
                correct: "For static sites: Leave build command empty",
                indent: 0,
                explanation: "Static HTML/CSS/JS needs no build process",
                distractors: [
                    { text: "Enter: npm run build", reason: "Only needed for React/Vue/build tools" },
                    { text: "Enter random commands", reason: "Build commands must match your project type" }
                ]
            },
            {
                correct: "Set publish directory to root: / (or leave blank for static sites)",
                indent: 0,
                explanation: "Publish directory is where built files are located",
                distractors: [
                    { text: "Set to /build", reason: "Only if your project builds to /build folder" },
                    { text: "Set to /src", reason: "Source code isn't deployed - built files are" }
                ]
            },
            { type: "goal", text: "Deployment & Verification" },
            {
                correct: "Click 'Deploy site' and wait for deployment",
                indent: 0,
                explanation: "First deployment takes 30-60 seconds",
                distractors: [
                    { text: "Refresh page immediately", reason: "Wait for build to complete" },
                    { text: "Close browser during deployment", reason: "Stay on page to see deployment status" }
                ]
            },
            {
                correct: "Visit the generated URL: randomname.netlify.app",
                indent: 0,
                explanation: "Netlify provides free subdomain for every site",
                distractors: [
                    { text: "Site deploys to localhost", reason: "Netlify gives you a public URL" },
                    { text: "No URL until you add custom domain", reason: "Free subdomain works immediately" }
                ]
            },
            { type: "goal", text: "Custom Domain" },
            {
                correct: "To add custom domain: Site settings → Domain management → Add custom domain",
                indent: 0,
                explanation: "Custom domains are free on Netlify",
                distractors: [
                    { text: "Custom domains cost $10/month", reason: "Netlify custom domains are free" },
                    { text: "Can't use custom domains on free plan", reason: "Free plan includes custom domain support" }
                ]
            },
            {
                correct: "Configure DNS with Netlify's nameservers or CNAME record",
                indent: 0,
                explanation: "DNS points your domain to Netlify servers",
                distractors: [
                    { text: "No DNS changes needed", reason: "DNS must point to Netlify for custom domain to work" },
                    { text: "Point to your IP address", reason: "Netlify uses CNAME or nameservers, not your IP" }
                ]
            }
        ]
    },

    // CHALLENGE 15: Cloudflare Setup
    {
        id: 15,
        title: "Set Up Cloudflare",
        goal: "Configure Cloudflare for SSL, caching, and performance optimization",
        concepts: "CDN, SSL certificates, caching, DDoS protection, DNS proxy",
        language: "Web/Security",
        sequence: [
            { type: "goal", text: "Account Setup" },
            {
                correct: "Create a free account at cloudflare.com",
                indent: 0,
                explanation: "Cloudflare free tier includes SSL and CDN",
                distractors: [
                    { text: "Cloudflare requires paid plan", reason: "Free tier is powerful and includes SSL" },
                    { text: "Sign up at cloudflare.net", reason: "Correct domain is cloudflare.com" }
                ]
            },
            {
                correct: "Click 'Add a Site' and enter your domain name",
                indent: 0,
                explanation: "Cloudflare needs to know which domain to protect",
                distractors: [
                    { text: "Enter your website URL with https://", reason: "Enter just the domain without protocol" },
                    { text: "Add multiple domains at once", reason: "Add one site at a time" }
                ]
            },
            {
                correct: "Select the Free plan",
                indent: 0,
                explanation: "Free plan includes SSL, CDN, and basic protection",
                distractors: [
                    { text: "Free plan lacks SSL", reason: "Free plan includes automatic SSL certificates" },
                    { text: "You must pay for CDN", reason: "CDN is included in free plan" }
                ]
            },
            { type: "goal", text: "DNS Configuration" },
            {
                correct: "Wait while Cloudflare scans your DNS records",
                indent: 0,
                explanation: "Cloudflare imports existing DNS automatically",
                distractors: [
                    { text: "Skip DNS scan", reason: "Scan ensures you don't lose DNS records" },
                    { text: "Manually enter all DNS records", reason: "Auto-scan is faster and less error-prone" }
                ]
            },
            {
                correct: "Review imported DNS records and verify A and CNAME records are correct",
                indent: 0,
                explanation: "Ensure critical records transferred correctly",
                distractors: [
                    { text: "Delete all imported records", reason: "Deleting records breaks your site" },
                    { text: "Accept without reviewing", reason: "Always verify critical DNS records" }
                ]
            },
            {
                correct: "Click on each DNS record and ensure proxy status is 'Proxied' (orange cloud)",
                indent: 0,
                explanation: "Proxied records route through Cloudflare for protection and caching",
                distractors: [
                    { text: "Set all to 'DNS only' (gray cloud)", reason: "DNS-only bypasses Cloudflare protection" },
                    { text: "Proxy status doesn't matter", reason: "Proxied enables Cloudflare features; DNS-only disables them" }
                ]
            },
            { type: "goal", text: "Nameserver Update" },
            {
                correct: "Copy Cloudflare's nameservers (e.g., ns1.cloudflare.com)",
                indent: 0,
                explanation: "Nameservers route all DNS through Cloudflare",
                distractors: [
                    { text: "Skip nameserver change", reason: "Nameservers must point to Cloudflare for it to work" },
                    { text: "Use your old nameservers", reason: "Old nameservers bypass Cloudflare entirely" }
                ]
            },
            {
                correct: "Log into your domain registrar (Porkbun) and replace nameservers",
                indent: 0,
                explanation: "Registrar controls which nameservers your domain uses",
                distractors: [
                    { text: "Change nameservers in Cloudflare", reason: "Nameservers are set at the registrar, not Cloudflare" },
                    { text: "Email nameservers to support", reason: "You change nameservers yourself in registrar settings" }
                ]
            },
            {
                correct: "Wait 2-24 hours for nameserver propagation",
                indent: 0,
                explanation: "Nameserver changes take time to propagate globally",
                distractors: [
                    { text: "Expect instant activation", reason: "Nameserver changes require global DNS propagation" },
                    { text: "Restart computer to speed up", reason: "Propagation happens on global DNS servers" }
                ]
            },
            { type: "goal", text: "SSL Configuration" },
            {
                correct: "Enable SSL: SSL/TLS → Overview → Set to 'Full' or 'Full (strict)'",
                indent: 0,
                explanation: "SSL encrypts traffic between visitors and your site",
                distractors: [
                    { text: "Keep SSL 'Off'", reason: "SSL is essential for security and SEO" },
                    { text: "Set to 'Flexible'", reason: "Flexible allows unencrypted backend - use Full for security" }
                ]
            }
        ]
    },

    // CHALLENGE 16: Firebase Basics
    {
        id: 16,
        title: "Firebase Console, Hosting & Database Basics",
        goal: "Set up Firebase for hosting and real-time database functionality",
        concepts: "Firebase Console, Firebase CLI, Firestore, real-time database, deployment",
        language: "Firebase/Backend",
        sequence: [
            { type: "goal", text: "Creating Firebase Project" },
            {
                correct: "Go to console.firebase.google.com and create a Google account",
                indent: 0,
                explanation: "Firebase is Google's platform for web and mobile apps",
                distractors: [
                    { text: "Go to firebase.com", reason: "Firebase Console is at console.firebase.google.com" },
                    { text: "Firebase works without Google account", reason: "Google account required for Firebase" }
                ]
            },
            {
                correct: "Click 'Add project' and enter a project name",
                indent: 0,
                explanation: "Each Firebase project represents one app or website",
                distractors: [
                    { text: "Use spaces in project name", reason: "Project IDs can't have spaces" },
                    { text: "Create 10 projects immediately", reason: "Start with one project to learn" }
                ]
            },
            {
                correct: "Disable Google Analytics (for learning purposes)",
                indent: 0,
                explanation: "Analytics adds complexity - skip for first project",
                distractors: [
                    { text: "Analytics is required", reason: "Analytics is optional for Firebase projects" },
                    { text: "Enable analytics immediately", reason: "Learn basics first, add analytics later" }
                ]
            },
            {
                correct: "Click 'Create project' and wait for initialization",
                indent: 0,
                explanation: "Firebase sets up backend infrastructure automatically",
                distractors: [
                    { text: "Close browser during setup", reason: "Wait for project creation to complete" },
                    { text: "Setup completes instantly", reason: "Project creation takes 30-60 seconds" }
                ]
            },
            { type: "goal", text: "Installing Firebase CLI" },
            {
                correct: "Install Firebase CLI: npm install -g firebase-tools",
                indent: 0,
                explanation: "CLI enables deployment from command line",
                distractors: [
                    { text: "pip install firebase", reason: "Firebase CLI uses npm (Node.js), not pip (Python)" },
                    { text: "Download Firebase as ZIP", reason: "Use npm to install Firebase tools globally" }
                ]
            },
            {
                correct: "Log in to Firebase: firebase login",
                indent: 0,
                explanation: "Links your terminal to your Google account",
                distractors: [
                    { text: "firebase signin", reason: "Command is 'firebase login', not signin" },
                    { text: "Skip login", reason: "Must authenticate before using Firebase CLI" }
                ]
            },
            { type: "goal", text: "Initializing Project" },
            {
                correct: "Navigate to your project folder: cd my-website",
                indent: 0,
                explanation: "Initialize Firebase in your project directory",
                distractors: [
                    { text: "Run firebase init anywhere", reason: "Run in your project folder to initialize correctly" },
                    { text: "Create new folder for Firebase", reason: "Initialize in existing project folder" }
                ]
            },
            {
                correct: "Run: firebase init and select 'Hosting'",
                indent: 0,
                explanation: "Hosting setup creates Firebase configuration",
                distractors: [
                    { text: "Select all features immediately", reason: "Start with Hosting only for simplicity" },
                    { text: "firebase start", reason: "Command is 'firebase init' to initialize" }
                ]
            },
            {
                correct: "Select your project from the list",
                indent: 0,
                explanation: "Links local folder to Firebase project",
                distractors: [
                    { text: "Create new project here", reason: "Use the project created in Firebase Console" },
                    { text: "Skip project selection", reason: "Must select project to deploy" }
                ]
            },
            { type: "goal", text: "Deploying Site" },
            {
                correct: "Deploy with: firebase deploy",
                indent: 0,
                explanation: "Uploads your site to Firebase hosting",
                distractors: [
                    { text: "firebase upload", reason: "Command is 'firebase deploy', not upload" },
                    { text: "git push to Firebase", reason: "Firebase uses 'firebase deploy', not git" }
                ]
            }
        ]
    },

    // CHALLENGE 17: Google Sign-In
    {
        id: 17,
        title: "Implement Google Sign-In Authentication",
        goal: "Add Google OAuth authentication to your web application",
        concepts: "OAuth, authentication, Firebase Auth, user sessions, security",
        language: "Auth/Firebase",
        sequence: [
            { type: "goal", text: "Enabling Authentication" },
            {
                correct: "In Firebase Console, go to Authentication → Get Started",
                indent: 0,
                explanation: "Firebase Authentication handles user management",
                distractors: [
                    { text: "Go to Database first", reason: "Authentication section manages sign-in methods" },
                    { text: "Skip Firebase Console", reason: "Must enable auth in console before coding" }
                ]
            },
            {
                correct: "Click 'Sign-in method' tab",
                indent: 0,
                explanation: "Configure which authentication providers to enable",
                distractors: [
                    { text: "Click 'Users' tab", reason: "Users appear after sign-ins; enable methods first" },
                    { text: "Click 'Templates' tab", reason: "Sign-in method tab enables authentication types" }
                ]
            },
            {
                correct: "Enable 'Google' as a sign-in provider",
                indent: 0,
                explanation: "Activates Google OAuth for your project",
                distractors: [
                    { text: "Enable 'Email/Password' instead", reason: "This lesson focuses on Google sign-in specifically" },
                    { text: "Enable all providers at once", reason: "Start with Google to learn OAuth flow" }
                ]
            },
            {
                correct: "Set project public-facing name and support email",
                indent: 0,
                explanation: "Users see this name in the Google consent screen",
                distractors: [
                    { text: "Use fake email", reason: "Support email must be valid and monitored" },
                    { text: "Leave name blank", reason: "Public name appears on Google login screen" }
                ]
            },
            {
                correct: "Click 'Save' to enable Google sign-in",
                indent: 0,
                explanation: "Saves configuration and activates provider",
                distractors: [
                    { text: "Close without saving", reason: "Changes aren't applied until you save" },
                    { text: "Changes apply automatically", reason: "Must click Save to activate" }
                ]
            },
            { type: "goal", text: "Adding Firebase SDK" },
            {
                correct: "Add Firebase Auth SDK to HTML: <script src='firebase-auth.js'>",
                indent: 0,
                explanation: "Firebase library provides authentication functions",
                distractors: [
                    { text: "Skip adding Firebase SDK", reason: "SDK required to use Firebase features" },
                    { text: "Write OAuth code from scratch", reason: "Firebase SDK handles OAuth complexity" }
                ]
            },
            {
                correct: "Initialize Firebase in your JavaScript with your config",
                indent: 0,
                explanation: "Config connects your code to Firebase project",
                distractors: [
                    { text: "Use someone else's config", reason: "Each project has unique config - use yours" },
                    { text: "Skip initialization", reason: "Must initialize before using Firebase features" }
                ]
            },
            { type: "goal", text: "Implementing Sign-In" },
            {
                correct: "Create sign-in button: <button onclick='signInWithGoogle()'>",
                indent: 0,
                explanation: "Button triggers Google authentication popup",
                distractors: [
                    { text: "Use <a> tag for sign-in", reason: "Button is better for interactive actions" },
                    { text: "Sign-in happens automatically", reason: "User must click to initiate OAuth" }
                ]
            },
            {
                correct: "Implement signInWithGoogle() using firebase.auth().signInWithPopup()",
                indent: 0,
                explanation: "Firebase method opens Google login popup",
                distractors: [
                    { text: "Redirect to google.com/login", reason: "Firebase handles OAuth redirect automatically" },
                    { text: "Ask user for Google password", reason: "OAuth popup is secure; never ask for passwords" }
                ]
            },
            { type: "goal", text: "Managing Auth State" },
            {
                correct: "Listen for auth state: firebase.auth().onAuthStateChanged(user => {...})",
                indent: 0,
                explanation: "Detects when user signs in or out",
                distractors: [
                    { text: "Poll every second to check if signed in", reason: "onAuthStateChanged automatically notifies of changes" },
                    { text: "Store password in localStorage", reason: "Never store credentials; Firebase manages sessions securely" }
                ]
            }
        ]
    },

    // CHALLENGE 18: API Tokens
    {
        id: 18,
        title: "Use API Tokens for AI Applications",
        goal: "Securely integrate AI APIs using authentication tokens",
        concepts: "API keys, environment variables, security, rate limits, API calls",
        language: "API/Security",
        sequence: [
            {
                correct: "Create an account on the AI platform (e.g., Anthropic, OpenAI)",
                indent: 0,
                explanation: "Account required to generate API keys",
                distractors: [
                    { text: "Use someone else's account", reason: "Sharing accounts violates terms of service" },
                    { text: "API works without account", reason: "Authentication required for API access" }
                ]
            },
            {
                correct: "Navigate to API Keys section in account settings",
                indent: 0,
                explanation: "API keys authenticate your requests",
                distractors: [
                    { text: "Use your account password as API key", reason: "API keys are separate from passwords" },
                    { text: "API keys appear on dashboard automatically", reason: "Must manually generate API keys" }
                ]
            },
            {
                correct: "Click 'Create API Key' and give it a descriptive name",
                indent: 0,
                explanation: "Named keys help track which app uses which key",
                distractors: [
                    { text: "Name all keys 'key1', 'key2'", reason: "Descriptive names help manage multiple keys" },
                    { text: "Skip naming the key", reason: "Names help identify keys when rotating or debugging" }
                ]
            },
            {
                correct: "IMMEDIATELY copy the API key - it won't be shown again",
                indent: 0,
                explanation: "Keys are only displayed once for security",
                distractors: [
                    { text: "You can view it later", reason: "Keys shown only at creation - copy immediately" },
                    { text: "Screenshot and delete original", reason: "Copy to secure location, don't rely on screenshots" }
                ]
            },
            {
                correct: "Store API key in .env file: API_KEY=sk-abc123...",
                indent: 0,
                explanation: ".env keeps secrets out of code",
                distractors: [
                    { text: "Paste API key directly in code", reason: "Hard-coded keys get exposed in Git/public code" },
                    { text: "Store in config.js", reason: "config.js gets committed; .env is gitignored" }
                ]
            },
            {
                correct: "Add .env to .gitignore file",
                indent: 0,
                explanation: "Prevents API keys from being committed to Git",
                distractors: [
                    { text: "Commit .env to Git", reason: "Public repos expose your API keys if .env is committed" },
                    { text: "Skip .gitignore", reason: "Unprotected keys lead to unauthorized usage and charges" }
                ]
            },
            {
                correct: "Load environment variables: require('dotenv').config()",
                indent: 0,
                explanation: "dotenv library reads .env file into process.env",
                distractors: [
                    { text: "Manually parse .env file", reason: "dotenv library handles parsing securely" },
                    { text: "Import .env as JSON", reason: ".env isn't JSON - use dotenv package" }
                ]
            },
            {
                correct: "Access key in code: process.env.API_KEY",
                indent: 0,
                explanation: "Environment variables keep keys out of source code",
                distractors: [
                    { text: "Access with: window.API_KEY", reason: "Server-side uses process.env, not window" },
                    { text: "Import from .env directly", reason: "Use process.env after dotenv loads variables" }
                ]
            },
            {
                correct: "Include API key in request headers: 'Authorization: Bearer sk-abc...'",
                indent: 0,
                explanation: "Header authentication is standard for API security",
                distractors: [
                    { text: "Put API key in URL parameters", reason: "URLs get logged; headers are more secure" },
                    { text: "Send API key in request body", reason: "Headers are the standard location for auth tokens" }
                ]
            },
            {
                correct: "Handle rate limits with try-catch and exponential backoff",
                indent: 0,
                explanation: "Rate limits protect API servers from overload",
                distractors: [
                    { text: "Ignore rate limit errors", reason: "Rate limits are enforced; ignoring causes failures" },
                    { text: "Retry immediately forever", reason: "Exponential backoff prevents overwhelming the API" }
                ]
            }
        ]
    },

    // CHALLENGE 19: AI Media Generation
    {
        id: 19,
        title: "Generate Images with AI",
        goal: "Use AI tools to create images for web projects",
        concepts: "AI image generation, prompting, licenses, formats, optimization",
        language: "AI/Media",
        sequence: [
            {
                correct: "Choose an AI image tool: DALL-E, Midjourney, or Stable Diffusion",
                indent: 0,
                explanation: "Different tools have different styles and capabilities",
                distractors: [
                    { text: "Use Google Images instead", reason: "Google Images may have copyright; AI generates original content" },
                    { text: "Screenshot random images", reason: "Screenshots violate copyright; AI creates licensed content" }
                ]
            },
            {
                correct: "Write a detailed prompt: 'Modern website hero image, minimalist, blue tones, abstract'",
                indent: 0,
                explanation: "Specific prompts produce better results",
                distractors: [
                    { text: "Prompt: 'image'", reason: "Vague prompts yield random, unusable results" },
                    { text: "One-word prompts work best", reason: "Detailed prompts guide AI to your vision" }
                ]
            },
            {
                correct: "Specify aspect ratio: '--ar 16:9' for hero images",
                indent: 0,
                explanation: "Aspect ratio controls image dimensions",
                distractors: [
                    { text: "Accept default square images", reason: "Hero images need wide aspect ratios" },
                    { text: "Crop square images manually", reason: "Requesting correct ratio gives better composition" }
                ]
            },
            {
                correct: "Include style keywords: 'photorealistic', 'illustration', 'vector art'",
                indent: 0,
                explanation: "Style terms guide the aesthetic output",
                distractors: [
                    { text: "Let AI choose style randomly", reason: "Style keywords ensure consistent branding" },
                    { text: "Describe style in sentences", reason: "Keywords like 'minimalist' are clearer than descriptions" }
                ]
            },
            {
                correct: "Generate multiple variations to choose from",
                indent: 0,
                explanation: "AI generation has randomness - create options",
                distractors: [
                    { text: "Use the first result always", reason: "Multiple generations give you better options" },
                    { text: "Regenerate 100 times", reason: "3-5 variations usually yield good results" }
                ]
            },
            {
                correct: "Download in highest available quality (PNG or high-quality JPEG)",
                indent: 0,
                explanation: "High quality prevents pixelation on displays",
                distractors: [
                    { text: "Download low-res thumbnails", reason: "Thumbnails pixelate on modern screens" },
                    { text: "Screenshot the preview", reason: "Screenshots compress quality; download originals" }
                ]
            },
            {
                correct: "Optimize for web: use TinyPNG or similar to compress",
                indent: 0,
                explanation: "Compression reduces file size without visible quality loss",
                distractors: [
                    { text: "Upload 10MB images directly", reason: "Large images slow page load significantly" },
                    { text: "Skip optimization", reason: "Unoptimized images hurt performance and SEO" }
                ]
            },
            {
                correct: "Convert to WebP format for better compression (optional but recommended)",
                indent: 0,
                explanation: "WebP offers 30% better compression than JPEG",
                distractors: [
                    { text: "WebP doesn't work in browsers", reason: "WebP has 95%+ browser support as of 2023" },
                    { text: "Stick with BMP format", reason: "BMP is uncompressed and massive - use WebP or JPEG" }
                ]
            },
            {
                correct: "Use descriptive filenames: hero-image.webp, not IMG_001.webp",
                indent: 0,
                explanation: "Descriptive names help with SEO and organization",
                distractors: [
                    { text: "Keep AI's random filename", reason: "Random names hurt SEO and project organization" },
                    { text: "Name everything 'image.png'", reason: "Unique names prevent overwriting and aid organization" }
                ]
            },
            {
                correct: "Add alt text in HTML: <img alt='Modern minimalist hero image'>",
                indent: 0,
                explanation: "Alt text improves accessibility and SEO",
                distractors: [
                    { text: "Skip alt text", reason: "Screen readers and SEO need alt text" },
                    { text: "alt='image'", reason: "Descriptive alt text is more helpful than generic terms" }
                ]
            }
        ]
    },

    // CHALLENGE 20: Fillout Forms
    {
        id: 20,
        title: "Create Forms with Fillout",
        goal: "Build professional forms with Fillout's no-code platform",
        concepts: "Form builders, validation, submissions, integrations, embedding",
        language: "Forms/NoCode",
        sequence: [
            {
                correct: "Sign up for free account at fillout.com",
                indent: 0,
                explanation: "Fillout offers powerful form building for free",
                distractors: [
                    { text: "Go to fillout.io", reason: "Correct domain is fillout.com" },
                    { text: "Forms require paid plan", reason: "Free tier includes unlimited forms" }
                ]
            },
            {
                correct: "Click 'Create new form' from dashboard",
                indent: 0,
                explanation: "Start with a blank form or template",
                distractors: [
                    { text: "Import HTML form code", reason: "Fillout uses visual builder, not code import" },
                    { text: "Download Fillout software", reason: "Fillout is web-based - no download needed" }
                ]
            },
            {
                correct: "Add text input field: click '+' → 'Short text'",
                indent: 0,
                explanation: "Short text for names, emails, single-line input",
                distractors: [
                    { text: "Use 'Long text' for email", reason: "Short text is appropriate for single-line inputs" },
                    { text: "Add fields manually in code", reason: "Fillout has drag-and-drop interface" }
                ]
            },
            {
                correct: "Make email field required and add email validation",
                indent: 0,
                explanation: "Validation prevents invalid submissions",
                distractors: [
                    { text: "Accept any text as email", reason: "Email validation ensures proper format" },
                    { text: "Make all fields optional", reason: "Required fields ensure you get needed information" }
                ]
            },
            {
                correct: "Add dropdown/select field for multiple choice questions",
                indent: 0,
                explanation: "Dropdowns standardize responses and prevent typos",
                distractors: [
                    { text: "Use text field for multiple choice", reason: "Dropdowns prevent invalid options" },
                    { text: "Let users type anything", reason: "Structured input makes data analysis easier" }
                ]
            },
            {
                correct: "Customize confirmation message: 'Thank you for submitting!'",
                indent: 0,
                explanation: "Confirmation message reassures users their form was received",
                distractors: [
                    { text: "No confirmation needed", reason: "Users need feedback that submission succeeded" },
                    { text: "Default message is fine", reason: "Custom messages make forms more professional" }
                ]
            },
            {
                correct: "Configure email notifications to receive submissions",
                indent: 0,
                explanation: "Get notified when someone submits your form",
                distractors: [
                    { text: "Check dashboard manually daily", reason: "Email notifications provide instant alerts" },
                    { text: "Submissions disappear if not checked", reason: "Submissions are stored; notifications just alert you" }
                ]
            },
            {
                correct: "Get embed code: Settings → Share → Embed",
                indent: 0,
                explanation: "Embed code adds form to your website",
                distractors: [
                    { text: "Copy form HTML manually", reason: "Fillout generates proper embed code for you" },
                    { text: "Screenshot form and add to site", reason: "Forms need to be interactive, not images" }
                ]
            },
            {
                correct: "Paste embed code in your HTML where you want the form",
                indent: 0,
                explanation: "Embed code is an iframe that displays your form",
                distractors: [
                    { text: "Paste in CSS file", reason: "Embed code goes in HTML, not CSS" },
                    { text: "Paste in JavaScript file", reason: "Embed code is HTML iframe code" }
                ]
            },
            {
                correct: "Test form submission to verify it works correctly",
                indent: 0,
                explanation: "Always test forms before sharing publicly",
                distractors: [
                    { text: "Deploy without testing", reason: "Broken forms frustrate users and lose data" },
                    { text: "Assume Fillout works perfectly", reason: "Custom settings need testing to verify" }
                ]
            }
        ]
    },

    // CHALLENGE 21: Stripe Payments
    {
        id: 21,
        title: "Accept Payments with Stripe",
        goal: "Integrate Stripe payment processing into web applications",
        concepts: "Payment processing, checkout, webhooks, test mode, security",
        language: "Payments/API",
        sequence: [
            {
                correct: "Create free account at stripe.com",
                indent: 0,
                explanation: "Stripe handles payment processing securely",
                distractors: [
                    { text: "Build payment system from scratch", reason: "Never build payment processing yourself - security risks" },
                    { text: "Accept credit cards manually", reason: "Manual processing violates PCI compliance" }
                ]
            },
            {
                correct: "Complete business verification (may take 1-2 days)",
                indent: 0,
                explanation: "Stripe verifies identity to prevent fraud",
                distractors: [
                    { text: "Skip verification", reason: "Unverified accounts can't process real payments" },
                    { text: "Use fake information", reason: "Fraud prevention requires real business information" }
                ]
            },
            {
                correct: "Stay in Test Mode while developing (toggle in top right)",
                indent: 0,
                explanation: "Test mode prevents real charges during development",
                distractors: [
                    { text: "Use live mode immediately", reason: "Test mode lets you test without real money" },
                    { text: "Test and live are the same", reason: "Test uses fake cards; live processes real payments" }
                ]
            },
            {
                correct: "Get API keys: Developers → API keys",
                indent: 0,
                explanation: "API keys authenticate your application",
                distractors: [
                    { text: "Share API keys publicly", reason: "Secret keys must stay private - they control payments" },
                    { text: "Use same keys for test and live", reason: "Test and live have separate API keys" }
                ]
            },
            {
                correct: "Use Publishable Key in frontend (safe to expose)",
                indent: 0,
                explanation: "Publishable key is public and goes in client-side code",
                distractors: [
                    { text: "Use Secret Key in frontend", reason: "Secret key in frontend code exposes it to attackers" },
                    { text: "All keys are secret", reason: "Publishable key is designed for public use" }
                ]
            },
            {
                correct: "Keep Secret Key on backend/server only",
                indent: 0,
                explanation: "Secret key must never be in frontend code",
                distractors: [
                    { text: "Put Secret Key in JavaScript", reason: "Frontend code is visible to users - unsafe for secrets" },
                    { text: "Commit Secret Key to Git", reason: "Git history is public - keys would be exposed" }
                ]
            },
            {
                correct: "Install Stripe library: npm install stripe",
                indent: 0,
                explanation: "Official library handles API communication",
                distractors: [
                    { text: "Write Stripe API calls manually", reason: "Official SDK handles security and updates" },
                    { text: "pip install stripe", reason: "For JavaScript, use npm, not pip" }
                ]
            },
            {
                correct: "Create checkout session on backend with product details and price",
                indent: 0,
                explanation: "Backend creates secure checkout - frontend can't be trusted",
                distractors: [
                    { text: "Create checkout on frontend", reason: "Frontend can be manipulated - pricing must be server-side" },
                    { text: "Let users set their own price", reason: "Server must control pricing for security" }
                ]
            },
            {
                correct: "Redirect to Stripe Checkout: window.location = session.url",
                indent: 0,
                explanation: "Stripe Checkout provides secure, hosted payment page",
                distractors: [
                    { text: "Build custom payment form", reason: "Custom forms require PCI compliance - use Stripe Checkout" },
                    { text: "Ask for credit card in alert()", reason: "Never handle raw credit card data" }
                ]
            },
            {
                correct: "Use test card 4242 4242 4242 4242 to test payments",
                indent: 0,
                explanation: "Test cards let you simulate payments without real money",
                distractors: [
                    { text: "Use your real credit card", reason: "Test mode has specific test cards - don't use real cards" },
                    { text: "Make up random card numbers", reason: "Only Stripe test cards work in test mode" }
                ]
            }
        ]
    },

    // CHALLENGE 22: Email Marketing
    {
        id: 22,
        title: "Email Marketing Campaigns",
        goal: "Create and send professional email campaigns",
        concepts: "Email lists, campaigns, design, deliverability, analytics",
        language: "Marketing/Email",
        sequence: [
            {
                correct: "Choose email platform: Mailchimp, SendGrid, or ConvertKit",
                indent: 0,
                explanation: "Email platforms handle deliverability and compliance",
                distractors: [
                    { text: "Send emails from Gmail directly", reason: "Gmail blocks bulk sending; professional tools ensure delivery" },
                    { text: "Build email server yourself", reason: "Email deliverability is complex - use established platforms" }
                ]
            },
            {
                correct: "Create a free account on your chosen platform",
                indent: 0,
                explanation: "Free tiers usually include 500-1000 subscribers",
                distractors: [
                    { text: "Email platforms require payment upfront", reason: "Most offer generous free tiers" },
                    { text: "Share accounts with others", reason: "Individual accounts prevent conflicts and ensure compliance" }
                ]
            },
            {
                correct: "Verify your sending domain for better deliverability",
                indent: 0,
                explanation: "Verified domains reduce spam filtering",
                distractors: [
                    { text: "Skip domain verification", reason: "Unverified emails often go to spam" },
                    { text: "Use platform's default sender", reason: "Custom domain builds brand trust" }
                ]
            },
            {
                correct: "Create an audience/list: 'Newsletter Subscribers'",
                indent: 0,
                explanation: "Lists organize contacts by category",
                distractors: [
                    { text: "Put everyone in one giant list", reason: "Segmented lists allow targeted messaging" },
                    { text: "Lists are optional", reason: "Lists are required for sending campaigns" }
                ]
            },
            {
                correct: "Add subscribers via signup form (never buy email lists)",
                indent: 0,
                explanation: "Purchased lists violate anti-spam laws and get you banned",
                distractors: [
                    { text: "Buy 10,000 email list", reason: "Purchased lists violate CAN-SPAM, GDPR, and platform TOS" },
                    { text: "Add emails from business cards without consent", reason: "Email marketing requires explicit opt-in consent" }
                ]
            },
            {
                correct: "Design campaign with clear subject line and preview text",
                indent: 0,
                explanation: "Subject lines determine open rates",
                distractors: [
                    { text: "Subject: 'Newsletter'", reason: "Generic subjects have low open rates" },
                    { text: "Use ALL CAPS AND EMOJI 🚨🔥💯", reason: "Spam-trigger words and excessive symbols hurt deliverability" }
                ]
            },
            {
                correct: "Include clear call-to-action (CTA): 'Read More' or 'Shop Now'",
                indent: 0,
                explanation: "CTAs drive clicks and conversions",
                distractors: [
                    { text: "No links in emails", reason: "Links drive traffic - just don't overload with too many" },
                    { text: "Hide CTA at bottom in tiny text", reason: "Prominent CTAs increase engagement" }
                ]
            },
            {
                correct: "Always include unsubscribe link (required by law)",
                indent: 0,
                explanation: "CAN-SPAM law requires easy opt-out",
                distractors: [
                    { text: "Hide unsubscribe link", reason: "Required by law and platform policies" },
                    { text: "Make unsubscribe complicated", reason: "Easy unsubscribe is legally required" }
                ]
            },
            {
                correct: "Send test email to yourself before sending to list",
                indent: 0,
                explanation: "Test catches typos, broken links, and formatting issues",
                distractors: [
                    { text: "Send to everyone without testing", reason: "Errors in mass emails look unprofessional" },
                    { text: "Proofread only in editor", reason: "Email rendering differs from editor preview" }
                ]
            },
            {
                correct: "Schedule send for optimal time (10am or 2pm on Tuesday-Thursday)",
                indent: 0,
                explanation: "Timing affects open rates",
                distractors: [
                    { text: "Send at 3am", reason: "3am emails get buried before people wake up" },
                    { text: "Send on Sunday midnight", reason: "Weekend sends have lower engagement" }
                ]
            }
        ]
    },

    // CHALLENGE 23: Email Automation
    {
        id: 23,
        title: "Trigger Emails with Buttons & Automation",
        goal: "Set up automated email workflows triggered by user actions",
        concepts: "Email triggers, webhooks, automation, sequences, API integration",
        language: "Automation/Email",
        sequence: [
            {
                correct: "Understand triggers: form submission, button click, purchase, signup",
                indent: 0,
                explanation: "Triggers start automated email sequences",
                distractors: [
                    { text: "Emails only send manually", reason: "Automation saves time and improves response times" },
                    { text: "Triggers are the same as campaigns", reason: "Campaigns are manual; triggers are automatic" }
                ]
            },
            {
                correct: "In email platform, create 'Automation' or 'Workflow'",
                indent: 0,
                explanation: "Workflows define trigger-to-email logic",
                distractors: [
                    { text: "Create regular campaign", reason: "Campaigns are one-time; automations are trigger-based" },
                    { text: "Skip workflow setup", reason: "Workflows are required for automation" }
                ]
            },
            {
                correct: "Set trigger: 'When someone joins Newsletter list'",
                indent: 0,
                explanation: "Trigger defines what starts the automation",
                distractors: [
                    { text: "Set trigger: 'Tuesday at 3pm'", reason: "That's a schedule, not a trigger event" },
                    { text: "Triggers happen randomly", reason: "Triggers are specific events you define" }
                ]
            },
            {
                correct: "Create welcome email as first step in automation",
                indent: 0,
                explanation: "Welcome emails have highest open rates",
                distractors: [
                    { text: "Send sales email immediately", reason: "Welcome subscribers first; sell later" },
                    { text: "Skip welcome email", reason: "Welcome emails build relationship and set expectations" }
                ]
            },
            {
                correct: "Add delay: 'Wait 2 days' before second email",
                indent: 0,
                explanation: "Delays prevent overwhelming subscribers",
                distractors: [
                    { text: "Send all emails at once", reason: "Spamming users leads to unsubscribes" },
                    { text: "Wait 365 days", reason: "Too long and subscribers forget they signed up" }
                ]
            },
            {
                correct: "Use personalization: 'Hi {{firstName}}' in emails",
                indent: 0,
                explanation: "Personalization increases engagement",
                distractors: [
                    { text: "'Hi there' for everyone", reason: "Personalized emails perform better" },
                    { text: "'Dear Customer #12345'", reason: "Use names, not impersonal identifiers" }
                ]
            },
            {
                correct: "Add button with tracking link in email: <a href='https://...?utm_source=email'>",
                indent: 0,
                explanation: "UTM parameters track email traffic in analytics",
                distractors: [
                    { text: "Use plain links without tracking", reason: "Tracking measures campaign effectiveness" },
                    { text: "Don't include any links", reason: "Links drive traffic to your site" }
                ]
            },
            {
                correct: "Set up webhook to trigger email from website button click",
                indent: 0,
                explanation: "Webhooks connect external events to email platform",
                distractors: [
                    { text: "Manually send email when user clicks", reason: "Webhooks automate this process" },
                    { text: "Webhooks and APIs are different", reason: "Webhooks are event-driven API calls" }
                ]
            },
            {
                correct: "Test automation with yourself as subscriber",
                indent: 0,
                explanation: "Testing verifies triggers fire correctly",
                distractors: [
                    { text: "Deploy automation without testing", reason: "Broken automations frustrate users" },
                    { text: "Test only in preview mode", reason: "End-to-end testing catches integration issues" }
                ]
            },
            {
                correct: "Monitor automation analytics: open rates, click rates, unsubscribes",
                indent: 0,
                explanation: "Analytics show what's working and what needs improvement",
                distractors: [
                    { text: "Set and forget automations", reason: "Optimization based on data improves results" },
                    { text: "Analytics don't matter", reason: "Data-driven decisions improve campaign performance" }
                ]
            }
        ]
    },

    // CHALLENGE 24: PDF Generation
    {
        id: 24,
        title: "Generate PDFs Programmatically",
        goal: "Create PDF documents dynamically from code",
        concepts: "PDF libraries, templates, dynamic content, downloads, invoices",
        language: "JavaScript/PDF",
        sequence: [
            {
                correct: "Install PDF library: npm install jspdf (client-side) or pdfkit (server-side)",
                indent: 0,
                explanation: "Libraries handle PDF format complexity",
                distractors: [
                    { text: "Write PDF format from scratch", reason: "PDF format is complex - use established libraries" },
                    { text: "pip install pdf", reason: "For JavaScript, use npm, not pip" }
                ]
            },
            {
                correct: "Import library: import jsPDF from 'jspdf'",
                indent: 0,
                explanation: "Import makes library functions available",
                distractors: [
                    { text: "Use <script> for npm packages", reason: "ES6 modules use import statement" },
                    { text: "Library loads automatically", reason: "Must explicitly import libraries" }
                ]
            },
            {
                correct: "Create new PDF document: const doc = new jsPDF()",
                indent: 0,
                explanation: "Instantiate PDF object to work with",
                distractors: [
                    { text: "let pdf = document.createElement('pdf')", reason: "PDF isn't an HTML element; use library constructor" },
                    { text: "const doc = PDF.create()", reason: "Constructor is new jsPDF(), not PDF.create()" }
                ]
            },
            {
                correct: "Add text: doc.text('Hello World', 10, 10)",
                indent: 0,
                explanation: "Parameters are text content, x position, y position",
                distractors: [
                    { text: "doc.write('Hello World')", reason: "Method is .text(), not .write()" },
                    { text: "doc.innerHTML = 'Hello World'", reason: "PDFs use methods, not innerHTML" }
                ]
            },
            {
                correct: "Set font: doc.setFont('helvetica', 'bold')",
                indent: 0,
                explanation: "Font control improves PDF typography",
                distractors: [
                    { text: "Use CSS: font-family", reason: "PDFs use library methods, not CSS" },
                    { text: "Fonts are automatic", reason: "Must explicitly set fonts" }
                ]
            },
            {
                correct: "Add dynamic content from variables: doc.text(`Name: ${userName}`, 10, 20)",
                indent: 0,
                explanation: "Template literals insert variables into text",
                distractors: [
                    { text: "Hard-code all content", reason: "Dynamic content makes PDFs useful for invoices, certificates, etc." },
                    { text: "Variables don't work in PDFs", reason: "JavaScript variables work normally in PDF generation" }
                ]
            },
            {
                correct: "Add new page: doc.addPage()",
                indent: 0,
                explanation: "Multi-page PDFs for longer documents",
                distractors: [
                    { text: "Create separate PDF per page", reason: "addPage() creates multiple pages in one document" },
                    { text: "Pages add automatically", reason: "Must explicitly add pages" }
                ]
            },
            {
                correct: "Insert image: doc.addImage(imageData, 'PNG', x, y, width, height)",
                indent: 0,
                explanation: "Add logos, signatures, or graphics to PDFs",
                distractors: [
                    { text: "Use <img> tag in PDF", reason: "PDFs use addImage() method, not HTML tags" },
                    { text: "PDFs can't contain images", reason: "addImage() embeds images in PDFs" }
                ]
            },
            {
                correct: "Save PDF: doc.save('document.pdf')",
                indent: 0,
                explanation: "Triggers browser download of generated PDF",
                distractors: [
                    { text: "doc.download()", reason: "Method is .save(), not .download()" },
                    { text: "PDF saves automatically", reason: "Must call .save() to download" }
                ]
            },
            {
                correct: "For server-side: Stream PDF to response or save to disk",
                indent: 0,
                explanation: "Server PDFs can be emailed or stored",
                distractors: [
                    { text: "Server can't generate PDFs", reason: "Server-side libraries like pdfkit work on Node.js" },
                    { text: "Always generate client-side", reason: "Server generation protects sensitive data" }
                ]
            }
        ]
    },

    // CHALLENGE 25: Three.js 3D
    {
        id: 25,
        title: "Build 3D Experiences with Three.js",
        goal: "Create interactive 3D graphics for the web",
        concepts: "3D rendering, scenes, cameras, meshes, materials, animation",
        language: "JavaScript/3D",
        sequence: [
            {
                correct: "Install Three.js: npm install three",
                indent: 0,
                explanation: "Three.js is the standard WebGL library for 3D",
                distractors: [
                    { text: "Use raw WebGL without library", reason: "Three.js simplifies complex WebGL code" },
                    { text: "Download three.min.js manually", reason: "npm installation is easier and updates automatically" }
                ]
            },
            {
                correct: "Import Three.js: import * as THREE from 'three'",
                indent: 0,
                explanation: "Wildcard import gives access to all Three.js classes",
                distractors: [
                    { text: "import THREE from 'three'", reason: "Use * as THREE to get all exports" },
                    { text: "Include via <script> tag only", reason: "ES6 modules are modern standard" }
                ]
            },
            {
                correct: "Create scene: const scene = new THREE.Scene()",
                indent: 0,
                explanation: "Scene is the container for all 3D objects",
                distractors: [
                    { text: "const scene = new Scene()", reason: "Must use THREE.Scene(), not Scene()" },
                    { text: "Skip creating scene", reason: "Scene is required to render anything" }
                ]
            },
            {
                correct: "Create camera: const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000)",
                indent: 0,
                explanation: "Camera defines viewer's perspective",
                distractors: [
                    { text: "Use OrthographicCamera for 3D", reason: "PerspectiveCamera gives realistic depth; Orthographic is for 2D/isometric" },
                    { text: "3D works without camera", reason: "Camera is required to define viewpoint" }
                ]
            },
            {
                correct: "Create renderer: const renderer = new THREE.WebGLRenderer()",
                indent: 0,
                explanation: "Renderer draws scene to canvas using WebGL",
                distractors: [
                    { text: "Use CanvasRenderer", reason: "WebGLRenderer is faster and more capable" },
                    { text: "Renderer is optional", reason: "Renderer is required to display 3D graphics" }
                ]
            },
            {
                correct: "Set renderer size: renderer.setSize(window.innerWidth, window.innerHeight)",
                indent: 0,
                explanation: "Size determines canvas dimensions",
                distractors: [
                    { text: "Size adjusts automatically", reason: "Must explicitly set renderer size" },
                    { text: "Use fixed 800x600 size", reason: "Responsive sizing improves user experience" }
                ]
            },
            {
                correct: "Add canvas to page: document.body.appendChild(renderer.domElement)",
                indent: 0,
                explanation: "Renderer.domElement is the canvas element",
                distractors: [
                    { text: "Canvas appears automatically", reason: "Must add canvas to DOM" },
                    { text: "Create <canvas> manually", reason: "Renderer creates canvas - just append it" }
                ]
            },
            {
                correct: "Create geometry: const geometry = new THREE.BoxGeometry(1, 1, 1)",
                indent: 0,
                explanation: "BoxGeometry creates cube shape",
                distractors: [
                    { text: "Manually define 12 triangles for cube", reason: "BoxGeometry generates cube geometry automatically" },
                    { text: "Use HTML <div> for 3D cube", reason: "Three.js uses WebGL geometry, not HTML" }
                ]
            },
            {
                correct: "Create material: const material = new THREE.MeshBasicMaterial({color: 0x00ff00})",
                indent: 0,
                explanation: "Material defines surface appearance",
                distractors: [
                    { text: "Use CSS for 3D colors", reason: "Three.js materials use hex colors in JavaScript" },
                    { text: "Objects are white by default", reason: "Must create material to define appearance" }
                ]
            },
            {
                correct: "Create mesh and add to scene: const cube = new THREE.Mesh(geometry, material); scene.add(cube)",
                indent: 0,
                explanation: "Mesh combines geometry and material into renderable object",
                distractors: [
                    { text: "Add geometry directly to scene", reason: "Mesh is required to combine geometry and material" },
                    { text: "scene.appendChild(cube)", reason: "Use scene.add(), not appendChild()" }
                ]
            }
        ]
    },

    // CHALLENGE 26: Google Sheets & Apps Script
    {
        id: 26,
        title: "Automate with Google Sheets & Apps Script",
        goal: "Use Google Apps Script for automation and custom functions",
        concepts: "Google Sheets API, Apps Script, triggers, custom functions, automation",
        language: "JavaScript/Google",
        sequence: [
            {
                correct: "Open Google Sheets and create a new spreadsheet",
                indent: 0,
                explanation: "Sheets provides data storage and Apps Script IDE",
                distractors: [
                    { text: "Use Microsoft Excel", reason: "Apps Script only works with Google Sheets" },
                    { text: "Download desktop Sheets app", reason: "Apps Script runs in browser-based Google Sheets" }
                ]
            },
            {
                correct: "Go to Extensions → Apps Script",
                indent: 0,
                explanation: "Apps Script editor opens in new tab",
                distractors: [
                    { text: "Tools → Script Editor", reason: "Menu location changed - now under Extensions" },
                    { text: "Apps Script is separate from Sheets", reason: "Apps Script is integrated in Sheets via Extensions menu" }
                ]
            },
            {
                correct: "Delete default code and create function: function myFunction() {}",
                indent: 0,
                explanation: "Custom functions extend Sheets capabilities",
                distractors: [
                    { text: "Keep default 'myFunction' code", reason: "Default code is placeholder - replace with your logic" },
                    { text: "Apps Script uses Python", reason: "Apps Script is JavaScript, not Python" }
                ]
            },
            {
                correct: "Get active spreadsheet: const sheet = SpreadsheetApp.getActiveSpreadsheet()",
                indent: 0,
                explanation: "SpreadsheetApp accesses the current sheet",
                distractors: [
                    { text: "const sheet = document.getElementById('sheet')", reason: "Apps Script uses SpreadsheetApp, not DOM methods" },
                    { text: "Import spreadsheet library", reason: "SpreadsheetApp is built-in, no import needed" }
                ]
            },
            {
                correct: "Get specific sheet: const data = sheet.getSheetByName('Sheet1')",
                indent: 0,
                explanation: "getSheetByName accesses specific tab by name",
                distractors: [
                    { text: "const data = sheet[0]", reason: "Use getSheetByName(), not array indexing" },
                    { text: "All tabs are one sheet", reason: "Spreadsheet can have multiple sheets/tabs" }
                ]
            },
            {
                correct: "Read cell value: const value = data.getRange('A1').getValue()",
                indent: 0,
                explanation: "getRange().getValue() reads specific cell",
                distractors: [
                    { text: "const value = data.A1", reason: "Use getRange() method, not property access" },
                    { text: "const value = data.cell(0, 0)", reason: "Method is getRange() with A1 notation or row/column" }
                ]
            },
            {
                correct: "Write to cell: data.getRange('B1').setValue('Hello')",
                indent: 0,
                explanation: "setValue() writes data to cell",
                distractors: [
                    { text: "data.B1 = 'Hello'", reason: "Use setValue() method, not assignment" },
                    { text: "data.innerHTML = 'Hello'", reason: "Sheets use setValue(), not innerHTML" }
                ]
            },
            {
                correct: "Create time-based trigger: Edit → Current project's triggers → Add Trigger",
                indent: 0,
                explanation: "Triggers run functions automatically on schedule",
                distractors: [
                    { text: "Triggers run in code", reason: "Triggers are configured in UI, not code" },
                    { text: "setInterval() for scheduling", reason: "Apps Script uses Triggers, not setInterval()" }
                ]
            },
            {
                correct: "Set trigger to run daily at 9am",
                indent: 0,
                explanation: "Time-driven triggers automate recurring tasks",
                distractors: [
                    { text: "Triggers run every second", reason: "Minimum interval is minutes; use appropriate frequency" },
                    { text: "Manual execution only", reason: "Triggers enable automation" }
                ]
            },
            {
                correct: "Deploy as web app: Deploy → New deployment → Web app",
                indent: 0,
                explanation: "Web apps create HTTP endpoints for your functions",
                distractors: [
                    { text: "Apps Script can't be web apps", reason: "Apps Script can serve web pages and APIs" },
                    { text: "Download and run locally", reason: "Apps Script runs in Google's cloud, not locally" }
                ]
            }
        ]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = window.weeklyChallenges;
}
