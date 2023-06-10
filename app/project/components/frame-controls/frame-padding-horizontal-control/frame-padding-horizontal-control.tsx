'use client';
import { useId } from 'react';
import {
  useStore,
  selectFramePaddingType,
  selectFramePaddingHorizontal,
  selectSetFramePaddingHorizontal,
} from '@/store';
import { LabelAsSpan, Slider } from '@/components';

export function FramePaddingHorizontalControl() {
  const controlId = useId();
  const framePaddingType = useStore(selectFramePaddingType);
  const framePaddingHorizontal = useStore(selectFramePaddingHorizontal);
  const setFramePaddingHorizontal = useStore(selectSetFramePaddingHorizontal);

  if (framePaddingType !== 'custom') {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-0.5 pl-2">
      <div className="flex h-6 items-center justify-between">
        <LabelAsSpan id={controlId} className="text-sm md:text-xs">
          Padding X
        </LabelAsSpan>
        <span className="cursor-default text-sm md:text-xs">{framePaddingHorizontal}px</span>
      </div>
      <Slider
        value={framePaddingHorizontal}
        onValueChange={setFramePaddingHorizontal}
        thumbLabel="Change frame padding horizontal"
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
