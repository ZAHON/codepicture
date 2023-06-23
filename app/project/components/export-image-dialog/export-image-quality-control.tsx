'use client';
import { useId } from 'react';
import { LabelAsSpan, Slider } from '@/components';
import {
  useProjectPageStore,
  selectExportImageExtension,
  selectExportImageQuality,
  selectSetExportImageQuality,
} from '@project/store';

export function ExportImageQualityControl() {
  const controlLabelId = useId();
  const exportImageExtension = useProjectPageStore(selectExportImageExtension);
  const exportImageQuality = useProjectPageStore(selectExportImageQuality);
  const setExportImageQuality = useProjectPageStore(selectSetExportImageQuality);

  if (exportImageExtension !== 'jpeg') {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-1.5">
      <div className="flex justify-between px-1">
        <LabelAsSpan id={controlLabelId}>Quality</LabelAsSpan>
        <span className="cursor-default text-sm">{exportImageQuality}%</span>
      </div>
      <Slider
        value={exportImageQuality}
        onValueChange={setExportImageQuality}
        min={70}
        max={100}
        step={1}
        aria-labelledby={controlLabelId}
        thumbLabel="Change image quality"
      />
    </div>
  );
}
