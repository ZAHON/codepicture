import type { ReactNode } from 'react';
import { Header } from './components';

export default function ProjectsPageLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
