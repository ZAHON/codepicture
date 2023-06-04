'use client';
import type { SegmentedTabsTriggersWrapperProps } from './segmented-tabs-triggers-wrapper.types';
import { twMerge } from 'tailwind-merge';
import { segmentedTabsTriggersWrapperStyles } from './segmented-tabs-triggers-wrapper.styles';

export function SegmentedTabsTriggersWrapper(props: SegmentedTabsTriggersWrapperProps) {
  const { className, children, ...others } = props;

  return (
    <div className={twMerge(segmentedTabsTriggersWrapperStyles(), className)} {...others}>
      {children}
    </div>
  );
}
