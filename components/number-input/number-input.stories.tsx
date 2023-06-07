import type { Meta, StoryObj } from '@storybook/react';
import { NumberInput } from '.';

const meta: Meta<typeof NumberInput> = {
  title: 'UI/NumberInput',
  component: NumberInput,
  args: {
    size: 'md',
    defaultValue: 10,
    min: 0,
    max: 100,
    step: 1,
    minFractionDigits: 0,
    maxFractionDigits: 0,
    allowMouseWheel: true,
    clampValueOnBlur: true,
    allowOverflow: false,
    disabled: false,
    invalid: false,
    name: 'number-input-name',
  },
  argTypes: {
    size: { control: 'select' },
    value: { control: false },
    onValueChange: { control: false },
    wrapperClassName: { control: false },
    spinButtonClassName: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
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
