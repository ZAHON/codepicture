'use client';
import { useId } from 'react';
import { LabelAsSpan, SegmentedControl, SegmentedControlItem } from '@/components';
import {
  useProjectPageStore,
  selectExportImageExtension,
  selectSetExportImageExtension,
} from '@project/store';

export function ExportMenuExtensionControl() {
  const controlLabelId = useId();
  const exportImageExtension = useProjectPageStore(selectExportImageExtension);
  const setExportImageExtension = useProjectPageStore(selectSetExportImageExtension);

  return (
    <div className="flex flex-col gap-y-1.5">
      <LabelAsSpan id={controlLabelId} className="pl-1">
        File extension
      </LabelAsSpan>
      <SegmentedControl
        value={exportImageExtension}
        onValueChange={(value) => setExportImageExtension(value as typeof exportImageExtension)}
        aria-labelledby={controlLabelId}
      >
        <SegmentedControlItem value="png">PNG</SegmentedControlItem>
        <SegmentedControlItem value="jpeg">JPEG</SegmentedControlItem>
      </SegmentedControl>
    </div>
  );
}
