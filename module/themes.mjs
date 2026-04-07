// module/themes.mjs — Theme presets and CSS variable applicator

const THEMES = {
  dreadlight: {
    label: "Dreadlight",
    vars: {
      "--insight-bg": "#08080c",
      "--insight-bg-back": "#0a0a12",
      "--insight-border": "rgba(201, 169, 110, 0.12)",
      "--insight-border-back": "rgba(168, 139, 245, 0.1)",
      "--insight-line-from": "#c9a96e",
      "--insight-line-to": "rgba(168, 139, 245, 0.6)",
      "--insight-title-color": "#ededf4",
      "--insight-body-color": "#8e8ea3",
      "--insight-label-color": "#555568",
      "--insight-accent": "#c9a96e",
      "--insight-accent-secondary": "#a88bf5",
      "--insight-divider-from": "rgba(201, 169, 110, 0.15)",
      "--insight-divider-to": "rgba(168, 139, 245, 0.08)",
      "--insight-glow-1": "rgba(168, 139, 245, 0.06)",
      "--insight-glow-2": "rgba(201, 169, 110, 0.04)",
      "--insight-icon-radius": "2px",
      "--insight-body-style": "normal",
      "--insight-font-title": "'Monaspace Krypton', monospace",
      "--insight-font-body": "'Monaspace Neon', monospace",
      "--insight-font-label": "'Monaspace Krypton', monospace",
      "--insight-dismiss-hover": "#a88bf5",
      "--insight-line-glow": "rgba(201, 169, 110, 0.3)",
      "--insight-title-shadow": "0 1px 6px rgba(0,0,0,0.6)",
    },
  },

  fantasy: {
    label: "Fantasy",
    vars: {
      "--insight-bg": "#120d08",
      "--insight-bg-back": "#15100a",
      "--insight-border": "rgba(212, 168, 87, 0.15)",
      "--insight-border-back": "rgba(139, 90, 43, 0.12)",
      "--insight-line-from": "#d4a857",
      "--insight-line-to": "rgba(139, 90, 43, 0.5)",
      "--insight-title-color": "#e8d5a8",
      "--insight-body-color": "#b8a88a",
      "--insight-label-color": "rgba(212, 168, 87, 0.5)",
      "--insight-accent": "#d4a857",
      "--insight-accent-secondary": "#c8956e",
      "--insight-divider-from": "rgba(212, 168, 87, 0.2)",
      "--insight-divider-to": "rgba(139, 90, 43, 0.08)",
      "--insight-glow-1": "rgba(212, 168, 87, 0.06)",
      "--insight-glow-2": "rgba(139, 90, 43, 0.04)",
      "--insight-icon-radius": "50%",
      "--insight-body-style": "italic",
      "--insight-font-title": "'IM Fell English', serif",
      "--insight-font-body": "'Crimson Pro', serif",
      "--insight-font-label": "'Crimson Pro', serif",
      "--insight-dismiss-hover": "#d4a857",
      "--insight-line-glow": "rgba(212, 168, 87, 0.25)",
      "--insight-title-shadow": "0 1px 4px rgba(0,0,0,0.5)",
    },
  },
};

/**
 * Apply a theme's CSS custom properties to a DOM element.
 * @param {HTMLElement} element - The notification container element
 * @param {string} [themeId] - Theme ID. Defaults to the module setting.
 */
export function applyTheme(element, themeId) {
  const id = themeId ?? game.settings.get("insight", "theme");
  const theme = THEMES[id] ?? THEMES.dreadlight;
  for (const [prop, value] of Object.entries(theme.vars)) {
    element.style.setProperty(prop, value);
  }
}

/**
 * Get the current theme ID from settings.
 * @returns {string}
 */
export function getCurrentTheme() {
  return game.settings.get("insight", "theme");
}

/**
 * Get all registered theme IDs.
 * @returns {string[]}
 */
export function getThemeIds() {
  return Object.keys(THEMES);
}

/**
 * Register a custom theme. Called by other modules/systems to add themes.
 * @param {string} id - Unique theme identifier
 * @param {object} config - Theme config with `label` and `vars` properties
 */
export function registerTheme(id, config) {
  if (!config.label || !config.vars) {
    console.error(`Insight | Invalid theme config for "${id}": needs label and vars`);
    return;
  }
  THEMES[id] = config;
  console.log(`Insight | Registered custom theme: ${config.label}`);
}
