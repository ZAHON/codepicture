'use client';
import { useId } from 'react';
import {
  useProjectPageStore,
  selectWindowHeaderVisible,
  selectWindowTabIconVisible,
  selectSetWindowTabIconVisible,
} from '@project/store';
import { Label, SegmentedSwitch } from '@/components';

export function WindowTabIconVisibleControl() {
  const controlId = useId();
  const windowHeaderVisible = useProjectPageStore(selectWindowHeaderVisible);
  const windowTabIconVisible = useProjectPageStore(selectWindowTabIconVisible);
  const setWindowTabIconVisible = useProjectPageStore(selectSetWindowTabIconVisible);

  if (!windowHeaderVisible) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} className="text-sm md:text-xs">
        Tab icon
      </Label>
      <SegmentedSwitch
        inverted
        checked={windowTabIconVisible}
        onCheckedChange={setWindowTabIconVisible}
        id={controlId}
        checkedLabel="Show"
        uncheckedLabel="Hide"
        className="col-span-2 h-9 text-sm md:h-8 md:text-xs"
      />
    </div>
  );
}
