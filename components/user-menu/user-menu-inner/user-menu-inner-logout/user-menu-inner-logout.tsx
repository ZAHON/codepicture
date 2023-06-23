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
      icon={<IconLogout size="1rem" aria-hidden="true" focusable="false" />}
      onSelect={handleSignOut}
    >
      Logout
    </MenuItem>
  );
}
