import { cva } from 'class-variance-authority';

export const segmentedSwitchLabelStyles = cva([
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

  'data-[state=checked]:font-medium',

  'data-[state=checked]:text-black',
  'dark:data-[state=checked]:text-white',

  'focus:outline-none',
  'focus-visible:outline',
  'focus-visible:outline-2',
  'focus-visible:outline-offset-2',
  'focus-visible:outline-primary-9',
]);
