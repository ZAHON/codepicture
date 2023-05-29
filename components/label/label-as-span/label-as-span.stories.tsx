import type { Meta, StoryObj } from '@storybook/react';
import { LabelAsSpan } from '.';

const meta: Meta<typeof LabelAsSpan> = {
  title: 'UI/LabelAsSpan',
  component: LabelAsSpan,
  args: {
    children: 'Label',
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
type Story = StoryObj<typeof LabelAsSpan>;

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
