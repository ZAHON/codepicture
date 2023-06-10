'use client';
import { useId } from 'react';
import { useStore, selectFontLigatures, selectSetFontLigatures } from '@/store';
import { Label, SegmentedSwitch } from '@/components';

export function FontLigaturesControl() {
  const controlId = useId();
  const fontLigatures = useStore(selectFontLigatures);
  const setFontLigatures = useStore(selectSetFontLigatures);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} className="text-sm md:text-xs">
        Ligatures
      </Label>
      <SegmentedSwitch
        inverted
        checked={fontLigatures}
        onCheckedChange={setFontLigatures}
        id={controlId}
        className="col-span-2 h-9 text-sm md:h-8 md:text-xs"
      />
    </div>
  );
}
