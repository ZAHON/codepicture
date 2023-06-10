'use client';
import { IconMenu2 } from '@tabler/icons-react';
import { MenuTrigger, IconButton } from '@/components';

interface DropdownMenuTriggerProps {
  state: boolean;
}

export function DropdownMenuTrigger(props: DropdownMenuTriggerProps) {
  const { state } = props;

  const label = `${state ? 'Close' : 'Open'} dropdown menu`;

  return (
    <MenuTrigger>
      <IconButton aria-label={label} variant="light">
        <IconMenu2 size="1.25rem" stroke={2} aria-hidden="true" focusable="false" />
      </IconButton>
    </MenuTrigger>
  );
}
