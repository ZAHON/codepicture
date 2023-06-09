'use client';
import { useId } from 'react';
import { useMediaQuery } from '@/hooks';
import {
  useStore,
  selectWindowHeaderVisible,
  selectWindowTabVisible,
  selectWindowTabAccent,
  selectSetWindowTabAccent,
} from '@/store';
import { Label, SegmentedSwitch } from '@/components';

export function WindowTabAccentControl() {
  const controlId = useId();
  const matches = useMediaQuery('(min-width: 768px)');
  const windowHeaderVisible = useStore(selectWindowHeaderVisible);
  const windowTabVisible = useStore(selectWindowTabVisible);
  const windowTabAccent = useStore(selectWindowTabAccent);
  const setWindowTabAccent = useStore(selectSetWindowTabAccent);

  if (!windowHeaderVisible || !windowTabVisible) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} size={matches ? 'sm' : 'md'}>
        Tab accent
      </Label>
      <SegmentedSwitch
        inverted
        checked={windowTabAccent}
        onCheckedChange={setWindowTabAccent}
        id={controlId}
        size={matches ? 'sm' : 'md'}
        className="col-span-2"
      />
    </div>
  );
}
