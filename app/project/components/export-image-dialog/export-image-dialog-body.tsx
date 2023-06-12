'use client';
import { DialogBody } from '@/components';
import { ExportMenuFileNameControl } from './export-image-name-control';
import { ExportMenuExtensionControl } from './export-image-extension-control';
import { ExportImageQualityControl } from './export-image-quality-control';
import { ExportImageScaleControl } from './export-image-scale-control';
import { ExportImageOutputResolution } from './export-image-output-resolution';

export function ExportImageDialogBody() {
  return (
    <DialogBody className="flex flex-col gap-y-4">
      <ExportMenuFileNameControl />
      <ExportMenuExtensionControl />
      <ExportImageQualityControl />
      <ExportImageScaleControl />
      <ExportImageOutputResolution />
    </DialogBody>
  );
}
