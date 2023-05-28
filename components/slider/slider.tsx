'use client';
import type { SliderProps } from './slider.types';
import { Root } from '@radix-ui/react-slider';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { SliderTrack } from './slider-track';
import { SliderRange } from './slider-range';
import { SliderThumb } from './slider-thumb';
import { sliderStyles } from './slider.styles';

const defaultProps: Partial<SliderProps> = {
  min: 0,
  max: 100,
  step: 1,
  size: 'md',
};

export const Slider = forwardRef<HTMLSpanElement, SliderProps>((props, ref) => {
  const {
    defaultValue,
    value,
    onValueChange,
    onValueCommit,
    size,
    thumbLabel,
    className,
    trackProps,
    rangeProps,
    thumbProps,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const _defaultValue = typeof defaultValue === 'number' ? [defaultValue] : undefined;
  const _value = typeof value === 'number' ? [value] : undefined;

  function handleValueChange(value: number[]) {
    if (onValueChange) onValueChange(value[0]);
  }

  function handleValueCommit(value: number[]) {
    if (onValueCommit) onValueCommit(value[0]);
  }

  return (
    <Root
      ref={ref}
      dir="ltr"
      orientation="horizontal"
      defaultValue={_defaultValue}
      value={_value}
      onValueChange={handleValueChange}
      onValueCommit={handleValueCommit}
      className={twMerge(sliderStyles({ size }), className)}
      {...others}
    >
      <SliderTrack size={size} {...trackProps}>
        <SliderRange {...rangeProps} />
      </SliderTrack>
      <SliderThumb size={size} aria-label={thumbLabel} {...thumbProps} />
    </Root>
  );
});

Slider.displayName = 'Slider';
