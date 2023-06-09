'use client';
import { useId } from 'react';
import { useMediaQuery } from '@/hooks';
import {
  useStore,
  selectFramePaddingType,
  selectFramePaddingVertical,
  selectSetFramePaddingVertical,
} from '@/store';
import { LabelAsSpan, Slider } from '@/components';

export function FramePaddingVerticalControl() {
  const controlId = useId();
  const matches = useMediaQuery('(min-width: 768px)');
  const framePaddingType = useStore(selectFramePaddingType);
  const framePaddingVertical = useStore(selectFramePaddingVertical);
  const setFramePaddingVertical = useStore(selectSetFramePaddingVertical);

  if (framePaddingType !== 'custom') {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-0.5 pl-2">
      <div className="flex h-6 items-center justify-between">
        <LabelAsSpan id={controlId} size={matches ? 'sm' : 'md'}>
          Padding Y
        </LabelAsSpan>
        <span className="cursor-default text-sm md:text-xs">{framePaddingVertical}px</span>
      </div>
      <Slider
        size={matches ? 'sm' : 'md'}
        value={framePaddingVertical}
        onValueChange={setFramePaddingVertical}
        thumbLabel="Change frame padding vertical"
        aria-labelledby={controlId}
        min={0}
        max={400}
        step={1}
      />
    </div>
  );
}
