import { cva } from 'class-variance-authority';

export const selectViewportStyles = cva(['max-h-64', 'p-1.5'], {
  variants: {
    withScroll: {
      true: ['pr-2.5'],
    },
  },
});
