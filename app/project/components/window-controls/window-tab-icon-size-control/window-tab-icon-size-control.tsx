'use client';
import { useId } from 'react';
import {
  useStore,
  selectWindowHeaderVisible,
  selectWindowTabIconVisible,
  selectWindowTabIconSize,
  selectSetWindowTabIconSize,
} from '@project/store';
import { LabelAsSpan, SegmentedControl, SegmentedControlItem } from '@/components';

export function WindowTabIconSizeControl() {
  const controlId = useId();
  const windowHeaderVisible = useStore(selectWindowHeaderVisible);
  const windowTabIconVisible = useStore(selectWindowTabIconVisible);
  const windowTabIconSize = useStore(selectWindowTabIconSize);
  const setWindowTabIconSize = useStore(selectSetWindowTabIconSize);

  function handleValueChange(value: string) {
    setWindowTabIconSize(parseInt(value, 10) as typeof windowTabIconSize);
  }

  if (!windowHeaderVisible || !windowTabIconVisible) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <LabelAsSpan id={controlId} className="text-sm md:text-xs">
        Tab icon size
      </LabelAsSpan>
      <SegmentedControl
        value={windowTabIconSize.toString()}
        onValueChange={handleValueChange}
        aria-labelledby={controlId}
        className="col-span-2 h-9 text-sm md:h-8 md:text-xs"
      >
        <SegmentedControlItem value="16">16</SegmentedControlItem>
        <SegmentedControlItem value="20">20</SegmentedControlItem>
        <SegmentedControlItem value="24">24</SegmentedControlItem>
      </SegmentedControl>
    </div>
  );
}
