import type { HTMLAttributes, ReactNode } from 'react';

type HTMLAttributesToOmit = 'onSelect';

export interface MenuItemProps extends Omit<HTMLAttributes<HTMLDivElement>, HTMLAttributesToOmit> {
  /**
   * The content of the menu item.
   */
  children: ReactNode;

  /**
   * When `true`, prevents the user from interacting with the menu item.
   * @default false
   */
  disabled?: boolean;

  /**
   * Event handler called when the user selects an item (via mouse or keyboard). Calling `event.preventDefault` in this handler will prevent the dropdown menu from closing when selecting that item.
   */
  onSelect?: (event: Event) => void;

  /**
   * Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent` of the item. Use this when the content is complex, or you have non-textual content inside.
   */
  textValue?: string;

  /**
   * If added, the menu item will show icon before the item's content.
   */
  icon?: ReactNode;

  /**
   * The color of the menu item.
   * @default "neutral"
   */
  color?: 'neutral' | 'error';
}
