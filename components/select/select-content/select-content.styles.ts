import { cva } from 'class-variance-authority';

export const selectContentStyles = cva([
  'z-50',
  'w-[var(--radix-select-trigger-width)]',
  'bg-panel',
  'rounded-lg',
  'drop-shadow-xl',

  'will-change-[transform,opacity]',
  'data-[side=top]:motion-safe:animate-slide-down-and-fade',
  'data-[side=right]:motion-safe:animate-slide-left-and-fade',
  'data-[side=bottom]:motion-safe:animate-slide-up-and-fade',
  'data-[side=left]:motion-safe:animate-slide-right-and-fade',
]);
