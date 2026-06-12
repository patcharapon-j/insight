# Gluniverse Insight — Passive Notifications

A FoundryVTT v13/v14 module for delivering cinematic, private notifications to individual players. Perfect for passive perception results, secret insight checks, and narrative reveals that only one player should see.

## Features

- **GM Compose Dialog** — Send targeted notifications to individual players from the token controls toolbar
- **"Etched Glass" Design Language** — GL Universe theming: chamfered frosted-glass panels with an L-bracket, crop marks, a serial designator, and a barcode data strip etched on top like a technical drawing
- **Cinematic Reveal** — A precision rule of light draws in, a sheen sweeps the panel, and content lights in a diagonal cascade stagger
- **Two Visual Themes** — Dreadlight (mystery violet) and Fantasy (signal amber), driven by a single dynamic accent channel (`--gl-accent`)
- **Procedural Sound** — Web Audio API-generated atmospheric sounds per theme, or use a custom sound file
- **Notification Queue** — Multiple notifications display one at a time, queued in order
- **Rich Content** — Supports sense labels, titles, body text with bold/italic formatting, and optional images
- **Motion Tiers** — Normal, Fast, or Instant presets (per-client), with a full `prefers-reduced-motion` clamp

## Installation

### Manifest URL (Recommended)

1. In FoundryVTT, go to **Add-on Modules** > **Install Module**
2. Paste the manifest URL:
   ```
   https://github.com/patcharapon-j/insight/releases/latest/download/module.json
   ```
3. Click **Install**

### Manual

1. Download `module.zip` from the [latest release](https://github.com/patcharapon-j/insight/releases/latest)
2. Extract into your `Data/modules/` directory
3. Ensure the folder is named `insight`

## Usage

### For GMs

1. Select the **Token Controls** layer in the left toolbar
2. Click the **eye icon** to open the compose dialog
3. Select a target player, fill in the notification details, and click **Send**
4. The dialog closes after sending

### For Players

Notifications appear on the right side of the screen with a cinematic animation. Click **Dismiss** to close.

## Settings

| Setting | Scope | Description |
|---------|-------|-------------|
| Notification Theme | World | Visual theme: Dreadlight or Fantasy |
| Enable Sounds | Client | Toggle notification sounds on/off |
| Sound Volume | Client | Volume level (0 to 1) |
| Custom Sound Effect | World | Optional audio file to replace the default procedural sound |
| Animation Speed | Client | Normal, Fast, or Instant |

## Compatibility

- **Foundry VTT**: v13+ (verified through v14)
- **Systems**: System-agnostic, works with any game system

## License

[MIT](LICENSE)
