'use client';
import { useId } from 'react';
import { useMediaQuery } from '@/hooks';
import { useStore, selectLetterSpacing, selectSetLetterSpacing } from '@/store';
import { LabelAsSpan, Slider } from '@/components';

export function LetterSpacingControl() {
  const controlId = useId();
  const matches = useMediaQuery('(min-width: 768px)');
  const letterSpacing = useStore(selectLetterSpacing);
  const setLetterSpacing = useStore(selectSetLetterSpacing);

  return (
    <div className="flex flex-col gap-y-0.5 pl-2">
      <div className="flex h-6 items-center justify-between">
        <LabelAsSpan id={controlId} size={matches ? 'sm' : 'md'}>
          Letter spacing
        </LabelAsSpan>
        <span className="cursor-default text-sm md:text-xs">{letterSpacing}em</span>
      </div>
      <Slider
        size={matches ? 'sm' : 'md'}
        value={letterSpacing}
        onValueChange={setLetterSpacing}
        thumbLabel="Change letter spacing"
        aria-labelledby={controlId}
        min={-0.1}
        max={0.1}
        step={0.005}
      />
    </div>
  );
}
