'use client';
import type { SliderTrackProps } from './slider-track.types';
import { Track } from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';
import { sliderTrackStyles } from './slider-track.styles';

export function SliderTrack(props: SliderTrackProps) {
  const { size, className, children, ...others } = props;

  return (
    <Track className={twMerge(sliderTrackStyles({ size }), className)} {...others}>
      {children}
    </Track>
  );
}
