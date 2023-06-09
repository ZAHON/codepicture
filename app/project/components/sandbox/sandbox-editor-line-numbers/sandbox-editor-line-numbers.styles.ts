import { cva } from 'class-variance-authority';

export const sandboxEditorLineNumbersStyles = cva(['flex', 'flex-col']);

export const sandboxEditorLineNumbersListItemStyles = cva([
  'pr-[0.625rem]',
  'pl-[1.3125rem]',
  'flex',
  'justify-end',
  'items-center',
  'select-none',
  'text-right',
  'text-[color:var(--sandbox-editor-line-number-inactive-foreground)]',
]);

export const sandboxEditorLineNumbersItemStyles = cva([
  'scale-90',

  'motion-safe:transition-[color]',
  'motion-safe:ease-linear',
  'motion-safe:duration-150',
]);
