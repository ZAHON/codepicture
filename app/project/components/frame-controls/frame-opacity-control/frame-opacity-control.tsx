'use client';
import { useId } from 'react';
import { useStore, selectFrameVisible, selectFrameOpacity, selectSetFrameOpacity } from '@/store';
import { LabelAsSpan, Slider } from '@/components';

export function FrameOpacityControl() {
  const controlId = useId();
  const frameVisible = useStore(selectFrameVisible);
  const frameOpacity = useStore(selectFrameOpacity);
  const setFrameOpacity = useStore(selectSetFrameOpacity);

  if (!frameVisible) {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-0.5 pl-2">
      <div className="flex h-6 items-center justify-between">
        <LabelAsSpan id={controlId} className="text-sm md:text-xs">
          Opacity
        </LabelAsSpan>
        <span className="cursor-default text-sm md:text-xs">{frameOpacity}%</span>
      </div>
      <Slider
        value={frameOpacity}
        onValueChange={setFrameOpacity}
        thumbLabel="Change frame opacity"
        aria-labelledby={controlId}
        min={0}
        max={100}
        step={1}
        className="h-4 md:h-3"
        trackProps={{ className: 'h-[0.1875rem] md:h-0.5' }}
        thumbProps={{ className: 'h-4 w-4 md:h-3 md:w-3' }}
      />
    </div>
  );
}
