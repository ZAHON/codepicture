import { cva } from 'class-variance-authority';

export const segmentedControlIndicatorStyles = cva([
  'drop-shadow-md',
  'absolute',
  'top-0',
  'left-[calc(calc(100%/var(--segmented-control-items-count))*var(--segmented-control-checked-item-index))]',
  'h-full',
  'w-[calc(100%/var(--segmented-control-items-count))]',
  'rounded-lg',

  'bg-white',
  'dark:bg-neutral-9',

  'motion-safe:transition-all',
  'motion-safe:duration-150',
  'motion-safe:ease-linear',

  'data-[disabled]:opacity-40',
  'data-[disabled]:bg-neutral-9',
]);
