import type { Meta, StoryObj } from '@storybook/react';
import { CloseButton } from './close-button';

const meta: Meta<typeof CloseButton> = {
  title: 'UI/CloseButton',
  component: CloseButton,
  args: {
    'aria-label': 'Close',
    size: 'md',
    variant: 'light',
    pill: false,
    disabled: false,
  },
  argTypes: {
    size: { control: 'select' },
    variant: { control: 'select' },
    color: { control: 'select' },
    iconSize: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof CloseButton>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Pill: Story = {
  args: {
    pill: true,
  },
};

export const FilledVariant: Story = {
  args: {
    variant: 'filled',
  },
};

export const LightVariant: Story = {
  args: {
    variant: 'light',
  },
};

export const SubtleVariant: Story = {
  args: {
    variant: 'subtle',
  },
};

export const TransparentVariant: Story = {
  args: {
    variant: 'transparent',
  },
};

export const SmallSize: Story = {
  args: {
    size: 'sm',
  },
};

export const MediumSize: Story = {
  args: {
    size: 'md',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
  },
};

export const WithCustomIconSize: Story = {
  args: {
    iconSize: '14px',
  },
  argTypes: {
    iconSize: { control: 'text' },
  },
};
