import { cva } from 'class-variance-authority';

export const sandboxWindowReflectionStyles = cva(
  [
    'before:z-10',
    'before:pointer-events-none',
    'before:content-[""]',
    'before:absolute',
    'before:top-0',
    'before:left-0',
    'before:h-full',
    'before:w-full',
    'before:[transform:skew(-18deg)_translate(-50%)]',
    'before:motion-safe:transition-[background_opacity]',
    'before:motion-safe:ease-linear',
    'before:motion-safe:duration-150',
  ],
  {
    variants: {
      visible: {
        true: ['before:opacity-100'],
        false: ['before:opacity-0'],
      },
      type: {
        dark: ['before:bg-[linear-gradient(rgba(255,255,255,.035)_35%,rgba(255,255,255,0%)_100%)]'],
        light: ['before:bg-[linear-gradient(rgba(100,100,100,.035)_35%,rgba(0,0,0,0%)_100%)]'],
      },
    },
  }
);
