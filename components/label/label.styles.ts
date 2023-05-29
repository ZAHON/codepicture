import { cva } from 'class-variance-authority';

export const labelStyles = cva(['text-neutral-12'], {
  variants: {
    size: {
      sm: ['text-xs'],
      md: ['text-sm'],
      lg: ['text-base'],
    },
  },
});
