import type { HTMLAttributes, ReactNode } from 'react';

export interface SegmentedSwitchLabelProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The state of the segmented switch label.
   */
  checked: boolean;

  /**
   * If added, the segmented switch label will show icon before the labels's content.
   */
  icon?: ReactNode;

  /**
   * The content of the segmented switch label.
   */
  children: ReactNode;
}
