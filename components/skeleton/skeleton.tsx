import type { SkeletonProps } from './skeleton.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { skeletonStyles } from './skeleton.styles';

const defaultProps: Partial<SkeletonProps> = {
  visible: true,
  animated: true,
};

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const { visible, animated, fitContent, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  return (
    <div
      ref={ref}
      className={twMerge(skeletonStyles({ visible, animated, fitContent }), className)}
      {...others}
    >
      {children}
    </div>
  );
});

Skeleton.displayName = 'Skeleton';
