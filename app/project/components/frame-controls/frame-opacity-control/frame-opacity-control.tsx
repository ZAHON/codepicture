'use client';
import { useId } from 'react';
import { useMediaQuery } from '@/hooks';
import { useStore, selectFrameVisible, selectFrameOpacity, selectSetFrameOpacity } from '@/store';
import { LabelAsSpan, Slider } from '@/components';

export function FrameOpacityControl() {
  const controlId = useId();
  const matches = useMediaQuery('(min-width: 768px)');
  const frameVisible = useStore(selectFrameVisible);
  const frameOpacity = useStore(selectFrameOpacity);
  const setFrameOpacity = useStore(selectSetFrameOpacity);

  if (!frameVisible) {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-0.5 pl-2">
      <div className="flex h-6 items-center justify-between">
        <LabelAsSpan id={controlId} size={matches ? 'sm' : 'md'}>
          Opacity
        </LabelAsSpan>
        <span className="cursor-default text-sm md:text-xs">{frameOpacity}%</span>
      </div>
      <Slider
        size={matches ? 'sm' : 'md'}
        value={frameOpacity}
        onValueChange={setFrameOpacity}
        thumbLabel="Change frame opacity"
        aria-labelledby={controlId}
        min={0}
        max={100}
        step={1}
      />
    </div>
  );
}
