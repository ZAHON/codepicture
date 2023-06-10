'use client';
import Link from 'next/link';
import { IconBrandGithub } from '@tabler/icons-react';
import { MenuItem } from '@/components';

export function DropdownMenuGithubLink() {
  return (
    <Link target="_blank" rel="noreferrer" href="https://github.com/ZAHON/codepicture">
      <MenuItem
        icon={
          <IconBrandGithub
            aria-hidden="true"
            focusable="false"
            className="h-4 w-4 md:h-[0.875rem] md:w-[0.875rem]"
          />
        }
      >
        GitHub
      </MenuItem>
    </Link>
  );
}
