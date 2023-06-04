import type { HTMLAttributes, ReactNode } from 'react';

export interface SegmentedTabsTriggersWrapperProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the segmented control items wrapper - `SegmentedTabsTrigger` components and `SegmentedTabsIndicator` component.
   */
  children: ReactNode;
}
