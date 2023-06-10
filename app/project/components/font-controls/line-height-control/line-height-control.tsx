'use client';
import { useId } from 'react';
import { useStore, selectLineHeight, selectSetLineHeight } from '@/store';
import { LabelAsSpan, Slider } from '@/components';

export function LineHeightControl() {
  const controlId = useId();
  const lineHeight = useStore(selectLineHeight);
  const setLineHeight = useStore(selectSetLineHeight);

  return (
    <div className="flex flex-col gap-y-0.5 pl-2">
      <div className="flex h-6 items-center justify-between">
        <LabelAsSpan id={controlId} className="text-sm md:text-xs">
          Line height
        </LabelAsSpan>
        <span className="cursor-default text-sm md:text-xs">{lineHeight}%</span>
      </div>
      <Slider
        value={lineHeight}
        onValueChange={setLineHeight}
        thumbLabel="Change line height"
        aria-labelledby={controlId}
        min={100}
        max={250}
        step={1}
        className="h-4 md:h-3"
        trackProps={{ className: 'h-[0.1875rem] md:h-0.5' }}
        thumbProps={{ className: 'h-4 w-4 md:h-3 md:w-3' }}
      />
    </div>
  );
}
