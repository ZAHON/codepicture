import type { ReactNode } from 'react';

export interface AlertDialogPortalProps {
  /**
   * The content of the alert dialog portal - `AlertDialogOverlay` and `AlertDialogContent` components.
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
