import type { Meta, StoryObj } from '@storybook/react';
import ProjectPageLayout from './layout';

const meta: Meta<typeof ProjectPageLayout> = {
  title: 'Pages/Project',
  component: ProjectPageLayout,
  args: {
    children: <></>,
  },
  argTypes: {
    children: { control: false },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ProjectPageLayout>;

export const Layout: Story = {};
