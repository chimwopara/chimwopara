# Wopara portfolio catalog

Imported from the local sibling Wopara repository on October 14, 2026.

The imported source inventory contains 72 entries, alongside the 41 original portfolio projects. These are subsequently consolidated into the current 76-entry display catalog by src/project-catalog.js; see project-catalog.md. The original import breakdown is:

- 21 Servant Blob tools: the complete `MC_TOOLS` registry in `woparapill.js`.
- 16 Spaceship entries: the current `typeBar`, office tools, media tools, desktops, and tagnames in `spaceship/index.html`.
- 27 ecosystem entries: Campus, Museum, and Moplates sections from `APP_SECTIONS`; Port's own section navigation; the five product entries in `woparagroup.js`.
- 8 games: the Museum game navigation in `woparapill.js`.

Names follow executable registries and navigation, rather than superseded names in comments or planned features in SERVANT.md. Descriptions do not imply completion of that specification.

Embedded Blob and Spaceship tools link to their owning app, with navigation instructions in the portfolio detail dialog. Individual tool deep links were not invented. Public section fragments and game paths come from source navigation. Routes were checked against local source, not authenticated live sessions.

Images are copied from Wopara's own `images/app icons/` and `images/servant/` assets. Source data lives in `src/wopara-data.js`; it is loaded after the existing portfolio data and before the renderer.
