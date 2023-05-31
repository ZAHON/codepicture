'use client';
import { IconBrightnessHalf } from '@tabler/icons-react';

export function ThemeChangerPlaceholder() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-4 text-neutral-12">
      <IconBrightnessHalf size="1.25rem" aria-hidden="true" focusable="false" />
    </div>
  );
}
