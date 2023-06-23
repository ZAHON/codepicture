'use client';
import { IconLogout } from '@tabler/icons-react';
import { signOut } from 'next-auth/react';
import { MenuItem } from '@/components';

export function UserMenuInnerLogout() {
  function handleSignOut() {
    signOut({ callbackUrl: '/' });
  }

  return (
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
  );
}
