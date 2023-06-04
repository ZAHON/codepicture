'use client';
import { useId } from 'react';
import { useStore, selectFrameVisible, selectSetFrameVisible } from '@/store';
import { Label, SegmentedSwitch } from '@/components';

export function FrameVisibleControl() {
  const controlId = useId();
  const frameVisible = useStore(selectFrameVisible);
  const setFrameVisible = useStore(selectSetFrameVisible);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} size="sm">
        Visible
      </Label>
      <SegmentedSwitch
        inverted
        checked={frameVisible}
        onCheckedChange={setFrameVisible}
        id={controlId}
        size="sm"
        className="col-span-2"
      />
    </div>
  );
}
