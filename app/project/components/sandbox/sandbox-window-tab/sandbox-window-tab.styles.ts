import { cva } from 'class-variance-authority';

export const wrapperStyles = cva(
  [
    'h-full',
    'flex',
    'justify-center',
    'items-center',
    'px-4',
    'bg-transparent',
    'shadow-none',

    'motion-safe:transition-[background-color_height_box-shadow]',
    'motion-safe:ease-linear',
    'motion-safe:duration-150',
  ],
  {
    variants: {
      accent: {
        true: [
          'relative',
          'h-[2.375rem]',
          'mt-3',
          // 'self-end',
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
          'before:motion-safe:transition-[box-shadow]',
          'before:motion-safe:ease-linear',
          'before:motion-safe:duration-150',

          'after:content-[""]',
          'after:absolute',
          'after:bottom-0',
          'after:-right-2',
          'after:scale-x-[-1]',
          'after:h-2',
          'after:w-2',
          'after:bg-transparent',
          'after:rounded-br-md',
          'after:shadow-[1px_0_0_0_var(--sandbox-editor-background),3px_4px_0_0_var(--sandbox-editor-background)]',
          'after:motion-safe:transition-[box-shadow]',
          'after:motion-safe:ease-linear',
          'after:motion-safe:duration-150',
        ],
      },
    },
  }
);

export const inputStyles = cva([
  'bg-transparent',
  'text-sm',
  'focus:outline-none',
  'text-[color:var(--sandbox-window-tab-active-foreground)]',
  'caret-[color:var(--sandbox-editor-cursor-foreground)]',
  'placeholder:text-[color:var(--sandbox-window-tab-inactive-foreground)]',

  'placeholder:motion-safe:transition-[color]',
  'placeholder:motion-safe:ease-linear',
  'placeholder:motion-safe:duration-150',

  'motion-safe:transition-[color]',
  'motion-safe:ease-linear',
  'motion-safe:duration-150',
]);
