import { cva } from 'class-variance-authority';

export const menuItemStyles = cva(
  [
    'flex',
    'items-center',
    'gap-x-2',
    'px-3',
    'rounded-lg',
    'bg-transparent',
    'cursor-pointer',
    'select-none',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'focus-visible:outline-none',

    'data-[disabled]:opacity-40',
    'data-[disabled]:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        sm: ['h-8', 'text-xs'],
        md: ['h-9', 'text-sm'],
        lg: ['h-10', 'text-base'],
      },
      color: {
        neutral: [
          'text-neutral-12',
          'data-[highlighted]:bg-neutral-4',
          'focus-visible:bg-neutral-4',
          'enabled:active:bg-neutral-5',
        ],
        error: [
          'text-error-11',
          'data-[highlighted]:bg-error-4',
          'focus-visible:bg-error-4',
          'enabled:active:bg-error-5',
        ],
      },
    },
  }
);
