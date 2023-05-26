import { cva } from 'class-variance-authority';

export const segmentedSwitchIndicatorStyles = cva(
  [
    'drop-shadow-md',
    'absolute',
    'top-0',
    'h-full',
    'w-[calc(100%/2)]',
    'rounded-lg',

    'bg-white',
    'dark:bg-neutral-9',

    'motion-safe:transition-all',
    'motion-safe:duration-150',
    'motion-safe:ease-linear',
  ],
  {
    variants: {
      inverted: {
        false: [
          'data-[state=unchecked]:left-[calc(calc(100%/2)*0)]',
          'data-[state=checked]:left-[calc(calc(100%/2)*1)]',
        ],
        true: [
          'data-[state=unchecked]:left-[calc(calc(100%/2)*1)]',
          'data-[state=checked]:left-[calc(calc(100%/2)*0)]',
        ],
      },
    },
  }
);
