import type { HTMLAttributes, ReactNode } from 'react';

export interface KbdProps extends HTMLAttributes<HTMLElement> {
  /**
   * The content of the kbd.
   */
  children: ReactNode;

  /**
   * The font size of the kbd.
   * @default "md"
   */
  fontSize?: 'inherit' | 'sm' | 'md' | 'lg';
}
