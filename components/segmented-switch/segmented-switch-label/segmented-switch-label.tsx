'use client';
import type { SegmentedSwitchLabelProps } from './segmented-switch-label.types';
import { twMerge } from 'tailwind-merge';
import { segmentedSwitchLabelStyles } from './segmented-switch-label.styles';

export function SegmentedSwitchLabel(props: SegmentedSwitchLabelProps) {
  const { checked, className, children, ...others } = props;

  const dataState = checked ? 'checked' : 'unchecked';

  return (
    <span
      data-state={dataState}
      className={twMerge(segmentedSwitchLabelStyles(), className)}
      {...others}
    >
      {children}
    </span>
  );
}
