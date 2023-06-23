'use client';
import { useProjectPageStore, selectFrameFillType, selectSetFrameFillType } from '@project/store';
import {
  SegmentedTabs,
  SegmentedTabsList,
  SegmentedTabsTrigger,
  SegmentedTabsContent,
} from '@/components';
import { FrameFillControlColors } from './frame-fill-control-colors';
import { FrameFillControlGradients } from './frame-fill-control-gradients';

export function FrameFillControlPopoverBody() {
  const frameFillType = useProjectPageStore(selectFrameFillType);
  const setFrameFillType = useProjectPageStore(selectSetFrameFillType);

  function handleValueChange(value: string) {
    setFrameFillType(value as typeof frameFillType);
  }

  return (
    <SegmentedTabs value={frameFillType} onValueChange={handleValueChange}>
      <SegmentedTabsList className="mx-4 h-9 text-sm md:h-8 md:text-xs">
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
