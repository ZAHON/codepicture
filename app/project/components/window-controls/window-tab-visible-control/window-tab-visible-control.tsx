'use client';
import { useId } from 'react';
import {
  useProjectPageStore,
  selectWindowHeaderVisible,
  selectWindowTabVisible,
  selectSetWindowTabVisible,
} from '@project/store';
import { Label, SegmentedSwitch } from '@/components';

export function WindowTabVisibleControl() {
  const controlId = useId();
  const windowHeaderVisible = useProjectPageStore(selectWindowHeaderVisible);
  const windowTabVisible = useProjectPageStore(selectWindowTabVisible);
  const setWindowTabVisible = useProjectPageStore(selectSetWindowTabVisible);

  if (!windowHeaderVisible) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} className="text-sm md:text-xs">
        Tab
      </Label>
      <SegmentedSwitch
        inverted
        checked={windowTabVisible}
        onCheckedChange={setWindowTabVisible}
        id={controlId}
        checkedLabel="Show"
        uncheckedLabel="Hide"
        className="col-span-2 h-9 text-sm md:h-8 md:text-xs"
      />
    </div>
  );
}
