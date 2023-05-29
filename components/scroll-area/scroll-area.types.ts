import type { HTMLAttributes, ReactNode } from 'react';

type HTMLAttributesToOmit = 'dir';

export interface ScrollAreaProps
  extends Omit<HTMLAttributes<HTMLDivElement>, HTMLAttributesToOmit> {
  /**
   * The content of the scroll area - `ScrollAreaViewport`, `ScrollAreaCorner` and `ScrollAreaScrollbar` components.
   */
  children: ReactNode;

  /**
   * Describes the nature of scrollbar visibility, similar to how the scrollbar preferences in MacOS control visibility of native scrollbars.
   *
   * `"auto"` means that scrollbars are visible when content is overflowing on the corresponding orientation.
   *
   * `"always"` means that scrollbars are always visible regardless of whether the content is overflowing.
   *
   * `"scroll"` means that scrollbars are visible when the user is scrolling along its corresponding orientation.
   *
   * `"hover"` when the user is scrolling along its corresponding orientation and when the user is hovering over the scroll area.
   * @default "hover"
   */
  type?: 'auto' | 'always' | 'scroll' | 'hover';

  /**
   * If type is set to either `"scroll"` or `"hover"`, this property determines the length of time, in milliseconds, before the scrollbars are hidden after the user stops interacting with scrollbars.
   * @default 600
   */
  scrollHideDelay?: number;
}
