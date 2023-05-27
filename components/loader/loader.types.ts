import type { SVGProps } from 'react';

type HTMLAttributesToOmit = 'display' | 'opacity';

export interface LoaderProps extends Omit<SVGProps<SVGSVGElement>, HTMLAttributesToOmit> {
  /**
   * The size of the loader.
   *
   * Loader has predefined sizes: `sm`, `md` and `lg`
   *
   * Alternatively, you can use a number to set width and height in pixels:
   * @example
   * ```jsx
   * <Loader size={48} />
   * ```
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg' | number;

  /**
   * The speed of the loader in ms.
   * @default 1000
   */
  speed?: number;

  /**
   * The color of the loader.
   * @default "primary"
   */
  color?: 'primary' | 'currentColor';

  /**
   * The variant of the loader.
   * @default "oval"
   */
  variant?: 'oval' | 'dots';

  /**
   * For accessibility, it is important to add a fallback loading text. This text will be visible to screen readers.
   * @default "Loading, please wait..."
   */
  label?: string;
}
