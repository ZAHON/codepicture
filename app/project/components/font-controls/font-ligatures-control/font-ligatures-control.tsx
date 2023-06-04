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
      <Label htmlFor={controlId} size="sm">
        Ligatures
      </Label>
      <SegmentedSwitch
        inverted
        checked={fontLigatures}
        onCheckedChange={setFontLigatures}
        id={controlId}
        size="sm"
        className="col-span-2"
      />
    </div>
  );
}
