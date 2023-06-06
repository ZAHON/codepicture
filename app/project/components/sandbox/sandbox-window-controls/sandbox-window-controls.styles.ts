import { cva } from 'class-variance-authority';

export const sandboxWindowControlsStyles = cva(
  [
    'h-full',
    'flex',
    'justify-center',
    'items-center',
    'text-[color:var(--sandbox-window-tab-inactive-foreground)]',

    'motion-safe:transition-[color]',
    'motion-safe:ease-linear',
    'motion-safe:duration-150',
  ],
  {
    variants: {
      onLeftSide: {
        true: ['ml-auto'],
      },
    },
  }
);
