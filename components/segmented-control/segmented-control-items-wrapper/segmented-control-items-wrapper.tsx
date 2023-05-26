'use client';
import type { SegmentedControlItemsWrapperProps } from './segmented-control-items-wrapper.types';
import { twMerge } from 'tailwind-merge';
import { segmentedControlItemsWrapperStyles } from './segmented-control-items-wrapper.styles';

export function SegmentedControlItemsWrapper(props: SegmentedControlItemsWrapperProps) {
  const { className, children, ...others } = props;

  return (
    <div className={twMerge(segmentedControlItemsWrapperStyles(), className)} {...others}>
      {children}
    </div>
  );
}
