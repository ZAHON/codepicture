import type { CloseButtonProps } from '../close-button.types';

export function getCloseButtonIconSize(size: CloseButtonProps['size']) {
  switch (size) {
    case 'sm': {
      return '1rem';
    }
    case 'md': {
      return '1.25rem';
    }
    case 'lg': {
      return '1.5rem';
    }
    default: {
      throw Error(`Unknown size: ${size}`);
    }
  }
}
