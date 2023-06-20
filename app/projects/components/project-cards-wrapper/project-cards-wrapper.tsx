import type { ProjectCardsWrapperProps } from './project-cards-wrapper.types';

export function ProjectCardsWrapper(props: ProjectCardsWrapperProps) {
  const { children } = props;

  return (
    <main className="scrollable h-[calc(100vh-7.8125rem)] overflow-y-auto overflow-x-hidden p-4 lg:mx-auto lg:max-w-7xl">
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">{children}</ul>
    </main>
  );
}
