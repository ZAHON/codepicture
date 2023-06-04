'use client';
import { useId } from 'react';
import { useStore, selectFrameVisible, selectFrameOpacity, selectSetFrameOpacity } from '@/store';
import { LabelAsSpan, Slider } from '@/components';

export function FrameOpacityControl() {
  const controlId = useId();
  const frameVisible = useStore(selectFrameVisible);
  const frameOpacity = useStore(selectFrameOpacity);
  const setFrameOpacity = useStore(selectSetFrameOpacity);

  if (!frameVisible) {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-0.5 pl-2">
      <div className="flex h-6 items-center justify-between">
        <LabelAsSpan size="sm" id={controlId}>
          Opacity
        </LabelAsSpan>
        <span className="cursor-default text-xs">{frameOpacity}%</span>
      </div>
      <Slider
        size="sm"
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
