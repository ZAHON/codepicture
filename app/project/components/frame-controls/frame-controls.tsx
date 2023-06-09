import { FramePaddingTypeControl } from './frame-padding-type-control';
import { FramePaddingHorizontalControl } from './frame-padding-horizontal-control';
import { FramePaddingVerticalControl } from './frame-padding-vertical-control';
import { FrameVisibleControl } from './frame-visible-control';
import { FrameFillControl } from './frame-fill-control';
import { FrameOpacityControl } from './frame-opacity-control';

export function FrameControls() {
  return (
    <div>
      <div className="hidden h-12 items-center md:flex">
        <span className="cursor-default text-sm font-medium">Frame</span>
      </div>
      <div className="flex flex-col gap-y-4 py-4 md:gap-y-2 md:py-2">
        <FramePaddingTypeControl />
        <FramePaddingHorizontalControl />
        <FramePaddingVerticalControl />
        <FrameVisibleControl />
        <FrameFillControl />
        <FrameOpacityControl />
      </div>
    </div>
  );
}
