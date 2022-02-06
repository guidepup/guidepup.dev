const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Guidepup",
  tagline: "Screen-reader driver for automation",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "guidepup",
  projectName: "guidepup.dev",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/guidpup/guidepup.dev/tree/main/",
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
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        title: "Guidepup",
        // logo: {
        //   alt: "Guidepup Logo",
        //   src: "img/logo.svg",
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
                label: "@guidepup/setup",
                href: "https://github.com/guidepup/setup",
              },
              {
                label: "guidepup/setup-action",
                href: "https://github.com/guidepup/setup-action",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Guidepup.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
