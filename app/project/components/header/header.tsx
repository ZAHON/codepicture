import { ThemeChanger } from '@/components';

export function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-b-neutral-5 bg-white px-4 dark:bg-black">
      <h1>CodePicture</h1>
      <div className="flex items-center gap-x-2">
        <ThemeChanger />
      </div>
    </header>
  );
}
