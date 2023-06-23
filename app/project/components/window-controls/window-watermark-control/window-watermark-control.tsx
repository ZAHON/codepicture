'use client';
import { useId } from 'react';
import {
  useProjectPageStore,
  selectWindowWatermark,
  selectSetWindowWatermark,
} from '@project/store';
import { Label, SegmentedSwitch } from '@/components';

export function WindowWatermarkControl() {
  const controlId = useId();
  const windowWatermark = useProjectPageStore(selectWindowWatermark);
  const setWindowWatermark = useProjectPageStore(selectSetWindowWatermark);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} className="text-sm md:text-xs">
        Watermark
      </Label>
      <SegmentedSwitch
        inverted
        checked={windowWatermark}
        onCheckedChange={setWindowWatermark}
        id={controlId}
        checkedLabel="Show"
        uncheckedLabel="Hide"
        className="col-span-2 h-9 text-sm md:h-8 md:text-xs"
      />
    </div>
  );
}
