'use client';
import { useProjectPageStore, selectSetExportImageDialogOpen } from '@project/store';
import { Button } from '@/components';

export function ExportImageCloseButton() {
  const setExportImageDialogOpen = useProjectPageStore(selectSetExportImageDialogOpen);

  function handleClose() {
    setExportImageDialogOpen(false);
  }

  return (
    <Button color="neutral" fullWidth onClick={handleClose}>
      Close
    </Button>
  );
}
