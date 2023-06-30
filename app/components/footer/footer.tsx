import { ThemeChanger } from '..';

export function Footer() {
  return (
    <div className="border-t border-t-neutral-5">
      <footer className="flex h-14 items-center justify-between px-4 lg:mx-auto lg:max-w-7xl">
        <p className="text-sm font-medium">© 2023 Konrad Trusiuk</p>
        <ThemeChanger />
      </footer>
    </div>
  );
}
