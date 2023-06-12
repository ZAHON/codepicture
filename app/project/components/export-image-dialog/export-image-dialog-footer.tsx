'use client';
import { DialogFooter } from '@/components';
import { ExportImageCloseButton } from './export-image-close-button';
import { ExportImageConfirmButton } from './export-image-confirm-button';

export function ExportImageDialogFooter() {
  return (
    <DialogFooter className="justify-start py-6">
      <ExportImageCloseButton />
      <ExportImageConfirmButton />
    </DialogFooter>
  );
}
