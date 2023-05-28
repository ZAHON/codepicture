import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { LoaderProps } from '@/components';
import type { ButtonInnerProps } from './button-inner';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The content of the button.
   */
  children: ReactNode;

  /**
   * The type of the button.
   * @default "button"
   */
  type?: 'submit' | 'reset' | 'button';

  /**
   * The size of the button.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The variant of the button.
   * @default "filled"
   */
  variant?: 'filled' | 'light';

  /**
   * The color of the button.
   * @default "primary"
   */
  color?: 'neutral' | 'primary' | 'success' | 'error';

  /**
   * If `true`, the button will have 100% width of his parent.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * If `true`, the button will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If added, the button will show icon before the button's content.
   */
  icon?: ReactNode;

  /**
   * If `true`, the button will show a loader.
   * @default false
   */
  loading?: boolean;

  /**
   * Properties spread to `Loader` component.
   */
  loaderProps?: LoaderProps;

  /**
   * Properties spread to `ButtonInner` component.
   */
  innerProps?: Omit<ButtonInnerProps, 'loading' | 'children'>;
}
