import type { HTMLAttributes, ReactNode } from 'react';

export interface ScrollAreaScrollbarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the scroll area scrollbar - `ScrollAreaThumb` component.
   */
  children: ReactNode;

  /**
   * The orientation of the scrollbar.
   */
  orientation: 'horizontal' | 'vertical';

  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.
   */
  forceMount?: true;
}
