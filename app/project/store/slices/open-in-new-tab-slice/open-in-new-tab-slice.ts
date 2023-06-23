import type { CreateOpenInNewTabSlice } from './open-in-new-tab-slice.types';
import { htmlToImage, notify } from '@/lib-client';

export const createOpenInNewTabSlice: CreateOpenInNewTabSlice = (set, get) => ({
  openInNewTabPrePreparingLink: false,

  openInNewTabPrePrepareLink: async () => {
    const notificationId = crypto.randomUUID();

    try {
      const openInNewTabPrePreparingLink = get().openInNewTabPrePreparingLink;

      if (openInNewTabPrePreparingLink) {
        return;
      }

      set(() => ({ openInNewTabPrePreparingLink: true }));

      notify.show({
        id: notificationId,
        type: 'loading',
        message: 'Preparing link',
      });

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

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');

      if (!/(iPhone)|(iPad)|(iPod)/i.test(window.navigator.userAgent)) {
        link.target = '_blank';
      }

      link.href = url;
      document.body.appendChild(link);
      link.click();
      link.remove();

      notify.show({
        id: notificationId,
        type: 'success',
        message: 'Link prepared successfully',
      });
    } catch {
      notify.show({
        id: notificationId,
        type: 'error',
        message: 'An error occurred while preparing link',
      });
    } finally {
      set(() => ({ openInNewTabPrePreparingLink: false }));
    }
  },
});
