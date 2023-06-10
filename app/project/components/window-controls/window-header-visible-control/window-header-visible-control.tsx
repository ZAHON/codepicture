'use client';
import { useId } from 'react';
import { useStore, selectWindowHeaderVisible, selectSetWindowHeaderVisible } from '@/store';
import { Label, SegmentedSwitch } from '@/components';

export function WindowHeaderVisibleVontrol() {
  const controlId = useId();
  const windowHeaderVisible = useStore(selectWindowHeaderVisible);
  const setWindowHeaderVisible = useStore(selectSetWindowHeaderVisible);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} className="text-sm md:text-xs">
        Header
      </Label>
      <SegmentedSwitch
        inverted
        checked={windowHeaderVisible}
        onCheckedChange={setWindowHeaderVisible}
        id={controlId}
        checkedLabel="Show"
        uncheckedLabel="Hide"
        className="col-span-2 h-9 text-sm md:h-8 md:text-xs"
      />
    </div>
  );
}
