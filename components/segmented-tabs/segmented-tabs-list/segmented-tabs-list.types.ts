import type { HTMLAttributes, ReactNode, CSSProperties } from 'react';
import type { SegmentedTabsTriggersWrapperProps } from '../segmented-tabs-triggers-wrapper';
import type { SegmentedTabsIndicatorProps } from '../segmented-tabs-indicator';

export interface SegmentedTabsListProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the segmented tabs list - `SegmentedTabsTrigger` components.
   */
  children: ReactNode;

  /**
   * The size of the segmented tabs list.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * When `true`, keyboard navigation will loop from last tab to first, and vice versa.
   * @default true
   */
  loop?: boolean;

  /**
   * Properties spread to `SegmentedTabsTriggersWrapper` component.
   */
  triggersWrapperProps?: Omit<SegmentedTabsTriggersWrapperProps, 'children'>;

  /**
   * Properties spread to `SegmentedTabsIndicator` component.
   */
  indicatorProps?: SegmentedTabsIndicatorProps;
}

export interface SegmentedTabsListStyle extends CSSProperties {
  '--segmented-tabs-triggers-count': number;
  '--segmented-tabs-checked-trigger-index': number;
}
