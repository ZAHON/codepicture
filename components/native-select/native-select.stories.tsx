import type { Meta, StoryObj } from '@storybook/react';
import { NativeSelect } from '.';

const meta: Meta<typeof NativeSelect> = {
  title: 'UI/NativeSelect',
  component: NativeSelect,
  args: {
    size: 'md',
    placeholder: '',
    disabled: false,
    invalid: false,
    required: false,
    children: (
      <>
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="svelte">Svelte</option>
        <option value="vue">Vue</option>
      </>
    ),
  },
  argTypes: {
    size: { control: 'select' },
    children: { control: false },
    wrapperProps: { control: 'select' },
    rightSectionWrapperProps: { control: 'select' },
    iconProps: { control: 'select' },
  },
};

export default meta;
type Story = StoryObj<typeof NativeSelect>;

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

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Select your favorite framework/library',
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
