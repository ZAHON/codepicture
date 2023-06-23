'use client';
import type { UserMenuInnerProps } from './user-menu-inner.types';
import { useState } from 'react';
import Image from 'next/image';
import { IconUser } from '@tabler/icons-react';
import { Skeleton, IconButton, Menu, MenuTrigger, MenuSeparator } from '@/components';
import { UserMenuInnerContent } from './user-menu-inner-content';
import { UserMenuInnerProjects } from './user-menu-inner-projects';
import { UserMenuInnerLogout } from './user-menu-inner-logout';

export function UserMenuInner(props: UserMenuInnerProps) {
  const { userImage } = props;

  const [open, setOpen] = useState(false);
  const [userImageLoaded, setUserImageLoaded] = useState(false);

  const menuTriggerLabel = `${open ? 'Hide' : 'Show'} user menu`;

  function getUserImage() {
    if (userImage) {
      return (
        <Skeleton visible={!userImageLoaded} fitContent className="h-9 w-9 rounded-full">
          <Image
            onLoad={() => setUserImageLoaded(true)}
            height={36}
            width={36}
            src={userImage}
            alt="User image"
          />
        </Skeleton>
      );
    }

    return <IconUser size="1.25rem" aria-hidden="true" focusable="false" />;
  }

  return (
    <Menu open={open} onOpenChange={setOpen}>
      <MenuTrigger disabled={Boolean(userImage) && !userImageLoaded}>
        <IconButton aria-label={menuTriggerLabel} className="overflow-hidden rounded-full">
          {getUserImage()}
        </IconButton>
      </MenuTrigger>
      <UserMenuInnerContent>
        <UserMenuInnerProjects />
        <MenuSeparator />
        <UserMenuInnerLogout />
      </UserMenuInnerContent>
    </Menu>
  );
}
