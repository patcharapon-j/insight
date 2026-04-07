// insight.mjs — Insight Module Entry Point
import { registerSettings } from "./module/settings.mjs";
import { registerSocket } from "./module/socket.mjs";
import { InsightComposeDialog } from "./module/compose-dialog.mjs";

/** @type {InsightComposeDialog|null} */
let composeDialog = null;

Hooks.once("init", () => {
  console.log("Insight | Initializing module");
  registerSettings();
});

Hooks.once("ready", () => {
  registerSocket();
  console.log("Insight | Module ready");
});

// Add scene control button (GM only)
Hooks.on("getSceneControlButtons", (controls) => {
  if (!game.user.isGM) return;

  const tokenControls = controls.tokens;
  if (!tokenControls) return;

  tokenControls.tools.insight = {
    name: "insight",
    title: "INSIGHT.SceneControl",
    icon: "fas fa-eye",
    order: Object.keys(tokenControls.tools).length,
    button: true,
    visible: true,
    onChange: () => {
      if (!composeDialog) composeDialog = new InsightComposeDialog();
      composeDialog.render(true);
    },
  };
});
