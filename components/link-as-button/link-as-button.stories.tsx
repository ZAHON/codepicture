import type { Meta, StoryObj } from '@storybook/react';
import { IconCirclePlus } from '@tabler/icons-react';
import { LinkAsButton } from '.';

const meta: Meta<typeof LinkAsButton> = {
  title: 'UI/LinkAsButton',
  component: LinkAsButton,
  args: {
    children: 'Link',
    href: '#',
    size: 'md',
    variant: 'filled',
    color: 'primary',
    fullWidth: false,
  },
  argTypes: {
    size: { control: 'select' },
    variant: { control: 'select' },
    color: { control: 'select' },
    icon: { control: false },
    className: { control: false },
    as: { control: false },
    replace: { control: false },
    scroll: { control: false },
    shallow: { control: false },
    passHref: { control: false },
    prefetch: { control: false },
    locale: { control: false },
    legacyBehavior: { control: false },
    onMouseEnter: { control: false },
    onTouchStart: { control: false },
    onClick: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof LinkAsButton>;

export const Default: Story = {};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const WithIcon: Story = {
  args: {
    icon: <IconCirclePlus size="1rem" aria-hidden="true" focusable="false" />,
  },
};

export const FilledVariant: Story = {
  args: {
    variant: 'filled',
  },
};

export const LightVariant: Story = {
  args: {
    variant: 'light',
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
