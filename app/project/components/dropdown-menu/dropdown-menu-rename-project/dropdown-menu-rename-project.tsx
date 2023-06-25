'use client';
import { IconPencil } from '@tabler/icons-react';
import { useSession } from 'next-auth/react';
import { MenuGroup, MenuItem, MenuSeparator } from '@/components';

export function DropdownMenuRenameProject() {
  const { data: session } = useSession();

  function handleSelect() {
    console.log('Works!');
  }

  if (!session) {
    return null;
  }

  return (
    <>
      <MenuGroup>
        <MenuItem
          onSelect={handleSelect}
          icon={
            <IconPencil
              aria-hidden="true"
              focusable="false"
              className="h-4 w-4 md:h-[0.875rem] md:w-[0.875rem]"
            />
          }
        >
          Rename project
        </MenuItem>
      </MenuGroup>
      <MenuSeparator />
    </>
  );
}
