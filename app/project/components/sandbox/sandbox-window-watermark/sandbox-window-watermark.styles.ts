import { cva } from 'class-variance-authority';

export const sandboxWindowWatermarkStyles = cva([
  'absolute',
  'z-20',
  'bottom-4',
  'right-4',
  'opacity-75',
  'text-[color:var(--sandbox-window-tab-inactive-foreground)]',
]);
