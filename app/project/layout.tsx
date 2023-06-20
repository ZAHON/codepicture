import type { ReactNode } from 'react';
import {
  LoadingError,
  ExportImageDialog,
  KeyboardShortcuts,
  Header,
  Menu,
  BottomMenu,
} from './components';

export default function ProjectPageLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <>
      <LoadingError />
      <ExportImageDialog />
      <KeyboardShortcuts />

      <Header />
      <div className="flex h-[calc(100vh-7rem)] flex-row overflow-hidden md:h-[calc(100vh-3.5rem)] [@supports(height:100dvh)]:h-[calc(100dvh-7rem)] md:[@supports(height:100dvh)]:h-[calc(100dvh-3.5rem)]">
        <Menu />
        <div className="scrollable grid h-full w-full items-center justify-items-center overflow-auto bg-neutral-1 p-4 md:w-[calc(100vw-21.25rem)] md:p-16">
          {children}
        </div>
      </div>
      <BottomMenu />
    </>
  );
}
