import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { LoaderProps } from '@/components';

type HTMLAttributesToOmit = 'type';

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, HTMLAttributesToOmit> {
  /**
   * The icon to be used in the icon button.
   */
  children: ReactNode;

  /**
   * A label that describes the icon button.
   */
  'aria-label': string;

  /**
   * The size of the icon button.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The variant of the icon button.
   * @default "subtle"
   */
  variant?: 'filled' | 'light' | 'subtle';

  /**
   * The color of the icon button.
   * @default "neutral"
   */
  color?: 'neutral' | 'primary';

  /**
   * If `true`, the icon button will have fully rounded edges.
   * @default false
   */
  pill?: boolean;

  /**
   * If `true`, the icon button will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the button will show a loader.
   * @default false
   */
  loading?: boolean;

  loaderProps?: LoaderProps;
}
