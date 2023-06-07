import type { HTMLAttributes } from 'react';

type HTMLAttributesToOmit = 'children';

export interface DialogOverlayProps
  extends Omit<HTMLAttributes<HTMLDivElement>, HTMLAttributesToOmit> {
  /**
   * if `true`, alert dialog overlay will have blur.
   * @default false
   */
  blur?: boolean;
}
