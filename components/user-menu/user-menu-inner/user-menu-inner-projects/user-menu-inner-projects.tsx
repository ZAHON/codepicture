'use client';
import { useRouter } from 'next/navigation';
import { IconLayoutGrid } from '@tabler/icons-react';
import { MenuItem } from '@/components';

export function UserMenuInnerProjects() {
  const router = useRouter();

  return (
    <MenuItem
      icon={<IconLayoutGrid size="1rem" aria-hidden="true" focusable="false" />}
      onSelect={() => router.push('/projects')}
    >
      Projects
    </MenuItem>
  );
}
