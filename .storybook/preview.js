/** @type { import('@storybook/react').Preview } */

import '../src/global-styles/index.scss';
import React from "react";
import { MemoryRouter } from "react-router";
import { allModes } from "../.storybook/modes";
import i18n from './i18n';
import { NotificationProvider } from '../src/components/Notification/NotificationContext';
import { Notification } from '../src/components/Notification/Notification';


export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/acme']}>
      <NotificationProvider>
        <Story />
        <Notification />
      </NotificationProvider>
    </MemoryRouter>
  ),
];

const preview = {
  globals: {
    locale: 'de',
    locales: {
      en: 'English',
      de: 'German',
    },
  },
  parameters: {
    zeplinLink: "https://app.zeplin.io/project/6526958e9e148922c330d7f3",
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewport: {
      viewports: {
        sm: { name: "IPhone", styles: { width: "375px", height: "700px" } },
        md: { name: "Tablet", styles: { width: "768px", height: "900px" } },
        lg: { name: "Desktop", styles: { width: "1280px", height: "900px" } },
      },
    },
    i18n,
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
