import type { Meta, StoryObj } from '@storybook/react';
import ProjectPageLayout from './layout';
import ProjectPage from './page';

const meta: Meta<typeof ProjectPage> = {
  title: 'Pages/Project',
  component: ProjectPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <ProjectPageLayout>
        <Story />
      </ProjectPageLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProjectPage>;

export const Page: Story = {};
