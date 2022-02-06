/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "category",
      label: "Introduction",
      items: [{ type: "doc", id: "intro" }],
      collapsed: false,
    },
  ],
  api: [
    {
      type: "category",
      label: "API Reference",
      items: [
        { type: "doc", id: "api/class-guidepup" },
        {
          type: "category",
          label: "Classes",
          items: [
            { type: "doc", id: "api/class-click-options" },
            { type: "doc", id: "api/class-command-options" },
            { type: "doc", id: "api/class-key-code-command" },
            { type: "doc", id: "api/class-keyboard-command" },
            { type: "doc", id: "api/class-keyboard-options" },
            { type: "doc", id: "api/class-keystroke-command" },
            { type: "doc", id: "api/class-macos-activate" },
            { type: "doc", id: "api/class-macos-applications" },
            { type: "doc", id: "api/class-macos-key-code-command" },
            { type: "doc", id: "api/class-macos-key-codes" },
            { type: "doc", id: "api/class-macos-keyboard-command" },
            { type: "doc", id: "api/class-macos-keystroke-command" },
            { type: "doc", id: "api/class-macos-modifiers" },
            { type: "doc", id: "api/class-macos-quit" },
            { type: "doc", id: "api/class-screenreader-caption" },
            { type: "doc", id: "api/class-screenreader-cursor" },
            { type: "doc", id: "api/class-screenreader-keyboard" },
            { type: "doc", id: "api/class-screenreader-mouse" },
            { type: "doc", id: "api/class-screenreader" },
            { type: "doc", id: "api/class-voiceover-caption" },
            { type: "doc", id: "api/class-voiceover-commander-commands" },
            { type: "doc", id: "api/class-voiceover-commander" },
            { type: "doc", id: "api/class-voiceover-cursor" },
            { type: "doc", id: "api/class-voiceover-key-code-commands" },
            { type: "doc", id: "api/class-voiceover-keyboard" },
            { type: "doc", id: "api/class-voiceover-mouse" },
            { type: "doc", id: "api/class-voiceover" },
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
