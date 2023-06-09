'use client';
import { useId } from 'react';
import { useMediaQuery } from '@/hooks';
import { useStore, selectWindowReflection, selectSetWindowReflection } from '@/store';
import { Label, SegmentedSwitch } from '@/components';

export function WindowReflectionControl() {
  const controlId = useId();
  const matches = useMediaQuery('(min-width: 768px)');
  const windowReflection = useStore(selectWindowReflection);
  const setWindowReflection = useStore(selectSetWindowReflection);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} size={matches ? 'sm' : 'md'}>
        Reflection
      </Label>
      <SegmentedSwitch
        inverted
        checked={windowReflection}
        onCheckedChange={setWindowReflection}
        id={controlId}
        size={matches ? 'sm' : 'md'}
        checkedLabel="Show"
        uncheckedLabel="Hide"
        className="col-span-2"
      />
    </div>
  );
}
