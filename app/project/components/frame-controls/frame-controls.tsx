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
        <FrameVisibleControl />
        <FrameFillControl />
        <FrameOpacityControl />
      </div>
    </div>
  );
}
