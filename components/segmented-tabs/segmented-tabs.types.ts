import type { HTMLAttributes, ReactNode } from 'react';

type HTMLAttributesToOmit = 'dir';

export interface SegmentedTabsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, HTMLAttributesToOmit> {
  /**
   * The content of the segmented tabs - `SegmentedTabsList` and `SegmentedTabsContent` components.
   */
  children: ReactNode;

  /**
   * The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs.
   */
  defaultValue?: string;

  /**
   * The controlled value of the tab to activate. Should be used in conjunction with `onValueChange` property.
   */
  value?: string;

  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void;

  /**
   * When `automatic`, tabs are activated when receiving focus. When `manual`, tabs are activated when clicked.
   * @default "automatic"
   */
  activationMode?: 'automatic' | 'manual';
}
