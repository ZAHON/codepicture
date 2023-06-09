'use client';
import { useId } from 'react';
import { useProjectPageStore, selectFontItalics, selectSetFontItalics } from '@project/store';
import { Label, SegmentedSwitch } from '@/components';

export function FontItalicsControl() {
  const controlId = useId();
  const fontItalics = useProjectPageStore(selectFontItalics);
  const setFontItalics = useProjectPageStore(selectSetFontItalics);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} className="text-sm md:text-xs">
        Italics
      </Label>
      <SegmentedSwitch
        inverted
        checked={fontItalics}
        onCheckedChange={setFontItalics}
        id={controlId}
        className="col-span-2 h-9 text-sm md:h-8 md:text-xs"
      />
    </div>
  );
}
