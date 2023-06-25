import { Logo } from '@/svgs';
import { LoginButton, UserMenu } from '@/components';
import { RenameProjectDialog, DropdownMenu } from '..';

export function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-b-neutral-5 bg-white px-4 dark:bg-black">
      <Logo height="1.5rem" />
      <div className="flex items-center justify-center gap-x-4">
        {/* @ts-expect-error Server Component */}
        <LoginButton />
        <RenameProjectDialog />
        <DropdownMenu />
        {/* @ts-expect-error Server Component */}
        <UserMenu />
      </div>
    </header>
  );
}
