import { cva } from 'class-variance-authority';

export const segmentedControlItemStyles = cva([
  'relative',
  'z-10',
  'flex-grow',
  'flex',
  'justify-center',
  'items-center',
  'gap-x-2',
  'w-px',
  'bg-transparent',
  'text-neutral-11',
  'rounded-lg',

  'motion-safe:transition',
  'motion-safe:duration-150',

  // 'enabled:hover:data-[state=unchecked]:text-neutral-12',

  'data-[state=checked]:font-medium',

  'data-[state=checked]:text-black',
  'dark:data-[state=checked]:text-white',

  'data-[disabled]:text-neutral-11',
  'data-[disabled]:opacity-40',
  'data-[disabled]:cursor-not-allowed',

  'focus:outline-none',
  'focus-visible:outline',
  'focus-visible:outline-2',
  'focus-visible:outline-offset-2',
  'focus-visible:outline-primary-9',
]);
