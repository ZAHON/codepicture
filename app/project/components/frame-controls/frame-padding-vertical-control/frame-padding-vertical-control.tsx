'use client';
import { useId } from 'react';
import {
  useStore,
  selectFramePaddingType,
  selectFramePaddingVertical,
  selectSetFramePaddingVertical,
} from '@project/store';
import { LabelAsSpan, Slider } from '@/components';

export function FramePaddingVerticalControl() {
  const controlId = useId();
  const framePaddingType = useStore(selectFramePaddingType);
  const framePaddingVertical = useStore(selectFramePaddingVertical);
  const setFramePaddingVertical = useStore(selectSetFramePaddingVertical);

  if (framePaddingType !== 'custom') {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-0.5 pl-2">
      <div className="flex h-6 items-center justify-between">
        <LabelAsSpan id={controlId} className="text-sm md:text-xs">
          Padding Y
        </LabelAsSpan>
        <span className="cursor-default text-sm md:text-xs">{framePaddingVertical}px</span>
      </div>
      <Slider
        value={framePaddingVertical}
        onValueChange={setFramePaddingVertical}
        thumbLabel="Change frame padding vertical"
        aria-labelledby={controlId}
        min={0}
        max={400}
        step={1}
        className="h-4 md:h-3"
        trackProps={{ className: 'h-[0.1875rem] md:h-0.5' }}
        thumbProps={{ className: 'h-4 w-4 md:h-3 md:w-3' }}
      />
    </div>
  );
}
