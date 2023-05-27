import { cva } from 'class-variance-authority';

export const nativeSelectRightSectionWrapperStyles = cva(
  [
    'absolute',
    'top-0',
    'right-0',
    'flex',
    'justify-center',
    'items-center',
    'pointer-events-none',

    'motion-safe:transition',
    'motion-safe:duration-150',
  ],
  {
    variants: {
      size: {
        sm: ['h-8', 'w-8'],
        md: ['h-9', 'w-9'],
        lg: ['h-10', 'w-10'],
      },
    },
  }
);
