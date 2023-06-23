'use client';
import { useId } from 'react';
import {
  useProjectPageStore,
  selectWindowReflection,
  selectSetWindowReflection,
} from '@project/store';
import { Label, SegmentedSwitch } from '@/components';

export function WindowReflectionControl() {
  const controlId = useId();
  const windowReflection = useProjectPageStore(selectWindowReflection);
  const setWindowReflection = useProjectPageStore(selectSetWindowReflection);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} className="text-sm md:text-xs">
        Reflection
      </Label>
      <SegmentedSwitch
        inverted
        checked={windowReflection}
        onCheckedChange={setWindowReflection}
        id={controlId}
        checkedLabel="Show"
        uncheckedLabel="Hide"
        className="col-span-2 h-9 text-sm md:h-8 md:text-xs"
      />
    </div>
  );
}
