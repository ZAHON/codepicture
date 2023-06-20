import type { ProjectCardsWrapperProps } from './project-cards-wrapper.types';

export function ProjectCardsWrapper(props: ProjectCardsWrapperProps) {
  const { children } = props;

  return <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">{children}</ul>;
}
