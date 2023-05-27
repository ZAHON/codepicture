import type { LoaderProps } from './loader.types';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { getLoaderSize } from './utils';
import { LoaderOval } from './loader-oval';
import { LoaderDots } from './loader-dots';
import { loaderStyles } from './loader.styles';

const defaultProps: Partial<LoaderProps> = {
  size: 'md',
  color: 'primary',
  variant: 'oval',
  speed: 1000,
  label: 'Loading, please wait...',
};

export function Loader(props: LoaderProps) {
  const { size, color, variant, speed, label, className, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  const loaderVariantProps = {
    size: getLoaderSize(size),
    speed: `${speed}ms`,
    label: label,
    className: twMerge(loaderStyles({ color }), className),
    ...others,
  };

  switch (variant) {
    case 'oval': {
      return <LoaderOval {...loaderVariantProps} />;
    }
    case 'dots': {
      return <LoaderDots {...loaderVariantProps} />;
    }
    default: {
      throw Error(`Unknown variant: ${variant}`);
    }
  }
}
