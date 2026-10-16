// Feature depth audited against implementation modules, after product consolidation.
function enrichProduct(name, update) {
 const product = projects.find(item => item.name === name);
 if (!product) throw new Error('Missing audited product: ' + name);
 if (update.groups) {
  product.featureGroups = update.groups;
  product.features = Object.values(update.groups).flat();
 }
 if (update.features) product.features = [...new Set([...product.features, ...update.features])];
 ['description', 'build', 'challenge', 'example'].forEach(key => {
  if (update[key]) product[key] = update[key];
 });
 if (update.stack) product.stack = [...new Set([...product.stack, ...update.stack])];
}
enrichProduct('Timelines', {
 description: 'A browser-based film editing and soundtrack studio. Cut picture, design animated titles, compose music with virtual instruments, generate voiceover, and mix the finished production in one workspace.',
 groups: {
  'Picture, tracks & titles': [
   'Arrange main video, B-roll, C-roll, title overlays, voiceover, music, and sound effects on separate timeline tracks.',
   'Split at the playhead, preview the cut, undo changes, and access film export.',
   'Create title cards in the panel beside the cut, with fonts, colors, gradients, animated presets, and background effects.',
   'Open the cut editor beside the timeline instead of leaving the film workspace.'
  ],
  'Compose an original soundtrack': [
   'Write music with five virtual instruments: piano, guitar, clarinet, bass, and drums.',
   'Compose melodic parts using notes, chords, rests, note lengths, and repeated phrases.',
   'Build drum patterns with kick, snare, closed and open hi-hat, tom, clap, ride, and crash sounds.',
   'Set tempo, swing, repeats, and accents to shape a part’s timing and expression.',
   'Layer separate drum, bass, and chord parts on the cut to build a soundtrack.',
   'Render instrument parts into audio through browser synthesis rather than relying only on uploaded recordings.'
  ],
  'Voiceover & audio editing': [
   'Generate a spoken voiceover from text, select an available voice, adjust its pace, and place it on the voiceover track.',
   'Adjust a sound’s volume, speed, start time, duration, fade-in, fade-out, mute state, and destination track.',
   'Extend an instrument part or loop a recording to fill a scene; recorded loops use crossfades to smooth the joins.',
   'Rewrite an existing instrument part, change its tempo or notes, or play the same part on another instrument.'
  ],
  'Assistant editing & shared projects': [
   'Ask the assistant to compose or rewrite instrument parts, extend audio, adjust its mix, or add spoken narration.',
   'Let the assistant read the actual cut—including tracks, timing, notes, and instrument settings—before changing it.',
   'Open local projects or shared film records, with shared clips, titles, music, voiceovers, and effects feeding the cut.'
  ]
 },
 stack: ['Web Audio API', 'OfflineAudioContext', 'WAV encoding', 'Canvas 2D'],
 build: 'The timeline core manages timed blocks across video, overlay, and audio tracks. A separate instrument engine parses melodic and drum notation, schedules notes with tempo and swing, synthesizes each instrument in OfflineAudioContext, and encodes the result as WAV audio. Editing actions rewrite the saved instrument score or change audio blocks; recording loops use crossfades. Title and cut editors mount beside the timeline, while the voiceover workflow places generated speech into the same track model.',
 challenge: 'This combines film editing with music creation. Instrument notation has to become correctly timed audio, multiple parts must stay aligned with the picture, and looping needs to avoid audible joins. The assistant must edit the existing score and track state rather than create unrelated replacements. Local and shared film data, title panels, playback, and export all need to agree on the same cut.',
 example: 'Create a piano progression, add bass and drums at the same tempo, generate an opening narration, fade the soundtrack under the voice, and place an animated title over the film.'
});
enrichProduct('Opaline', {
 description: 'A collaborative development workspace with code editing, program execution, web previews, visual page design, and project import/export.',
 groups: {
  'Code together': [
   'Edit shared project files with collaborative document state and participant awareness.',
   'Use syntax highlighting, autocomplete, bracket matching, folding, search, lint tools, and undo/redo.',
   'Create files and switch between them within a saved project.'
  ],
  'Run & preview': [
   'Run JavaScript, TypeScript, Python, and SQL through the editor’s supported execution paths.',
   'Preview HTML pages and web projects in the built-in preview area.',
   'Read console output and rerun a file after making changes.',
   'Send supported compiled-language files to the remote execution path, with output returned to the same console.',
   'Run SQL against an in-page SQLite database.'
  ],
  'Design & move projects': [
   'Switch a web page into its visual design mode and edit the preview through the builder interface.',
   'Import an existing project ZIP rather than starting every project from scratch.',
   'Export a project ZIP containing its files and bundled assets.',
   'Keep projects connected to Firebase authentication and saved workspace records.'
  ]
 },
 stack: ['Sucrase', 'SQLite / sql.js', 'fflate'],
 build: 'CodeMirror supplies the editor and Yjs supplies shared text and awareness. The run dispatcher selects a web preview, a JavaScript/TypeScript/Python/SQL execution path, or remote execution according to the file. TypeScript uses Sucrase and SQL uses in-page SQLite. A visual builder operates on the preview, while fflate packages project files and assets into ZIP exports.',
 challenge: 'Editing, collaboration, execution, visual design, and export are different representations of the same project. File changes must reach the correct runtime or preview without losing collaborative state, and a downloaded ZIP must include the assets the preview relied on.'
});
enrichProduct('Jotter', {
 features: [
  'Navigate longer documents through an outline and insert a table of contents.',
  'Create and edit tables, use document styles, and format Markdown as you type.',
  'Find and replace text within a document.',
  'Import Word, Markdown, HTML, or plain-text documents.',
  'Export a real Word (.docx) document.',
  'Use the assistant to insert a section, summarize existing text, or rewrite the document.',
  'Write working and mathematical steps as saved ink on the page through the handwriting tools.'
 ],
 build: 'The shared document shell owns Firestore snapshots and debounced saves; office/intel.js owns the rich document editor, outline, tables, Markdown handling, review tools, and document import/export. Assistant actions edit the open document or add saved ink rather than keeping the result only in chat.',
 challenge: 'A document has editable text, tables, page layout, an outline, and exported structure. Those representations must stay consistent while remote updates and assistant edits arrive; Word import/export adds a format boundary beyond simply saving HTML.'
});
enrichProduct('Data', {
 features: [
  'Organize a workbook into multiple named sheets.',
  'Use live formulas such as SUM, AVERAGE, MIN, MAX, COUNT, COUNTA, and PRODUCT.',
  'Build charts from selected sheet ranges.',
  'Apply conditional formatting and number formats, and freeze rows or columns while working.',
  'Find and replace content in the sheet.',
  'Import CSV data and export a sheet as CSV or HTML.',
  'Ask the assistant to set cells and write live formulas using spreadsheet cell references.'
 ],
 build: 'office/data.js supplies a virtualized grid, sheet tabs, calculation engine, chart state, formatting, and CSV workflows. Formulas are tokenized and parsed rather than evaluated as JavaScript. The host manages shared document snapshots and saves, while the assistant writes cells through the same open-sheet model.',
 challenge: 'Spreadsheet cells are interconnected data, not independent text boxes. Formula evaluation, sheet structure, formatting, charts, and virtualized rendering must agree on the same workbook while shared updates and assistant edits arrive.'
});
enrichProduct('Slides', {
 features: [
  'Style a deck with themes and transitions.',
  'Add speaker notes and use presenter view.',
  'Place text and image elements on individual slides.',
  'Add properly laid-out equations, fractions, roots, and step-by-step mathematical working.',
  'Ask the assistant to add or revise slides within the open deck.'
 ],
 build: 'office/debrief.js supplies the presentation editor, positioned elements, visual themes, transitions, speaker notes, and presenter workflow. The Spaceship host owns persistence and remote updates; shared math and assistant actions place structured content into the deck.',
 challenge: 'Slide layout and animation must remain consistent between editing, presenting, and export. Speaker notes are a separate presenter concern, and mathematical content requires structured layout rather than ordinary slide text.'
});
enrichProduct('Boardroom', {
 features: [
  'Assign tasks to one person or distribute multiple tasks to multiple team members.',
  'Turn a film’s production work into claimable jobs for characters, locations, and other production needs.',
  'Ask the assistant to check project progress against the workspace’s actual records.',
  'Query recorded team activity by date range, person, or subject rather than relying only on recent chat context.'
 ]
});
enrichProduct('Wopara Spaceship', {
 features: [
  'Set file-level access for individual team members and inspect who can do what.',
  'Import files from the device or an existing Wopara address and open the shared export tools.',
  'Publish supported work to its Museum shelf from within the workspace.',
  'Read a team activity ledger by date range, person, or subject.',
  'Ask the assistant to inspect actual file contents before acting on documents, sheets, slides, films, or missions.',
  'Turn film-production work into tasks on the team’s Boardroom.'
 ]
});
enrichProduct('Movie', {
 features: [
  'Generate character reference-sheet images from the character details.',
  'Add and edit characters and scenes through assistant actions tied to the open film.',
  'Keep reusable prompt snippets with the production.',
  'Use the related Timelines studio to compose instrumental music, edit audio, and create title cards for the film.'
 ]
});
enrichProduct('Trailer', {
 features: [
  'Develop a trailer’s direction and beat sheet, then preview and render it from its Stage view.',
  'Use images, narration, titles, and music as production assets.',
  'Use configured narrator voices when available; trailers can also play without narration.',
  'Create a related script document from the trailer’s beat sheet and score brief.'
 ]
});
projects.forEach(project => {
 const hay = [project.name, project.description, ...project.features].join(' ');
 project.capabilities = capabilityGroups.filter(group => group.words.test(hay)).map(group => group.id);
});

