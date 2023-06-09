'use client';
import { useId } from 'react';
import { useMediaQuery } from '@/hooks';
import { useStore, selectLineHeight, selectSetLineHeight } from '@/store';
import { LabelAsSpan, Slider } from '@/components';

export function LineHeightControl() {
  const controlId = useId();
  const matches = useMediaQuery('(min-width: 768px)');
  const lineHeight = useStore(selectLineHeight);
  const setLineHeight = useStore(selectSetLineHeight);

  return (
    <div className="flex flex-col gap-y-0.5 pl-2">
      <div className="flex h-6 items-center justify-between">
        <LabelAsSpan id={controlId} size={matches ? 'sm' : 'md'}>
          Line height
        </LabelAsSpan>
        <span className="cursor-default text-sm md:text-xs">{lineHeight}%</span>
      </div>
      <Slider
        size={matches ? 'sm' : 'md'}
        value={lineHeight}
        onValueChange={setLineHeight}
        thumbLabel="Change line height"
        aria-labelledby={controlId}
        min={100}
        max={250}
        step={1}
      />
    </div>
  );
}
