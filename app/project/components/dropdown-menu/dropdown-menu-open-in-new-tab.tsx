'use client';
import { IconExternalLink } from '@tabler/icons-react';
import {
  useStore,
  selectOpenInNewTabPrePreparingLink,
  selectOpenInNewTabPrePrepareLink,
} from '@project/store';
import { MenuItem, Loader } from '@/components';

export function DropdownMenuOpenInNewTab() {
  const openInNewTabPrePreparingLink = useStore(selectOpenInNewTabPrePreparingLink);
  const openInNewTabPrePrepareLink = useStore(selectOpenInNewTabPrePrepareLink);

  function getIcon() {
    if (openInNewTabPrePreparingLink) {
      return <Loader />;
    }

    return (
      <IconExternalLink
        aria-hidden="true"
        focusable="false"
        className="h-4 w-4 md:h-[0.875rem] md:w-[0.875rem]"
      />
    );
  }

  return (
    <MenuItem
      disabled={openInNewTabPrePreparingLink}
      icon={getIcon()}
      onSelect={openInNewTabPrePrepareLink}
    >
      {openInNewTabPrePreparingLink ? 'Preparing link...' : 'Open in new tab'}
    </MenuItem>
  );
}
