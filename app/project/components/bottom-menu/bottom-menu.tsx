'use client';
import { useMediaQuery } from '@/hooks';
import { BottomMenuPopover } from './bottom-menu-popover';

export function BottomMenu() {
  const matches = useMediaQuery('(min-width: 768px)');

  if (matches) {
    return null;
  }

  return <BottomMenuPopover />;
}
