import { cva } from 'class-variance-authority';

export const buttonInnerStyles = cva(['flex', 'justify-center', 'items-center', 'gap-x-2'], {
  variants: {
    loading: {
      true: ['opacity-0'],
    },
  },
});
