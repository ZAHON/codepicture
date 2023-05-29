import { cva } from 'class-variance-authority';

export const menuRadioItemStyles = cva(
  [
    'flex',
    'items-center',
    'gap-x-2',
    'px-3',
    'rounded-lg',
    'bg-transparent',
    'cursor-pointer',
    'select-none',
    'text-neutral-12',
    'data-[highlighted]:bg-neutral-4',
    'enabled:active:bg-neutral-5',
    'focus-visible:bg-neutral-4',
    'focus-visible:bg-neutral-5',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'focus-visible:outline-none',

    'data-[disabled]:opacity-40',
    'data-[disabled]:cursor-not-allowed',

    'data-[state=checked]:font-medium',
    'data-[state=checked]:text-primary-11',
    'data-[state=checked]:bg-primary-4',
    'data-[state=checked]:enabled:hover:bg-primary-5',
    'data-[state=checked]:focus-visible:bg-primary-5',
    'data-[state=checked]:enabled:active:bg-primary-6',
  ],
  {
    variants: {
      size: {
        sm: ['h-8', 'text-xs'],
        md: ['h-9', 'text-sm'],
        lg: ['h-10', 'text-base'],
      },
    },
  }
);
