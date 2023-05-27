import type { Meta, StoryObj } from '@storybook/react';
import { IconCirclePlus } from '@tabler/icons-react';
import { IconButton } from '.';

const meta: Meta<typeof IconButton> = {
  title: 'UI/IconButton',
  component: IconButton,
  args: {
    size: 'md',
    variant: 'subtle',
    color: 'neutral',
    pill: false,
    disabled: false,
    loading: false,
    'aria-label': 'IconButton test',
    children: <IconCirclePlus size="1rem" aria-hidden="true" focusable="false" />,
  },
  argTypes: {
    size: { control: 'select' },
    variant: { control: 'select' },
    color: { control: 'select' },
    children: { control: 'select' },
    loaderProps: { control: 'select' },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
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

export const SmallSize: Story = {
  args: {
    size: 'sm',
    children: <IconCirclePlus size="0.875rem" aria-hidden="true" focusable="false" />,
  },
};

export const MediumSize: Story = {
  args: {
    size: 'md',
    children: <IconCirclePlus size="1rem" aria-hidden="true" focusable="false" />,
  },
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
    children: <IconCirclePlus size="1.25rem" aria-hidden="true" focusable="false" />,
  },
};
