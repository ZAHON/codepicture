'use client';
import { useId } from 'react';
import { useProjectPageStore, selectFontSize, selectSetFontSize } from '@project/store';
import { LabelAsSpan, Slider } from '@/components';

export function FontSizeControl() {
  const controlId = useId();
  const fontSize = useProjectPageStore(selectFontSize);
  const setFontSize = useProjectPageStore(selectSetFontSize);

  return (
    <div className="flex flex-col gap-y-0.5 pl-2">
      <div className="flex h-6 items-center justify-between">
        <LabelAsSpan id={controlId} className="text-sm md:text-xs">
          Font size
        </LabelAsSpan>
        <span className="cursor-default text-sm md:text-xs">{fontSize}px</span>
      </div>
      <Slider
        value={fontSize}
        onValueChange={setFontSize}
        thumbLabel="Change font size"
        aria-labelledby={controlId}
        min={10}
        max={24}
        step={1}
        className="h-4 md:h-3"
        trackProps={{ className: 'h-[0.1875rem] md:h-0.5' }}
        thumbProps={{ className: 'h-4 w-4 md:h-3 md:w-3' }}
      />
    </div>
  );
}
