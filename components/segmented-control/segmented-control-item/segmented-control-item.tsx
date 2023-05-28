'use client';
import type { SegmentedControlItemProps } from './segmented-control-item.types';
import { forwardRef } from 'react';
import { Item as RadioGroupItem } from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { segmentedControlItemStyles } from './segmented-control-item.styles';

const defaultProps: Partial<SegmentedControlItemProps> = {
  asChild: false,
  disabled: false,
  required: false,
};

export const SegmentedControlItem = forwardRef<HTMLButtonElement, SegmentedControlItemProps>(
  (props, ref) => {
    const { className, icon, children, ...others } = applayComponentDefaultProps(
      defaultProps,
      props
    );

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
