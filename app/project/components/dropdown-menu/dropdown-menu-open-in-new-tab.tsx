'use client';
import { useState } from 'react';
import { IconExternalLink } from '@tabler/icons-react';
import { useStore, selectWindowTabContent } from '@project/store';
import { MenuItem, Loader } from '@/components';
import { htmlToImage, notify } from '@/lib';

export function DropdownMenuOpenInNewTab() {
  const [preparatigLink, setPreparatigLink] = useState(false);
  const windowTabContent = useStore(selectWindowTabContent);

  function getIcon() {
    if (preparatigLink) {
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

  async function handleOpenInNewTab() {
    try {
      setPreparatigLink(true);

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

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');

      if (!/(iPhone)|(iPad)|(iPod)/i.test(window.navigator.userAgent)) {
        link.target = '_blank';
      }

      link.href = url;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch {
      notify.show({ type: 'error', message: 'An error occurred while preparing the link' });
    } finally {
      setPreparatigLink(false);
    }
  }

  return (
    <MenuItem disabled={preparatigLink} icon={getIcon()} onSelect={handleOpenInNewTab}>
      {preparatigLink ? 'Preparing link...' : 'Open in new tab'}
    </MenuItem>
  );
}
