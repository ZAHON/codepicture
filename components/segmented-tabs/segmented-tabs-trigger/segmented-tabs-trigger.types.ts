import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface SegmentedTabsTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The content of the segmented tabs trigger.
   */
  children: ReactNode;

  /**
   * A unique value that associates the trigger with a content.
   */
  value: string;

  /**
   * When `true`, prevents the user from interacting with the tab.
   */
  disabled?: boolean;

  /**
   * If added, the segmented tabs trigger will show icon before the trigger's content.
   */
  icon?: ReactNode;
}
