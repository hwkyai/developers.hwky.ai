module.exports = {
  title: "Hawkeye Documentation",
  tagline: "",
  url: "https://developers.hwky.ai",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "hwkyai", // Usually your GitHub org/user name.
  projectName: "developers.hwky.ai", // Usually your repo name.
  themeConfig: {
    gtag: {
      trackingID: 'G-M29VKZ012N',
      anonymizeIP: false,
    },
    navbar: {
      title: "Hawkeye Documentation",
      logo: {
        alt: "Hawkeye Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://gitlab.com/hwkyai",
          label: "GitLab",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
            }
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Forums",
              href: "https://community.hwky.ai",
            },
            {
              label: "Discord",
              href: "https://discord.gg/7kNVaUrezJ",
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/company/hwky",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              href: "https://gitlab.com/hwkyai",
              label: "GitLab",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hawkeye. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/hwkyai/developers.hwky.ai/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/hwkyai/developers.hwky.ai/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
