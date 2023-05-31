import type { Meta, StoryObj } from '@storybook/react';
import { NotificationsPlayground } from './notifications-playground';
import { Notifications } from '.';

const meta: Meta<typeof NotificationsPlayground> = {
  title: 'UI/Notifications',
  component: NotificationsPlayground,
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <>
        <Notifications />
        <Story />
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NotificationsPlayground>;

export const Playground: Story = {};
