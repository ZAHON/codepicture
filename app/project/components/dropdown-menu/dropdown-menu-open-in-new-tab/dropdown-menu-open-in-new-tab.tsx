'use client';
import { IconExternalLink } from '@tabler/icons-react';
import {
  useProjectPageStore,
  selectOpenInNewTabPrePreparingLink,
  selectOpenInNewTabPrePrepareLink,
} from '@project/store';
import { MenuItem, Loader } from '@/components';

export function DropdownMenuOpenInNewTab() {
  const openInNewTabPrePreparingLink = useProjectPageStore(selectOpenInNewTabPrePreparingLink);
  const openInNewTabPrePrepareLink = useProjectPageStore(selectOpenInNewTabPrePrepareLink);

  function getIcon() {
    if (openInNewTabPrePreparingLink) {
      return <Loader />;
    }

    return <IconExternalLink size="1rem" aria-hidden="true" focusable="false" />;
  }

  function handleSelect() {
    openInNewTabPrePrepareLink();
  }

  return (
    <MenuItem onSelect={handleSelect} disabled={openInNewTabPrePreparingLink} icon={getIcon()}>
      {openInNewTabPrePreparingLink ? 'Preparing link...' : 'Open in new tab'}
    </MenuItem>
  );
}
