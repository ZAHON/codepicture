import type { HTMLAttributes, ReactNode } from 'react';

export interface SelectGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the select group - `SelectLabel` or `SelectItem` component.
   */
  children: ReactNode;
}
