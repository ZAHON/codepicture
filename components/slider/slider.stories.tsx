import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '.';

const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
  args: {
    size: 'md',
    disabled: false,
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 1,
    thumbLabel: 'Change value',
    name: 'slider',
  },
  argTypes: {
    size: { control: 'select' },
    value: { control: false },
    onValueChange: { control: false },
    onValueCommit: { control: false },
    trackProps: { control: false },
    rangeProps: { control: false },
    thumbProps: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {};

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
