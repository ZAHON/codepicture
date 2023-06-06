import { cva } from 'class-variance-authority';

export const wrapperStyles = cva(['flex', 'justify-center', 'items-center', 'px-4'], {
  variants: {
    tabAccent: {
      true: [
        'relative',
        'h-[2.375rem]',
        'self-end',
        'rounded-tl-md',
        'rounded-tr-md',
        'shadow-[1px_10px_5px_1px_#00000040]',
        'bg-[var(--sandbox-editor-background)]',

        'before:content-[""]',
        'before:absolute',
        'before:bottom-0',
        'before:-left-2',
        'before:h-2',
        'before:w-2',
        'before:bg-transparent',
        'before:rounded-br-md',
        'before:shadow-[1px_0_0_0_var(--sandbox-editor-background),3px_4px_0_0_var(--sandbox-editor-background)]',

        'after:content-[""]',
        'after:absolute',
        'after:bottom-0',
        'after:-right-2',
        'after:scale-x-[-1]',
        'after:h-2',
        'after:w-2',
        'after:bg-transparent',
        'after:rounded-br-[12px]',
        'after:shadow-[1px_0_0_0_var(--sandbox-editor-background),3px_4px_0_0_var(--sandbox-editor-background)]',
      ],
    },
  },
});

export const inputStyles = cva([
  'bg-transparent',
  'text-sm',
  'focus:outline-none',
  'text-[color:var(--sandbox-window-tab-active-foreground)]',
  'caret-[color:var(--sandbox-editor-cursor-foreground)]',
  'placeholder:text-[color:var(--sandbox-window-tab-inactive-foreground)]',
]);
