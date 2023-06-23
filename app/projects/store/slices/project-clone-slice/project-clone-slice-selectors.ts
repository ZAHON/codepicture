import type { ProjectsPageState as State } from '../../use-projects-page-store.types';

// project clone id
export const selectProjectCloneId = (state: State) => state.projectCloneId;
export const selectSetProjectCloneId = (state: State) => state.setProjectCloneId;
