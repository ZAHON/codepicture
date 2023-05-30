import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '.';

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  args: {
    label: '',
    labelFontSize: 'sm',
  },
  argTypes: {
    labelFontSize: { control: 'select' },
    labelProps: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Label',
  },
};
