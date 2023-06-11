'use client';
import { useId } from 'react';
import { useStore, selectFontLetterSpacing, selectSetFontLetterSpacing } from '@/store';
import { LabelAsSpan, Slider } from '@/components';

export function FontLetterSpacingControl() {
  const controlId = useId();
  const fontLetterSpacing = useStore(selectFontLetterSpacing);
  const setFontLetterSpacing = useStore(selectSetFontLetterSpacing);

  return (
    <div className="flex flex-col gap-y-0.5 pl-2">
      <div className="flex h-6 items-center justify-between">
        <LabelAsSpan id={controlId} className="text-sm md:text-xs">
          Letter spacing
        </LabelAsSpan>
        <span className="cursor-default text-sm md:text-xs">{fontLetterSpacing}em</span>
      </div>
      <Slider
        value={fontLetterSpacing}
        onValueChange={setFontLetterSpacing}
        thumbLabel="Change letter spacing"
        aria-labelledby={controlId}
        min={-0.1}
        max={0.1}
        step={0.005}
        className="h-4 md:h-3"
        trackProps={{ className: 'h-[0.1875rem] md:h-0.5' }}
        thumbProps={{ className: 'h-4 w-4 md:h-3 md:w-3' }}
      />
    </div>
  );
}
