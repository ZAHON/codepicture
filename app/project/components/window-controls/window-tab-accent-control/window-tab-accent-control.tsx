'use client';
import { useId } from 'react';
import {
  useStore,
  selectWindowHeaderVisible,
  selectWindowTabVisible,
  selectWindowTabAccent,
  selectSetWindowTabAccent,
} from '@project/store';
import { Label, SegmentedSwitch } from '@/components';

export function WindowTabAccentControl() {
  const controlId = useId();
  const windowHeaderVisible = useStore(selectWindowHeaderVisible);
  const windowTabVisible = useStore(selectWindowTabVisible);
  const windowTabAccent = useStore(selectWindowTabAccent);
  const setWindowTabAccent = useStore(selectSetWindowTabAccent);

  if (!windowHeaderVisible || !windowTabVisible) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} className="text-sm md:text-xs">
        Tab accent
      </Label>
      <SegmentedSwitch
        inverted
        checked={windowTabAccent}
        onCheckedChange={setWindowTabAccent}
        id={controlId}
        className="col-span-2 h-9 text-sm md:h-8 md:text-xs"
      />
    </div>
  );
}
