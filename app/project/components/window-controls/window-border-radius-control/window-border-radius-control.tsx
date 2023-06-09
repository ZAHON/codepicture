'use client';
import { useId } from 'react';
import { useMediaQuery } from '@/hooks';
import { useStore, selectWindowBorderRadius, selectSetWindowBorderRadius } from '@/store';
import { LabelAsSpan, Slider } from '@/components';

export function WindowBorderRadiusControl() {
  const controlId = useId();
  const matches = useMediaQuery('(min-width: 768px)');
  const windowBorderRadius = useStore(selectWindowBorderRadius);
  const setWindowBorderRadius = useStore(selectSetWindowBorderRadius);

  return (
    <div className="flex flex-col gap-y-0.5 pl-2">
      <div className="flex h-6 items-center justify-between">
        <LabelAsSpan id={controlId} size={matches ? 'sm' : 'md'}>
          Border radius
        </LabelAsSpan>
        <span className="cursor-default text-sm md:text-xs">{windowBorderRadius}px</span>
      </div>
      <Slider
        size={matches ? 'sm' : 'md'}
        value={windowBorderRadius}
        onValueChange={setWindowBorderRadius}
        thumbLabel="Change window border radius"
        aria-labelledby={controlId}
        min={0}
        max={24}
        step={1}
      />
    </div>
  );
}
