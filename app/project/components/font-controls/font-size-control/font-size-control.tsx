'use client';
import { useId } from 'react';
import { useStore, selectFontSize, selectSetFontSize } from '@/store';
import { LabelAsSpan, Slider } from '@/components';

export function FontSizeControl() {
  const controlId = useId();
  const fontSize = useStore(selectFontSize);
  const setFontSize = useStore(selectSetFontSize);

  return (
    <div className="flex flex-col gap-y-0.5 pl-2">
      <div className="flex h-6 items-center justify-between">
        <LabelAsSpan size="sm" id={controlId}>
          Font size
        </LabelAsSpan>
        <span className="cursor-default text-xs">{fontSize}px</span>
      </div>
      <Slider
        size="sm"
        value={fontSize}
        onValueChange={setFontSize}
        thumbLabel="Change font size"
        aria-labelledby={controlId}
        min={10}
        max={24}
        step={1}
      />
    </div>
  );
}
