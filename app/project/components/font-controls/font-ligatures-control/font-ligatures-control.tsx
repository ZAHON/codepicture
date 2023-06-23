'use client';
import { useId } from 'react';
import { useProjectPageStore, selectFontLigatures, selectSetFontLigatures } from '@project/store';
import { Label, SegmentedSwitch } from '@/components';

export function FontLigaturesControl() {
  const controlId = useId();
  const fontLigatures = useProjectPageStore(selectFontLigatures);
  const setFontLigatures = useProjectPageStore(selectSetFontLigatures);

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
