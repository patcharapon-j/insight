// insight.mjs — Insight Module Entry Point
import { registerSettings } from "./module/settings.mjs";

Hooks.once("init", () => {
  console.log("Insight | Initializing module");
  registerSettings();
});

Hooks.once("ready", () => {
  console.log("Insight | Module ready");
});
