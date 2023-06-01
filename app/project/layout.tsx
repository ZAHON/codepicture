import type { ReactNode } from 'react';
import { Header, Menu, BottomMenu } from './components';

export default function ProjectPageLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <div>
      <Header />
      <div className="flex h-[calc(100vh-7rem)] flex-row overflow-hidden md:h-[calc(100vh-3.5rem)] [@supports(height:100dvh)]:h-[calc(100dvh-7rem)] md:[@supports(height:100dvh)]:h-[calc(100dvh-3.5rem)]">
        <Menu />
        <main className="scrollable grid h-full w-full items-center justify-items-center overflow-auto bg-neutral-1 p-4 md:w-[calc(100vw-21.25rem)] md:p-8">
          {children}
        </main>
      </div>
      <BottomMenu />
    </div>
  );
}
