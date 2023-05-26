'use client';
import type { SegmentedSwitchIndicatorProps } from './segmented-switch-indicator.types';
import { Thumb as SwitchThumb } from '@radix-ui/react-switch';
import { twMerge } from 'tailwind-merge';
import { segmentedSwitchIndicatorStyles } from './segmented-switch-indicator.styles';

export function SegmentedSwitchIndicator(props: SegmentedSwitchIndicatorProps) {
  const { inverted, className, ...others } = props;

  return (
    <SwitchThumb
      className={twMerge(segmentedSwitchIndicatorStyles({ inverted }), className)}
      {...others}
    />
  );
}
