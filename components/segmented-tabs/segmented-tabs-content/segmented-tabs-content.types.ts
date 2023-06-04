import type { HTMLAttributes, ReactNode } from 'react';

export interface SegmentedTabsContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the segmented tabs content.
   */
  children: ReactNode;

  /**
   * A unique value that associates the content with a trigger.
   */
  value: string;

  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.
   */
  forceMount?: true;
}
