'use client';
import { useStore, selectSetExportImageDialogOpen } from '@/store';
import { Button } from '@/components';

export function ExportImageCloseButton() {
  const setExportImageDialogOpen = useStore(selectSetExportImageDialogOpen);

  function handleClose() {
    setExportImageDialogOpen(false);
  }

  return (
    <Button color="neutral" fullWidth onClick={handleClose}>
      Close
    </Button>
  );
}
