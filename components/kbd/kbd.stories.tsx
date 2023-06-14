import type { Meta, StoryObj } from '@storybook/react';
import { Kbd } from '.';

const meta: Meta<typeof Kbd> = {
  title: 'UI/Kbd',
  component: Kbd,
  args: {
    children: '⌘',
    fontSize: 'md',
  },
  argTypes: {
    fontSize: { control: 'select' },
  },
};

export default meta;

type Story = StoryObj<typeof Kbd>;

export const Default: Story = {};

export const InheritFontSize: Story = {
  args: {
    fontSize: 'inherit',
  },
};

export const SmallFontSize: Story = {
  args: {
    fontSize: 'sm',
  },
};

export const MediumFontSize: Story = {
  args: {
    fontSize: 'md',
  },
};

export const LargeFontSize: Story = {
  args: {
    fontSize: 'lg',
  },
};
