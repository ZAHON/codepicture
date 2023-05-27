import { cva } from 'class-variance-authority';

export const loaderStyles = cva([''], {
  variants: {
    color: {
      primary: ['text-primary-9'],
      currentColor: ['text-current'],
    },
  },
});
