import Link from 'next/link';
import { Logo } from '@/svgs';
import { UserMenu } from '@/components';

export function Header() {
  return (
    <div className="border-b border-b-neutral-5 backdrop-blur backdrop-saturate-100">
      <header className="flex h-14 items-center justify-between px-4 lg:mx-auto lg:max-w-7xl">
        <Link href="/">
          <Logo height="1.5rem" />
        </Link>
        {/* @ts-expect-error Server Component */}
        <UserMenu />
      </header>
    </div>
  );
}
