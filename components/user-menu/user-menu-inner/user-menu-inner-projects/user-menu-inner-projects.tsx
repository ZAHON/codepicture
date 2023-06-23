'use client';
import { useRouter } from 'next/navigation';
import { IconLayoutGrid } from '@tabler/icons-react';
import { MenuItem } from '@/components';

export function UserMenuInnerProjects() {
  const router = useRouter();

  return (
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
  );
}
