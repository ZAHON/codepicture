import type { Meta, StoryObj } from '@storybook/react';
import { BottomMenu as BottomMenuComponent } from '.';

const meta: Meta<typeof BottomMenuComponent> = {
  title: 'Pages/Project/components',
  component: BottomMenuComponent,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
  decorators: [
    (Story) => (
      <div className="flex h-screen flex-col justify-end">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof BottomMenuComponent>;

export const BottomMenu: Story = {};
