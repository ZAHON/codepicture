import { cva } from 'class-variance-authority';

export const notificationStyles = cva(
  [
    'p-3',
    'flex',
    'items-center',
    'gap-x-4',
    'w-full',
    'lg:w-96',
    'text-neutral-12',
    'bg-panel',
    'rounded-lg',
    'drop-shadow-lg',
  ],
  {
    variants: {
      fontSize: {
        sm: ['text-xs'],
        md: ['text-sm'],
        lg: ['text-base'],
      },
      withBorder: {
        true: ['border', 'border-neutral-5'],
      },
    },
  }
);
