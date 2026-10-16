# Current project catalog

The runtime catalog consolidates 113 source-inventory entries into 76 displayed entries. The inventory is retained as input; project-catalog.js applies 37 explicit merges before filtering, counting, search, and rendering.

Current source evidence:
- spaceship/index.html: MV_TOOLS contains Movie, Timelines, and Trailer. Comments beside it state that Titles and the cut editor are panels in Timelines; planning and branching are inside the film.
- movie/timelines-core.js: timeline tracks include titles, main video, B-roll, C-roll, voiceover, music, and sound effects; the title editor mounts inside the timeline.
- movie/titles-core.js: title styling uses fonts, gradients, animated presets, and canvas backgrounds.
- movie/movie-core.js: the production pipeline includes story, character and location sheets, assets, thumbnails, scenes, clips, audio, and production. Interactive films mount their branching workspace.
- woparagroup.js: current top-level applications are Campus, Spaceship, Port, Moplates, and Museum.

Merges:
- Titles → Timelines.
- Planner → Movie.
- Platforms, Media, Desktops, Tagnames, Websites, Ads, and the broad old Wopara entry → Wopara Spaceship.
- Campus, Museum, Moplates, and Port section cards → their respective parent applications.
- Assistant Forex → Nairatraffic / Forex Traffic.
- Duplicate Minute Dash, Type, Whot, Pautacos, and Dev Game Show entries → one entry per product.

Distinct workspace applications (Opaline, Boardroom, Jotter, Data, Slides, Movie, Timelines, Trailer) remain separate portfolio entries, explicitly identified as Spaceship applications. Assistant tools are explicitly identified as embedded utilities.

Historical Roblox Plummet is retained separately from the current browser survival game. Historical projects without source remain marked according to their documentation.

Feature lists and stack data are carried into the parent on merge. Timelines and Movie also receive expanded source-grounded descriptions of their current integrated functionality.

The order is editorial, based on scope, unusual interaction, and engineering depth. Film creation, integrated media editing, collaborative programming, 3D simulation, and automation lead. Alarms, timers, and stopwatches appear last. This order does not claim measured performance or a quantitative novelty score.

## Implementation-level feature audit

src/product-depth.js enriches current products after consolidation. Its first audit covers Timelines, Opaline, Jotter, Data, Slides, Boardroom, Spaceship, Movie, and Trailer. It preserves the 76-entry product boundaries and ranking.

Timelines evidence: movie/instruments.js (five instrument definitions, score parsing, tempo/repeat/swing scheduling, OfflineAudioContext synthesis, WAV encoding, crossfade extension); movie/timelines-core.js (composition, rewrite, audio shaping, extension, narration, cut-reading and playback actions, plus actual handlers and export/search controls).

Other evidence: opaline/editor-core.js (run dispatch, SQLite, Sucrase, visual builder, ZIP import/export); office/intel.js (outline, tables, Markdown, Word import/export); office/data.js (formula parser, virtualized grid, multiple sheets, charts, formatting, CSV); office/debrief.js (themes, transitions, notes, presenter and math interfaces); spaceship/index.html (editor mounting contracts, permissions, imports/exports, activity ledger, film task creation); movie/movie-core.js (production pipeline, character-sheet generation and scene actions); trailer/app.js (direction, assets, Stage rendering and script-document creation).

Feature descriptions establish implemented interfaces and code paths, rather than claiming that all hosted services or paid integrations were exercised in production. No advertised feature was inferred solely from SERVANT.md or other planning checklists.

## October 16 scope and naming update

The current display contains 71 entries. Post-audit corrections in product-depth.js remove the Wopara Spaceship parent entry, Runneth, the historical Roblox Plummet, Fs Mall, and the duplicate historical Fs Browser concept. The implemented Browser profile remains. Nairatraffic is displayed as Forex; Family Verifier is displayed as Verify. The newer browser-based Plummet remains a distinct game. Local source paths and older inventory keys retain their historical names for provenance.

Every displayed project now receives a small decorative SVG illustration from product-visuals.js. Visual themes reflect the product type; animations pause outside the viewport and are disabled for reduced-motion preferences. No generated raster assets or animation dependencies were added.

Animation revision: product-visuals.js now declares 71 individual product scenes and 71 distinct keyframe sequences. Every displayed product must have an explicit scene; there is no category fallback. Existing offscreen pausing and reduced-motion support apply to each product’s own animated group.
