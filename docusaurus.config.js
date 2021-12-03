// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'Docusaurus',
  tagline: 'Build optimized websites quickly, focus on your content',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          
        },
      },
    ],
  ],
};
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Veronica Di Giorgio',
  tagline: 'Software Developer • Software Architect • Technology Enthusiast',
  url: 'https://verhyppo.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'verhyppo', // Usually your GitHub org/user name.
  projectName: 'verhyppo.github.io', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/verhyppo/verhyppo.github.io/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Verhyppo Profile',
        logo: {
          alt: 'Verhyppo stilysed image',
          src: 'https://avatars.githubusercontent.com/u/3539384?v=4',
        },
        items: [
          {
            type: 'doc',
            docId: 'portfolio',
            position: 'left',
            label: 'Learn More',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn More',
            items: [
              {
                label: 'Curriculum',
                to: '/docs/curriculum/tldr',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/2071375/verodigiorgio',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/veronicadigiorgio/',
              },
              {
                label: 'Github',
                href: 'https://github.com/verhyppo',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Medium',
                href: 'https://verhyppo.medium.com',
              },
              {
                label: 'DockerHub',
                href: 'https://hub.docker.com/u/verosteam',
              },
              {
                label: 'DockerHub',
                href: 'https://hub.docker.com/u/verhyppo',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. Built with <a href="https://docusaurus.io">Docusaurus</a>. Illustrations by <a href="https://storyset.com/">Storyset</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
