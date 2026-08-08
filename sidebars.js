/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "category",
      label: "Introduction",
      items: [
        { type: "doc", id: "introduction/what-is-guidepup" },
        { type: "doc", id: "introduction/why-screen-reader-automation" },
        {
          type: "doc",
          id: "introduction/guidepup-vs-other-accessibility-testing",
        },
        {
          type: "doc",
          id: "introduction/accessibility-testing-gotchas",
        },
        { type: "doc", id: "introduction/what-can-i-test" },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Getting started",
      items: [
        { type: "doc", id: "getting-started/getting-started" },
        { type: "doc", id: "getting-started/real-world-example" },
        { type: "doc", id: "getting-started/ci-cd" },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Screen reader testing",
      items: [
        {
          type: "doc",
          id: "screen-reader-testing/testing-with-real-screen-readers",
        },
        { type: "doc", id: "screen-reader-testing/testing-voiceover" },
        { type: "doc", id: "screen-reader-testing/testing-nvda" },
        { type: "doc", id: "screen-reader-testing/testing-navigation" },
        { type: "doc", id: "screen-reader-testing/testing-announcements" },
        { type: "doc", id: "screen-reader-testing/testing-interactions" },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Virtual Screen Reader",
      items: [
        { type: "doc", id: "virtual-screen-reader/introduction" },
        { type: "doc", id: "virtual-screen-reader/getting-started" },
        {
          type: "doc",
          id: "virtual-screen-reader/using-with-jest-vitest-testing-library",
        },
        { type: "doc", id: "virtual-screen-reader/testing-navigation" },
        { type: "doc", id: "virtual-screen-reader/testing-announcements" },
        { type: "doc", id: "virtual-screen-reader/testing-interactions" },
        { type: "doc", id: "virtual-screen-reader/testing-live-region" },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Setup guides",
      items: [
        { type: "doc", id: "guides/machine-setup" },
        { type: "doc", id: "guides/manual-voiceover-setup" },
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Reference",
      items: [
        { type: "doc", id: "reference/support-matrix" },
        { type: "doc", id: "reference/release-notes" },
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
            { type: "doc", id: "api/class-iscreenreader" },
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
            { type: "doc", id: "api/class-start-options" },
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
            { type: "doc", id: "api/class-virtual-start-options" },
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
