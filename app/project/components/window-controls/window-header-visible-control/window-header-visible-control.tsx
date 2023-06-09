'use client';
import { useId } from 'react';
import { useMediaQuery } from '@/hooks';
import { useStore, selectWindowHeaderVisible, selectSetWindowHeaderVisible } from '@/store';
import { Label, SegmentedSwitch } from '@/components';

export function WindowHeaderVisibleVontrol() {
  const controlId = useId();
  const matches = useMediaQuery('(min-width: 768px)');
  const windowHeaderVisible = useStore(selectWindowHeaderVisible);
  const setWindowHeaderVisible = useStore(selectSetWindowHeaderVisible);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} size={matches ? 'sm' : 'md'}>
        Header
      </Label>
      <SegmentedSwitch
        inverted
        checked={windowHeaderVisible}
        onCheckedChange={setWindowHeaderVisible}
        id={controlId}
        size={matches ? 'sm' : 'md'}
        checkedLabel="Show"
        uncheckedLabel="Hide"
        className="col-span-2"
      />
    </div>
  );
}
