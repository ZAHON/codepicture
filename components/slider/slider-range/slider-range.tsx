'use client';
import type { SliderRangeProps } from './slider-range.types';
import { Range } from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';
import { sliderRangeStyles } from './slider-range.styles';

export function SliderRange(props: SliderRangeProps) {
  const { className, ...others } = props;

  return <Range className={twMerge(sliderRangeStyles(), className)} {...others} />;
}
