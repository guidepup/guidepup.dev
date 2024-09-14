/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "category",
      label: "Introduction",
      items: [
        { type: "doc", id: "intro" },
        { type: "doc", id: "example" },
        { type: "doc", id: "virtual" },
        { type: "doc", id: "support" },
        { type: "doc", id: "release" },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Guides",
      items: [
        { type: "doc", id: "guides/automated-environment-setup" },
        { type: "doc", id: "guides/manual-voiceover-setup" },
      ],
      collapsed: false,
    },
  ],
  api: [
    {
      type: "category",
      label: "Guidepup API Reference",
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
            { type: "doc", id: "api/class-nvda-key-code-commands" },
            { type: "doc", id: "api/class-nvda" },
            { type: "doc", id: "api/class-screenreader" },
            { type: "doc", id: "api/class-voiceover-commander-commands" },
            { type: "doc", id: "api/class-voiceover-key-code-commands" },
            { type: "doc", id: "api/class-voiceover" },
            { type: "doc", id: "api/class-windows-activate" },
            { type: "doc", id: "api/class-windows-key-code-command" },
            { type: "doc", id: "api/class-windows-key-codes" },
            { type: "doc", id: "api/class-windows-keystroke-command" },
            { type: "doc", id: "api/class-windows-modifiers" },
            { type: "doc", id: "api/class-windows-quit" },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Guidepup Record API Reference",
      items: [
        {
          type: "doc",
          id: "api/class-guidepup-record",
        },
        {
          type: "category",
          label: "Classes",
          items: [
            { type: "doc", id: "api/class-macos-record" },
            { type: "doc", id: "api/class-windows-record" },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Virtual Screen Reader API Reference",
      items: [
        {
          type: "doc",
          id: "api/class-guidepup-virtual-screen-reader",
        },
        {
          type: "category",
          label: "Classes",
          items: [
            { type: "doc", id: "api/class-virtual-commands" },
            { type: "doc", id: "api/class-virtual" },
            { type: "doc", id: "api/class-start-options" },
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
