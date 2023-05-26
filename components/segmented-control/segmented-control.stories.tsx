import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedControl, SegmentedControlItem } from '.';

const meta: Meta<typeof SegmentedControl> = {
  title: 'UI/SegmentedControl',
  component: SegmentedControl,
  args: {
    children: [
      <SegmentedControlItem key="angular" value="angular">
        Angular
      </SegmentedControlItem>,
      <SegmentedControlItem key="react" value="react">
        React
      </SegmentedControlItem>,
      <SegmentedControlItem key="svelte" value="svelte">
        Svelte
      </SegmentedControlItem>,
      <SegmentedControlItem key="vue" value="vue">
        Vue
      </SegmentedControlItem>,
    ],
    size: 'md',
    defaultValue: 'react',
    name: 'segmented-control',
    disabled: false,
    required: false,
    loop: true,
  },
  argTypes: {
    size: { control: 'select' },
    asChild: { control: false },
    value: { control: false },
    onValueChange: { control: false },
    children: { control: false },
    itemsWrapperProps: { control: false },
    indicatorProps: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const Default: Story = {};

export const WithoutValue: Story = {
  args: {
    defaultValue: '',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithDisabledItem: Story = {
  args: {
    children: [
      <SegmentedControlItem key="angular" value="angular">
        Angular
      </SegmentedControlItem>,
      <SegmentedControlItem key="react" value="react">
        React
      </SegmentedControlItem>,
      <SegmentedControlItem key="svelte" value="svelte" disabled>
        Svelte
      </SegmentedControlItem>,
      <SegmentedControlItem key="vue" value="vue">
        Vue
      </SegmentedControlItem>,
    ],
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
