import { cva } from 'class-variance-authority';

export const textInputStyles = cva(
  [
    'w-full',
    'flex',
    'justify-between',
    'items-center',
    'select-none',
    'appearance-none',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'data-[disabled]:text-neutral-11',
    'data-[disabled]:opacity-40',
    'data-[disabled]:cursor-not-allowed',

    'data-[invalid]:text-error-11',
    'data-[invalid]:border-error-9',

    'focus:outline-none',
    'focus:border-primary-9',
  ],
  {
    variants: {
      variant: {
        filled: ['rounded-lg', 'bg-neutral-6', 'border-2', 'border-neutral-6'],
        underlined: ['bg-transparent', 'border-b-2', 'border-b-neutral-6'],
      },
      size: {
        sm: ['h-8', 'px-2', 'text-xs'],
        md: ['h-9', 'px-3', 'text-sm'],
        lg: ['h-10', 'px-3', 'text-base'],
      },
    },
  }
);
