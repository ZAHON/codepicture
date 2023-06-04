import { cva } from 'class-variance-authority';

export const segmentedTabsIndicatorStyles = cva([
  'drop-shadow-md',
  'absolute',
  'top-0',
  'left-[calc(calc(100%/var(--segmented-tabs-triggers-count))*var(--segmented-tabs-checked-trigger-index))]',
  'h-full',
  'w-[calc(100%/var(--segmented-tabs-triggers-count))]',
  'rounded-lg',

  'bg-white',
  'dark:bg-neutral-9',

  'motion-safe:transition-all',
  'motion-safe:duration-150',
  'motion-safe:ease-linear',
]);
