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

    return (
      <IconClipboard
        aria-hidden="true"
        focusable="false"
        className="h-4 w-4 md:h-[0.875rem] md:w-[0.875rem]"
      />
    );
  }

  return (
    <MenuItem disabled={copyToClipboardCopying} icon={getIcon()} onSelect={copyToClipboardCopy}>
      {copyToClipboardCopying ? 'Copying to clipboard...' : 'Copy to clipboard'}
    </MenuItem>
  );
}
