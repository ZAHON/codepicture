import type { NumberInputProps } from '../number-input.types';

export function getSpinButtonIconSize(size: NumberInputProps['size']) {
  switch (size) {
    case 'sm': {
      return '0.875rem';
    }
    case 'md': {
      return '1rem';
    }
    case 'lg': {
      return '1.25rem';
    }
    default: {
      throw Error(`Unknown size: ${size}`);
    }
  }
}
