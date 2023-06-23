'use client';
import Link from 'next/link';
import { IconBrandGithub } from '@tabler/icons-react';
import { MenuItem } from '@/components';

export function DropdownMenuGithubLink() {
  return (
    <Link target="_blank" rel="noreferrer" href="https://github.com/ZAHON/codepicture">
      <MenuItem icon={<IconBrandGithub size="1rem" aria-hidden="true" focusable="false" />}>
        GitHub
      </MenuItem>
    </Link>
  );
}
