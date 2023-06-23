'use client';
import type { SegmentedControlProps, SegmentedControlStyle } from './segmented-control.types';
import { forwardRef, useMemo } from 'react';
import { Root as RadioGroupRoot } from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps, getValidChildren } from '@/utils';
import { SegmentedControlItemsWrapper } from './segmented-control-items-wrapper';
import { SegmentedControlIndicator } from './segmented-control-indicator';
import { segmentedControlStyles } from './segmented-control.styles';

const defaultProps: Partial<SegmentedControlProps> = {
  loop: true,
  size: 'md',
};

export const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>((props, ref) => {
  const {
    value,
    defaultValue,
    disabled,
    size,
    style,
    className,
    itemsWrapperProps,
    indicatorProps,
    children,
    onValueChange,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const { itemsCount, checkedItemIndex } = useMemo(() => {
    const _value = value ?? defaultValue;

    const validChildren = getValidChildren(children);

    const itemsCount = validChildren.length;
    const checkedItemIndex = validChildren.findIndex((child) => {
      const { props } = child;

      return props && 'value' in props ? props.value === _value : -1;
    });

    return { itemsCount, checkedItemIndex };
  }, [value, defaultValue, children]);

  const segmentedControlStyle: SegmentedControlStyle = {
    '--segmented-control-items-count': itemsCount,
    '--segmented-control-checked-item-index': checkedItemIndex,
    ...style,
  };

  function handleValueChange(value: string) {
    // setValue(value);

    if (onValueChange) {
      onValueChange(value);
    }
  }

  return (
    <RadioGroupRoot
      ref={ref}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      dir="ltr"
      orientation="horizontal"
      style={segmentedControlStyle}
      className={twMerge(segmentedControlStyles({ size }), className)}
      onValueChange={handleValueChange}
      {...others}
    >
      <SegmentedControlItemsWrapper {...itemsWrapperProps}>
        {checkedItemIndex !== -1 && (
          <SegmentedControlIndicator disabled={disabled} {...indicatorProps} />
        )}
        {children}
      </SegmentedControlItemsWrapper>
    </RadioGroupRoot>
  );
});

SegmentedControl.displayName = 'SegmentedControl';
