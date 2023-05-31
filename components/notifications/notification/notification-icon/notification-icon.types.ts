import type { SVGProps } from 'react';

export interface NotificationIconProps {
  /**
   * The type of the notification icon.
   */
  type: string;

  /**
   * Properties spread to icon component.
   */
  iconProps?: SVGProps<SVGSVGElement>;
}
