import type { Meta, StoryObj } from '@storybook/react';
import { IconCirclePlus } from '@tabler/icons-react';
import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  args: {
    children: 'Button',
    size: 'md',
    type: 'button',
    variant: 'filled',
    color: 'primary',
    fullWidth: false,
    disabled: false,
    loading: false,
  },
  argTypes: {
    size: { control: 'select' },
    type: { control: 'select' },
    variant: { control: 'select' },
    color: { control: 'select' },
    icon: { control: false },
    innerProps: { control: false },
    loaderProps: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

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

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const WithIcon: Story = {
  args: {
    icon: <IconCirclePlus size="1rem" aria-hidden="true" focusable="false" />,
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
