import { ThemeChanger } from '@/components';
import { DropdownMenu } from '..';

export function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-b-neutral-5 bg-white px-4 dark:bg-black">
      <DropdownMenu />
      <div className="flex items-center gap-x-2">
        <ThemeChanger />
      </div>
    </header>
  );
}
