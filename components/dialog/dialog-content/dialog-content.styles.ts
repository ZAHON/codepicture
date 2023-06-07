import { cva } from 'class-variance-authority';

export const dialogContentStyles = cva(
  [
    'z-50',
    'fixed',
    'top-1/2',
    'left-1/2',
    '-translate-x-1/2',
    '-translate-y-1/2',
    'w-[90vw]',
    'max-w-[37.5rem]',
    'flex',
    'flex-col',
    'bg-panel',
    'rounded-lg',
    'shadow-md',

    'motion-safe:data-[state=open]:will-change-[opacity_transform]',
    'motion-safe:data-[state=open]:animate-show-dialog-content',
  ],
  {
    variants: {
      withBorder: {
        true: ['border', 'border-neutral-5'],
      },
    },
  }
);
