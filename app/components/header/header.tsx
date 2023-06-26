import Link from 'next/link';
import { Logo } from '@/svgs';
import { LoginButton } from '@/components';
import { GettingStartedLink } from '..';

export function Header() {
  return (
    <div className="sticky top-0 z-50 border-b border-b-neutral-5 backdrop-blur backdrop-saturate-100">
      <header className="flex h-14 items-center justify-between px-4 lg:mx-auto lg:max-w-7xl">
        <Link href="/">
          <Logo height="1.5rem" />
        </Link>
        <div className="flex items-center justify-center gap-x-2">
          {/* @ts-expect-error Server Component */}
          <LoginButton />
          {/* @ts-expect-error Server Component */}
          <GettingStartedLink />
        </div>
      </header>
    </div>
  );
}
