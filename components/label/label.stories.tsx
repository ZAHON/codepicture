import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '.';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  args: {
    children: 'Label',
    htmlFor: 'input-id',
    size: 'md',
    requiredIndicator: ' *',
    withRequiredIndicator: false,
  },
  argTypes: {
    size: { control: 'select' },
    requiredIndicatorProps: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const WithRequiredIndicator: Story = {
  args: {
    withRequiredIndicator: true,
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
