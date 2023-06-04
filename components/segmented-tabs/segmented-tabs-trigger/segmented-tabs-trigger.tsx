'use client';
import type { SegmentedTabsTriggerProps } from './segmented-tabs-trigger.types';
import { forwardRef } from 'react';
import { Trigger } from '@radix-ui/react-tabs';
import { twMerge } from 'tailwind-merge';
import { segmentedTabsTriggerStyles } from './segmented-tabs-trigger.styles';

export const SegmentedTabsTrigger = forwardRef<HTMLButtonElement, SegmentedTabsTriggerProps>(
  (props, ref) => {
    const { icon, className, children, ...others } = props;

    return (
      <Trigger ref={ref} className={twMerge(segmentedTabsTriggerStyles(), className)} {...others}>
        {icon && icon}
        {children}
      </Trigger>
    );
  }
);

SegmentedTabsTrigger.displayName = 'SegmentedTabsTrigger';
