import { cva } from 'class-variance-authority';

export const numberInputWrapperStyles = cva(['flex', 'items-center', 'gap-x-2']);

export const numberInputStyles = cva(
  [
    'flex-1',
    'w-full',
    'px-3',
    'rounded-lg',
    'bg-neutral-6',
    'border-2',
    'border-neutral-6',
    'text-center',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'data-[disabled]:text-neutral-11',
    'data-[disabled]:opacity-40',
    'data-[disabled]:cursor-not-allowed',

    'data-[invalid]:border-error-9',

    'focus:outline-none',
    'focus:border-primary-9',
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

export const numberInputSpinButtonStyles = cva(
  [
    'flex',
    'justify-center',
    'items-center',
    'rounded-lg',
    'whitespace-nowrap',
    'select-none',
    'origin-center',
    'overflow-hidden',

    'text-neutral-12',
    'bg-neutral-4',
    'enabled:hover:bg-neutral-5',
    'enabled:active:bg-neutral-6',
    'focus-visible:bg-neutral-5',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-primary-9',

    'enabled:active:scale-95',

    'data-[disabled]:text-neutral-11',
    'disabled:opacity-40',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        sm: ['h-8', 'w-8'],
        md: ['h-9', 'w-9'],
        lg: ['h-10', 'w-10'],
      },
    },
  }
);
