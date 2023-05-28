import type { HTMLAttributes, ReactNode } from 'react';
import type { SliderProps } from '../slider.types';

export interface SliderTrackProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The size of the slider track.
   */
  size?: SliderProps['size'];

  /**
   * The content of the slider track - `SliderRange` component.
   */
  children: ReactNode;
}