// Current naming and scope corrections (October 16, 2026).
const browserPosition = projects.findIndex(project => project.name === 'Fs Browser');
for (let i = projects.length - 1; i >= 0; i--) {
 const project = projects[i];
 if (project.name === 'Wopara Spaceship' || project.name === 'Runneth' ||
     (project.name === 'Plummet' && project.category === 'games') ||
     project.name === 'Fs Mall' || project.name === 'Fs Browser') {
  projects.splice(i, 1);
 }
}
const productRenames = { Nairatraffic: 'Forex', 'Family Verifier': 'Verify' };
projects.forEach(project => {
 if (productRenames[project.name]) project.name = productRenames[project.name];
 if (project.name === 'Forex') project.launchLabel = 'Open Forex';
});
// Browser already has the current implementation profile. Retire its duplicate
// historical Fs Browser concept rather than duplicating the same product.
const browserIndex = projects.findIndex(project => project.name === 'Browser');
if (browserIndex >= 0 && browserPosition >= 0) {
 const [browser] = projects.splice(browserIndex, 1);
 projects.splice(Math.min(browserPosition, projects.length), 0, browser);
}

// Public product names carry the Wopara brand; source identities remain stable.
const currentWoparaProducts = new Set(['Forex', 'Verify', 'Mazey', 'Chim Type', 'Whot Whot']);
projects.forEach(project => {
 const isWoparaProduct = ['machine', 'spaceship', 'ecosystem', 'woparagames'].includes(project.category) || currentWoparaProducts.has(project.name);
 project.visualName = project.name;
 if (isWoparaProduct && !project.name.startsWith('Wopara ')) {
  project.name = 'Wopara ' + project.name;
 }
 if (project.launchLabel && isWoparaProduct) project.launchLabel = 'Open ' + project.name;
});
