import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from '.';

const meta: Meta<typeof Notification> = {
  title: 'UI/Notification',
  component: Notification,
  args: {
    type: 'info',
    message: 'You are now obligated to give a star to CodePicture project on GitHub',
    title: 'We notify you that',
    fontSize: 'md',
    withBorder: true,
    withCloseButton: true,
  },
  argTypes: {
    type: { control: 'select' },
    fontSize: { control: 'select' },
    onClose: { control: false },
    bodyProps: { control: false },
    titleProps: { control: false },
    messageProps: { control: false },
    closeButtonProps: { control: false },
    loaderProps: { control: false },
    iconProps: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {};

export const WithOutTitle: Story = {
  args: {
    title: '',
  },
};

export const InfoType: Story = {
  args: {
    type: 'info',
  },
};

export const SuccessType: Story = {
  args: {
    type: 'success',
  },
};

export const WarningType: Story = {
  args: {
    type: 'warning',
  },
};

export const ErrorType: Story = {
  args: {
    type: 'error',
  },
};

export const LoadingType: Story = {
  args: {
    type: 'loading',
  },
};
