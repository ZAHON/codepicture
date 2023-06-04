'use client';
import { useStore, selectFrameFillType, selectSetFrameFillType } from '@/store';
import {
  SegmentedTabs,
  SegmentedTabsList,
  SegmentedTabsTrigger,
  SegmentedTabsContent,
} from '@/components';
import { FrameFillControlColors } from './frame-fill-control-colors';
import { FrameFillControlGradients } from './frame-fill-control-gradients';

export function FrameFillControlPopoverBody() {
  const frameFillType = useStore(selectFrameFillType);
  const setFrameFillType = useStore(selectSetFrameFillType);

  function handleValueChange(value: string) {
    setFrameFillType(value as typeof frameFillType);
  }

  return (
    <SegmentedTabs value={frameFillType} onValueChange={handleValueChange}>
      <SegmentedTabsList size="sm" className="mx-4">
        <SegmentedTabsTrigger value="color">Colors</SegmentedTabsTrigger>
        <SegmentedTabsTrigger value="gradient">Gradients</SegmentedTabsTrigger>
      </SegmentedTabsList>
      <SegmentedTabsContent
        value="color"
        className="focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary-9"
      >
        <FrameFillControlColors />
      </SegmentedTabsContent>
      <SegmentedTabsContent
        value="gradient"
        className="focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary-9"
      >
        <FrameFillControlGradients />
      </SegmentedTabsContent>
    </SegmentedTabs>
  );
}
