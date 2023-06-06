const lightCodeTheme = require("prism-react-renderer/themes/github");
// const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// Original: https://github.com/dracula/visual-studio-code
const accessibleDarkTheme = {
  plain: {
    color: "#F8F8F2",
    backgroundColor: "#282A36",
  },
  styles: [
    {
      types: ["prolog", "constant", "builtin"],
      style: {
        color: "rgb(189, 147, 249)",
      },
    },
    {
      types: ["inserted", "function"],
      style: {
        color: "rgb(80, 250, 123)",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "rgb(255, 85, 85)",
      },
    },
    {
      types: ["changed"],
      style: {
        color: "rgb(255, 184, 108)",
      },
    },
    {
      types: ["punctuation", "symbol"],
      style: {
        color: "rgb(248, 248, 242)",
      },
    },
    {
      types: ["string", "char", "tag", "selector"],
      style: {
        color: "rgb(255, 121, 198)",
      },
    },
    {
      types: ["keyword", "variable"],
      style: {
        color: "rgb(189, 147, 249)",
        fontStyle: "italic",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "#a8b6ed",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "rgb(241, 250, 140)",
      },
    },
  ],
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Guidepup",
  tagline: "Screen reader driver for test automation",
  url: "https://www.guidepup.dev",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "/img/logo.jpg",
  organizationName: "guidepup",
  projectName: "guidepup.dev",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/guidepup/guidepup.dev/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content:
            "Guidepup, screen reader, accessibility, a11y, VoiceOver, NVDA, testing, automation",
        },
      ],
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        title: "Guidepup",
        // logo: {
        //   alt: "Guidepup Logo",
        //   src: "/img/logo.jpg",
        // },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            type: "doc",
            docId: "api/class-guidepup",
            position: "left",
            label: "API",
          },
          {
            href: "https://github.com/guidepup/guidepup",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs/intro",
              },
              {
                label: "API Reference",
                to: "/docs/api/class-guidepup",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/craigmorten",
              },
              {
                label: "GitHub Issues",
                href: "https://github.com/guidepup/guidepup/issues",
              },
            ],
          },
          {
            title: "GitHub",
            items: [
              {
                label: "@guidepup/guidepup",
                href: "https://github.com/guidepup/guidepup",
              },
              {
                label: "@guidepup/playwright",
                href: "https://github.com/guidepup/guidepup-playwright",
              },
              {
                label: "@guidepup/virtual-screen-reader",
                href: "https://github.com/guidepup/virtual-screen-reader",
              },
              {
                label: "@guidepup/setup",
                href: "https://github.com/guidepup/setup",
              },
              {
                label: "guidepup/setup-action",
                href: "https://github.com/guidepup/setup-action",
              },
              {
                label: "guidepup/aria-at-tests",
                href: "https://github.com/guidepup/aria-at-tests",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Craig Morten.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: accessibleDarkTheme,
      },
    }),
};

module.exports = config;
