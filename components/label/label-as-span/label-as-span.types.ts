import type { HTMLAttributes, ReactNode } from 'react';
import type { LabelRequiredIndicatorProps } from '../label-required-indicator';

export interface LabelAsSpanProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The content of the label.
   */
  children: ReactNode;

  /**
   * The size of the label.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The content of the required indicator.
   * @default " *"
   */
  requiredIndicator?: ReactNode;

  /**
   * If true, add required indicator after label content.
   * @default false
   */
  withRequiredIndicator?: boolean;

  /**
   * Properties spread to `LabelRequiredIndicator` component.
   */
  requiredIndicatorProps?: Omit<LabelRequiredIndicatorProps, 'children'>;
}
