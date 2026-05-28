// module/compose-dialog.mjs — GM compose dialog for sending notifications

import { sendNotification } from "./socket.mjs";

const { HandlebarsApplicationMixin, ApplicationV2 } = foundry.applications.api;

export class InsightComposeDialog extends HandlebarsApplicationMixin(ApplicationV2) {

  static DEFAULT_OPTIONS = {
    id: "insight-compose-dialog",
    classes: ["insight-compose"],
    position: { width: 360, height: "auto" },
    window: {
      title: "INSIGHT.ComposeTitle",
      minimizable: true,
      resizable: false,
    },
    actions: {
      send: InsightComposeDialog.#onSend,
      "browse-image": InsightComposeDialog.#onBrowseImage,
    },
  };

  static PARTS = {
    form: { template: "modules/insight/templates/compose-dialog.hbs" },
  };

  /** @override */
  async _prepareContext(options) {
    const context = await super._prepareContext(options);

    // Get connected recipients: all non-self users.
    // Players appear first, then other GMs (so a GM can whisper to a player
    // who is also serving as a co-GM or GM assistant).
    const gmSuffix = ` ${game.i18n.localize("INSIGHT.ComposeTargetGMSuffix")}`;
    context.players = game.users
      .filter(u => u.active && u.id !== game.user.id)
      .map(u => ({
        id: u.id,
        name: u.isGM ? `${u.name}${gmSuffix}` : u.name,
        isGM: u.isGM,
      }))
      .sort((a, b) => {
        if (a.isGM !== b.isGM) return a.isGM ? 1 : -1;
        return a.name.localeCompare(b.name);
      });

    // Preserve form values between re-renders
    context.sense = this._lastSense ?? "";
    context.title = this._lastTitle ?? "";
    context.body = this._lastBody ?? "";
    context.image = this._lastImage ?? "";
    return context;
  }

  /**
   * Handle Send button click.
   * @param {PointerEvent} event
   * @param {HTMLElement} target
   */
  static #onSend(event, target) {
    const form = this.element.querySelector("form");
    const formData = new FormData(form);

    const title = formData.get("title")?.trim();
    const body = formData.get("body")?.trim();
    const targetUser = formData.get("target");

    if (!title || !body || !targetUser) {
      ui.notifications.warn("Please fill in the target, title, and body fields.");
      return;
    }

    sendNotification({
      target: targetUser,
      title: title,
      body: body,
      sense: formData.get("sense")?.trim() || null,
      image: formData.get("image")?.trim() || null,
    });

    this.close();
  }

  /**
   * Handle image file picker.
   * @param {PointerEvent} event
   * @param {HTMLElement} target
   */
  static async #onBrowseImage(event, target) {
    const FilePickerImpl = foundry.applications.apps.FilePicker.implementation
      ?? foundry.applications.apps.FilePicker;
    const fp = new FilePickerImpl({
      type: "image",
      callback: (path) => {
        const input = this.element.querySelector('[name="image"]');
        input.value = path;
      },
    });
    fp.browse();
  }

}
