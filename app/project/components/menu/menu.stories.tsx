import type { Meta, StoryObj } from '@storybook/react';
import { Menu as MenuComponent } from '.';

const meta: Meta<typeof MenuComponent> = {
  title: 'Pages/Project/components',
  component: MenuComponent,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="h-screen">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof MenuComponent>;

export const Menu: Story = {};
