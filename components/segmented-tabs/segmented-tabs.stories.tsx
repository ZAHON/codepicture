import type { Meta, StoryObj } from '@storybook/react';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { SegmentedTabs, SegmentedTabsList, SegmentedTabsTrigger, SegmentedTabsContent } from '.';

const meta: Meta<typeof SegmentedTabs> = {
  title: 'UI/SegmentedTabs',
  component: SegmentedTabs,
  args: {
    defaultValue: 'gallery',
    activationMode: 'automatic',
    children: (
      <>
        <SegmentedTabsList>
          <SegmentedTabsTrigger value="gallery">Gallery</SegmentedTabsTrigger>
          <SegmentedTabsTrigger value="messages">Messages</SegmentedTabsTrigger>
          <SegmentedTabsTrigger value="settings">Settings</SegmentedTabsTrigger>
        </SegmentedTabsList>
        <SegmentedTabsContent value="gallery">Gallery tab content</SegmentedTabsContent>
        <SegmentedTabsContent value="messages">Messages tab content</SegmentedTabsContent>
        <SegmentedTabsContent value="settings">Settings tab content</SegmentedTabsContent>
      </>
    ),
  },
  argTypes: {
    activationMode: { control: 'select' },
    children: { control: false },
    value: { control: false },
    onValueChange: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof SegmentedTabs>;

export const Default: Story = {};

export const WithDisabledTrigger: Story = {
  args: {
    children: (
      <>
        <SegmentedTabsList>
          <SegmentedTabsTrigger value="gallery">Gallery</SegmentedTabsTrigger>
          <SegmentedTabsTrigger disabled value="messages">
            Messages
          </SegmentedTabsTrigger>
          <SegmentedTabsTrigger value="settings">Settings</SegmentedTabsTrigger>
        </SegmentedTabsList>
        <SegmentedTabsContent value="gallery">Gallery tab content</SegmentedTabsContent>
        <SegmentedTabsContent value="messages">Messages tab content</SegmentedTabsContent>
        <SegmentedTabsContent value="settings">Settings tab content</SegmentedTabsContent>
      </>
    ),
  },
};

export const WithTriggersWithIcon: Story = {
  args: {
    children: (
      <>
        <SegmentedTabsList>
          <SegmentedTabsTrigger
            value="gallery"
            icon={<IconPhoto size="1rem" aria-hidden="true" focusable="false" />}
          >
            Gallery
          </SegmentedTabsTrigger>
          <SegmentedTabsTrigger
            value="messages"
            icon={<IconMessageCircle size="1rem" aria-hidden="true" focusable="false" />}
          >
            Messages
          </SegmentedTabsTrigger>
          <SegmentedTabsTrigger
            value="settings"
            icon={<IconSettings size="1rem" aria-hidden="true" focusable="false" />}
          >
            Settings
          </SegmentedTabsTrigger>
        </SegmentedTabsList>
        <SegmentedTabsContent value="gallery">Gallery tab content</SegmentedTabsContent>
        <SegmentedTabsContent value="messages">Messages tab content</SegmentedTabsContent>
        <SegmentedTabsContent value="settings">Settings tab content</SegmentedTabsContent>
      </>
    ),
  },
};

export const SmallSize: Story = {
  args: {
    children: (
      <>
        <SegmentedTabsList size="sm">
          <SegmentedTabsTrigger value="gallery">Gallery</SegmentedTabsTrigger>
          <SegmentedTabsTrigger value="messages">Messages</SegmentedTabsTrigger>
          <SegmentedTabsTrigger value="settings">Settings</SegmentedTabsTrigger>
        </SegmentedTabsList>
        <SegmentedTabsContent value="gallery">Gallery tab content</SegmentedTabsContent>
        <SegmentedTabsContent value="messages">Messages tab content</SegmentedTabsContent>
        <SegmentedTabsContent value="settings">Settings tab content</SegmentedTabsContent>
      </>
    ),
  },
};

export const MediumSize: Story = {
  args: {
    children: (
      <>
        <SegmentedTabsList size="md">
          <SegmentedTabsTrigger value="gallery">Gallery</SegmentedTabsTrigger>
          <SegmentedTabsTrigger value="messages">Messages</SegmentedTabsTrigger>
          <SegmentedTabsTrigger value="settings">Settings</SegmentedTabsTrigger>
        </SegmentedTabsList>
        <SegmentedTabsContent value="gallery">Gallery tab content</SegmentedTabsContent>
        <SegmentedTabsContent value="messages">Messages tab content</SegmentedTabsContent>
        <SegmentedTabsContent value="settings">Settings tab content</SegmentedTabsContent>
      </>
    ),
  },
};

export const LargeSize: Story = {
  args: {
    children: (
      <>
        <SegmentedTabsList size="lg">
          <SegmentedTabsTrigger value="gallery">Gallery</SegmentedTabsTrigger>
          <SegmentedTabsTrigger value="messages">Messages</SegmentedTabsTrigger>
          <SegmentedTabsTrigger value="settings">Settings</SegmentedTabsTrigger>
        </SegmentedTabsList>
        <SegmentedTabsContent value="gallery">Gallery tab content</SegmentedTabsContent>
        <SegmentedTabsContent value="messages">Messages tab content</SegmentedTabsContent>
        <SegmentedTabsContent value="settings">Settings tab content</SegmentedTabsContent>
      </>
    ),
  },
};
