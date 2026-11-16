// What I've built, grouped the way Wopara is organised. Each entry is described once, with what is inside it.
const builtApps = [
 {
  art: "platform",
  open: "https://wopara.com/platform",
  name: "Wopara Platform",
  type: "Platform",
  overview: [
   "Wopara Platform is the layer every product stands on. It holds what belongs to no single app: the people a user knows, the tools that follow them from page to page, and the account, reserves and look that stay the same everywhere.",
   "Each project is a platform, a shared room holding its files, tasks, people and calls, editable by the whole team at once. Every person also has a platform of their own, called their world, where personal work goes by default."
  ],
  inside: [
   ["Navigation pill", "One shared component mounted on every Wopara page. It carries the app switcher, the sections of the current product, search, the account and the Guide, and it rearranges itself for a phone. Its source is built into a minified file at deploy, and a check at deploy fails the build if painting-derived and hand-set colours are mixed."],
   ["Wopara People", "A directory of the people in a user's Wopara and the one place to act on any of them from any page. A person's sheet offers chat, gifts, verification, sharing a file with chosen access, and removal. Verification is asynchronous: the other person receives a notification with Confirm and Not me, plus an optional private two-factor word. Groups have live chat, and a sender can edit their own messages. A person's external links orbit their photo as morphing bubbles, and the directory is searchable by username or name. Deep links such as ?add= and ?coplay= open a contact from anywhere."],
   ["Mouse Share", "One presenter, everyone follows. Always-on live cursors cost grows with every pair of people, so Mouse Share has the presenter stream a cursor, the current view and the Guide's hints into a single document that followers read, which keeps reads linear in the number of people. A separate state document, written only on start and stop, drives the crew's Follow bar. Followers are switched to the presenter's tab or page automatically, and only the presenter's writes are accepted by the rules."],
   ["Access scopes", "Per-file and per-person access with scopes for viewing, editing, deleting, sharing and competing, each with a time window. Group grants sit above them, and products check an action before they perform it. The same model governs who may open a platform, a file and a call."],
   ["Sidenotes", "A panel that opens beside any page and can be moved, resized or docked. It holds rich-text notes with a drawing layer, the Guide's chat, People, notifications and inquiries, so a conversation or a note stays with the user as they move between products."],
   ["Search", "A header search over a merged, ranked index. Products come from one registry, every named destination from a static manifest, and live entries from each product about its own content: films, scenes, characters, classes and desktop folders. Live entries persist per source across the whole origin, so they are findable from every page. With no match, the query goes to the Guide, and answers appear in the results the way Spotlight's do."],
   ["Widgets", "A reusable engine for draggable widgets on the hero and the desktop: the Guide's tips, reserves, a word of the day, classes, a game, a continue card, countdowns and live People status. Cards are placed as fractions of the surface, a relaxation pass separates them from obstacles and each other on resize, and layouts sync across a user's devices through a per-user key-value document."],
   ["Appearance", "Every hero hangs a painting from the Met's open collection. Colours are read from the painting per app, with contrast enforced in the OKLab colour space and audited by a script rather than by eye. Users choose Light, Dark or Gallery, drag the hero to resize it, and place the pill where they like."],
   ["Account and reserves", "One Google sign-in and one profile across every product. A single module sets every price, shown in the user's own currency by location, with Stripe and Paystack as payment rails. Storage is free but must be backed by one reserve per gigabyte. Organizations create named prepaid pools for their members, and settings sync across devices."],
   ["Wopara world", "Everybody has exactly one platform of their own, named after them, where they are the only resident. Others can be let in as guests and are shown out when they go elsewhere, so personal work has a home that is never shared by accident."],
   ["Calls and notifications", "Voice and video calls run through Daily. The server mints a private room and a token only for members of the platform, and a team can call everyone to the file being worked on. Web Push reaches a user's device with no tab open, and reminders go by push and by email through Brevo."]
  ],
  capabilities: [
   "A first frame that traces the last view, so a reload shows the page as it was, split windows included.",
   "Cross-device sync through a per-user key-value document with merge, not overwrite.",
   "Server-side enforcement of access, with the interface never the only guard.",
   "The same component and the same account on every page."
  ],
  stack: ["JavaScript", "Firebase Auth", "Firestore", "Cloud Storage", "Daily", "Web Push", "Stripe", "Paystack", "Brevo"]
 },
 {
  art: "apps",
  open: "https://wopara.com/platform",
  name: "Wopara Platform Apps",
  type: "Platform apps",
  overview: [
   "The apps a team works in. Each one is a file type inside a platform, so documents, code, film and planning share one account, one file system and one set of collaboration features.",
   "Every app is multiplayer from the start, and old files keep opening as the apps improve."
  ],
  inside: [
   ["Plenary", "One file holds an ordered list of pages, and each page has its own kind: a written page in portrait or landscape, a slide, a freeform board or a sheet. Kinds mix in any order, and the strip of thumbnails is drawn from the pages themselves. Present plays the whole file as a slideshow with hidden pages skipped, and any page can go fullscreen. Sheets run on a formula parser and grid of about 4,500 lines, and a lazily loaded DuckDB-WASM engine, fetched only for workbooks that use it, turns sheets into tables for queries and datasets. A cell reference such as {{Sheet1!B4}} stays live in text, and a chart on a slide is bound to a range and redraws when the cells change. Markdown and Word files import and export, and pages carry a saved ink layer for handwriting."],
   ["Plenary teaches itself", "A lesson is planned on the server, designed as slides, and delivered live in Present. The lecture is built as it plays, the controls are Back, Pause, Explain again, ask by typing or speaking, and Stop, and every action goes through the real menus rather than being faked. The script is each slide's notes, so a class replays exactly, and notes are written when it ends."],
   ["Opaline", "A real-time code editor built on CodeMirror 6 and Yjs. It is a true CRDT with character-level co-editing, not last-write-wins, using a hand-written provider on Firestore: a compacted snapshot, an append-only log of batched updates applied idempotently, and presence documents for remote cursors. An import map keeps the Yjs and CodeMirror modules as singletons, the one thing that breaks a CDN build. Files live inside the shared document, so renaming and ordering are collaborative too. Websites preview live in a sandboxed iframe that inlines local CSS and JavaScript and bridges the console, Python runs through Pyodide loaded on demand, and projects import and export as ZIP. A visual builder and SQLite sit beside the editor."],
   ["Movie", "One app for everything film, with Timelines and Trailer inside it. Movie holds the story, character and location sheets, assets, thumbnails, scenes, clips, audio and production, and interactive films carry their branching with them. The Guide edits it by name: it resolves a character, asks which when two share a name, and applies changes such as a younger age or a new scene."],
   ["Timelines", "A full video editor inside Movie, running client-side. Main video, B-roll, C-roll, voiceover, music, sound effects and titles sit on separate tracks. Imported media stays in the browser's IndexedDB and is never uploaded, video blocks get filmstrip thumbnails, and audio blocks get real waveforms decoded once and cached. A cut editor and a title studio sit beside it, and the title studio styles text with fonts, gradients, animated presets and canvas backgrounds. The same editor mounts standalone, inside Movie and inside a platform, where the crew co-edits one cut."],
   ["Instruments", "Five instruments (clarinet, piano, guitar, an 808 bass and drums) are synthesised in the browser with no samples, no server and no cost. A part is written as notes, in a notation with chords, rests, repeats, tempo, accents and ghost notes, and swing. It is rendered offline to audio and encoded as WAV. Because the notes travel with the cut, a crewmate who never had the file renders the same part from them."],
   ["Trailer", "An export, not an app. Plenary, Opaline, Movie and Timelines each offer Create short trailer, which opens a sheet for sources, length, shape and a note. The engine reads the work, returns a plan to approve, then cuts the trailer or demo video and lands it in Movie."],
   ["Tasks", "A shared board where a task can be claimed, assigned or sent straight to someone with a deadline. When two people claim the same task, the Guide prompts the crew to work together, reassign or abandon it. An assignment is emailed by the assignee's own Guide with a link to the task and a calendar file for the deadline. A progress report shows each member as a ring of assigned against done, and a task can be created by the Guide from a prompt and attached files, with its own count enforcement."],
   ["Talent matching", "A task card can rank the five best people on Wopara for that kind of work and ask them all at once, with the pay in reserves held until someone accepts. Ranking multiplies skill for the task's category, reliability, pace against the deadline and responsiveness, so one weak factor sinks a match, and the ranking is computed on the server from a cached pool."],
   ["Schedule", "A weekly availability grid in 30-minute slots from 8:00 to 22:00, with scopes for all missions or a single one. The crew votes on a time and the meeting runs live with a graded end."]
  ],
  capabilities: [
   "Real-time co-editing of every file type with live cursors.",
   "Results that travel between files, such as a cell shown on a slide.",
   "Old files keep opening as the apps change.",
   "Media and audio rendered on the device."
  ],
  stack: ["JavaScript", "Yjs", "CodeMirror 6", "DuckDB-WASM", "Pyodide", "Canvas 2D", "Web Audio", "IndexedDB", "Firestore"]
 },
 {
  art: "guide",
  open: "https://wopara.com/",
  name: "Wopara Platform Guide",
  type: "Platform guide",
  overview: [
   "Wopara Guide is the AI assistant built into every page of Wopara. It is an agent rather than a chat window: it reads the page the user is on, acts inside the products on their behalf, and remembers them from one session to the next.",
   "Each Guide has a name, a face and a manner chosen by its user, a memory that can be viewed and cleared, and a voice that takes calls. It was specified as a 1,737-item checklist and is driven by a server of about 28,000 lines. Several tools that began as separate products now live inside it."
  ],
  inside: [
   ["Actions across Wopara", "A product makes itself drivable by publishing what is open and registering the actions it can perform. The server turns that into an instruction block and offers one generic page action, and the client runs it, tags the result and logs it. If a result is ambiguous, the Guide asks which. A reply that claims to have done something with no action behind it is caught and retried. Verified outcomes feed back into the next prompt, so failures are owned rather than glossed over."],
   ["Wopara Browser", "A browser inside the Guide, generated from a standalone engine and loaded on demand. It identifies the subject of a page or search through a server-side Wikipedia lookup, shows the people, places and things involved with their public profiles and links, and offers to dig deeper only for subjects it cannot identify. Results include the closest matching people already on Wopara."],
   ["Wopara Bank", "A live currency tool for finding the best rate between two currencies. Its New area scans a pair and opens analysis tabs for routes, rates, market, economics, strategy, signals, policy, scenarios and forecast, backed by a pure compute engine, with Recents, Alerts and Market beside it. A rate alert emails the user when a pair crosses a target they set. It began as a standalone app and is now part of the Guide."],
   ["Voice", "Say its name anywhere and a plain call begins. A call ends after a minute of silence, the wake word is ignored when it appears mid-sentence as talk about the Guide rather than to it, and the microphone is used only after the user agrees. Spoken lessons and calls feed the same memory as typed ones."],
   ["Persona and memory", "Each Guide has a name, gender, personality, role, age and look, and the persona is built into every reply. Its age matches the user's by default and it knows their birthday. It learns about the user while learning is switched on, shows what it remembers, and forgets on request. It also keeps a task ledger with a return-after-absence rule, so a request made last week is still open."],
   ["Delivery", "Replies land as one to three messages with typing pauses at human speeds, slower before dawn. Account emails are written in the Guide's voice with its photo and name in the header, and reminders arrive by Web Push and by email. A Guide can @mention, email and text people on the user's behalf, and opt-outs are honoured."],
   ["Handwriting and the universal hand", "A single-stroke handwriting font writes worked answers by hand on the page, saved as an ink layer rather than typed. A set of interface actions for pressing, typing, picking, scrolling, reading and drawing runs on every page, and a named cursor glides and clicks while the real action happens, so every step can be watched."],
   ["Terms", "The glossary of Wopara and business terms lives in the Guide. Ask what a term means and it answers from the canonical definition, names the category and points to related classes, so a definition leads into learning."],
   ["Bond", "A weekly score from 0 to 100 in three rings, Rapport, Trust and Presence, built from messages, actions taken and days present across products, with each ring capped so the total cannot exceed its goal."]
  ],
  capabilities: [
   "A client-side tool executor that turns replies into real actions.",
   "Page awareness, so help is about what is on screen.",
   "Account awareness across profile, files, platforms and reserves.",
   "Metering to reserves, with prices shown once and every charge itemised."
  ],
  stack: ["JavaScript", "FastAPI", "Cloud Run", "Google Vertex AI", "DeepSeek", "Web Push", "Web Speech", "Firestore", "Brevo"]
 },
 {
  art: "campus",
  photo: "assets/shots/campus-class-notes.jpg",
  open: "https://wopara.com/campus",
  name: "Wopara Platform Campus",
  type: "Platform campus",
  overview: [
   "Wopara Platform Campus is the learning side of Wopara: more than a hundred classes and an engine that turns each class into one interactive page.",
   "A class is a single page with the lecture video at the top, interactive notes beneath it, and a challenge at the foot. Grades and certificates follow the work."
  ],
  inside: [
   ["Classes and notes", "Notes are data rendered by a small engine. Each class mixes animated SVG, zoomed screenshots with arrows and circles, and interactive pieces that can be checked, picked, ordered, matched, sorted, connected, revealed and swiped, and each piece is scored. The curriculum is defined once and every class keeps an identifier, so grades follow a class through renames.", ["assets/shots/campus-class-notes.jpg"]],
   ["Live lessons", "The Guide plans a class, designs the slides and teaches it live in Present, with questions typed or spoken answered as it goes. Every action goes through the real menus, music made for the class pauses when it stops, and the lecture replays from its notes."],
   ["Grades", "A Grades button in every Campus window morphs the dropdown into a progress bar for every class a student has visited. Scores are kept per piece (first, best and last attempt) on the device, even signed out, then merged to the account with the higher value winning. A bar is green by default, gold when every piece is done and the first attempts averaged 90 percent or more, complete when a retry lifts the best to 90, and red below 50."],
   ["Challenges", "Each class ends with a challenge: a goal and a sequence of steps where the right action must be picked from believable wrong ones. Every wrong choice carries the reason it fails and every right one an explanation, so a mistake teaches. The weekly set mixes tools and prompting, such as building an automated budget workbook with AI-assisted formulas, formatting and checks."]
  ],
  capabilities: [
   "Classes that teach the Wopara products by using them.",
   "Organizations that pay for their students.",
   "Scores that survive renames, retries and signing out."
  ],
  stack: ["JavaScript", "SVG animation", "Firestore", "FastAPI", "Stripe", "Paystack"]
 },
 {
  art: "store",
  photo: "assets/shots/store-games.jpg",
  open: "https://wopara.com/media/games",
  name: "Wopara Platform Store",
  type: "Platform store",
  overview: [
   "Where work made on Wopara is published and picked up: games, movies and music.",
   "The games are built without a game engine, using Three.js, Canvas and plain JavaScript, with Firestore for multiplayer and a Wopara pill that stays out of the way of the game."
  ],
  inside: [
   ["Games", "Browser games published through the Store, with an arcade floor and a pause screen that carries the pill. While a game screen is up the Guide's own furniture stands down and the game's panel takes its place.", ["assets/shots/store-games.jpg"]],
   ["Plummet", "A 3D multiplayer farm-island game built with Three.js. A farm holds a crew of up to three, and everyone wears a pressure suit with a per-player stripe. Proximity voice and video run over a WebRTC mesh in which Firestore carries only the handshake, volume follows distance with a squared falloff, and a player's camera appears as a texture inside their helmet visor. The world is seeded and deterministic, with alien flora and fauna, and a test harness boots the real game against a stand-in network."],
   ["YEG Life", "A Sims-style hangout on the real map of Edmonton, built from OpenStreetMap through a pipeline that projects a district into 2.5-metre tiles. Nothing is invented: geometry, names, routes and numbers come from real data. The University of Alberta district alone has 947 building footprints, 1,743 streets and paths and 124 surveyed trees, with landmarks given their real look. Twenty-six real bus route directions run on real geometry between real stops, the Capital and Metro lines have a station scene with an animated train, and a district loads only when the player walks or rides into it. Interiors are templates with furniture to use, and shopfronts are built from the real tenants."],
   ["Rule of Law", "A government simulator with a pure, deterministic model that runs a quarter at a time. It has 70 laws in six chapters, 14 regime families, 52 countries with approximate figures, 14 blueprints and ten factions, and a hand-drawn globe for founding a new land. Elections, coups, uprisings and a press that flatters under censorship push back, a reform can be written in plain words and read by a parser, and a daily crisis is drawn from 25 templates. A history mode starts in 1926 and lets turning points go the other way, and a harness runs every country for twenty years with 23 directional checks."],
   ["Whot", "A phone-first card game where the rule book is the game logic. It is host-authoritative and played only with a user's own People on Wopara, never strangers."],
   ["Minute Dash, Chim Type and Maze", "Short arcade games for a spare minute."],
   ["Movies", "Films finished in Movie, published for others to watch."],
   ["Music", "Tracks made with Timelines and its instruments."]
  ],
  capabilities: [
   "Seeded, deterministic worlds.",
   "Host-authoritative multiplayer.",
   "Real data wherever a game claims to be real.",
   "No engine and no build step."
  ],
  stack: ["Three.js", "WebRTC", "Canvas 2D", "JavaScript", "Firestore", "OpenStreetMap"]
 },
 {
  art: "landing",
  photo: "assets/shots/landing-page.jpg",
  open: "https://wopara.com/",
  name: "Wopara Landing Page",
  type: "Landing page",
  overview: [
   "The front door of Wopara and the place a student enrols. It presents the programs, takes the enrolment, and signs a new member in.",
   "It is one file of plain JavaScript that builds the whole page, with no framework, in the page's own container-query layout."
  ],
  inside: [
   ["The page", "A hero with a live 3D stage of laptops, the Wopara way, a grid of the kinds of work done each month, a gifting section with the flag of every country, and the section where companies post a project. The layout follows the width of the page rather than the screen, so it fits beside one or two open windows.", ["assets/shots/landing-page.jpg", "assets/shots/landing-work.jpg"]],
   ["Enrolment", "A checkout window that docks beside the page and resizes by its edge, with the width remembered. It covers the programs, experience, earnings, allowance, certificate, support for Orphans in tech and Wopara Cloud, and it totals the bill as options change. The server works out the same price from its own table, then makes a Stripe bill that is due in seven days, and a webhook marks it paid. A cohort has team pots: each month every student is debited the same share, a team's reserves are spent and divided equally, a refill is requested when the pot runs out, and what is left returns to the organizations that funded it. A member whose share is unpaid is paused, and the server, not the interface, enforces it.", ["assets/shots/landing-enrol.jpg"]],
   ["Sign-in", "Google sign-in that checks the account against programs, organizations, reserves and Cloud, and returns an account that is not part of Wopara to the page with a card that explains why. A check that cannot be made lets the person in."],
   ["Setup", "A full-screen first run in the manner of a new device: username and photo, the Guide, the look, and preferences that drive class recommendations. A preview mode saves nothing.", ["assets/shots/landing-setup-b.jpg"]],
   ["Boot skeleton", "An outline of the page that stands in while it loads, traced from the page as it last looked, refitted to the window geometry and predicted from the saved layout, so a reload is one fade rather than pieces arriving."],
   ["Flags", "Every country's flag, 195 of them, in one sprite file, drifting past in three rows.", ["assets/shots/landing-flags.jpg"]]
  ],
  capabilities: [
   "Prices computed on the server from the same table as the checkout.",
   "Windows that resize and remember their width.",
   "Smaller, quieter behaviour on phones."
  ],
  stack: ["JavaScript", "SVG", "CSS container queries", "FastAPI", "Stripe", "Firebase Auth"]
 }
];

