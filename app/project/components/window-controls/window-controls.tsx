import { WindowHeaderVisibleVontrol } from './window-header-visible-control';
import { WindowControlsTypeControl } from './window-controls-type-control';
import { WindowTabVisibleControl } from './window-tab-visible-control';
import { WindowTabAccentControl } from './window-tab-accent-control';
import { WindowTabIconVisibleControl } from './window-tab-icon-visible-control';
import { WindowReflectionControl } from './window-reflection-control';
import { WindowWatermarkControl } from './window-watermark-control';
import { WindowShadowControl } from './window-shadow-control';
import { WindowBorderRadiusControl } from './window-border-radius-control';

export function WindowControls() {
  return (
    <div>
      <div className="hidden h-12 items-center md:flex">
        <span className="cursor-default text-sm font-medium">Window</span>
      </div>
      <div className="flex flex-col gap-y-4 py-4 md:gap-y-2 md:py-2">
        <WindowHeaderVisibleVontrol />
        <WindowControlsTypeControl />
        <WindowTabVisibleControl />
        <WindowTabAccentControl />
        <WindowTabIconVisibleControl />
        <WindowReflectionControl />
        <WindowWatermarkControl />
        <WindowShadowControl />
        <WindowBorderRadiusControl />
      </div>
    </div>
  );
}
