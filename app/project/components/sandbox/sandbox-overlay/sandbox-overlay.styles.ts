import { cva } from 'class-variance-authority';

export const sandboxOverlayStyles = cva([
  '[--pixel-color:hsl(var(--color-neutral-6))]',
  'dark:[--pixel-color:hsl(var(--color-neutral-6)/.3)]',

  'bg-[length:1.25rem_1.25rem]',
  'bg-[position:0_0,0_0.625rem,0.625rem_-0.625rem,-0.625rem_0]',
  'bg-[linear-gradient(45deg,var(--pixel-color)_25%,transparent_0),linear-gradient(-45deg,var(--pixel-color)_25%,transparent_0),linear-gradient(45deg,transparent_75%,var(--pixel-color)_0),linear-gradient(-45deg,transparent_75%,var(--pixel-color)_0)]',
]);
