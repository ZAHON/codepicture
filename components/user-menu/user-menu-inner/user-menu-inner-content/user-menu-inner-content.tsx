'use client';
import type { UserMenuInnerContentProps } from './user-menu-inner-content.types';
import { useMediaQuery } from '@/hooks';
import { MenuContent, MenuGroup } from '@/components';

export function UserMenuInnerContent(props: UserMenuInnerContentProps) {
  const { children } = props;

  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <MenuContent
      size="md"
      align="end"
      sideOffset={matches ? 15 : 10}
      className="w-screen rounded-none border-x-0 border-t-0 md:w-auto md:rounded-lg md:border md:border-neutral-5"
    >
      <MenuGroup>{children}</MenuGroup>
    </MenuContent>
  );
}
