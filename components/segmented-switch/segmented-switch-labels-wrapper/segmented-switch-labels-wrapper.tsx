'use client';
import type { SegmentedSwitchLabelsWrapperProps } from './segmented-switch-labels-wrapper.types';
import { twMerge } from 'tailwind-merge';
import { segmentedSwitchLabelsWrapperStyles } from './segmented-switch-labels-wrapper.styles';

export function SegmentedSwitchLabelsWrapper(props: SegmentedSwitchLabelsWrapperProps) {
  const { className, children, ...others } = props;

  return (
    <div className={twMerge(segmentedSwitchLabelsWrapperStyles(), className)} {...others}>
      {children}
    </div>
  );
}
