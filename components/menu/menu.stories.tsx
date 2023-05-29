import {
  IconSettings,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
  IconSunHigh,
  IconMoon,
  IconDeviceDesktop,
} from '@tabler/icons-react';
import { Button } from '@/components';
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuTrigger,
} from '.';

const meta = {
  title: 'UI/Menu',
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default = {
  render: () => (
    <Menu>
      <MenuTrigger>
        <Button color="primary">Toggle menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuLabel>Application</MenuLabel>
        <MenuGroup>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Messages</MenuItem>
          <MenuItem>Gallery</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuLabel>Danger zone</MenuLabel>
        <MenuGroup>
          <MenuItem>Transfer my data</MenuItem>
          <MenuItem color="error">Delete my account</MenuItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  ),
};

export const SmallSize = {
  render: () => (
    <Menu>
      <MenuTrigger>
        <Button color="primary">Toggle menu</Button>
      </MenuTrigger>
      <MenuContent size="sm">
        <MenuLabel>Application</MenuLabel>
        <MenuGroup>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Messages</MenuItem>
          <MenuItem>Gallery</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuLabel>Danger zone</MenuLabel>
        <MenuGroup>
          <MenuItem>Transfer my data</MenuItem>
          <MenuItem color="error">Delete my account</MenuItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  ),
};

export const MediumSize = {
  render: () => (
    <Menu>
      <MenuTrigger>
        <Button color="primary">Toggle menu</Button>
      </MenuTrigger>
      <MenuContent size="md">
        <MenuLabel>Application</MenuLabel>
        <MenuGroup>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Messages</MenuItem>
          <MenuItem>Gallery</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuLabel>Danger zone</MenuLabel>
        <MenuGroup>
          <MenuItem>Transfer my data</MenuItem>
          <MenuItem color="error">Delete my account</MenuItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  ),
};

export const LargeSize = {
  render: () => (
    <Menu>
      <MenuTrigger>
        <Button color="primary">Toggle menu</Button>
      </MenuTrigger>
      <MenuContent size="lg">
        <MenuLabel>Application</MenuLabel>
        <MenuGroup>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Messages</MenuItem>
          <MenuItem>Gallery</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuLabel>Danger zone</MenuLabel>
        <MenuGroup>
          <MenuItem>Transfer my data</MenuItem>
          <MenuItem color="error">Delete my account</MenuItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  ),
};

export const WithDisabledItem = {
  render: () => (
    <Menu>
      <MenuTrigger>
        <Button color="primary">Toggle menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuLabel>Application</MenuLabel>
        <MenuGroup>
          <MenuItem>Settings</MenuItem>
          <MenuItem disabled>Messages</MenuItem>
          <MenuItem>Gallery</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuLabel>Danger zone</MenuLabel>
        <MenuGroup>
          <MenuItem>Transfer my data</MenuItem>
          <MenuItem color="error">Delete my account</MenuItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  ),
};

export const ItemsWithIcons = {
  render: () => (
    <Menu>
      <MenuTrigger>
        <Button color="primary">Toggle menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuLabel>Application</MenuLabel>
        <MenuGroup>
          <MenuItem icon={<IconSettings size="0.875rem" />}>Settings</MenuItem>
          <MenuItem icon={<IconMessageCircle size="0.875rem" />}>Messages</MenuItem>
          <MenuItem icon={<IconPhoto size="0.875rem" />}>Gallery</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuLabel>Danger zone</MenuLabel>
        <MenuGroup>
          <MenuItem icon={<IconArrowsLeftRight size="0.875rem" />}>Transfer my data</MenuItem>
          <MenuItem color="error" icon={<IconTrash size="0.875rem" />}>
            Delete my account
          </MenuItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  ),
};

export const MenuRedioGroup = {
  render: () => (
    <Menu>
      <MenuTrigger>
        <Button color="primary">Toggle menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuRadioGroup value="light">
          <MenuRadioItem value="light" icon={<IconSunHigh size="0.875rem" />}>
            Light
          </MenuRadioItem>
          <MenuRadioItem value="dark" icon={<IconMoon size="0.875rem" />}>
            Dark
          </MenuRadioItem>
          <MenuRadioItem value="system" icon={<IconDeviceDesktop size="0.875rem" />}>
            System
          </MenuRadioItem>
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  ),
};

export const MenuRedioGroupWithDisabledItem = {
  render: () => (
    <Menu>
      <MenuTrigger>
        <Button color="primary">Toggle menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuRadioGroup value="light">
          <MenuRadioItem value="light" icon={<IconSunHigh size="0.875rem" />}>
            Light
          </MenuRadioItem>
          <MenuRadioItem value="dark" icon={<IconMoon size="0.875rem" />}>
            Dark
          </MenuRadioItem>
          <MenuRadioItem disabled value="system" icon={<IconDeviceDesktop size="0.875rem" />}>
            System
          </MenuRadioItem>
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  ),
};
