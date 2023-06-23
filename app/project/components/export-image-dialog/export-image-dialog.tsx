'use client';
import {
  useProjectPageStore,
  selectExportImageDialogOpen,
  selectSetExportImageDialogOpen,
} from '@project/store';
import { Dialog, DialogPortal, DialogOverlay, DialogContent } from '@/components';
import { ExportImageDialogHeader } from './export-image-dialog-header';
import { ExportImageDialogBody } from './export-image-dialog-body';
import { ExportImageDialogFooter } from './export-image-dialog-footer';

export function ExportImageDialog() {
  const exportImageDialogOpen = useProjectPageStore(selectExportImageDialogOpen);
  const setExportImageDialogOpen = useProjectPageStore(selectSetExportImageDialogOpen);

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
