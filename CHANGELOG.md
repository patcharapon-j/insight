# Changelog

## 1.2.0 (2026-05-28)

### Features
- Compose dialog target list now includes other connected GMs (excluded self), so a GM can whisper to a co-GM or a GM-assistant. Other GMs are labeled `(GM)` and grouped after regular players.

## 1.1.0 (2026-05-28)

### Compatibility
- Verified against Foundry VTT v14 (`compatibility.verified` bumped to `14`)
- Replaced deprecated global `renderTemplate` with `foundry.applications.handlebars.renderTemplate`
- Replaced deprecated global `FilePicker` with `foundry.applications.apps.FilePicker` (via `.implementation` when available)
- Compose dialog now reuses any existing instance via `foundry.applications.instances` instead of a module-level cache

## 1.0.0 (2026-04-07)

### Features
- GM compose dialog for sending targeted notifications to individual players
- Cinematic three-stage fracture animation (line, card, content)
- Two visual themes: Dreadlight (dark horror) and Fantasy (warm arcane)
- Procedural Web Audio sound effects per theme
- Custom sound file support via module settings
- Notification queue (one at a time, in order)
- Rich content: sense labels, titles, bold/italic body text, optional images
- Animation speed presets: Normal, Fast, Instant
- Per-client sound enable/volume controls
