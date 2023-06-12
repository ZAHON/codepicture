'use client';
import { useState } from 'react';
import { IconClipboard } from '@tabler/icons-react';
import { useStore, selectWindowTabContent } from '@/store';
import { MenuItem, Loader } from '@/components';
import { htmlToImage, notify } from '@/lib';

export function DropdownMenuCopyToClipboard() {
  const [copyingToClipboard, setCopyingToClipboard] = useState(false);
  const windowTabContent = useStore(selectWindowTabContent);

  function getIcon() {
    if (copyingToClipboard) {
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

  async function handleCopyToClipboard() {
    try {
      setCopyingToClipboard(true);

      if (!navigator || !navigator.clipboard || !navigator.clipboard.write) {
        throw Error('Browser not support the Clipboard API');
      }

      const sandboxFrameElement = document.getElementById('sandbox-frame');

      if (!sandboxFrameElement) {
        throw Error(`Element with id: ${sandboxFrameElement} does not exist!`);
      }

      const blob = await htmlToImage.convertToBlob({
        node: sandboxFrameElement,
        filter: (node) => {
          if (node.id === 'sandbox-window-tab') return Boolean(windowTabContent);
          if (node.id === 'sandbox-simple-code-editor-textarea') return false;
          return true;
        },
      });

      if (!blob) {
        throw Error('Blob not exist!');
      }

      navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob }, { presentationStyle: 'attachment' }),
      ]);

      notify.show({
        type: 'success',
        message: 'Snippet copied to clipboard',
      });
    } catch {
      notify.show({
        type: 'error',
        message: 'An error occurred while copying the snippet to clipboard',
      });
    } finally {
      setCopyingToClipboard(false);
    }
  }

  return (
    <MenuItem disabled={copyingToClipboard} icon={getIcon()} onSelect={handleCopyToClipboard}>
      {copyingToClipboard ? 'Copying to clipboard...' : 'Copy to clipboard'}
    </MenuItem>
  );
}
