import type { HTMLAttributes, ReactNode } from 'react';

export interface PopoverAnchorProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * An optional element to position the `PopoverContent` against. If this part is not used, the content will position alongside the `PopoverTrigger`.
   */
  children: ReactNode;
}
