import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components';
import { Popover, PopoverAnchor, PopoverTrigger, PopoverContent, PopoverClose } from '.';

const meta: Meta<typeof Popover> = {
  title: 'UI/Popover',
  component: Popover,
  args: {
    children: (
      <>
        <PopoverTrigger>
          <Button>Toggle popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 text-sm">
          <p>This is uncontrolled popover, it is opened when button is clicked</p>
        </PopoverContent>
      </>
    ),
    defaultOpen: false,
    modal: false,
  },
  argTypes: {
    children: { control: false },
    open: { control: false },
    onOpenChange: { control: false },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {};

export const WithCloseButton: Story = {
  args: {
    children: (
      <>
        <PopoverTrigger>
          <Button>Toggle popover</Button>
        </PopoverTrigger>
        <PopoverContent className="flex w-64 flex-col gap-y-4 text-sm">
          <div className="flex items-center justify-between">
            <p className="font-medium">Popover title</p>
            <PopoverClose size="sm" />
          </div>
          <p>This is uncontrolled popover, it is opened when button is clicked</p>
        </PopoverContent>
      </>
    ),
  },
};

export const WithCustomAnchor: Story = {
  args: {
    children: (
      <>
        <div className="flex flex-col gap-y-8">
          <PopoverTrigger>
            <Button>Toggle popover</Button>
          </PopoverTrigger>
          <PopoverAnchor>
            <p className="rounded-lg border border-neutral-5 p-4">Custom anchor</p>
          </PopoverAnchor>
        </div>
        <PopoverContent className="w-64 text-sm">
          <p>This is uncontrolled popover, it is opened when button is clicked</p>
        </PopoverContent>
      </>
    ),
  },
};

export const SideTop: Story = {
  args: {
    children: (
      <>
        <PopoverTrigger>
          <Button>Toggle popover</Button>
        </PopoverTrigger>
        <PopoverContent side="top" className="w-64 text-sm">
          <p>This is uncontrolled popover, it is opened when button is clicked</p>
        </PopoverContent>
      </>
    ),
  },
};

export const SideRight: Story = {
  args: {
    children: (
      <>
        <PopoverTrigger>
          <Button>Toggle popover</Button>
        </PopoverTrigger>
        <PopoverContent side="right" className="w-64 text-sm">
          <p>This is uncontrolled popover, it is opened when button is clicked</p>
        </PopoverContent>
      </>
    ),
  },
};

export const SideBottom: Story = {
  args: {
    children: (
      <>
        <PopoverTrigger>
          <Button>Toggle popover</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom" className="w-64 text-sm">
          <p>This is uncontrolled popover, it is opened when button is clicked</p>
        </PopoverContent>
      </>
    ),
  },
};

export const SideLeft: Story = {
  args: {
    children: (
      <>
        <PopoverTrigger>
          <Button>Toggle popover</Button>
        </PopoverTrigger>
        <PopoverContent side="left" className="w-64 text-sm">
          <p>This is uncontrolled popover, it is opened when button is clicked</p>
        </PopoverContent>
      </>
    ),
  },
};
