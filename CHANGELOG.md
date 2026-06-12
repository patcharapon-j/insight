# Changelog

## Unreleased

### Fixed
- **GM scene-control button now opens the compose dialog reliably.** Clicking the Insight eye in the token controls could do nothing because Foundry's `button` tool only fires `onChange` when the active tool *changes* — once the button stuck as the active tool, repeat clicks were silently ignored. The click is now bound directly on the rendered button so the dialog opens every time, and the open instance is reused so windows never stack.

## 1.3.0 (2026-06-12)

### Changed
- **Streamlined the compose dialog for play.** The GM now just picks a recipient and types a single message — the separate sense, title, and image fields are gone. The message field autofocuses, the last recipient stays selected for rapid follow-ups, and **Ctrl/Cmd+Enter** sends. (The notification renderer still supports titles, sense labels, and images for programmatic sends.)

### Design
- Adopted the GL Universe **"Etched Glass"** design language across the whole module — liquid glass material with an Endfield-style drafting layer.
- **Notification card** rebuilt as a chamfered glass panel: frosted `backdrop-filter` blur with inner light catch and bloom, a 1px accent rim tracing the cut corner, an L-bracket registration mark, crop marks, a `GLU·INSIGHT // ####` serial, a triangle bullet, and a barcode data strip.
- **Reveal** now follows the reveal contract: a precision rule of light draws in, a sheen sweeps across the panel, and content lights in a diagonal cascade stagger.
- **Compose dialog** restyled as a glass window with notched inset wells, technical micro-labels, a tick-marked kicker, and a signal-amber Send button that flashes on commit.
- **Themes** reduced to the single dynamic accent channel (`--gl-accent`): Dreadlight → mystery violet, Fantasy → signal amber. The material, etching, and Oxanium/mono typography are now shared.
- **Motion** built on the shared easing/duration tokens, with the animation-speed setting mapped to motion tiers and a full `prefers-reduced-motion` clamp (loops disabled, ceremonies become straight fades).
- Added `mockups/etched-glass.html`, a self-contained visual specimen that links the live stylesheet.

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
