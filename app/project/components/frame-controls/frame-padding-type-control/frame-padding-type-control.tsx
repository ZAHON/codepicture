'use client';
import { useId } from 'react';
import { useStore, selectFramePaddingType, selectSetFramePaddingType } from '@/store';
import { IconAdjustmentsAlt } from '@tabler/icons-react';
import { LabelAsSpan, SegmentedControl, SegmentedControlItem } from '@/components';

export function FramePaddingTypeControl() {
  const controlId = useId();
  const framePaddingType = useStore(selectFramePaddingType);
  const setFramePaddingType = useStore(selectSetFramePaddingType);

  function handleValueChange(value: string) {
    setFramePaddingType(value as typeof framePaddingType);
  }

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <LabelAsSpan id={controlId} size="sm">
        Padding
      </LabelAsSpan>
      <SegmentedControl
        size="sm"
        value={framePaddingType}
        onValueChange={handleValueChange}
        aria-labelledby={controlId}
        className="col-span-2"
      >
        <SegmentedControlItem value="0">0</SegmentedControlItem>
        <SegmentedControlItem value="16">16</SegmentedControlItem>
        <SegmentedControlItem value="32">32</SegmentedControlItem>
        <SegmentedControlItem value="64">64</SegmentedControlItem>
        <SegmentedControlItem value="128">128</SegmentedControlItem>
        <SegmentedControlItem value="custom" aria-label="Edit manually">
          <IconAdjustmentsAlt size="0.875rem" aria-hidden="true" focusable="false" />
        </SegmentedControlItem>
      </SegmentedControl>
    </div>
  );
}
