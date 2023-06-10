'use client';
import { useId } from 'react';
import { useStore, selectItalics, selectSetItalics } from '@/store';
import { Label, SegmentedSwitch } from '@/components';

export function ItalicsControl() {
  const controlId = useId();
  const italics = useStore(selectItalics);
  const setItalics = useStore(selectSetItalics);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} className="text-sm md:text-xs">
        Italics
      </Label>
      <SegmentedSwitch
        inverted
        checked={italics}
        onCheckedChange={setItalics}
        id={controlId}
        className="col-span-2 h-9 text-sm md:h-8 md:text-xs"
      />
    </div>
  );
}
