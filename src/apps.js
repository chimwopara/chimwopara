// The main applications. Each one is described once, with what is inside it.
const builtApps = [
 {
  name: 'Wopara Platform',
  type: 'Workspace',
  overview: [
   'Wopara Platform is where a team does its work. Every project is a platform: a shared room holding the files, tasks, people and calls that the project needs, all editable by the whole team at once.',
   'Documents, code, film editing and planning share one account, one file system and one set of collaboration features. Every file type is multiplayer from the start, and old files keep opening as the tools improve.'
  ],
  inside: [
   ['Plenary', 'Pages, slides, boards and sheets in a single file. A file is an ordered list of pages of any kind, so a written page can be followed by a slide, a freeform board and a spreadsheet. Present plays the whole file as a slideshow, and any page can go fullscreen. Sheets run on a formula engine and an embedded DuckDB-WASM query engine for tables and charts, and a cell reference can be placed in text or on a slide and stay live. Markdown and Word files import and export.'],
   ['Opaline', 'A real-time shared code editor built on CodeMirror 6 and Yjs. Code runs in the browser, with JavaScript, Python through Pyodide and SQLite, and websites preview live beside the code. It includes a console, a visual builder, and ZIP import and export.'],
   ['Movie and Timelines', 'A complete film pipeline. Movie holds the story, character and location sheets, assets, thumbnails, scenes, clips, audio and production. Timelines is the multi-track editor, with main video, B-roll, C-roll, voiceover, music, sound effects and titles on separate tracks, a cut editor, a title studio with fonts, gradients and animated presets, and an instrument synthesiser that turns a written score into audio. Trailer cuts trailers and demo videos from a single prompt.'],
   ['Tasks', 'A shared board for planning a team\'s work. It includes a schedule view where each person marks availability, the crew votes on a time, and the meeting runs live with a graded end, plus progress reports.'],
   ['Stores', 'Where movies, music and games made on Wopara are published and picked up.'],
   ['Teamwork', 'People, live cursors, chat, gifts and per-file access scopes for viewing, editing, deleting and sharing. Voice and video calls run through Daily, and a team can call everyone to the file being worked on.']
  ],
  capabilities: [
   'Real-time co-editing of every file type with live cursors.',
   'One file model across documents, slides, sheets, code and film.',
   'Per-file access scopes, with grants that can be time-limited.',
   'Calls that open straight into the work.',
   'A first frame that traces the last view, so a reload shows the page as it was.',
   'Reserves metering for anything that costs money to run.'
  ],
  stack: ['JavaScript', 'Firebase Auth', 'Firestore', 'Cloud Storage', 'Yjs', 'CodeMirror 6', 'DuckDB-WASM', 'Pyodide', 'Canvas 2D', 'Web Audio', 'Daily']
 },
 {
  name: 'Wopara Guide',
  type: 'AI assistant',
  overview: [
   'Wopara Guide is the AI assistant built into every page of Wopara. It is an agent rather than a chat window: it reads the page the user is on, acts inside the products on their behalf, and remembers them from one session to the next.',
   'Each Guide has a name, a face and a manner chosen by its user, a memory that can be viewed and cleared, and a voice that takes calls. Several tools that began as separate products now live inside it.'
  ],
  inside: [
   ['Actions across Wopara', 'Edits documents, sheets and slides in place, plans and cuts films, creates tasks and platforms, changes themes and settings, adds links, sets reminders and answers questions about the page open on screen. When a request is unclear it offers concrete options instead of failing.'],
   ['Wopara Browser', 'A browser inside the Guide. It identifies the subject of a page or search, with the people, places and things involved and their public profiles and links, so the Guide can read and act on what is open.'],
   ['Forex Traffic', 'A live currency tool for finding the best rate between two currencies. Rate alerts notify the user when a pair crosses a target they set. It began as the standalone NairaTraffic app and is now part of the Guide.'],
   ['Voice', 'Say its name anywhere and a call begins. Calls end after a minute of silence, and the microphone is used only after the user agrees.'],
   ['Memory', 'Learns about its user while learning is on, shows what it remembers, and forgets on request. Its tone, role, personality and look are all set in Settings.'],
   ['Reach', 'Device notifications through Web Push that arrive with no tab open, reminders, @mentions, and emails and texts sent in the user\'s name when asked.'],
   ['Handwriting and the universal hand', 'Writes by hand on the page and moves a visible cursor across any product, so every action it takes can be watched.']
  ],
  capabilities: [
   'A client-side tool executor that turns replies into real actions.',
   'Page awareness, so help is about what is on screen.',
   'Account awareness across profile, files, platforms and reserves.',
   'Live voice calls with wake-word standby.',
   'Search that answers, with widgets for tips, facts and account numbers.',
   'Metering to reserves, with prices shown once and every charge itemised.'
  ],
  stack: ['JavaScript', 'FastAPI', 'Cloud Run', 'Google Vertex AI', 'DeepSeek', 'Web Push', 'Web Speech', 'Firestore', 'Brevo']
 },
 {
  name: 'Wopara Campus',
  type: 'Learning',
  overview: [
   'Wopara Campus is the learning side of Wopara: more than a hundred classes, an engine that turns each class into one interactive page, and the programs through which students join cohorts.',
   'A class is a single page with the lecture video at the top, interactive notes beneath it, and a challenge at the foot. Grades and certificates follow the work.'
  ],
  inside: [
   ['Classes and notes', 'Each note is built from animated SVG, zoomed screenshots with arrows and circles, and interactive pieces that can be clicked, dragged, snapped and connected. The whole curriculum comes from a single source of truth.'],
   ['Live lessons', 'The Guide plans a class, teaches it live in Present with questions from the audience, then writes the notes afterwards.'],
   ['Dictionary and P&L', 'A glossary of Wopara and business terms, and a profit and loss product.'],
   ['Grades and certificates', 'A Grades button in every Campus window shows progress by class. Certificates are issued digitally or as a physical copy.'],
   ['Front Desk and programs', 'Enrolment into the Part time program, the Gap year program and the Organization program, with options for experience, allowance, certificate and support, and a bill made through Stripe.']
  ],
  capabilities: [
   'Classes that teach the Wopara products by using them.',
   'Cohorts with team pots, where every member funds the same share.',
   'Organizations that pay for their students.',
   'A teaching pipeline from planned class to published page.'
  ],
  stack: ['JavaScript', 'SVG animation', 'Firestore', 'FastAPI', 'Stripe', 'Paystack']
 },
 {
  name: 'Wopara Port',
  type: 'Work',
  overview: [
   'Wopara Port is where students work for paying companies. In the Gap year program a company sets a brief each month, teams compete to deliver it, and the company pays the best team.',
   'Port also holds the tools a team needs to deliver for a client.'
  ],
  inside: [
   ['Monthly briefs', 'Ten projects across the Gap year program, each with its own team, its own pot of reserves and its own payout. A member whose share is unpaid is paused until it is.'],
   ['Domains, hosting and email', 'Tools for setting up the domain, hosting and email a client owns, with checks on the health of a live site.'],
   ['Sites and embeds', 'New sites, existing sites and embeddable pieces that can be placed on a client\'s own page.'],
   ['Duty free', 'Software that has nothing to do with Wopara, sold outright in money and delivered as a zip.']
  ],
  capabilities: [
   'Payouts divided between the full members of the winning team.',
   'Server-enforced access, so a paused member cannot edit.',
   'Prices worked out on the server from the choices made.'
  ],
  stack: ['JavaScript', 'FastAPI', 'Firestore', 'Stripe', 'ResellerClub']
 },
 {
  name: 'Wopara Games',
  type: 'Games',
  overview: [
   'Wopara Games are browser games built for Wopara and published through Stores. They are made without a game engine, using Three.js, Canvas and plain JavaScript, with Firestore for multiplayer.'
  ],
  inside: [
   ['Plummet', 'A 3D multiplayer farm-island game with an economy, crews, voice and a seeded world that is the same for everyone.'],
   ['YEG Life', 'A Sims-style hangout on a real map of Edmonton. It uses OpenStreetMap building footprints, real LRT and bus routes, one district loaded at a time, and a residents system with shops, banks and jobs.'],
   ['Rule of Law', 'A government simulator with a quarterly political-economy model. Laws can be changed, play can start from another country or a new landmass, and a history mode runs from 1926 with turning points taken the other way.'],
   ['Whot', 'A phone-first card game where the rule book is the game logic, played with other Wopara people.'],
   ['Minute Dash, Chim Type and Maze', 'Short arcade games for a spare minute.']
  ],
  capabilities: [
   'Seeded, deterministic worlds.',
   'Host-authoritative multiplayer.',
   'No engine and no build step.'
  ],
  stack: ['Three.js', 'Canvas 2D', 'JavaScript', 'Firestore', 'OpenStreetMap']
 }
];
