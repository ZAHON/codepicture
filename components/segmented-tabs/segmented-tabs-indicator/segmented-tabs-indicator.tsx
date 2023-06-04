'use client';
import type { SegmentedTabsIndicatorProps } from './segmented-tabs-indicator.types';
import { twMerge } from 'tailwind-merge';
import { segmentedTabsIndicatorStyles } from './segmented-tabs-indicator.styles';

export function SegmentedTabsIndicator(props: SegmentedTabsIndicatorProps) {
  const { className, ...others } = props;

  return (
    <div
      aria-hidden
      role="presentation"
      className={twMerge(segmentedTabsIndicatorStyles(), className)}
      {...others}
    />
  );
}
