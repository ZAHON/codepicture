'use client';
import { useId } from 'react';
import { useStore, selectWindowBorderRadius, selectSetWindowBorderRadius } from '@project/store';
import { LabelAsSpan, Slider } from '@/components';

export function WindowBorderRadiusControl() {
  const controlId = useId();
  const windowBorderRadius = useStore(selectWindowBorderRadius);
  const setWindowBorderRadius = useStore(selectSetWindowBorderRadius);

  return (
    <div className="flex flex-col gap-y-0.5 pl-2">
      <div className="flex h-6 items-center justify-between">
        <LabelAsSpan id={controlId} className="text-sm md:text-xs">
          Border radius
        </LabelAsSpan>
        <span className="cursor-default text-sm md:text-xs">{windowBorderRadius}px</span>
      </div>
      <Slider
        value={windowBorderRadius}
        onValueChange={setWindowBorderRadius}
        thumbLabel="Change window border radius"
        aria-labelledby={controlId}
        min={0}
        max={24}
        step={1}
        className="h-4 md:h-3"
        trackProps={{ className: 'h-[0.1875rem] md:h-0.5' }}
        thumbProps={{ className: 'h-4 w-4 md:h-3 md:w-3' }}
      />
    </div>
  );
}
