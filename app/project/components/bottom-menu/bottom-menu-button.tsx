'use client';
import type { ReactNode } from 'react';

interface BottomMenuButtonProps {
  onClick: () => void;
  ariaLabel: string;
  children: ReactNode;
}

export function BottomMenuButton(props: BottomMenuButtonProps) {
  const { onClick, ariaLabel, children } = props;

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="flex flex-1 select-none items-center justify-center focus-visible:bg-neutral-5 enabled:hover:bg-neutral-5 enabled:active:scale-95 enabled:active:bg-neutral-6 motion-safe:transition motion-safe:duration-150"
    >
      {children}
    </button>
  );
}
