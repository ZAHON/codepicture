'use client';
import {
  useStore,
  selectExportImageName,
  selectExportImageExtension,
  selectExportImageQuality,
  selectExportImageScale,
  selectWindowTabContent,
  selectSetExportImageDialogOpen,
  selectSetExportImageExporting,
} from '@project/store';
import { Button } from '@/components';
import { htmlToImage, notify } from '@/lib';

export function ExportImageConfirmButton() {
  const windowTabContent = useStore(selectWindowTabContent);

  const exportImageName = useStore(selectExportImageName);
  const exportImageExtension = useStore(selectExportImageExtension);
  const exportImageQuality = useStore(selectExportImageQuality);
  const exportImageScale = useStore(selectExportImageScale);

  const setExportImageDialogOpen = useStore(selectSetExportImageDialogOpen);
  const setExportImageExporting = useStore(selectSetExportImageExporting);

  async function handleConfirm() {
    const notificationId = crypto.randomUUID();

    try {
      notify.show({ id: notificationId, type: 'loading', message: 'Exporting image' });

      setExportImageExporting(true);
      setExportImageDialogOpen(false);

      const sandboxFrameElement = document.getElementById('sandbox-frame');

      if (!sandboxFrameElement) {
        throw Error(`Element with id: ${sandboxFrameElement} does not exist!`);
      }

      const imageUrl = await htmlToImage.convert({
        node: sandboxFrameElement,
        extension: exportImageExtension,
        quality: exportImageQuality,
        scale: exportImageScale,
        filter: (node) => {
          if (node.id === 'sandbox-window-tab') return Boolean(windowTabContent);
          if (node.id === 'sandbox-simple-code-editor-textarea') return false;
          return true;
        },
      });

      htmlToImage.download({
        dataUrl: imageUrl,
        extension: exportImageExtension,
        name: exportImageName ? exportImageName : 'codepicture',
      });
    } catch {
      notify.show({
        id: notificationId,
        type: 'error',
        message: 'An error occurred while exporting the image',
      });
    } finally {
      notify.dismiss(notificationId);

      setExportImageExporting(false);
      setExportImageDialogOpen(false);
    }
  }

  return (
    <Button fullWidth onClick={handleConfirm}>
      Confirm
    </Button>
  );
}
