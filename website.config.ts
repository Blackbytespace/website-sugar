import type { TWebsiteConfig } from '@blackbyte/website-common';
import packageJson from './package.json' assert { type: 'json' };

export default {
  posthog: {
    projectApiKey: 'phc_t5yvxkWJDtICl40OBt4QfJmYgsT8CHfC44uNSOmyar3',
  },
  title: 'Sugar',
  description: 'The toolkit that you missed... like a sugar in your coffee!',
  install: 'npm i @blackbyte/sugar',
  getStarted: {
    url: '/#get-started',
  },
  welcome: {
    title: 'Sugar',
    description:
      'The toolkit that you missed...<br />...like <span class="color-accent">a sugar in your coffee!</span>',
    withLove: `Made with <span class="color-accent">♥</span> by Blackbyte`,
  },
  version: packageJson.version,
  license: {
    name: 'MIT',
    url: 'https://github.com/Blackbytespace/sugar/blob/main/LICENSE.md',
  },
  repository: {
    name: 'Blackbyte Sugar',
    url: 'https://github.com/Blackbytespace/sugar',
  },
  og: {
    imageUrl:
      'https://raw.githubusercontent.com/Blackbytespace/sugar/refs/heads/main/assets/blackbyte-sugar-og.png',
  },
  menu: [
    {
      type: 'group',
      label: 'Documentation',
      items: [
        {
          id: 'get-started',
          label: 'Get started',
          description: 'Quick start using @blackbyte/sugar',
          value: 'get-started',
          slug: '/#get-started',
          preventSet: true,
        },
        {
          id: 'issues',
          label: 'Declare an issue',
          description: 'Report a bug or request a feature',
          value: 'issue',
          url: 'https://github.com/Blackbytespace/sugar/issues',
          preventSet: true,
        },
        {
          id: 'repository',
          label: 'GitHub repository',
          description: 'Browse the source code on GitHub',
          value: 'repository',
          url: 'https://github.com/Blackbytespace/sugar',
          preventSet: true,
        },
        {
          id: 'license',
          label: 'License',
          description: 'View the license information',
          value: 'license',
          url: 'https://github.com/Blackbytespace/sugar/blob/main/LICENSE.md',
          preventSet: true,
        },
      ],
    },
  ],
} as TWebsiteConfig;
