import type { ReactNode } from 'react';
import { Header, SubHeader, ProjectDelateAlertDialog, ProjectRenameDialog } from './components';

export default function ProjectsPageLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <>
      <Header />
      <SubHeader />
      <main className="scrollable h-[calc(100vh-11.0625rem)] overflow-y-auto overflow-x-hidden p-4 lg:mx-auto lg:max-w-7xl">
        {children}
      </main>

      <ProjectRenameDialog />
      <ProjectDelateAlertDialog />
    </>
  );
}
