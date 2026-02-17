import React from 'react';
import type { Preview } from '@storybook/react';
import type { Decorator } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { ConfigProvider, App as AntApp, theme } from 'antd';
import { generateAntdTheme } from '../src/formats/antd-theme-config';
import 'antd/dist/reset.css';
import '../src/styles/tokens.css';
import '../src/styles/accessibility.css';

const lightThemeConfig = generateAntdTheme('light');
const darkThemeConfig = {
  ...generateAntdTheme('dark'),
  algorithm: theme.darkAlgorithm,
};

const withAntdTheme: Decorator = (Story, context) => {
  const isDark = context.globals?.theme === 'dark';
  return (
    <ConfigProvider theme={isDark ? darkThemeConfig : lightThemeConfig}>
      <AntApp>
        <div style={{ padding: 16 }}>
          <Story />
        </div>
      </AntApp>
    </ConfigProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withAntdTheme,
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
  ],
};

export default preview;
