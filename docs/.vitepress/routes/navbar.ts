import type { DefaultTheme } from 'vitepress'
import packageJson from '../../../package.json'

export const routes: DefaultTheme.Config['nav'] = [
  {
    text: 'Docs',
    items: [
      {
        text: 'Getting started',
        link: '/guide/getting-started/introduction',
      },
      {
        text: 'AuthJS guide',
        link: '/guide/authjs/quick-start',
      },
      {
        text: 'Local guide',
        link: '/guide/local/quick-start',
      },
    ],
  },
  {
    text: 'Resources',
    items: [
      {
        text: 'Overview',
        link: '/resources/overview',
      },
      {
        text: 'Upgrade Guides',
        link: '/upgrade',
      },
      {
        text: 'Recipes',
        link: '/recipes/introduction/welcome',
      },
      {
        text: 'Security',
        link: '/resources/security',
      },
      {
        text: 'Error references',
        link: '/resources/error-reference',
      },
    ],
  },
  {
    text: packageJson.version,
    items: [
      {
        text: '0.10.0',
        link: 'https://github.com/sidebase/nuxt-auth/tree/0.10.1/docs',
      },
      {
        text: '0.9.4',
        link: 'https://github.com/sidebase/nuxt-auth/tree/0.9.4/docs',
      },
      {
        text: '0.8.2',
        link: 'https://github.com/sidebase/nuxt-auth/tree/0.8.2/docs',
      },
      {
        text: '0.7.2',
        link: 'https://github.com/sidebase/nuxt-auth/tree/0.7.2/docs/content',
      },
      {
        text: '0.6.7',
        link: 'https://github.com/sidebase/nuxt-auth/tree/0.6.7/docs/content',
      },
    ],
  },
]
