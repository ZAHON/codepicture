import type { Meta, StoryObj } from '@storybook/react';
import { Header as HeaderComponent } from '.';

const meta: Meta<typeof Header> = {
  title: 'Pages/Project/components',
  component: HeaderComponent,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof HeaderComponent>;

export const Header: Story = {};
