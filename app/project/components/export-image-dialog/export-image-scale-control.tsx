'use client';
import { useId } from 'react';
import { LabelAsSpan, SegmentedControl, SegmentedControlItem } from '@/components';
import {
  useProjectPageStore,
  selectExportImageScale,
  selectSetExportImageScale,
} from '@project/store';

export function ExportImageScaleControl() {
  const controlLabelId = useId();
  const exportImageScale = useProjectPageStore(selectExportImageScale);
  const setExportImageScale = useProjectPageStore(selectSetExportImageScale);

  return (
    <div className="flex flex-col gap-y-1.5">
      <LabelAsSpan id={controlLabelId} className="pl-1">
        Scale
      </LabelAsSpan>
      <SegmentedControl
        value={exportImageScale.toString()}
        onValueChange={(value) =>
          setExportImageScale(parseInt(value, 10) as typeof exportImageScale)
        }
        aria-labelledby={controlLabelId}
      >
        <SegmentedControlItem value="1">1</SegmentedControlItem>
        <SegmentedControlItem value="2">2</SegmentedControlItem>
        <SegmentedControlItem value="4">4</SegmentedControlItem>
        <SegmentedControlItem value="8">8</SegmentedControlItem>
        <SegmentedControlItem value="16">16</SegmentedControlItem>
      </SegmentedControl>
    </div>
  );
}
