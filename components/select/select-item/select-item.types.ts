import type { HTMLAttributes, ReactNode } from 'react';

export interface SelectItemProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the select item.
   */
  children: ReactNode;

  /**
   * The value given as data when submitted with a name.
   */
  value: string;

  /**
   * When `true`, prevents the user from interacting with the item.
   * @default false
   */
  disabled?: boolean;

  /**
   * Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent`. Use this when the content is complex, or you have non-textual content inside.
   */
  textValue?: string;
}
