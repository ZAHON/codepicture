'use client';
import { useId } from 'react';
import { useStore, selectFontLineHeight, selectSetFontLineHeight } from '@project/store';
import { LabelAsSpan, Slider } from '@/components';

export function FontLineHeightControl() {
  const controlId = useId();
  const fontLineHeight = useStore(selectFontLineHeight);
  const setFontLineHeight = useStore(selectSetFontLineHeight);

  return (
    <div className="flex flex-col gap-y-0.5 pl-2">
      <div className="flex h-6 items-center justify-between">
        <LabelAsSpan id={controlId} className="text-sm md:text-xs">
          Line height
        </LabelAsSpan>
        <span className="cursor-default text-sm md:text-xs">{fontLineHeight}%</span>
      </div>
      <Slider
        value={fontLineHeight}
        onValueChange={setFontLineHeight}
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
