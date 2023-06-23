import type { ProjectsPageState as State } from '../../use-projects-page-store.types';

// projects count
export const selectProjectsCount = (state: State) => state.projectsCount;
export const selectSetProjectsCount = (state: State) => state.setProjectsCount;
