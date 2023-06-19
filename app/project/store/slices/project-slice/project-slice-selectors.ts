import type { StoreState } from '../../use-store.types';

// project id
export const selectProjectId = (state: StoreState) => state.projectId;
export const selectSetProjectId = (state: StoreState) => state.setProjectId;

// project name
export const selectProjectName = (state: StoreState) => state.projectName;
export const selectSetProjectName = (state: StoreState) => state.setProjectName;
