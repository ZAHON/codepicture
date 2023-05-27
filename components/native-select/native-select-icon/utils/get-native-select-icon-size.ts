import type { NativeSelectIconProps } from '../native-select-icon.types';

export function getNativeSelectIconSize(size: NativeSelectIconProps['size']) {
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
