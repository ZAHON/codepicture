import { ThemeChanger } from './theme-changer';

export function Footer() {
  return (
    <div className="border-t border-t-neutral-5">
      <footer className="flex h-14 items-center justify-between px-4 lg:mx-auto lg:max-w-7xl">
        <span className="text-sm font-medium">© 2023 Konrad Trusiuk</span>
        <ThemeChanger />
      </footer>
    </div>
  );
}
