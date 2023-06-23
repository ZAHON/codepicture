'use client';
import { IconClipboard } from '@tabler/icons-react';
import {
  useProjectPageStore,
  selectCopyToClipboardCopying,
  selectCopyToClipboardCopy,
} from '@project/store';
import { MenuItem, Loader } from '@/components';

export function DropdownMenuCopyToClipboard() {
  const copyToClipboardCopying = useProjectPageStore(selectCopyToClipboardCopying);
  const copyToClipboardCopy = useProjectPageStore(selectCopyToClipboardCopy);

  function getIcon() {
    if (copyToClipboardCopying) {
      return <Loader />;
    }

    return <IconClipboard size="1rem" aria-hidden="true" focusable="false" />;
  }

  function handleSelect() {
    copyToClipboardCopy();
  }

  return (
    <MenuItem onSelect={handleSelect} disabled={copyToClipboardCopying} icon={getIcon()}>
      {copyToClipboardCopying ? 'Copying to clipboard...' : 'Copy to clipboard'}
    </MenuItem>
  );
}
