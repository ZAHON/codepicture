import type { HTMLAttributes, ReactNode } from 'react';
import type { NativeSelectProps } from '../native-select.types';

export interface NativeSelectRightSectionWrapperProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the native select right section wrapper.
   */
  size?: NativeSelectProps['size'];

  /**
   * The content of the native select right section wrapper - `NativeSelectIcon` component.
   */
  children: ReactNode;
}
