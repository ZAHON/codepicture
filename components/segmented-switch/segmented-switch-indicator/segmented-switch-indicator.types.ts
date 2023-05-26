import type { HTMLAttributes } from 'react';

type HTMLAttributesToOmit = 'children';

export interface SegmentedSwitchIndicatorProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, HTMLAttributesToOmit> {
  /**
   * Whether the segmented switch is visually inverted.
   */
  inverted?: boolean;
}
