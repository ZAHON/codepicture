'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IconLogout, IconUser, IconLayoutGrid } from '@tabler/icons-react';
import { useSession, signOut } from 'next-auth/react';
import { useMediaQuery } from '@/hooks';
import {
  IconButton,
  Menu,
  MenuTrigger,
  MenuContent,
  MenuGroup,
  MenuSeparator,
  MenuItem,
} from '@/components';

interface UserMenuInnerProps {
  userImage: string | null | undefined;
}

export function UserMenuInner(props: UserMenuInnerProps) {
  const { userImage } = props;

  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const matches = useMediaQuery('(min-width: 768px)');

  const menuTriggerLabel = `${open ? 'Hide' : 'Show'} user menu`;

  function handleSignOut() {
    signOut({ callbackUrl: '/' });
  }

  function getUserImage() {
    if (userImage) {
      return <Image height={36} width={36} src={userImage} alt="User image" />;
    }

    return <IconUser size="1.25rem" aria-hidden="true" focusable="false" />;
  }

  if (!session) {
    return null;
  }

  return (
    <Menu open={open} onOpenChange={setOpen}>
      <MenuTrigger>
        <IconButton aria-label={menuTriggerLabel} className="overflow-hidden rounded-full">
          {getUserImage()}
        </IconButton>
      </MenuTrigger>
      <MenuContent
        size={matches ? 'sm' : 'md'}
        align="end"
        sideOffset={matches ? 15 : 10}
        className="w-screen rounded-none border-x-0 border-t-0 md:w-auto md:rounded-lg md:border md:border-neutral-5"
      >
        <MenuGroup>
          <MenuItem
            icon={
              <IconLogout
                aria-hidden="true"
                focusable="false"
                className="h-4 w-4 md:h-[0.875rem] md:w-[0.875rem]"
              />
            }
            onSelect={handleSignOut}
          >
            Logout
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuItem
            icon={
              <IconLayoutGrid
                aria-hidden="true"
                focusable="false"
                className="h-4 w-4 md:h-[0.875rem] md:w-[0.875rem]"
              />
            }
            onSelect={() => router.push('/projects')}
          >
            Projects
          </MenuItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  );
}
