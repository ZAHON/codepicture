export interface NotificationsProps {
  /**
   * The position of the toasts.
   * @default "bottom-right"
   */
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';

  /**
   * Toasts spawn at top by default. Set to `true` if you want new toasts at the end.
   * @default false
   */
  reverseOrder?: boolean;

  /**
   * Add a custom CSS class name to toaster div.
   */
  containerClassName?: string;

  /**
   * Changes the gap between each toast.
   * @default 10
   */
  gutter?: number;

  /**
   * The top offset of the toaster div.
   * @default 10
   */
  topOffset?: number;

  /**
   * The right offset of the toaster div.
   * @default 10
   */
  rightOffset?: number;

  /**
   * The bottom offset of the toaster div.
   * @default 10
   */
  bottomOffset?: number;

  /**
   * The left offset of the toaster div.
   * @default 10
   */
  leftOffset?: number;
}
