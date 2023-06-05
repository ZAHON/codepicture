import { FramePaddingTypeControl } from './frame-padding-type-control';
import { FramePaddingHorizontalControl } from './frame-padding-horizontal-control';
import { FramePaddingVerticalControl } from './frame-padding-vertical-control';
import { FrameVisibleControl } from './frame-visible-control';
import { FrameFillControl } from './frame-fill-control';
import { FrameOpacityControl } from './frame-opacity-control';

export function FrameControls() {
  return (
    <div>
      <div className="flex h-12 items-center">
        <span className="cursor-default text-sm font-medium">Frame</span>
      </div>
      <div className="flex flex-col gap-y-2 py-2">
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
