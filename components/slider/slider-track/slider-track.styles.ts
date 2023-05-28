import { cva } from 'class-variance-authority';

export const sliderTrackStyles = cva(['bg-neutral-6', 'relative', 'grow', 'rounded-full'], {
  variants: {
    size: {
      sm: ['h-0.5'],
      md: ['h-[0.1875rem]'],
      lg: ['h-1'],
    },
  },
});
