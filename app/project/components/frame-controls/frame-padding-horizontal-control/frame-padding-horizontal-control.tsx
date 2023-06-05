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
        <LabelAsSpan size="sm" id={controlId}>
          Padding X
        </LabelAsSpan>
        <span className="cursor-default text-xs">{framePaddingHorizontal}px</span>
      </div>
      <Slider
        size="sm"
        value={framePaddingHorizontal}
        onValueChange={setFramePaddingHorizontal}
        thumbLabel="Change frame padding horizontal"
        aria-labelledby={controlId}
        min={0}
        max={400}
        step={1}
      />
    </div>
  );
}
