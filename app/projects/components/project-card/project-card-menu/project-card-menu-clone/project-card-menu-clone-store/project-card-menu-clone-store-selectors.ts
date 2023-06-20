import type { ProjectCardMenuCloneState as State } from './project-card-menu-clone-store.types';

// project clone id
export const selectProjectCloneId = (state: State) => state.projectCloneId;
export const selectSetProjectCloneId = (state: State) => state.setProjectCloneId;
