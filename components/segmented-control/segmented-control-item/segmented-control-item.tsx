'use client';
import type { SegmentedControlItemProps } from './segmented-control-item.types';
import { forwardRef } from 'react';
import { Item as RadioGroupItem } from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';
import { segmentedControlItemStyles } from './segmented-control-item.styles';

export const SegmentedControlItem = forwardRef<HTMLButtonElement, SegmentedControlItemProps>(
  (props, ref) => {
    const { className, icon, children, ...others } = props;

    return (
      <RadioGroupItem
        ref={ref}
        className={twMerge(segmentedControlItemStyles(), className)}
        {...others}
      >
        {icon && icon}
        {children}
      </RadioGroupItem>
    );
  }
);

SegmentedControlItem.displayName = 'SegmentedControlItem';
