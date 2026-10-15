// Current product boundaries, applied after the source inventory and copy.
// Source evidence and merge decisions are recorded in docs/project-catalog.md.
const catalogKey = project => project.category + ':' + project.name;
const catalogMerges = [];
function foldProjects(parentKey, childKeys) {
 const parent = projects.find(project => catalogKey(project) === parentKey);
 if (!parent) throw new Error('Missing catalog parent: ' + parentKey);
 parent.includedTools = parent.includedTools || [];
 childKeys.forEach(childKey => {
  const index = projects.findIndex(project => catalogKey(project) === childKey);
  if (index < 0) throw new Error('Missing catalog child: ' + childKey);
  const child = projects[index];
  parent.features = [...new Set([...parent.features, ...child.features])];
  parent.stack = [...new Set([...parent.stack, ...child.stack])];
  parent.includedTools.push(child.name.replace(/^.* · /, ''));
  catalogMerges.push({ from: childKey, into: parentKey });
  projects.splice(index, 1);
 });
}
const parentSections = {
 Campus: 'Wopara Campus', Museum: 'Wopara Museum',
 Moplates: 'Moplates', Port: 'Wopara Port'
};
Object.entries(parentSections).forEach(([prefix, parent]) => {
 foldProjects('ecosystem:' + parent, projects.filter(project =>
  project.category === 'ecosystem' && project.name.startsWith(prefix + ' · ')
 ).map(catalogKey));
});
foldProjects('spaceship:Timelines', ['spaceship:Titles']);
foldProjects('spaceship:Movie', ['spaceship:Planner']);
foldProjects('ecosystem:Wopara Spaceship', [
 'spaceship:Platforms', 'spaceship:Media', 'spaceship:Desktops',
 'spaceship:Tagnames', 'spaceship:Websites', 'spaceship:Ads', 'myprojects:Wopara'
]);
// Same implementation or product presented twice in the original inventory.
foldProjects('myprojects:Nairatraffic', ['machine:Forex']);
foldProjects('games:Mazey', ['woparagames:Minute Dash']);
foldProjects('games:Chim Type', ['woparagames:Type']);
foldProjects('games:Whot Whot', ['woparagames:Whot']);
foldProjects('myprojects:Pautacos', ['websites:Pautacos.com']);
foldProjects('myprojects:Dev Game Show', ['websites:Devgameshow.com']);

const timelines = projects.find(project => catalogKey(project) === 'spaceship:Timelines');
timelines.description = 'A film-editing workspace that combines the production timeline, title design, and the cut editor. Titles are made beside the cut rather than in a separate product.';
timelines.features = [...new Set([
 'Arrange main video, B-roll, C-roll, voiceover, music, sound effects, and title overlays on separate tracks.',
 'Create title cards inside the timeline workspace instead of switching to a separate Titles app.',
 'Style title text with fonts, colors, gradients, animation presets, and background effects.',
 'Use the cut editor in the panel beside the timeline.',
 ...timelines.features.filter(feature => !feature.includes('production context'))
])];
timelines.stack = [...new Set([...timelines.stack, 'Canvas 2D'])];
timelines.build += ' The title studio and cut editor are mounted as panels beside the timeline; title rendering uses a canvas-based studio with text and background presets.';
timelines.challenge = 'Video, overlays, music, voiceover, and effects must stay aligned in time. Title design and cut editing share the same film context, while projects may load from local IndexedDB or shared Firestore records. Switching panels must retain the active cut and its assets.';
timelines.entry = 'Open a Spaceship, choose Media → Timelines, then use the title and editor panels beside the cut.';
timelines.example = 'Edit a film’s picture and audio, create an animated title card, and place it over the cut without leaving the timeline workspace.';