// Work made for other companies.
const clientWork = [
 { name: "Dr. Morgan", description: "A website for a leadership futurist who builds leadership systems and institutional frameworks for governments, universities and enterprises.", image: "assets/portfolio/drmorgan.jpg", url: "https://drmorgan.ai" },
 { name: "Busayo Disu", description: "A website for a cultural mediator, storyteller, speaker, author and filmmaker in Alberta.", image: "assets/portfolio/busayodisu.jpg", url: "https://busayodisu.com" },
 { name: "Classistant", description: "A product site for a service that reads a student's syllabi, builds their calendar and texts them before deadlines and grades go wrong.", image: "assets/portfolio/classistant.jpg", url: "https://classistant.ca" },
 { name: "VisAssistant", description: "A product site for a service that collects visa applicants' documents over WhatsApp and checks them against this year's rules for immigration firms.", image: "assets/portfolio/visassistant.jpg", url: "https://visassistant.com" },
 { name: "Stronger Alberta", description: "A campaign website against Alberta separatism, with the economic facts, referendum news, history and ways to get involved.", image: "assets/portfolio/strongeralberta.jpg", url: "https://strongeralberta.ca" },
 { name: "Brylex Restoration", description: "A website for an Alberta restoration company covering disaster recovery, asbestos abatement and mould remediation.", image: "assets/portfolio/brylex.jpg", url: "https://www.brylex.ca" },
 { name: "PRAST", description: "A website for PRAST, the architecture of nature and business.", image: "assets/portfolio/prastgroup.jpg", url: "https://prastgroup.com" },
 { name: "Ivana Foundation", date: "February 2026", description: "A website for a non profit organization restoring hope through Christ-centered compassion in the hardest places.", image: "assets/portfolio/ivana.png", url: "https://ivanafoundation.org" },
 { name: "YegeLearning.com", date: "February 2026", description: "A website for a learning company built for students who need more than worksheets and grades.", image: "assets/portfolio/yege.png", url: "https://yegelearning.com" },
 { name: "Daniel's Enterprise", date: "January 2026", description: "A platform for a kingdom-based enterprise that raises, trains and equips people for their next opportunities.", image: "assets/portfolio/dane.png", url: "https://danielsenterprise.ca" },
 { name: "Culye Immigration Services", date: "September 2025 - October 2025", description: "A complete website redesign for an immigration company, with a Stripe payment system and secure backend functions.", image: "assets/portfolio/culye.png", url: "https://culyeimmigrationservices.com" },
 { name: "bodidris.org", date: "August 2025 - September 2025", description: "A personal portfolio and sales leads website with search optimisation and mail presets.", image: "assets/portfolio/bod.png", url: "https://bodidris.org" },
 { name: "Lenslore.ca", date: "July 2025 - August 2025", description: "A portfolio and sales leads website with search optimisation, mail presets and a PDF generator.", image: "assets/portfolio/lenslore.png", url: "https://lenslore.ca" },
 { name: "FlatPurse Business", date: "June 2025 - September 2025", description: "Front-end development in HTML, CSS and JavaScript for a business-focused web application.", image: "assets/portfolio/flatpurse.png", url: "https://www.linkedin.com/company/flatpurse/posts/?feedView=all" },
 { name: "Prastfarms.com", date: "April 2023 - November 2023", description: "A full-stack platform for creating, editing and monitoring investments, built on Google Apps Script, Sheets, HTML, CSS and JavaScript.", image: "assets/portfolio/prast.png", url: "https://prastfarms.com" }
];
