import { cva } from 'class-variance-authority';

export const sandboxSyntaxHighlighterStyles = cva([
  'block',
  'w-auto',
  'text-[1em]',
  '[font-family:inherit_!important]',
]);

export const sandboxSyntaxHighlighterLineStyles = cva([
  'block',
  'w-full',
  'pl-[var(--sandbox-editor-padding-left)]',
  'pr-[1.3125rem]',
  'empty:before:block',
  'empty:before:break-words',
  'empty:before:content-["_"]',
]);

export const sandboxSyntaxHighlighterTokenStyles = cva([
  'motion-safe:transition-[color]',
  'motion-safe:ease-linear',
  'motion-safe:duration-150',
]);
