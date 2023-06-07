import type { ReactNode } from 'react';

export interface DialogPortalProps {
  /**
   * The content of the dialog portal - `DialogOverlay` and `DialogContent` components.
   */
  children: ReactNode;

  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.
   */
  forceMount?: true;

  /**
   * Specify a container element to portal the content into.
   * @default document.body
   */
  container?: HTMLElement;
}
