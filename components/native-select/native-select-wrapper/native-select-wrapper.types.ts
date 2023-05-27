import type { HTMLAttributes, ReactNode } from 'react';

export interface NativeSelectWrapperProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the native select wrapper - `NativeSelect` and `NativeSelectRightSectionWrapper` components.
   */
  children: ReactNode;
}
