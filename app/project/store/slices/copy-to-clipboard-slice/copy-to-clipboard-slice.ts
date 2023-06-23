import type { CreateCopyToClipboardSlice } from './copy-to-clipboard-slice.types';
import { htmlToImage, notify } from '@/lib-client';

export const createCopyToClipboardSlice: CreateCopyToClipboardSlice = (set, get) => ({
  copyToClipboardCopying: false,

  copyToClipboardCopy: async () => {
    const notificationId = crypto.randomUUID();

    try {
      const copyToClipboardCopying = get().copyToClipboardCopying;

      if (copyToClipboardCopying) {
        return;
      }

      set(() => ({ copyToClipboardCopying: true }));

      notify.show({
        id: notificationId,
        type: 'loading',
        message: 'Copying snippet to clipboard',
      });

      if (!navigator || !navigator.clipboard || !navigator.clipboard.write) {
        throw Error('Browser not support the Clipboard API');
      }

      const sandboxFrameElement = document.getElementById('sandbox-frame');

      if (!sandboxFrameElement) {
        throw Error(`Element with id: ${sandboxFrameElement} does not exist!`);
      }

      const windowTabContent = get().windowTabContent;

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
        id: notificationId,
        type: 'success',
        message: 'Snippet copied to clipboard',
      });
    } catch {
      notify.show({
        id: notificationId,
        type: 'error',
        message: 'An error occurred while copying the snippet to clipboard',
      });
    } finally {
      set(() => ({ copyToClipboardCopying: false }));
    }
  },
});
