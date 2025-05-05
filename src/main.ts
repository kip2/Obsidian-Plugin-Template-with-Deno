import { Notice, Plugin, TFile } from "obsidian";

export default class SampleDenoPlugin extends Plugin {
  override async onload() {
    this.addCommand({
      id: "deno-plugin-example",
      name: "Show current file name (Deno plugin test)",
      callback: async () => {
        const file: TFile | null = this.app.workspace.getActiveFile();
        if (file) {
          new Notice(`Current file: ${file.name}`);
        } else {
          new Notice("No file open.");
        }
      },
    });

    new Notice("SampleDenoPlugin loaded");
  }

  override async onunload() {
    new Notice("SampleDenoPlugin unloaded");
  }
}
