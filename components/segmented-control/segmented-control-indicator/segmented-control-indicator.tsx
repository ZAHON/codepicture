'use client';
import type { SegmentedControlIndicatorProps } from './segmented-control-indicator.types';
import { twMerge } from 'tailwind-merge';
import { segmentedControlIndicatorStyles } from './segmented-control-indicator.styles';

export function SegmentedControlIndicator(props: SegmentedControlIndicatorProps) {
  const { disabled, className, ...others } = props;

  return (
    <div
      aria-hidden
      role="presentation"
      data-disabled={disabled ? '' : undefined}
      className={twMerge(segmentedControlIndicatorStyles(), className)}
      {...others}
    />
  );
}
