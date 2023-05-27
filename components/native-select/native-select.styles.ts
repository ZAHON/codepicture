import { cva } from 'class-variance-authority';

export const nativeSelectStyles = cva(
  [
    'w-full',
    'flex',
    'justify-between',
    'items-center',
    'rounded-lg',
    'bg-neutral-6',
    'border-2',
    'border-neutral-6',
    'select-none',
    'appearance-none',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'data-[disabled]:cursor-not-allowed',

    'data-[invalid]:border-error-9',

    'focus:outline-none',
    'focus:border-primary-9',
  ],
  {
    variants: {
      size: {
        sm: ['h-8', 'pl-2', 'pr-8', 'text-xs'],
        md: ['h-9', 'pl-3', 'pr-9', 'text-sm'],
        lg: ['h-10', 'pl-3', 'pr-10', 'text-base'],
      },
    },
  }
);
