'use client';
import { useMediaQuery } from '@/hooks';
import { Label } from '@/components';
import { useStore, selectFrameVisible } from '@/store';
import { FrameFillControlPopover } from './frame-fill-control-popover';

export function FrameFillControl() {
  const matches = useMediaQuery('(min-width: 768px)');
  const frameVisible = useStore(selectFrameVisible);

  if (!frameVisible) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor="frame-fill-control-trigger" size={matches ? 'sm' : 'md'}>
        Fill
      </Label>
      <FrameFillControlPopover />
    </div>
  );
}
