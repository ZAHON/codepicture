import type { HTMLAttributes, ReactNode } from 'react';

export interface SegmentedSwitchLabelProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The state of the segmented switch label.
   */
  checked: boolean;

  /**
   * The content of the segmented switch label.
   */
  children: ReactNode;
}
