import { cva } from 'class-variance-authority';

export const alertDialogContentStyles = cva(
  [
    'z-50',
    'fixed',
    'top-1/2',
    'left-1/2',
    '-translate-x-1/2',
    '-translate-y-1/2',
    'w-[90vw]',
    'max-w-[37.5rem]',
    'p-6',
    'flex',
    'flex-col',
    'gap-y-6',
    'bg-panel',
    'rounded-lg',
    'drop-shadow-md',

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
