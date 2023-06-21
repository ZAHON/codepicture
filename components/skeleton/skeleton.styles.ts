import { cva } from 'class-variance-authority';

export const skeletonStyles = cva(
  [
    'relative',
    'bg-transparent',

    'motion-safe:[--skeleton-animation-duration:1500ms]',
    'motion-reduce:[--skeleton-animation-duration:3000ms]',
  ],
  {
    variants: {
      visible: {
        true: [
          '[&>*]:invisible',

          'select-none',
          'pointer-events-none',
          'overflow-hidden',

          'before:content-[""]',
          'before:absolute',
          'before:inset-0',
          'before:bg-neutral-4',

          'after:content-[""]',
          'after:absolute',
          'after:inset-0',
          'after:bg-neutral-6',
        ],
      },
      animated: {
        true: ['after:animate-skeleton-fade'],
      },
      fitContent: {
        true: ['w-fit'],
      },
    },
  }
);
