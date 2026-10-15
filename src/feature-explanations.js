// Visitor-facing feature explanations. These describe documented scope.
const featureExplanations = {
  "ecosystem:Wopara Spaceship": [
    "Create a shared project space where a team can keep its work together.",
    "Write documents, work with spreadsheets, and make presentations in the same workspace.",
    "Edit code together using Opaline, the built-in collaborative code editor.",
    "Develop film projects and work on their timelines, titles, and trailers.",
    "Coordinate team tasks and collect structured responses through Boardroom.",
    "Control access to shared files rather than treating every team member as the owner.",
    "Find work by its assigned name across different tools."
  ],
  "ecosystem:Wopara Campus": [
    "Browse courses and lesson information before deciding what to learn.",
    "Open classroom activities and reference material from one learning environment.",
    "Use separate community and staff areas within the same campus.",
    "Look up terms in the reference library without leaving the learning platform."
  ],
  "ecosystem:Wopara Museum": [
    "Browse members’ clothing designs, playable games, and published media.",
    "Explore films, books, videos, music, characters, and streams by content type.",
    "Discover interactive versions of films, books, videos, and music alongside conventional media.",
    "Open a work from its collection shelf rather than needing to know which editor produced it."
  ],
  "ecosystem:Wopara Port": [
    "Bring website services together: domain tools, hosting, email, and site checks.",
    "Check a website’s quality and performance using Lighthouse audit results.",
    "Look up domain information and access domain-related services.",
    "Access embedding tools for bringing Wopara into another website."
  ],
  "ecosystem:Moplates": [
    "View a daily nutrition plan and the limits associated with that plan.",
    "Record pantry ingredients so meal planning can account for what you already have.",
    "Review an off-plan meal through the Antidote section.",
    "Invite dependents into a household circle with shared plan constraints.",
    "Review prepayment cycles and information about the chef-facing service."
  ],
  "ecosystem:Campus · Front Desk": [
    "Get an introduction to the school and its learning environment.",
    "Find your way into the classroom and other campus sections."
  ],
  "ecosystem:Campus · Classroom": [
    "Browse courses, lessons, and the activities associated with them.",
    "Move from learning information into the classroom experience."
  ],
  "ecosystem:Campus · Hall": [
    "Open the campus’s shared community area.",
    "Move between the community space and the rest of the learning environment."
  ],
  "ecosystem:Campus · Staffroom": [
    "Access the staff-facing section of the learning platform.",
    "Keep staff activity within the same campus navigation and account context."
  ],
  "ecosystem:Campus · Library": [
    "Look up terms in the campus reference dictionary.",
    "Use reference material alongside the classroom’s learning activities."
  ],
  "ecosystem:Museum · Garments": [
    "Browse clothing and wearable designs in a dedicated collection.",
    "Discover designs as individual works within the Museum."
  ],
  "ecosystem:Museum · Games": [
    "Find Wopara’s browser games from one collection.",
    "Open a game without having to know its individual web address."
  ],
  "ecosystem:Museum · Media": [
    "Browse films, books, videos, music, characters, and streams in one hall.",
    "Switch between conventional and interactive media categories.",
    "Open published works from their collection entries."
  ],
  "ecosystem:Moplates · Today": [
    "See the nutrition plan associated with the current day.",
    "Review the plan without navigating through pantry or household-management tools."
  ],
  "ecosystem:Moplates · Triad": [
    "Review the limits and constraints that define your nutrition plan.",
    "See the roles involved in the plan through the Triad section."
  ],
  "ecosystem:Moplates · Antidote": [
    "Review a meal that falls outside the current plan.",
    "Use the dedicated off-plan meal workflow rather than treating every meal as compliant."
  ],
  "ecosystem:Moplates · Pantry": [
    "Add and remove ingredients from your saved pantry.",
    "Use the available ingredients as context for meal planning."
  ],
  "ecosystem:Moplates · Circle": [
    "Invite a dependent into your household circle.",
    "Give dependents their own plan within the circle’s shared limits."
  ],
  "ecosystem:Moplates · Reserves": [
    "Review the available prepayment cycles for the nutrition service.",
    "Choose how to fund the service through the dedicated plan-funding section."
  ],
  "ecosystem:Moplates · Kitchen": [
    "Read how the chef-facing kitchen service is intended to operate.",
    "Explore information about off-peak kitchen access, operating coverage, and distribution."
  ],
  "ecosystem:Port · Health": [
    "Run a website quality and performance check.",
    "Read Lighthouse scores and return to the result after the check completes."
  ],
  "ecosystem:Port · Domain": [
    "Look up domain information from the Port interface.",
    "Access domain-related tools within the same website-service application."
  ],
  "ecosystem:Port · Hosting": [
    "Open the hosting-service tools associated with your sites.",
    "Access those tools alongside domain and email services."
  ],
  "ecosystem:Port · Email": [
    "Open email-service tools for websites and domains.",
    "Manage the email part of a site’s setup from the same Port application."
  ],
  "ecosystem:Port · VIP": [
    "Open Port’s invitation area.",
    "Review the access-related information offered in that section."
  ],
  "ecosystem:Port · Embed": [
    "Find tools for bringing Wopara into an existing website.",
    "Access website integration from the same place as other Port services."
  ],
  "ecosystem:Port · Duty free": [
    "Open the Duty free service section within Port.",
    "Keep access to that section alongside the other website-service tools."
  ],
  "machine:Browser": [
    "Look up a subject and explore online search results and feedback.",
    "Read the research interface inside the AI assistant’s window while keeping your current page open."
  ],
  "machine:Search": [
    "Search your own saved content across Wopara’s applications.",
    "Open a matching item in the application it belongs to."
  ],
  "machine:Weather": [
    "Enter a city to request its weather information.",
    "Check weather without leaving the page where you opened the assistant."
  ],
  "machine:News": [
    "Enter a topic to look for related headlines.",
    "Read the returned news inside the assistant’s tool window."
  ],
  "machine:Servegram": [
    "Browse the feed associated with your AI assistant.",
    "Open the feed as a tool within the same assistant interface."
  ],
  "machine:Errands": [
    "Open the assistant’s job-management surface.",
    "Review errands through a dedicated interface while keeping the surrounding conversation available."
  ],
  "machine:Reminder": [
    "Enter what you need to remember and the timing information for it.",
    "Pass the reminder into Wopara’s shared reminder workflow for device delivery."
  ],
  "machine:Timer": [
    "Start a countdown and see how much time remains.",
    "Keep the countdown available when you switch Wopara pages.",
    "Recover the correct remaining time from the saved deadline after the tab has been inactive."
  ],
  "machine:Stopwatch": [
    "Measure elapsed time and record individual laps.",
    "Keep the same running stopwatch when you move between Wopara pages."
  ],
  "machine:Alarm": [
    "Set alarms for particular times of day.",
    "Keep alarm settings in the shared clock state so the tool can read them again when reopened."
  ],
  "machine:Note": [
    "Save a short note for the AI assistant to remember.",
    "Carry that note into later conversations rather than leaving it only in the current chat.",
    "Review saved notes and delete information you no longer want remembered."
  ],
  "machine:Site health": [
    "Submit a website for a Lighthouse quality and performance audit.",
    "Leave the tool while the server runs the check, then return to its progress or results."
  ],
  "machine:Domains": [
    "Enter a domain name and request its registration information.",
    "Check against the live domain registry rather than a locally maintained list.",
    "Compare recent lookup results in the same tool."
  ],
  "machine:Message": [
    "Choose someone from your Wopara contacts and compose a message.",
    "Send it through the shared messaging workflow inside the assistant interface."
  ],
  "machine:Email me": [
    "Ask for information to be sent to your own inbox.",
    "Submit the request through the authenticated email service and see its result."
  ],
  "machine:Photo": [
    "Describe a scene for a picture of your AI assistant.",
    "View the generated image in the tool after the request completes."
  ],
  "machine:Call": [
    "Open a spoken conversation with the AI assistant.",
    "Access voice interaction from the same window used for its other tools."
  ],
  "machine:Music": [
    "Play music inside Wopara.",
    "Organize tracks into playlists and return to saved music."
  ],
  "machine:Forex": [
    "Choose the currencies you want to compare.",
    "Scan exchange-rate paths for arbitrage opportunities.",
    "Use the currency tool inside the assistant without opening a separate full-page interface."
  ],
  "machine:Reserves": [
    "Open your Wopara balance and account-funding interface.",
    "Enter the shared top-up flow from the assistant’s tool list."
  ],
  "machine:Report": [
    "Describe a problem you encountered in Wopara.",
    "Send the report with the current page and assistant context so the issue has more than an isolated message."
  ],
  "spaceship:Boardroom": [
    "Organize a team’s work into missions and tasks.",
    "Review progress through different views of the same mission.",
    "Build forms to collect structured responses from other people.",
    "Ask for text, numbers, dates, contact information, ratings, or multiple-choice answers.",
    "Configure listeners that respond to selected form answers."
  ],
  "spaceship:Platforms": [
    "Move between document, spreadsheet, presentation, coding, and media tools.",
    "Keep those tools inside the team’s shared project space rather than opening unrelated applications."
  ],
  "spaceship:Jotter": [
    "Write and edit documents inside the shared project space.",
    "Work with formatted text, page layouts, and page breaks.",
    "Save the document as a team file so it belongs to the same workspace as the rest of the project."
  ],
  "spaceship:Data": [
    "Create and edit spreadsheets in the team workspace.",
    "Keep structured table data as a saved project file.",
    "Move between the spreadsheet and the project’s other tools."
  ],
  "spaceship:Slides": [
    "Build a presentation as a sequence of slides.",
    "Select a slide from the list and edit it on the main stage.",
    "Place objects on a slide and preserve their position and size.",
    "Save the presentation alongside the team’s other work."
  ],
  "spaceship:Media": [
    "Organize a film’s production work inside the team project space.",
    "Open the film, timeline, title, and trailer tools from that production context.",
    "Keep production files attached to the same team workspace."
  ],
  "spaceship:Opaline": [
    "Work on the same code document with other people through collaborative editing.",
    "See shared editing awareness so the editor can represent other participants.",
    "Write JavaScript, Python, HTML, CSS, and JSON with language-specific highlighting.",
    "Use autocomplete and bracket matching while writing code.",
    "Fold sections of code and search within a document.",
    "Undo and redo changes with the collaborative editor’s history.",
    "Use the lint interface to surface code diagnostics.",
    "Save editor records within the shared workspace."
  ],
  "spaceship:Movie": [
    "Create and edit film projects within a team workspace.",
    "Work with films that follow a linear sequence or offer branching paths.",
    "Keep the film connected to its related production work."
  ],
  "spaceship:Timelines": [
    "Arrange and edit media along a production timeline.",
    "Open a project stored on the device or shared through the workspace.",
    "Work on the timeline within the same film-production context."
  ],
  "spaceship:Trailer": [
    "Create a trailer as its own production file.",
    "Open that trailer while retaining the team and project context."
  ],
  "spaceship:Titles": [
    "Create and manage title work for a production.",
    "Keep title files with the rest of the project rather than in a separate application."
  ],
  "spaceship:Planner": [
    "Plan a story and its production within the film workspace.",
    "Keep the plan related to the production files it supports."
  ],
  "spaceship:Websites": [
    "Create website work as a file in the team workspace.",
    "Organize that work alongside the project’s documents and media."
  ],
  "spaceship:Ads": [
    "Create advertising work within a team project.",
    "Keep advertising files in the same shared file and access model as other project materials."
  ],
  "spaceship:Desktops": [
    "Organize desktop surfaces associated with a team.",
    "Open the appropriate surface while retaining the shared project context."
  ],
  "spaceship:Tagnames": [
    "Find a project file using the name assigned to it.",
    "Search a directory that spans files from different workspace tools."
  ],
  "woparagames:YEG Life": [
    "Explore a 3D game world set in Edmonton.",
    "Encounter routes, traffic, and simulated activity within the city.",
    "Play in a browser-rendered environment rather than a static city map."
  ],
  "woparagames:Rule of Law": [
    "Make decisions within a game built around rules and governance.",
    "See gameplay state respond to those decisions."
  ],
  "woparagames:Plummet": [
    "Play a survival game that begins on an island.",
    "Explore a rendered 3D world with scene effects."
  ],
  "woparagames:Smarts": [
    "Play a collection of learning challenges.",
    "Use math activities and story-based game content within the same game shell."
  ],
  "woparagames:Whot": [
    "Play a browser adaptation of the Nigerian card game Whot.",
    "Use connected play backed by the game’s network module."
  ],
  "woparagames:Type": [
    "Practice typing through keyboard-driven gameplay.",
    "Switch between runner and wipeout modes.",
    "See typing actions reflected in 3D and canvas-rendered game elements."
  ],
  "woparagames:Farm": [
    "Interact with a 3D farm simulation.",
    "Choose between the available modes.",
    "Move the camera around the scene using orbit controls."
  ],
  "woparagames:Minute Dash": [
    "Play through maze-based game modes.",
    "Use the game’s multiplayer-related features.",
    "Navigate game menus with audio and gameplay controls."
  ],
  "Ivana Foundation": [
    "Read the foundation’s mission and public information.",
    "Find contact paths for engaging with the organization."
  ],
  "YegeLearning.com": [
    "Explore the learning service and information intended for students.",
    "Open the consultation journey from the public website."
  ],
  "Daniel's Enterprise": [
    "Browse the organization’s programs.",
    "Read its background and find contact information across dedicated pages."
  ],
  "FlatPurse Business": [
    "Use the business application’s browser interface.",
    "Navigate responsive frontend screens connected to the larger application."
  ],
  "Prastfarms.com": [
    "Create an investment record.",
    "Edit existing investment information.",
    "Monitor investment records through the management interface."
  ],
  "Lenslore.ca": [
    "Browse work through an interactive portfolio gallery.",
    "Open enquiry links to contact the creator.",
    "Generate a PDF from the browser.",
    "Change the website’s visual theme."
  ],
  "culyeimmigrationservices.com": [
    "Explore the immigration company’s services.",
    "Read site content and updates.",
    "Access the payment integration recorded in the original project scope."
  ],
  "bodidris.org": [
    "Explore a personal profile and portfolio.",
    "Follow enquiry links to start a conversation."
  ],
  "God's Embassy Church App": [
    "Use a church-focused native iPhone application.",
    "Sign in with Google.",
    "Play media through the app’s Apple media components."
  ],
  "234Stones": [
    "Explore the visual identity developed for a jewelry store.",
    "See branding and marketing work intended to help the store present its products."
  ],
  "Family Verifier": [
    "Create a verification request for someone you know.",
    "Manage contacts and review verification history.",
    "Use the app’s device-authentication hooks within its verification flows."
  ],
  "Mazey": [
    "Play a maze game with multiple presentation modes.",
    "Explore browser-rendered 3D scenes.",
    "Use multiplayer-related game features."
  ],
  "Dev Game Show": [
    "Explore information about the developer-focused game show.",
    "Follow the public site’s visitor actions and contact paths."
  ],
  "Fromsupply": [
    "Learn about the concierge service from its public website.",
    "Use the enquiry paths to contact the service."
  ],
  "Pautacos": [
    "Discover the chef-network service and its offering.",
    "Browse the food-service information presented by the website."
  ],
  "Wopara": [
    "Move between learning, teamwork, media, and everyday tools under one account system.",
    "Use shared navigation to find each application.",
    "Create team workspaces and access their creative tools."
  ],
  "Clubbelong": [
    "Explore a public interface for interactive media.",
    "See the livestream and interactive-film ideas presented by the site."
  ],
  "Nairatraffic": [
    "Look up exchange-rate information.",
    "Review historical rate data.",
    "Explore currency paths for arbitrage opportunities."
  ],
  "Goodsline": [
    "Explore the recorded concept for researching public feedback on products.",
    "Compare sentiment and popularity through the product’s described graphs."
  ],
  "Chimos": [
    "Explore the recorded concept for an enterprise-app marketplace.",
    "See how a reserves system is intended to connect productivity with app access."
  ],
  "Chim Wopara Clothing": [
    "Explore culturally influenced clothing concepts.",
    "See the brand identity and fashion design work."
  ],
  "Acters": [
    "Explore a script written for an interactive-film experience.",
    "See the writing contribution behind the proposed playable film."
  ],
  "Structured Prompts and Logic": [
    "Represent programming logic using a structured prompt syntax.",
    "Express the context around that logic as part of the prompt."
  ],
  "Falling Cards": [
    "Make decisions about limited resources while playing.",
    "Solve arithmetic under time pressure.",
    "Interact with a canvas-rendered browser game."
  ],
  "GunvGun": [
    "Explore the recorded 2D multiplayer game concept.",
    "See scarcity and inflation used as gameplay mechanics."
  ],
  "Runneth": [
    "Play within the documented Roblox multiplayer concept.",
    "Encounter resource scarcity and economic rules in the game design."
  ],
  "Plummet": [
    "Explore the historical Roblox survival game.",
    "See resource scarcity and economic rules used in its design."
  ],
  "Chim Type": [
    "Practice typing through a keyboard-driven browser interface.",
    "Receive feedback as you interact with the typing exercise."
  ],
  "Chim Maze": [
    "Use your own notes as the basis for recall practice.",
    "Test what you remember through maze-based gameplay."
  ],
  "Fs Logic Code": [
    "Work through coding exercises using selectable options.",
    "Build progression through a points-based learning system.",
    "Follow the coding syllabus as exercises advance."
  ],
  "Fs Mall": [
    "Explore the recorded shopping concept for domestic products.",
    "See a customer experience designed around gift-giving and delivery."
  ],
  "Chim Farms": [
    "Explore the recorded agricultural investment concept.",
    "See the proposal for blockchain-represented assets and 3D farm monitoring."
  ],
  "Chimron Calls": [
    "Explore the recorded concept for automated inbound customer-support calls.",
    "See the proposed outbound call flow for following up with leads."
  ],
  "Fs Browser": [
    "Explore the recorded concept for researching social feedback on products.",
    "Compare relevance and sentiment through the proposed analysis graphs."
  ],
  "Pautacos.com": [
    "Discover the chef-network service and its offering.",
    "Browse the food-service information presented by the website."
  ],
  "Devgameshow.com": [
    "Explore information about the developer-focused game show.",
    "Follow the public site’s visitor actions and contact paths."
  ],
  "Whot Whot": [
    "Play a digital version of Nigerian Whot.",
    "Choose single-player or multiplayer play."
  ],
  "Eventspot": [
    "Discover local events through the public interface.",
    "Use the site’s event-sharing paths."
  ],
  "MCP Servant": [
    "Tailor a resume to a particular job opportunity.",
    "Generate a corresponding cover letter.",
    "Use source-specific runners for different job sites.",
    "Automate parts of the application workflow instead of preparing each opportunity entirely by hand."
  ],
  "HomeMUA": [
    "Explore makeup-artist services for at-home appointments.",
    "Use the marketplace’s service-enquiry paths."
  ],
  "Dr Morgan": [
    "Explore the consultancy’s background and public service information.",
    "Read its blog and use the site’s enquiry paths."
  ]
};
const projectIntroductions = {
 'ecosystem:Wopara Spaceship': 'A browser-based team workspace that brings documents, spreadsheets, presentations, code, and film-production work into one project. “Spaceship” is the product name; a “crew” is the team using it.',
 'spaceship:Opaline': 'A collaborative code editor inside Wopara. It lets people work on source code together, with editing tools normally associated with a dedicated programming editor.',
 'spaceship:Boardroom': 'A team coordination tool for organizing work and collecting information. It combines tasks and progress views with a form builder for structured responses.',
 'ecosystem:Wopara Museum': 'A public collection for discovering members’ creative work, including clothing, games, and different kinds of media. “Museum” describes the showcase, rather than a physical building.',
 'ecosystem:Wopara Campus': 'A learning platform that connects course information, classroom activities, community areas, and a reference library.',
 'ecosystem:Wopara Port': 'A website-services application for domains, hosting, email, website checks, and embedding Wopara into other sites.',
 'ecosystem:Moplates': 'A nutrition-service application connecting daily plans, available ingredients, household dependents, and service funding.',
 'spaceship:Movie': 'A film-production tool that supports both conventional films and films with branching paths, where a story can take more than one route.',
 'spaceship:Timelines': 'A media-editing tool for organizing a production over time. It works with projects stored on the device or shared through the team workspace.',
 'MCP Servant': 'An application-automation project that connects job opportunities to tailored resumes, cover letters, and source-specific application workflows.'
};
projects.forEach(project => {
 const key = project.category + ':' + project.name;
 project.features = featureExplanations[key] || featureExplanations[project.name] || project.features;
 project.description = projectIntroductions[key] || projectIntroductions[project.name] || project.description;
 if (project.category === 'machine') {
   project.context = 'An everyday tool inside Wopara’s AI assistant. The “Servant Blob” is the assistant window that holds these tools.';
 } else if (project.category === 'spaceship') {
   project.context = 'Part of Spaceship, Wopara’s shared team workspace. Team members work on files within the same project.';
 } else if (project.category === 'woparagames') {
   project.context = 'A browser game available through Wopara’s game collection.';
 } else if (project.category === 'ecosystem' && project.name.includes(' · ')) {
   const parent = project.name.split(' · ')[0];
   const meanings = { Campus: 'the learning platform', Museum: 'the creative-work showcase', Moplates: 'the nutrition-service application', Port: 'the website-services application' };
   project.context = 'A section of ' + parent + ', ' + meanings[parent] + '.';
 }
 const hay = [project.name, project.description, ...project.features].join(' ');
 project.capabilities = capabilityGroups.filter(group => group.words.test(hay)).map(group => group.id);
});
const projectUseExamples = {
 'ecosystem:Wopara Spaceship': 'A team preparing a launch can keep its written brief, budget spreadsheet, presentation, code, and film-production files in the same project.',
 'spaceship:Opaline': 'Two people working on a web page can collaborate on the code, search the document, fold sections, and undo changes in the editor.',
 'spaceship:Boardroom': 'A team can organize a mission and build a response form that asks for a date, contact details, a rating, and selected options.',
 'ecosystem:Wopara Museum': 'A visitor looking for something to experience can browse a game, an interactive film, a book, or a clothing design without knowing which tool created it.',
 'ecosystem:Wopara Campus': 'A learner can browse the course information, enter a classroom activity, and consult the reference dictionary within the same platform.',
 'ecosystem:Moplates': 'Someone planning meals can review the daily plan, record pantry ingredients, and manage a dependent within their household circle.',
 'spaceship:Timelines': 'A team working on a film can open the production timeline and arrange media while retaining access to its shared project.',
 'machine:Note': 'Save a preference once, let the assistant use it in later conversations, and remove it from memory when it no longer applies.',
 'machine:Timer': 'Start a countdown, move to another Wopara app, and return without restarting the timer.',
 'MCP Servant': 'For a new job opportunity, prepare a matching resume and cover letter, then use the runner associated with that job source.',
 'Family Verifier': 'Start a verification request for a known contact, then review the request in the app’s verification history.',
 'woparagames:YEG Life': 'Explore a 3D Edmonton setting where streets and traffic are part of a simulated game world.'
};
projects.forEach(project => {
 project.example = projectUseExamples[project.category + ':' + project.name] || projectUseExamples[project.name];
});
