'use client';
import { useStore, selectExportImageDialogOpen, selectSetExportImageDialogOpen } from '@/store';
import { Dialog, DialogPortal, DialogOverlay, DialogContent } from '@/components';
import { ExportImageDialogHeader } from './export-image-dialog-header';
import { ExportImageDialogBody } from './export-image-dialog-body';
import { ExportImageDialogFooter } from './export-image-dialog-footer';

export function ExportImageDialog() {
  const exportImageDialogOpen = useStore(selectExportImageDialogOpen);
  const setExportImageDialogOpen = useStore(selectSetExportImageDialogOpen);

  return (
    <Dialog open={exportImageDialogOpen} onOpenChange={setExportImageDialogOpen}>
      <DialogPortal>
        <DialogOverlay blur />
        <DialogContent>
          <ExportImageDialogHeader />
          <ExportImageDialogBody />
          <ExportImageDialogFooter />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
