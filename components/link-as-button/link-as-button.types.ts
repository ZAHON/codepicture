import type { ReactNode } from 'react';
import type { LinkProps } from 'next/link';

export interface LinkAsButtonProps extends LinkProps {
  /**
   * The content of the link as button.
   */
  children: ReactNode;

  /**
   * The size of the link as button.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The variant of the link as button.
   * @default "filled"
   */
  variant?: 'filled' | 'light';

  /**
   * The color of the link as button.
   * @default "primary"
   */
  color?: 'neutral' | 'primary';

  /**
   * If `true`, the link as button will have 100% width of his parent.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * If added, the link as button will show icon before the link's content.
   */
  icon?: ReactNode;

  /**
   * Overwrite link as button default styles.
   */
  className?: string;
}
