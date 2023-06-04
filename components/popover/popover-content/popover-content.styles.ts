import { cva } from 'class-variance-authority';

export const popoverContentStyles = cva(
  [
    'z-50',
    'p-4',
    'bg-panel',
    'rounded-lg',
    'drop-shadow-md',

    'focus:outline-none',

    'will-change-[transform,opacity]',
    'data-[side=top]:motion-safe:animate-slide-down-and-fade',
    'data-[side=right]:motion-safe:animate-slide-left-and-fade',
    'data-[side=bottom]:motion-safe:animate-slide-up-and-fade',
    'data-[side=left]:motion-safe:animate-slide-right-and-fade',
  ],
  {
    variants: {
      withBorder: {
        true: ['border', 'border-neutral-5'],
      },
    },
  }
);
