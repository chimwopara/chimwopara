// Source-grounded build profiles.
const projectDetails = {
  "machine:Browser": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Fetch API"
    ],
    "build": "Mounts the shared browser interface inside the Servant window, so searches and results stay on the current page.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Looks up subjects and brings together online feedback and search results.",
    "challenge": "A standalone search interface is mounted inside another application. Loading, input, results, and navigation have to coexist with the surrounding Servant session."
  },
  "machine:Search": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "JavaScript search index"
    ],
    "build": "Uses Wopara’s shared search surface to find the user’s own content and navigate to it.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Finds your own files, products, and saved items across Wopara.",
    "challenge": "The index combines different kinds of personal content, each with its own destination. Search must preserve the distinction between finding an item and opening the correct app."
  },
  "machine:Weather": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Fetch API"
    ],
    "build": "Posts a location to the machine weather endpoint and renders the response within the Blob tool.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Shows weather for your location or a city you enter.",
    "challenge": "Location entry and asynchronous responses have to produce a useful result within a small embedded tool, including requests that fail."
  },
  "machine:News": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Fetch API"
    ],
    "build": "Sends a topic to the machine news endpoint and displays the returned headlines.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Finds current news by topic.",
    "challenge": "Topic requests return asynchronously. The tool has to maintain input, loading, and result states without replacing the surrounding conversation."
  },
  "machine:Servegram": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "JavaScript modules"
    ],
    "build": "Mounts the dedicated Servegram module inside the shared Blob app window.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Displays the Servant’s feed.",
    "challenge": "The feed is a separately mounted module. Its lifecycle must fit inside the Blob without taking over the host page."
  },
  "machine:Errands": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "JavaScript modules"
    ],
    "build": "Loads the errands surface into the common app window, reusing the surrounding Servant session.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Manages jobs the Servant can carry out in the world.",
    "challenge": "An errands surface must be mounted within an existing Servant session, preserving the distinction between the host conversation and the job interface."
  },
  "machine:Reminder": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "JavaScript forms"
    ],
    "build": "Collects reminder details in the Blob and hands them to the shared Servant action flow.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Creates reminders intended to reach your device.",
    "challenge": "The tool gathers timing and reminder content, then delegates to the shared action flow. Creating a form alone is not the same as coordinating the downstream reminder."
  },
  "machine:Timer": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "localStorage",
      "Web Audio API"
    ],
    "build": "Stores the countdown deadline rather than decrementing a counter. A shared clock updates the header across pages and checks when the deadline arrives.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Runs a countdown that remains available while you move between Wopara pages.",
    "challenge": "Background tabs and page changes make tick-based countdowns inaccurate. The clock uses absolute deadlines and shared persisted state so reopening the tool does not reset it."
  },
  "machine:Stopwatch": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "localStorage"
    ],
    "build": "Persists elapsed-time state and laps through the shared clock engine, with a header readout across pages.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Measures elapsed time and records laps.",
    "challenge": "Elapsed time and laps must survive navigation without duplicating or resetting the running clock. The shared clock model separates stored timing facts from the visible readout."
  },
  "machine:Alarm": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "localStorage",
      "Web Audio API"
    ],
    "build": "Stores alarm times in the shared clock state and checks them against wall-clock time rather than relying on tab activity.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Schedules time-of-day alarms.",
    "challenge": "Alarms need to compare against real time even after the browser has been inactive. The same saved alarm state is read by the tool and the cross-page header."
  },
  "machine:Note": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "JavaScript state"
    ],
    "build": "Adds and removes entries in Servant memory, persists the memory list, and redraws it when the tool resumes.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Keeps short notes that the Servant can carry into future conversations.",
    "challenge": "Chat and the Note tool both change the same memory. The tool needs to persist additions and deletions, avoid duplicates, and redraw when reopened."
  },
  "machine:Site health": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Fetch API",
      "Lighthouse"
    ],
    "build": "Uses the same server-side health-check workflow as Port; reopening the tool restores the job’s progress and results.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Checks a website using Lighthouse performance and quality scores.",
    "challenge": "A server audit can outlast the page that started it. The Blob and Port need to display the same job state and recover results after navigation."
  },
  "machine:Domains": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Fetch API",
      "RDAP"
    ],
    "build": "Queries the RDAP domain registry endpoint and lists results with the newest check first.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Checks domain registration information against a live registry.",
    "challenge": "The interface must turn registry responses into understandable results, including failed lookups, rather than treating every response as an available domain."
  },
  "machine:Message": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "JavaScript forms"
    ],
    "build": "Collects a recipient and message body, then hands delivery to Wopara’s shared messaging workflow.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Sends a message to someone in your Wopara People list.",
    "challenge": "Recipient selection and message composition must connect to the shared messaging action rather than create a separate, disconnected contact system."
  },
  "machine:Email me": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Fetch API"
    ],
    "build": "Submits the request to the authenticated Servant email endpoint and displays the result in the tool.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Sends information to your own email inbox.",
    "challenge": "The browser hands delivery to an authenticated server endpoint and needs to report success or failure; it does not send email directly."
  },
  "machine:Photo": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Fetch API"
    ],
    "build": "Sends the scene description to the Servant photo endpoint and renders the returned image.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Creates a picture of your Servant from a scene description.",
    "challenge": "Image generation is asynchronous, so the prompt, pending state, returned image, and failure state must all fit in the same embedded surface."
  },
  "machine:Call": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "build": "Opens the shared voice-call surface from the same Blob app registry used by the other tools.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Lets you speak with the Servant out loud.",
    "challenge": "Voice is a separate interaction mode that needs to open from the shared tool shell without discarding the current page context."
  },
  "machine:Music": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "HTML audio",
      "localStorage"
    ],
    "build": "Maintains tracks and playlists in the shared music state and exposes playback from the Blob window.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Plays music and manages playlists inside Wopara.",
    "challenge": "Playback, saved tracks, and playlists share state across the Blob interface. Reopening the player must reconnect to that state."
  },
  "machine:Forex": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "iframe"
    ],
    "build": "Embeds Forex Traffic with its embed mode, retaining currency selection and scanning inside the Servant window.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Explores exchange rates and currency arbitrage paths.",
    "challenge": "The embedded app has its own controls and scan state. The Blob must host it without duplicating its navigation or bypassing its currency-selection workflow."
  },
  "machine:Reserves": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "build": "Opens the shared balance and top-up interface instead of maintaining a separate payment form inside the Blob.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Shows your Wopara balance and lets you open the top-up flow.",
    "challenge": "The balance tool delegates to a shared payment interface so account state and top-up behavior are not independently reimplemented."
  },
  "machine:Report": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Fetch API"
    ],
    "build": "Posts a report with the current machine context to the report endpoint, then shows a submission result.",
    "source": "wopara/woparapill.js · MC_APPS / MC_TOOLS",
    "description": "Reports a problem to the Wopara team.",
    "challenge": "A useful issue report includes the machine context as well as user text, and needs an asynchronous submission result."
  },
  "spaceship:Boardroom": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Authentication",
      "Cloud Firestore"
    ],
    "build": "Implements mission views and form fields within the Spaceship shell, persisting crew work through Firestore.",
    "source": "wopara/spaceship/index.html",
    "description": "Organizes crew missions, tasks, forms, and progress.",
    "challenge": "Missions include different views, tasks, and form field types. Shared crew data and permissions have to remain coherent as people switch between those surfaces."
  },
  "spaceship:Platforms": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Authentication",
      "Cloud Firestore"
    ],
    "build": "Builds the app switcher from the Office and Media registries and mounts the selected surface inside the existing Spaceship.",
    "source": "wopara/spaceship/index.html",
    "description": "Brings the crew’s office and media tools into one workspace.",
    "challenge": "Office and Media tools use different editors and file types. A shared switcher must restore the correct tool and file without replacing the host workspace."
  },
  "spaceship:Jotter": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Authentication",
      "Cloud Firestore"
    ],
    "build": "Uses browser-editable document surfaces with page layout logic, tied to the crew’s file records.",
    "source": "wopara/spaceship/index.html",
    "description": "Creates and edits shared documents.",
    "challenge": "Rich-text editing, page breaks, layout, and saved crew files must coexist. The document’s editable DOM is not the same thing as its persisted workspace record."
  },
  "spaceship:Data": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Authentication",
      "Cloud Firestore"
    ],
    "build": "Builds the spreadsheet editing surface inside the shared workspace and stores the document through the Spaceship data layer.",
    "source": "wopara/spaceship/index.html",
    "description": "Creates and edits spreadsheets.",
    "challenge": "Spreadsheet content has structure beyond plain text. The editor must retain that structure while connecting it to crew files and the workspace save flow."
  },
  "spaceship:Slides": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Authentication",
      "Cloud Firestore"
    ],
    "build": "Combines a slide list with an editable stage; slide objects carry percentage-based position and sizing information.",
    "source": "wopara/spaceship/index.html",
    "description": "Builds slide presentations.",
    "challenge": "The editor manages an ordered slide list and objects positioned on a stage. Switching slides must preserve each slide’s content and object geometry."
  },
  "spaceship:Media": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Authentication",
      "Cloud Firestore"
    ],
    "build": "Mounts media editor modules inside the Spaceship and connects them to the crew’s file and navigation state.",
    "source": "wopara/spaceship/index.html",
    "description": "Organizes films and their production tools.",
    "challenge": "Separate media modules must mount inside an existing workspace without claiming the host’s navigation or losing the active crew/file context."
  },
  "spaceship:Opaline": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Authentication",
      "Cloud Firestore",
      "CodeMirror",
      "Yjs"
    ],
    "build": "Uses CodeMirror for editing and Yjs for collaborative document state and awareness. Firebase handles authentication and saved workspace records.",
    "source": "wopara/spaceship/index.html · opaline/editor-core.js",
    "description": "Provides a collaborative code editor with multiple language modes.",
    "challenge": "Collaborative editing requires more than broadcasting keystrokes: Yjs document state, awareness, undo, and CodeMirror language extensions must work together. The embedded editor also has to respect its host’s navigation and Firebase session."
  },
  "spaceship:Movie": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Authentication",
      "Cloud Firestore"
    ],
    "build": "Separates editor mounting from the film core, with project storage and a related game core for branching playback.",
    "source": "wopara/spaceship/index.html",
    "description": "Creates film projects, including branching films.",
    "challenge": "A film can be linear or branching. Production editing and branching playback need to read the same project content rather than maintain unrelated copies."
  },
  "spaceship:Timelines": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Authentication",
      "Cloud Firestore",
      "IndexedDB"
    ],
    "build": "Loads the timeline editor as a module; it can read local film data from IndexedDB or shared project records through Firestore.",
    "source": "wopara/spaceship/index.html",
    "description": "Arranges media into an editable timeline.",
    "challenge": "Projects can come from local IndexedDB or shared Firestore records. The editor must recognize ownership and the right source while maintaining the active timeline."
  },
  "spaceship:Trailer": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Authentication",
      "Cloud Firestore"
    ],
    "build": "Opens a trailer as a crew file from the Media tool list, retaining the surrounding Spaceship context.",
    "source": "wopara/spaceship/index.html",
    "description": "Creates trailers for a production.",
    "challenge": "The app can be entered from inside another media file. Navigation must open the trailer file without losing the crew or leaving the previous editor mounted incorrectly."
  },
  "spaceship:Titles": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Authentication",
      "Cloud Firestore"
    ],
    "build": "Uses a dedicated title editor/core pair, mounted as a production file within the workspace.",
    "source": "wopara/spaceship/index.html",
    "description": "Creates and manages titles within a production.",
    "challenge": "The title editor mounts into a host workspace, so its own initialization and file state must work without overriding the host navigation."
  },
  "spaceship:Planner": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Authentication",
      "Cloud Firestore"
    ],
    "build": "Uses the production planning surface and file types managed by Spaceship’s Media tools.",
    "source": "wopara/spaceship/index.html",
    "description": "Plans a film’s story and production.",
    "challenge": "Story planning belongs to a larger production. The planning surface has to keep its relationship to the crew’s production files."
  },
  "spaceship:Websites": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Authentication",
      "Cloud Firestore"
    ],
    "build": "Registers websites as a crew file type and opens them through the shared file and permission layer.",
    "source": "wopara/spaceship/index.html",
    "description": "Creates website work within a crew workspace.",
    "challenge": "Website work is represented as a crew file, so it has to participate in the same permissions, navigation, and persistence model as other workspace tools."
  },
  "spaceship:Ads": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Authentication",
      "Cloud Firestore"
    ],
    "build": "Registers advertising work as a file type in the Spaceship, sharing the same crew navigation and persistence layer.",
    "source": "wopara/spaceship/index.html",
    "description": "Creates advertising work within a crew workspace.",
    "challenge": "Advertising files are a distinct content type inside a shared workspace. They must keep their own identity while reusing crew-level navigation and storage."
  },
  "spaceship:Desktops": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Authentication",
      "Cloud Firestore"
    ],
    "build": "Loads the crew’s desktop surfaces through Spaceship’s workspace routing and shared data model.",
    "source": "wopara/spaceship/index.html",
    "description": "Organizes desktop surfaces for a crew.",
    "challenge": "A crew can have multiple surfaces. Opening a desktop needs to retain the correct crew and workspace context."
  },
  "spaceship:Tagnames": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Authentication",
      "Cloud Firestore"
    ],
    "build": "Indexes workspace files into a named directory so the crew can find existing work across tools.",
    "source": "wopara/spaceship/index.html",
    "description": "Finds crew files by their assigned names.",
    "challenge": "An index spans files produced by different tools. The name-to-file mapping must stay useful across those file types."
  },
  "ecosystem:Campus · Front Desk": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Cloud Firestore"
    ],
    "build": "Built as a hash-addressed section of the classroom application, sharing navigation, account state, and the learning interface.",
    "source": "wopara/uni/classroom.html",
    "description": "Introduces the school and helps visitors find their way into learning.",
    "challenge": "This section shares navigation and account state with the classroom application. Its content and access flow must fit that larger learning context."
  },
  "ecosystem:Campus · Classroom": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Cloud Firestore"
    ],
    "build": "Built as a hash-addressed section of the classroom application, sharing navigation, account state, and the learning interface.",
    "source": "wopara/uni/classroom.html",
    "description": "Presents courses, lessons, and learning activities.",
    "challenge": "This section shares navigation and account state with the classroom application. Its content and access flow must fit that larger learning context."
  },
  "ecosystem:Campus · Hall": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Cloud Firestore"
    ],
    "build": "Built as a hash-addressed section of the classroom application, sharing navigation, account state, and the learning interface.",
    "source": "wopara/uni/classroom.html",
    "description": "Provides the shared community area for the campus.",
    "challenge": "This section shares navigation and account state with the classroom application. Its content and access flow must fit that larger learning context."
  },
  "ecosystem:Campus · Staffroom": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Cloud Firestore"
    ],
    "build": "Built as a hash-addressed section of the classroom application, sharing navigation, account state, and the learning interface.",
    "source": "wopara/uni/classroom.html",
    "description": "Provides the staff-facing area of the learning platform.",
    "challenge": "This section shares navigation and account state with the classroom application. Its content and access flow must fit that larger learning context."
  },
  "ecosystem:Campus · Library": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Cloud Firestore"
    ],
    "build": "Built as a hash-addressed section of the classroom application, sharing navigation, account state, and the learning interface.",
    "source": "wopara/uni/classroom.html",
    "description": "Makes the campus reference dictionary available to learners.",
    "challenge": "This section shares navigation and account state with the classroom application. Its content and access flow must fit that larger learning context."
  },
  "ecosystem:Museum · Garments": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase"
    ],
    "build": "Built as a shelf inside the Museum. The parent application selects the content category and renders the corresponding collection.",
    "source": "wopara/museum/index.html",
    "description": "Displays clothing and wearable designs.",
    "challenge": "The shelf groups different content items and destinations. It must preserve each item’s identity while fitting the Museum’s shared discovery interface."
  },
  "ecosystem:Museum · Games": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase"
    ],
    "build": "Built as a shelf inside the Museum. The parent application selects the content category and renders the corresponding collection.",
    "source": "wopara/museum/index.html",
    "description": "Collects playable Wopara games in one place.",
    "challenge": "The shelf groups different content items and destinations. It must preserve each item’s identity while fitting the Museum’s shared discovery interface."
  },
  "ecosystem:Museum · Media": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase"
    ],
    "build": "Built as a shelf inside the Museum. The parent application selects the content category and renders the corresponding collection.",
    "source": "wopara/museum/index.html",
    "description": "Displays films, books, videos, music, characters, and interactive works.",
    "challenge": "The shelf groups different content items and destinations. It must preserve each item’s identity while fitting the Museum’s shared discovery interface."
  },
  "ecosystem:Moplates · Today": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase"
    ],
    "build": "Built as a named pane in a single JavaScript application. A shared router selects the pane while account and planning state remain available.",
    "source": "wopara/moplates/index.html",
    "description": "Shows the current nutrition plan.",
    "challenge": "This pane depends on the same member and planning context as the rest of Moplates. Its state needs to remain consistent when users switch between daily plans, pantry, circle, and funding views."
  },
  "ecosystem:Moplates · Triad": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase"
    ],
    "build": "Built as a named pane in a single JavaScript application. A shared router selects the pane while account and planning state remain available.",
    "source": "wopara/moplates/index.html",
    "description": "Lets members review the limits of their nutrition plan.",
    "challenge": "This pane depends on the same member and planning context as the rest of Moplates. Its state needs to remain consistent when users switch between daily plans, pantry, circle, and funding views."
  },
  "ecosystem:Moplates · Antidote": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase"
    ],
    "build": "Built as a named pane in a single JavaScript application. A shared router selects the pane while account and planning state remain available.",
    "source": "wopara/moplates/index.html",
    "description": "Helps members account for an off-plan meal.",
    "challenge": "This pane depends on the same member and planning context as the rest of Moplates. Its state needs to remain consistent when users switch between daily plans, pantry, circle, and funding views."
  },
  "ecosystem:Moplates · Pantry": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase"
    ],
    "build": "Built as a named pane in a single JavaScript application. A shared router selects the pane while account and planning state remain available.",
    "source": "wopara/moplates/index.html",
    "description": "Tracks available ingredients for meal planning.",
    "challenge": "This pane depends on the same member and planning context as the rest of Moplates. Its state needs to remain consistent when users switch between daily plans, pantry, circle, and funding views."
  },
  "ecosystem:Moplates · Circle": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase"
    ],
    "build": "Built as a named pane in a single JavaScript application. A shared router selects the pane while account and planning state remain available.",
    "source": "wopara/moplates/index.html",
    "description": "Manages dependents and their plans within a shared circle.",
    "challenge": "This pane depends on the same member and planning context as the rest of Moplates. Its state needs to remain consistent when users switch between daily plans, pantry, circle, and funding views."
  },
  "ecosystem:Moplates · Reserves": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase"
    ],
    "build": "Built as a named pane in a single JavaScript application. A shared router selects the pane while account and planning state remain available.",
    "source": "wopara/moplates/index.html",
    "description": "Offers the prepayment cycles used by Moplates.",
    "challenge": "This pane depends on the same member and planning context as the rest of Moplates. Its state needs to remain consistent when users switch between daily plans, pantry, circle, and funding views."
  },
  "ecosystem:Moplates · Kitchen": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase"
    ],
    "build": "Built as a named pane in a single JavaScript application. A shared router selects the pane while account and planning state remain available.",
    "source": "wopara/moplates/index.html",
    "description": "Explains the chef-facing kitchen and operating model.",
    "challenge": "This pane depends on the same member and planning context as the rest of Moplates. Its state needs to remain consistent when users switch between daily plans, pantry, circle, and funding views."
  },
  "ecosystem:Port · Health": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Cloud Firestore"
    ],
    "build": "Built as a module-backed section of Port, using the shared Wopara navigation and account context.",
    "source": "wopara/port/app.js",
    "description": "Checks website health and Lighthouse scores.",
    "challenge": "This service runs inside a shared Port application. Its inputs and responses must stay separate from other service tools while using the same account context."
  },
  "ecosystem:Port · Domain": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Cloud Firestore"
    ],
    "build": "Built as a module-backed section of Port, using the shared Wopara navigation and account context.",
    "source": "wopara/port/app.js",
    "description": "Provides domain lookup and management tools.",
    "challenge": "This service runs inside a shared Port application. Its inputs and responses must stay separate from other service tools while using the same account context."
  },
  "ecosystem:Port · Hosting": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Cloud Firestore"
    ],
    "build": "Built as a module-backed section of Port, using the shared Wopara navigation and account context.",
    "source": "wopara/port/app.js",
    "description": "Provides hosting tools for sites brought into Wopara.",
    "challenge": "This service runs inside a shared Port application. Its inputs and responses must stay separate from other service tools while using the same account context."
  },
  "ecosystem:Port · Email": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Cloud Firestore"
    ],
    "build": "Built as a module-backed section of Port, using the shared Wopara navigation and account context.",
    "source": "wopara/port/app.js",
    "description": "Provides email tools for sites and domains.",
    "challenge": "This service runs inside a shared Port application. Its inputs and responses must stay separate from other service tools while using the same account context."
  },
  "ecosystem:Port · VIP": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Cloud Firestore"
    ],
    "build": "Built as a module-backed section of Port, using the shared Wopara navigation and account context.",
    "source": "wopara/port/app.js",
    "description": "Provides the invitation area in Port.",
    "challenge": "This service runs inside a shared Port application. Its inputs and responses must stay separate from other service tools while using the same account context."
  },
  "ecosystem:Port · Embed": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Cloud Firestore"
    ],
    "build": "Built as a module-backed section of Port, using the shared Wopara navigation and account context.",
    "source": "wopara/port/app.js",
    "description": "Helps bring Wopara into another website.",
    "challenge": "This service runs inside a shared Port application. Its inputs and responses must stay separate from other service tools while using the same account context."
  },
  "ecosystem:Port · Duty free": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Cloud Firestore"
    ],
    "build": "Built as a module-backed section of Port, using the shared Wopara navigation and account context.",
    "source": "wopara/port/app.js",
    "description": "Provides the Duty free section of Wopara Port.",
    "challenge": "This service runs inside a shared Port application. Its inputs and responses must stay separate from other service tools while using the same account context."
  },
  "ecosystem:Wopara Campus": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase"
    ],
    "build": "Built from browser-based sections and shared Wopara navigation. The classroom application supplies the learning sections and shared account flow.",
    "source": "wopara/uni/classroom.html",
    "description": "Brings courses, classroom activities, community, and reference material into one learning environment.",
    "challenge": "Course content, learning activities, account access, and campus sections need to work as one application. The shared shell must preserve context while individual sections control their own content."
  },
  "ecosystem:Wopara Spaceship": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase"
    ],
    "build": "Built from browser-based sections and shared Wopara navigation. Crew records, file permissions, and realtime updates use Firestore; editors mount inside the workspace.",
    "source": "wopara/spaceship/index.html",
    "description": "Combines crew collaboration, documents, spreadsheets, slides, coding, and media production.",
    "challenge": "The difficult part is integration: crew identity, permissions, shared records, and many independent editor lifecycles have to remain consistent as users switch between documents, code, and media."
  },
  "ecosystem:Wopara Museum": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase"
    ],
    "build": "Built from browser-based sections and shared Wopara navigation. Separate content modules feed the collection shelves.",
    "source": "wopara/museum/index.html",
    "description": "Showcases members’ garments, games, and media.",
    "challenge": "The collection includes different media shapes and backing sources. Each shelf needs to render the right format while retaining a consistent discovery and navigation experience."
  },
  "ecosystem:Wopara Port": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase"
    ],
    "build": "Built from browser-based sections and shared Wopara navigation. A dedicated app module provides each service surface.",
    "source": "wopara/port/app.js",
    "description": "Brings domains, hosting, email, site health, and embedding into one application.",
    "challenge": "Domain, hosting, email, and site-audit tools have different workflows. They share an account and navigation shell while keeping their own service state."
  },
  "ecosystem:Moplates": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase"
    ],
    "build": "Built from browser-based sections and shared Wopara navigation. A pane router renders each part of the plan using shared application state.",
    "source": "wopara/moplates/index.html",
    "description": "Combines nutrition plans, pantry tracking, household circles, and chef-facing services.",
    "challenge": "Daily plans, pantry data, household dependents, and payment cycles reference the same member context. Separate panes must remain consistent with that shared state."
  },
  "woparagames:YEG Life": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Three.js"
    ],
    "build": "Organizes the world into JavaScript modules for rendering, routes, traffic, and simulated activity.",
    "source": "wopara/media/games/yeg/3d/main.js",
    "description": "A 3D game set in Edmonton.",
    "challenge": "A 3D city combines world rendering with routes, traffic, and simulated activity. Those systems have to coexist within a responsive browser game loop."
  },
  "woparagames:Rule of Law": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "JavaScript modules"
    ],
    "build": "Separates the game module from its HTML entry page and shares the Wopara shell.",
    "source": "wopara/media/games/ruleoflaw/game.js",
    "description": "A browser game built around rules, governance, and decisions.",
    "challenge": "Game rules and player decisions are separate from the page presentation. The game module has to turn those decisions into consistent state changes."
  },
  "woparagames:Plummet": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Three.js"
    ],
    "build": "Builds the game world in Three.js and uses a post-processing pipeline for the rendered scene.",
    "source": "wopara/media/games/plummet/game.js",
    "description": "A survival game beginning on an island.",
    "challenge": "Survival gameplay runs inside a rendered 3D world with post-processing. Game state and rendering must stay coordinated within the browser’s frame budget."
  },
  "woparagames:Smarts": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Wopara Math"
    ],
    "build": "Splits games across several scripts, with separate reference and story data and the shared math helper.",
    "source": "wopara/media/games/smarts/index.html",
    "description": "A collection of learning games and challenges.",
    "challenge": "Many challenges share a game shell but use separate scripts, references, and story data. They need consistent entry and interaction patterns."
  },
  "woparagames:Whot": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase"
    ],
    "build": "Combines card-game state and browser interactions with a separate network module for connected play.",
    "source": "wopara/media/games/whot/whotwhot.html",
    "description": "A browser adaptation of the Nigerian card game Whot.",
    "challenge": "Local card state and connected play must represent the same match. Rendering a hand is only one part of keeping game actions consistent."
  },
  "woparagames:Type": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Three.js",
      "Canvas 2D"
    ],
    "build": "Combines keyboard-driven play with Three.js scenes and canvas-drawn elements.",
    "source": "wopara/media/games/type/type.html",
    "description": "A typing game with runner and wipeout modes.",
    "challenge": "Keyboard input drives play while 3D and canvas elements are rendered. The modes need to translate keystrokes into timely gameplay feedback."
  },
  "woparagames:Farm": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Three.js",
      "OrbitControls",
      "Tailwind CSS"
    ],
    "build": "Builds a navigable 3D farm with Three.js and OrbitControls, supported by browser controls and canvas elements.",
    "source": "wopara/media/games/farm/farms.html",
    "description": "An interactive farm simulation with selectable modes.",
    "challenge": "Farm interaction and camera movement must work together in a 3D scene, while interface controls remain usable."
  },
  "woparagames:Minute Dash": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "JavaScript modules"
    ],
    "build": "Separates state, rendering, audio, input, multiplayer, and menus into browser modules.",
    "source": "wopara/media/games/minutedash/game.js",
    "description": "A maze game with different play modes and multiplayer features.",
    "challenge": "Gameplay is split across state, rendering, audio, menus, and multiplayer modules. Changes in one need to be reflected in the others."
  },
  "Ivana Foundation": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS"
    ],
    "build": "Built a responsive public website that presents the foundation’s mission and provides visitor navigation and contact paths.",
    "source": "ivana/",
    "challenge": "The main design problem is making the foundation’s mission and contact paths clear on small screens. This is a public information website, so its complexity is in presentation and navigation rather than a custom application backend."
  },
  "YegeLearning.com": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Firebase"
    ],
    "build": "Built the learning website as browser pages with Firebase configuration and a separate consultation flow.",
    "source": "yege/",
    "challenge": "Learning information and the consultation journey have to remain connected across pages. The site also carries Firebase configuration, which adds account/platform integration beyond static content."
  },
  "Daniel's Enterprise": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "build": "Built a multi-page site with dedicated program, about, and contact pages.",
    "source": "Danielsenterprise/",
    "challenge": "Programs, organization information, and contact paths need a consistent structure across separate pages and screen sizes. The inspected implementation is a multi-page website."
  },
  "FlatPurse Business": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "C#",
      "ASP.NET",
      "Blazor"
    ],
    "build": "Contributed the business application’s frontend. The available repository separates the .NET application/API layers from the Blazor user interface; those backend layers are repository context, not a claim of sole authorship.",
    "source": "FlatPurseBusiness/",
    "challenge": "Frontend work sits within a layered .NET application. UI behavior must align with application/API contracts; the portfolio contribution is specifically the frontend."
  },
  "Prastfarms.com": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Google Apps Script",
      "Google Sheets"
    ],
    "build": "Connected investment-management screens to Google Apps Script and Sheets for creating, editing, and monitoring investment records, as documented in the original portfolio.",
    "source": "prastfarms/",
    "challenge": "The interface changes investment records through an Apps Script/Sheets backend. Creation, editing, and monitoring need to agree on the same record structure."
  },
  "Lenslore.ca": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "jsPDF"
    ],
    "build": "Separated gallery, modal, and theme behavior into JavaScript files and added browser PDF generation alongside the portfolio and enquiry flow.",
    "source": "lenslore/",
    "challenge": "A portfolio gallery, enquiry paths, themes, and generated PDFs must work together across screen sizes. PDF output also needs its own layout rather than relying on the webpage’s appearance."
  },
  "culyeimmigrationservices.com": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Stripe"
    ],
    "build": "Redesigned the public site and added content-loading scripts. The original portfolio records Stripe integration with backend functions; those payment implementation details are not established by the inspected frontend.",
    "source": "culye/",
    "challenge": "The public content site and payment flow have different requirements. The portfolio records backend payment integration, though that implementation was not established by the inspected frontend."
  },
  "bodidris.org": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS"
    ],
    "build": "Built a portfolio with separate profile content, responsive page layouts, and enquiry links.",
    "source": "bodidris/",
    "challenge": "The portfolio must connect profile content to enquiry paths while keeping a consistent responsive layout across pages."
  },
  "Mazey": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Three.js",
      "Firebase"
    ],
    "build": "Built browser game modules for rendering, game state, and multiplayer-related behavior, with Firebase hosting configuration.",
    "source": "minutedash/",
    "challenge": "Rendering, gameplay state, and multiplayer-related modules need to stay coordinated during interactive play."
  },
  "Dev Game Show": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS"
    ],
    "build": "Built the public game-show website as a responsive browser page with its content and visitor actions.",
    "source": "devgameshow/",
    "challenge": "The public site brings show information and visitor actions together in a responsive page. The inspected source does not establish the technical implementation of a live game-show system."
  },
  "Fromsupply": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS"
    ],
    "build": "Built the public-facing concierge website. The local landing page does not establish the implementation of the concierge backend.",
    "source": "Fromsupply/",
    "challenge": "The inspected code is the public-facing concierge site. Its presentation and enquiry flow can be described, but the complexity of the underlying concierge service needs separate source evidence."
  },
  "Pautacos": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS"
    ],
    "build": "Separated configuration, data, and main interaction logic into JavaScript modules for the chef-network website.",
    "source": "pautacos/",
    "challenge": "Configuration, display data, and UI logic live in separate scripts. They need to agree on the chef and service information shown to visitors."
  },
  "Wopara": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Hosting"
    ],
    "build": "Built a shared navigation and account layer around multiple browser applications. Each product supplies its own content and tools while reusing the Wopara shell.",
    "source": "wopara/",
    "challenge": "Many products share one account and navigation layer. Each app still has its own state and lifecycle, so integration must prevent one product from taking over another’s context."
  },
  "Clubbelong": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS"
    ],
    "build": "Built the public interface using browser-loaded React and Tailwind. The inspected entry page does not establish the full streaming backend.",
    "source": "Clubbelong/",
    "challenge": "The public interface is built with browser-loaded React. The streaming and interactive-film concepts go beyond what that entry page alone establishes about the backend."
  },
  "Nairatraffic": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Flask"
    ],
    "build": "Paired the browser exchange-rate interface with Python rate-fetching code and a Flask server.",
    "source": "nairatraffic/",
    "challenge": "Rate-fetching code, server responses, and the browser interface must agree on currency data and timing. Arbitrage discovery adds a path-comparison problem beyond displaying a rate."
  },
  "Falling Cards": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Canvas 2D",
      "Tailwind CSS"
    ],
    "build": "Built the game in a browser page, with canvas rendering and JavaScript-driven game interactions.",
    "source": "fallingcards/",
    "challenge": "Resource decisions and arithmetic happen under time pressure, so game updates and input feedback must remain synchronized."
  },
  "Chim Type": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "build": "Built a keyboard-driven typing website in HTML, CSS, and JavaScript.",
    "source": "chimtype/",
    "challenge": "Typing input and progress feedback have to update together as the user interacts with the page. The local site implements that browser-driven practice flow."
  },
  "Chim Maze": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Canvas 2D"
    ],
    "build": "Built browser interactions and canvas rendering for note-based recall gameplay.",
    "source": "chimmaze/",
    "challenge": "Personal notes have to become usable recall prompts inside gameplay, connecting educational content to game interactions."
  },
  "Fs Logic Code": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Stripe"
    ],
    "build": "Separated the coding syllabus and line-tracking behavior from the browser interface, with a Node server in the repository.",
    "source": "logic/",
    "challenge": "The syllabus, line tracker, and exercise interface represent different parts of the same learning progression. They need to stay aligned as users work through exercises."
  },
  "Whot Whot": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
      "Tailwind CSS"
    ],
    "build": "Built card-game interactions in the browser and connected multiplayer behavior to Firebase.",
    "source": "whotwhot/",
    "challenge": "Single-player and multiplayer share card rules but differ in how actions arrive. Match state must remain consistent with the interface."
  },
  "Eventspot": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS"
    ],
    "build": "Built the event-discovery interface in a responsive browser page.",
    "source": "eventspot/",
    "challenge": "The event-discovery interface needs to make event information and sharing paths understandable across screen sizes. The inspected page does not establish a separate live event backend."
  },
  "MCP Servant": {
    "stack": [
      "Python",
      "Flask",
      "Playwright",
      "browser-use",
      "Jinja2",
      "WeasyPrint",
      "Firebase Admin"
    ],
    "build": "Built application-tailoring scripts and job-source runners, with a Flask service in the repository.",
    "source": "mcpservant/",
    "challenge": "Different job sources need different browser workflows. Tailored documents must stay associated with the right opportunity through generation and application steps."
  },
  "HomeMUA": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Cloudflare Workers",
      "Google Apps Script"
    ],
    "build": "Built the marketplace page with a Cloudflare Worker companion and Google Apps Script integration visible in the source.",
    "source": "homemua/",
    "challenge": "The public marketplace and its Worker/Apps Script integrations cross different execution environments. Data exchange must match what the interface expects."
  },
  "Dr Morgan": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "build": "Built a multi-page consultancy site with dedicated about and blog surfaces.",
    "source": "drmorgan/",
    "challenge": "About, service, and blog content span multiple pages. Navigation and responsive presentation have to remain consistent while guiding visitors toward enquiries."
  },
  "Pautacos.com": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS"
    ],
    "build": "Separated configuration, data, and main interaction logic into JavaScript modules for the chef-network website.",
    "source": "pautacos/",
    "challenge": "Configuration, display data, and UI logic live in separate scripts. They need to agree on the chef and service information shown to visitors."
  },
  "Devgameshow.com": {
    "stack": [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS"
    ],
    "build": "Built the public game-show website as a responsive browser page with its content and visitor actions.",
    "source": "devgameshow/",
    "challenge": "The public site brings show information and visitor actions together in a responsive page. The inspected source does not establish the technical implementation of a live game-show system."
  },
  "God's Embassy Church App": {
    "stack": [
      "Swift",
      "SwiftUI",
      "Firebase",
      "Google Sign-In",
      "AVKit"
    ],
    "build": "Built native SwiftUI screens for the church experience, with Firebase app initialization, Google sign-in, and Apple media components.",
    "source": "xcode/Gods Embassy/",
    "challenge": "Native app navigation, sign-in, and media playback have different lifecycles. They must coexist across SwiftUI screens without breaking the session."
  },
  "Family Verifier": {
    "stack": [
      "Swift",
      "SwiftUI",
      "LocalAuthentication",
      "Combine"
    ],
    "build": "Separated verification, contacts, history, and settings into SwiftUI screens, with a verification manager and device authentication hooks.",
    "source": "xcode/Verify Family/",
    "note": "The local client source does not by itself verify the production identity or backend security guarantees.",
    "challenge": "Verification, contacts, history, and device authentication are separate flows that must agree on request state. The local client alone does not prove the security guarantees of a deployed backend."
  },
  "Runneth": {
    "stack": [
      "Roblox"
    ],
    "build": "Designed multiplayer play around scarcity, resources, and inflation on Roblox. The engine is identified in the original portfolio; the scripts and server architecture were not available for inspection.",
    "source": "Original portfolio",
    "note": "Implementation details beyond the stated platform are not documented here.",
    "challenge": "Scarcity and inflation introduce interacting multiplayer rules. The original source was not available to assess how those rules were implemented."
  },
  "Plummet": {
    "stack": [
      "Roblox"
    ],
    "build": "Designed a Roblox survival experience around scarcity and economic rules. This original portfolio entry is separate from the newer Three.js Wopara game.",
    "source": "Original portfolio",
    "note": "The original Roblox project source was not located.",
    "challenge": "This historical Roblox project is distinct from the newer Wopara browser game. Its survival/economy design is recorded, but implementation challenges cannot be confirmed without its source."
  },
  "234Stones": {
    "stack": [],
    "build": "Developed the brand and led marketing campaigns for a jewelry store. This entry describes branding and marketing work; a software implementation is not documented.",
    "source": "Original portfolio",
    "note": "Design tools and commerce platform were not recorded.",
    "challenge": "The documented scope is shown above. A more specific account of the implementation challenges needs the original project files or build notes."
  },
  "Chim Wopara Clothing": {
    "stack": [],
    "build": "Developed the clothing concept and visual identity around cultural influences.",
    "source": "Original portfolio",
    "note": "This is fashion and brand work; the production tools were not recorded.",
    "challenge": "The documented scope is shown above. A more specific account of the implementation challenges needs the original project files or build notes."
  },
  "Acters": {
    "stack": [],
    "build": "Wrote a script intended for an interactive film experience. The available portfolio documents the writing role, not a separate application implementation.",
    "source": "Original portfolio",
    "note": "Authoring tools and runtime integration were not recorded.",
    "challenge": "The documented scope is shown above. A more specific account of the implementation challenges needs the original project files or build notes."
  },
  "Structured Prompts and Logic": {
    "stack": [],
    "build": "Developed a structured, context-based prompt syntax for expressing programming logic. A parser or executable implementation was not located in the inspected repositories.",
    "source": "Original portfolio",
    "note": "Implementation language and tooling remain undocumented.",
    "challenge": "The documented scope is shown above. A more specific account of the implementation challenges needs the original project files or build notes."
  },
  "Goodsline": {
    "stack": [],
    "build": "The original portfolio describes the product’s purpose, but its implementation source was not located in the reviewed local repositories. The technical build needs confirmation before a detailed account can be published.",
    "source": "Original portfolio",
    "note": "Technical stack not yet documented.",
    "challenge": "The documented scope is shown above. A more specific account of the implementation challenges needs the original project files or build notes."
  },
  "Chimos": {
    "stack": [],
    "build": "The original portfolio describes the product’s purpose, but its implementation source was not located in the reviewed local repositories. The technical build needs confirmation before a detailed account can be published.",
    "source": "Original portfolio",
    "note": "Technical stack not yet documented.",
    "challenge": "The documented scope is shown above. A more specific account of the implementation challenges needs the original project files or build notes."
  },
  "GunvGun": {
    "stack": [],
    "build": "The original portfolio describes the product’s purpose, but its implementation source was not located in the reviewed local repositories. The technical build needs confirmation before a detailed account can be published.",
    "source": "Original portfolio",
    "note": "Technical stack not yet documented.",
    "challenge": "The documented scope is shown above. A more specific account of the implementation challenges needs the original project files or build notes."
  },
  "Fs Mall": {
    "stack": [],
    "build": "The original portfolio describes the product’s purpose, but its implementation source was not located in the reviewed local repositories. The technical build needs confirmation before a detailed account can be published.",
    "source": "Original portfolio",
    "note": "Technical stack not yet documented.",
    "challenge": "The documented scope is shown above. A more specific account of the implementation challenges needs the original project files or build notes."
  },
  "Chim Farms": {
    "stack": [],
    "build": "The original portfolio describes the product’s purpose, but its implementation source was not located in the reviewed local repositories. The technical build needs confirmation before a detailed account can be published.",
    "source": "Original portfolio",
    "note": "Technical stack not yet documented.",
    "challenge": "The documented scope is shown above. A more specific account of the implementation challenges needs the original project files or build notes."
  },
  "Chimron Calls": {
    "stack": [],
    "build": "The original portfolio describes the product’s purpose, but its implementation source was not located in the reviewed local repositories. The technical build needs confirmation before a detailed account can be published.",
    "source": "Original portfolio",
    "note": "Technical stack not yet documented.",
    "challenge": "The documented scope is shown above. A more specific account of the implementation challenges needs the original project files or build notes."
  },
  "Fs Browser": {
    "stack": [],
    "build": "The original portfolio describes the product’s purpose, but its implementation source was not located in the reviewed local repositories. The technical build needs confirmation before a detailed account can be published.",
    "source": "Original portfolio",
    "note": "Technical stack not yet documented.",
    "challenge": "The documented scope is shown above. A more specific account of the implementation challenges needs the original project files or build notes."
  }
};
projects.forEach(project => {
 const detail = projectDetails[project.category + ':' + project.name] || projectDetails[project.name];
 if (detail) Object.assign(project, detail);
});
