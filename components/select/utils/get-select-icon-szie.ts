import type { SelectProps } from '../select.types';

export function getSelectIconSize(size: SelectProps['size']) {
  switch (size) {
    case 'sm': {
      return '0.75rem';
    }
    case 'md': {
      return '0.875rem';
    }
    case 'lg': {
      return '1rem';
    }
    default: {
      throw Error(`Unknown size: ${size}`);
    }
  }
}
