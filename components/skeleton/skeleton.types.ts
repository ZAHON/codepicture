import type { HTMLAttributes } from 'react';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the skeleton will be visible.
   * @default true
   */
  visible?: boolean;

  /**
   * If `true`, the skeleton will be animated.
   * @default true
   */
  animated?: boolean;

  /**
   * If `true`, the skeleton will take the width of it's children.
   * @default false
   */
  fitContent?: boolean;
}
