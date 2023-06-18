import type { ReactNode } from 'react';

export default function ProjectsPageLayout(props: { children: ReactNode }) {
  const { children } = props;

  return <div>{children}</div>;
}
