import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from '.';

const meta: Meta<typeof TextInput> = {
  title: 'UI/TextInput',
  component: TextInput,
  args: {
    variant: 'filled',
    size: 'md',
    placeholder: 'Text Input',
    disabled: false,
    invalid: false,
    required: false,
  },
  argTypes: {
    variant: { control: 'select' },
    size: { control: 'select' },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

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

export const FilledVariant: Story = {
  args: {
    variant: 'filled',
  },
};

export const UnderlinedVariant: Story = {
  args: {
    variant: 'underlined',
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
