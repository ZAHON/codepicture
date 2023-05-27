import type { SVGAttributes } from 'react';
import { NativeSelectProps } from '../native-select.types';

export interface NativeSelectIconProps extends SVGAttributes<HTMLOrSVGElement> {
  /**
   * The size of the native select icon.
   */
  size?: NativeSelectProps['size'];
}
