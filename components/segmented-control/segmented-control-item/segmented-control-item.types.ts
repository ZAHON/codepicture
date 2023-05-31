import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface SegmentedControlItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The content of the segmented control item.
   */
  children: ReactNode;

  /**
   * The value given as data when submitted with a `name`.
   */
  value: string;

  /**
   * When `true`, prevents the user from interacting with the segmented control item.
   * @default false
   */
  disabled?: boolean;

  /**
   * When `true`, indicates that the user must check the segmented control item before the owning form can be submitted.
   * @default false
   */
  required?: boolean;

  /**
   * If added, the segmented control item will show icon before the items's content.
   */
  icon?: ReactNode;
}
