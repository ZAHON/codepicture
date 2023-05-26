import type { HTMLAttributes } from 'react';

type HTMLAttributesToOmit = 'children';

export interface SegmentedControlIndicatorProps
  extends Omit<HTMLAttributes<HTMLDivElement>, HTMLAttributesToOmit> {
  /**
   * When `true`, segmented control indicator will have disabled styles.
   */
  disabled?: boolean;
}
