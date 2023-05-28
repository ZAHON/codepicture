import type { HTMLAttributes } from 'react';
import type { SliderProps } from '../slider.types';

type HTMLAttributesToOmit = 'children';

export interface SliderThumbProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, HTMLAttributesToOmit> {
  /**
   * The size of the slider thumb.
   */
  size?: SliderProps['size'];
}
