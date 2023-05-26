import type { HTMLAttributes, ReactNode } from 'react';

export interface SegmentedControlItemsWrapperProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the segmented control items wrapper - `SegmentedControlItem` components and `SegmentedControlIndicator` component.
   */
  children: ReactNode;
}
