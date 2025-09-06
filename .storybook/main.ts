import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    './**/*.mdx',
    './**/*.stories.@(js|jsx|ts|tsx)',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;