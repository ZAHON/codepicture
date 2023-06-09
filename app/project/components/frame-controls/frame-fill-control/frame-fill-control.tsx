'use client';
import { Label } from '@/components';
import { useProjectPageStore, selectFrameVisible } from '@project/store';
import { FrameFillControlPopover } from './frame-fill-control-popover';

export function FrameFillControl() {
  const frameVisible = useProjectPageStore(selectFrameVisible);

  if (!frameVisible) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor="frame-fill-control-trigger" className="text-sm md:text-xs">
        Fill
      </Label>
      <FrameFillControlPopover />
    </div>
  );
}
