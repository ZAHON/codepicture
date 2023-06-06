'use client';
import { useId } from 'react';
import {
  useStore,
  selectWindowHeaderVisible,
  selectWindowTabVisible,
  selectSetWindowTabVisible,
} from '@/store';
import { Label, SegmentedSwitch } from '@/components';

export function WindowTabVisibleControl() {
  const controlId = useId();
  const windowHeaderVisible = useStore(selectWindowHeaderVisible);
  const windowTabVisible = useStore(selectWindowTabVisible);
  const setWindowTabVisible = useStore(selectSetWindowTabVisible);

  if (!windowHeaderVisible) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} size="sm">
        Tab
      </Label>
      <SegmentedSwitch
        inverted
        checked={windowTabVisible}
        onCheckedChange={setWindowTabVisible}
        id={controlId}
        size="sm"
        checkedLabel="Show"
        uncheckedLabel="Hide"
        className="col-span-2"
      />
    </div>
  );
}
