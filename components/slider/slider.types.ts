import type { HTMLAttributes } from 'react';
import type { SliderTrackProps } from './slider-track';
import type { SliderRangeProps } from './slider-range';
import type { SliderThumbProps } from './slider-thumb';

type HTMLAttributesToOmit = 'dir' | 'children';

export interface SliderProps extends Omit<HTMLAttributes<HTMLSpanElement>, HTMLAttributesToOmit> {
  /**
   * The thumb element aria-label attribute.
   */
  thumbLabel: string;

  /**
   * The value of the slider when initially rendered. Use when you do not need to control the state of the slider.
   */
  defaultValue?: number;

  /**
   * The controlled value of the slider. Must be used in conjunction with `onValueChange` property.
   */
  value?: number;

  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: number) => void;

  /**
   * Event handler called when the value changes at the end of an interaction. Useful when you only need to capture a final value e.g. to update a backend service.
   */
  onValueCommit?: (value: number) => void;

  /**
   * The name of the slider. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;

  /**
   * If `true`, prevents the user from interacting with the slider.
   * @default false
   */
  disabled?: boolean;

  /**
   * The minimum value for the range.
   * @default 0
   */
  min?: number;

  /**
   * The maximum value for the range.
   * @default 100
   */
  max?: number;

  /**
   * The stepping interval.
   * @default 1
   */
  step?: number;

  /**
   * The size of the slider.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Properties spread to `SliderTrack` component.
   */
  trackProps?: Omit<SliderTrackProps, 'size' | 'children'>;

  /**
   * Properties spread to `SliderRange` component.
   */
  rangeProps?: SliderRangeProps;

  /**
   * Properties spread to `SliderThumb` component.
   */
  thumbProps?: Omit<SliderThumbProps, 'size'>;
}
