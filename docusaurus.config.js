const path = require('path');
const prismic = require('@prismicio/client');
const fetch = require('node-fetch');

const math = require('remark-math');
const katex = require('rehype-katex');

const BASE_URL = '';

module.exports = {
  title: '휴즈 지식저장소',
  tagline: '휴즈의 지식저장소. 컴퓨터 공학, 통계 등 공부한 조각들을 작게 정리해봅니다.',
  url: 'https://wiki.hyeonjae.dev',
  baseUrl: `${BASE_URL}/`,
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/meta/favicon.svg',
  projectName: 'wiki.hyeonjae.dev',
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        // Will be passed to @docusaurus/plugin-content-docs (false to disable).
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          exclude: ['README.md'],
          remarkPlugins: [math],
          rehypePlugins: [[katex, { strict: false }]],
        },
        // Will be passed to @docusaurus/plugin-google-tag-manager.
        googleTagManager: {
          containerId: 'GTM-P6N6HDRM',
        },
        // Will be passed to @docusaurus/theme-classic.
        theme: {
          customCss: [
            require.resolve('./node_modules/modern-normalize/modern-normalize.css'),
            require.resolve('./node_modules/@ionic-internal/ionic-ds/dist/tokens/tokens.css'),
            require.resolve('./src/styles/custom.scss'),
          ],
        },
      },
    ],
  ],
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    metadata: [
      {
        name: 'og:image',
        content: 'https://wiki.hyeonjae.dev/meta/open-graph.png',
      },
      {
        name: 'twitter:image',
        content: 'https://wiki.hyeonjae.dev/meta/open-graph.png',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:domain',
        content: 'wiki.hyeonjae.dev',
      },
      {
        name: 'og:type',
        content: 'website',
      },
      {
        name: 'og:site_name',
        content: '휴즈 지식저장소',
      },
    ],
    colorMode: {
      defaultMode: 'light',
    },
    navbar: {
      hideOnScroll: false,
      logo: {
        alt: 'Site Logo',
        src: `/logos/hughes-wiki-dark.svg`,
        srcDark: `/logos/hughes-wiki-light.svg`,
        href: '/',
        target: '_self',
        width: 171,
        height: 27,
      },
      items: [
        {
          type: 'doc',
          docId: 'cse',
          label: '컴퓨터공학',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'math-stats',
          label: '수학 및 통계',
          position: 'left',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'html',
          position: 'right',
          value: '<div class="separator" aria-hidden></div>',
        },
        {
          href: 'https://www.instagram.com/hyeon.527/',
          position: 'right',
          className: 'icon-link icon-link-mask icon-link-instagram',
          'aria-label': 'Instagram',
          target: '_blank',
        },
        {
          href: 'https://www.linkedin.com/in/hughesgoon/',
          position: 'right',
          className: 'icon-link icon-link-mask icon-link-linkedin',
          'aria-label': 'LinkedIn',
          target: '_blank',
        },
        {
          href: 'https://github.com/hughesgoon',
          position: 'right',
          className: 'icon-link icon-link-mask icon-link-github',
          'aria-label': 'GitHub profile',
          target: '_blank',
        },
      ],
    },
    prism: {
      theme: { plain: {}, styles: [] },
      // https://github.com/FormidableLabs/prism-react-renderer/blob/5a1c93592c6475fb230bfcb8a9666b72b331638b/packages/generate-prism-languages/index.ts#L9-L24
      additionalLanguages: ['shell-session', 'http'],
    },
    algolia: {
      appId: 'ME97UCIO92',
      apiKey: '426a8b4837d1478f6d746f1dbf976a7a',
      indexName: 'wiki.hyeonjae.dev',
      contextualSearch: true,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
  },
  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
          '@components': path.resolve(__dirname, './src/components'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  customFields: {},
  themes: [],
};
