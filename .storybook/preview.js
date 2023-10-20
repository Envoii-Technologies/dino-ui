/** @type { import('@storybook/react').Preview } */

import '../src/global-styles/index.scss';
import React from "react";
import { MemoryRouter } from "react-router";
import { allModes } from "../.storybook/modes";
    
export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/acme']}>
      <Story />
    </MemoryRouter>
  ),
];

const preview = {
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
