import type { ButtonHTMLAttributes } from 'react';

type HTMLAttributesToOmit = 'children';

export interface CloseButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, HTMLAttributesToOmit> {
  /**
   * A label that describes the close button.
   * @default "Close"
   */
  'aria-label'?: string;

  /**
   * The size of the close button.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The size of the icon used inside close button. This property override icon size determined by `size` property.
   */
  iconSize?: number | string;

  /**
   * The variant of the close button.
   * @default "light"
   */
  variant?: 'filled' | 'light' | 'subtle' | 'transparent';

  /**
   * If `true`, the close button will have fully rounded edges.
   * @default false
   */
  pill?: boolean;

  /**
   * If `true`, the close button will be disabled.
   * @default false
   */
  disabled?: boolean;
}
