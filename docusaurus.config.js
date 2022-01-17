/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: 'Hughes\'s wiki',
  tagline: '이런저런 지식을 공유합니다',
  url: 'https://wiki.hyeonjae.dev',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  organizationName: 'hughesgoon',
  projectName: 'wiki.hyeonjae.dev',
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Material+Icons',
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    image: 'img/hughes-wiki.png',
    metadata: [
      {
        name: 'lang',
        content: 'ko'
      },
    ],
    algolia: {
      apiKey: '9365aca0b4c9abdaa04efd6f17b8a171',
      indexName: 'prod_wiki',
      contextualSearch: true,
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Hughes Wiki Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        { href: 'https://hyeonjae.dev', label: 'Blog', position: 'right' },
      ],
    },
    footer: {
      links: [
        {
          title: 'WIKI',
          items: [
            {
              label: 'Github(위키)',
              href: 'https://github.com/hughesgoon/wiki.hyeonjae.dev',
            },
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io',
            },
          ],
        },
      ],
      logo: {
        alt: 'Hughes\'s page Logo',
        src: 'img/hughes_logo.svg',
        href: 'https://hyeonjae.dev',
      },
      copyright: `© ${new Date().getFullYear()} Hughes's Wiki. Built with Docusaurus.`,
    },
    socials: [
      {
        url: 'https://www.github.com/hughesgoon/',
        backgroundColor: '#2C3850',
      },
      {
        url: 'https://www.facebook.com/guswo0527/',
        backgroundColor: '#BAC6DE',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      switchConfig: {
        darkIcon: 'light_mode',

        darkIconStyle: {
          fontFamily: 'Material Icons',
        },

        lightIcon: 'dark_mode',

        lightIconStyle: {
          fontFamily: 'Material Icons',
        },
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      },
    ],
  ],
};
