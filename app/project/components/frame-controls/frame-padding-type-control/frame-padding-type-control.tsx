'use client';
import { useId } from 'react';
import {
  useProjectPageStore,
  selectFramePaddingType,
  selectSetFramePaddingType,
  selectSetFramePaddingHorizontal,
  selectSetFramePaddingVertical,
} from '@project/store';
import { IconAdjustmentsAlt } from '@tabler/icons-react';
import { LabelAsSpan, SegmentedControl, SegmentedControlItem } from '@/components';

export function FramePaddingTypeControl() {
  const controlId = useId();
  const framePaddingType = useProjectPageStore(selectFramePaddingType);
  const setFramePaddingType = useProjectPageStore(selectSetFramePaddingType);
  const setFramePaddingHorizontal = useProjectPageStore(selectSetFramePaddingHorizontal);
  const setFramePaddingVertical = useProjectPageStore(selectSetFramePaddingVertical);

  function handleValueChange(value: string) {
    const paddingType = value as typeof framePaddingType;

    function setPadding(type: typeof framePaddingType, value?: number) {
      setFramePaddingType(type);

      if (typeof value === 'number') {
        setFramePaddingHorizontal(value);
        setFramePaddingVertical(value);
      }
    }

    switch (paddingType) {
      case '0': {
        setPadding('0', 0);
        return;
      }
      case '16': {
        setPadding('16', 16);
        return;
      }
      case '32': {
        setPadding('32', 32);
        return;
      }
      case '64': {
        setPadding('64', 64);
        return;
      }
      case '128': {
        setPadding('128', 128);
        return;
      }
      case 'custom': {
        setPadding('custom');
        return;
      }
      default: {
        throw Error(`Unknown framePaddingType: ${framePaddingType}`);
      }
    }
  }

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <LabelAsSpan id={controlId} className="text-sm md:text-xs">
        Padding
      </LabelAsSpan>
      <SegmentedControl
        value={framePaddingType}
        onValueChange={handleValueChange}
        aria-labelledby={controlId}
        className="col-span-2 h-9 text-sm md:h-8 md:text-xs"
      >
        <SegmentedControlItem value="0">0</SegmentedControlItem>
        <SegmentedControlItem value="16">16</SegmentedControlItem>
        <SegmentedControlItem value="32">32</SegmentedControlItem>
        <SegmentedControlItem value="64">64</SegmentedControlItem>
        <SegmentedControlItem value="128">128</SegmentedControlItem>
        <SegmentedControlItem value="custom" aria-label="Edit manually">
          <IconAdjustmentsAlt
            aria-hidden="true"
            focusable="false"
            className="h-4 w-4 md:h-[0.875rem] md:w-[0.875rem]"
          />
        </SegmentedControlItem>
      </SegmentedControl>
    </div>
  );
}
