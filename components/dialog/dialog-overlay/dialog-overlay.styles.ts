import { cva } from 'class-variance-authority';

export const dialogOverlayStyles = cva(
  [
    'z-40',
    'fixed',
    'inset-0',
    'bg-black/20',

    'motion-safe:data-[state=open]:will-change-[opacity]',
    'motion-safe:data-[state=open]:animate-show-dialog-overlay',
  ],
  {
    variants: {
      blur: {
        true: ['backdrop-blur-sm'],
      },
    },
  }
);
