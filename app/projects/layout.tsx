import type { ReactNode } from 'react';
import { Header, SubHeader, ProjectCardsWrapper } from './components';

export default function ProjectsPageLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <>
      <Header />
      <SubHeader />
      <ProjectCardsWrapper>{children}</ProjectCardsWrapper>
    </>
  );
}
