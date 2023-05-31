import { cva } from 'class-variance-authority';

export const alertDialogHeaderStyles = cva(['flex', 'flex-col', 'gap-y-6'], {
  variants: {
    fontSize: {
      sm: ['text-xs'],
      md: ['text-sm'],
      lg: ['text-base'],
    },
  },
});
