import { cva } from 'class-variance-authority';

export const separatorLabelStyles = cva(['cursor-default', 'text-neutral-11'], {
  variants: {
    fontSize: {
      sm: ['text-xs'],
      md: ['text-sm'],
      lg: ['text-base'],
    },
  },
});
