'use client';
import { useId } from 'react';
import { useStore, selectFontBolds, selectSetFontBolds } from '@/store';
import { Label, SegmentedSwitch } from '@/components';

export function FontBoldsControl() {
  const controlId = useId();
  const fontBolds = useStore(selectFontBolds);
  const setFontBolds = useStore(selectSetFontBolds);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} className="text-sm md:text-xs">
        Bolds
      </Label>
      <SegmentedSwitch
        inverted
        checked={fontBolds}
        onCheckedChange={setFontBolds}
        id={controlId}
        className="col-span-2 h-9 text-sm md:h-8 md:text-xs"
      />
    </div>
  );
}
