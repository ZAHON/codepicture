import { cva } from 'class-variance-authority';

export const dialogTitleStyles = cva(['font-medium'], {
  variants: {
    fontSize: {
      sm: ['text-xs'],
      md: ['text-sm'],
      lg: ['text-base'],
    },
  },
});
