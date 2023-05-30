import type { HTMLAttributes, ReactNode } from 'react';
import type { SeparatorLabelProps } from './separator-label';

type HTMLAttributesToOmit = 'children';

export interface SeparatorProps extends Omit<HTMLAttributes<HTMLDivElement>, HTMLAttributesToOmit> {
  /**
   * If added, separator will have label.
   */
  label?: ReactNode;

  /**
   * The font size of the label.
   * @default "sm"
   */
  labelFontSize?: 'sm' | 'md' | 'lg';

  /**
   * Properties spread to label element.
   */
  labelProps?: Omit<SeparatorLabelProps, 'fontSize' | 'children'>;
}
