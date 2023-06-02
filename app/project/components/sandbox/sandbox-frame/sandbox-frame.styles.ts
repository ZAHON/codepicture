import { cva } from 'class-variance-authority';

export const sandboxFrameStyles = cva([
  'relative',
  'h-fit',
  'w-fit',
  'px-[var(--sandbox-frame-padding-inline)]',
  'py-[var(--sandbox-frame-padding-block)]',

  'before:content-[""]',
  'before:absolute',
  'before:inset-0',
  'before:[background:var(--sandbox-frame-fill)]',
  'before:opacity-[var(--sandbox-frame-opacity)]',
]);
