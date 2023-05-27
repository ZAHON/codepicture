import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '.';

const meta: Meta<typeof Loader> = {
  title: 'UI/Loader',
  component: Loader,
  args: {
    size: 'md',
    color: 'primary',
    variant: 'oval',
    speed: 1000,
    label: 'Loading, please wait...',
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select' },
    variant: { control: 'select' },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {};

export const DotsVariant: Story = {
  args: {
    variant: 'dots',
  },
};

export const OvalVariant: Story = {
  args: {
    variant: 'oval',
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

export const CustomSize: Story = {
  args: {
    size: 48,
  },
  argTypes: {
    size: { control: 'number' },
  },
};
