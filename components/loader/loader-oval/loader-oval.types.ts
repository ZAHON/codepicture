import type { SVGProps } from 'react';

export interface LoaderOvalProps extends SVGProps<SVGSVGElement> {
  /**
   * The size of the loader oval.
   */
  size: string;

  /**
   * The speed of the loader oval in ms.
   */
  speed: string;

  /**
   * For accessibility, it is important to add a fallback loading text. This text will be visible to screen readers.
   */
  label?: string;

  /**
   * The styles of the loader oval.
   */
  className: string;
}
