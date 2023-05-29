import { cva } from 'class-variance-authority';

export const selectStyles = cva(
  [
    'w-full',
    'flex',
    'justify-between',
    'items-center',
    'rounded-lg',
    'bg-neutral-6',
    'border-2',
    'border-neutral-6',
    'text-neutral-12',
    'select-none',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'data-[disabled]:text-neutral-11',
    'data-[disabled]:opacity-40',
    'data-[disabled]:cursor-not-allowed',

    'focus:outline-none',
    'focus:border-primary-9',
    'data-[state=open]:border-primary-9',
  ],
  {
    variants: {
      size: {
        sm: ['h-8', 'px-2', 'gap-x-2', 'text-xs'],
        md: ['h-9', 'px-3', 'gap-x-3', 'text-sm'],
        lg: ['h-10', 'px-3', 'gap-x-3', 'text-base'],
      },
    },
  }
);
