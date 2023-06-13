import { Logo } from '@/svgs';
import { DropdownMenu } from '..';

export function Header() {
  return (
    <header className="flex h-14  items-center justify-between border-b border-b-neutral-5 bg-white px-4 dark:bg-black">
      <Logo height="1.5rem" />
      <DropdownMenu />
    </header>
  );
}