const movie = projects.find(project => catalogKey(project) === 'spaceship:Movie');
movie.description = 'A film-production application that takes a project through story, characters, locations, scenes, clips, audio, and production. Planning and branching-film work are parts of the film itself.';
movie.features = [...new Set([
 'Develop the story and script before building the film.',
 'Organize character references, location references, and prop or object assets.',
 'Prepare thumbnails, posters, scene sheets, frames, and scene clips.',
 'Work with a score, voiceover, and sound effects as part of production.',
 'Choose a film that plays straight through or a film with multiple branching paths.',
 'Open the branching workspace within an interactive film rather than creating a separate game-app project.',
 'Use story-planning tools in the same film-production context.',
 'Access the production and render/export step from the film pipeline.',
 ...movie.features
])];
movie.challenge = 'Story, character and location references, scenes, clips, and audio are related production data. Planning and branching workflows must use the same film rather than create disconnected copies, and the production pipeline has to retain those relationships through editing and output.';
movie.build += ' Its film pipeline defines steps for story, character and location sheets, assets, thumbnails, scenes, clips, audio, and production. The branching workspace mounts only when the film is configured as interactive.';
movie.entry = 'Open a Spaceship → Media → Movie. Story planning is inside the film; an interactive film exposes its branching workspace.';

const forex = projects.find(project => project.name === 'Nairatraffic');
forex.description = 'A currency-rate and arbitrage application that compares conversion paths. The same tool can be opened inside Wopara’s AI assistant as Forex.';
forex.url = 'https://wopara.com/nairatraffic';
forex.entry = 'Open Forex Traffic directly, or open the Wopara assistant → All apps → Forex.';
forex.launchLabel = 'Open Forex Traffic';

projects.forEach(project => {
 if (project.category === 'machine') project.catalogType = 'Embedded utility';
 else if (project.category === 'spaceship') project.catalogType = 'Spaceship application';
 else if (project.category === 'ecosystem') project.catalogType = 'Wopara application';
 else if (['Runneth', 'Plummet', 'Chimos', 'GunvGun'].includes(project.name)) project.catalogType = 'Earlier project';
 const hay = [project.name, project.description, ...project.features].join(' ');
 project.capabilities = capabilityGroups.filter(group => group.words.test(hay)).map(group => group.id);
});

// Editorial order: breadth, unusual interaction, and engineering depth first.
// Utilities remain discoverable, but do not lead the portfolio.
const wowOrder = [
 'Movie', 'Timelines', 'Opaline', 'YEG Life', 'Wopara Spaceship',
 'MCP Servant', 'Boardroom', 'Family Verifier', 'Nairatraffic',
 'Mazey', 'Moplates', 'Wopara Museum', 'Wopara Campus',
 'Wopara Port', 'Trailer', 'Jotter', 'Data', 'Slides', 'Smarts',
 'Farm', 'Rule of Law', 'Whot Whot', 'Chim Maze', 'Chim Type', 'Falling Cards',
 'Structured Prompts and Logic', 'Pautacos', 'HomeMUA', 'Clubbelong',
 'Goodsline', 'Chimron Calls', 'Fs Browser', 'Chim Farms', 'Runneth',
 'Plummet', 'GunvGun', 'Dev Game Show', 'Chimos', 'Fs Logic Code',
 'Prastfarms.com', 'FlatPurse Business', "God's Embassy Church App",
 'Lenslore.ca', 'Ivana Foundation', 'YegeLearning.com',
 "Daniel's Enterprise", 'culyeimmigrationservices.com', 'bodidris.org',
 'Dr Morgan', 'Fromsupply', 'Eventspot', 'Fs Mall', 'Chim Wopara Clothing',
 '234Stones', 'Acters', 'Browser', 'Site health', 'Servegram',
 'Errands', 'Photo', 'Call', 'Search', 'Domains', 'Note', 'Message',
 'Email me', 'Music', 'News', 'Weather', 'Reminder', 'Reserves',
 'Report', 'Alarm', 'Timer', 'Stopwatch'
];
const wowRank = project => {
 const position = wowOrder.indexOf(project.name);
 return position < 0 ? 52 : position;
};
projects.sort((a, b) => wowRank(a) - wowRank(b));
