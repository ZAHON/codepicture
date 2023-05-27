import type { LoaderProps } from '../loader.types';

const sizes = {
  sm: '0.875rem',
  md: '1rem',
  lg: '1.25rem',
};

export function getLoaderSize(size: LoaderProps['size']) {
  if (size) {
    if (typeof size === 'number') {
      return `${size / 16}rem`;
    }

    if (typeof size === 'string' && size in sizes) {
      return sizes[size];
    }
  }

  throw Error(`Unknown size: ${size}`);
}
