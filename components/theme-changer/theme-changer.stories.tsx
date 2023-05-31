import type { Meta } from '@storybook/react';
import { ThemeProvider } from 'next-themes';
import { ThemeChanger } from '.';

const meta: Meta = {
  title: 'UI/ThemeChanger',
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <ThemeProvider attribute="class">
        <div className="flex justify-center">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;

export const Default = {
  render: () => <ThemeChanger />,
};
