import type { HTMLAttributes, ReactNode } from 'react';

export interface SegmentedSwitchLabelsWrapperProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the segmented switch labels wrapper - `SegmentedSwitchLabel` components and `SegmentedSwitchIndicator` component.
   */
  children: ReactNode;
}
