import { cva } from 'class-variance-authority';

export const dialogBodyStyles = cva(['p-6'], {
  variants: {
    fontSize: {
      sm: ['text-xs'],
      md: ['text-sm'],
      lg: ['text-base'],
    },
  },
});
