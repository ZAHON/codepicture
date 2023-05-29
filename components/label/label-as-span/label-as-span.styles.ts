import { cva } from 'class-variance-authority';

export const labelAsSpanStyles = cva(['text-neutral-12', 'cursor-default'], {
  variants: {
    size: {
      sm: ['text-xs'],
      md: ['text-sm'],
      lg: ['text-base'],
    },
  },
});
