'use client';
import {
  useProjectPageStore,
  selectExportImageName,
  selectExportImageExtension,
  selectExportImageQuality,
  selectExportImageScale,
  selectWindowTabContent,
  selectSetExportImageDialogOpen,
  selectSetExportImageExporting,
} from '@project/store';
import { Button } from '@/components';
import { htmlToImage, notify } from '@/lib-client';

export function ExportImageConfirmButton() {
  const windowTabContent = useProjectPageStore(selectWindowTabContent);

  const exportImageName = useProjectPageStore(selectExportImageName);
  const exportImageExtension = useProjectPageStore(selectExportImageExtension);
  const exportImageQuality = useProjectPageStore(selectExportImageQuality);
  const exportImageScale = useProjectPageStore(selectExportImageScale);

  const setExportImageDialogOpen = useProjectPageStore(selectSetExportImageDialogOpen);
  const setExportImageExporting = useProjectPageStore(selectSetExportImageExporting);

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
