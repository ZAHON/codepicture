import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedSwitch } from '.';

const meta: Meta<typeof SegmentedSwitch> = {
  title: 'UI/SegmentedSwitch',
  component: SegmentedSwitch,
  args: {
    size: 'md',
    uncheckedLabel: 'No',
    checkedLabel: 'Yes',
    defaultChecked: false,
    inverted: false,
    disabled: false,
    required: false,
    name: 'segmented-switch',
    value: 'on',
  },
  argTypes: {
    size: { control: 'select' },
    checked: { control: false },
    onCheckedChange: { control: false },
    labelsWrapperProps: { control: false },
    labelProps: { control: false },
    indicatorProps: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedSwitch>;

export const Default: Story = {};

export const Inverted: Story = {
  args: {
    inverted: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
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
