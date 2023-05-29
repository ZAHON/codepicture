import type { HTMLAttributes, ReactNode } from 'react';

type HTMLAttributesToOmit = 'onSelect';

export interface MenuRadioItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, HTMLAttributesToOmit> {
  /**
   * The content of the menu radio item.
   */
  children: ReactNode;

  /**
   * The unique value of the menu redio item.
   */
  value: string;

  /**
   * When `true`, prevents the user from interacting with the menu radio item.
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
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: boolean;

  /**
   * If added, the menu radio item will show icon before the item's content.
   */
  icon?: ReactNode;
}
