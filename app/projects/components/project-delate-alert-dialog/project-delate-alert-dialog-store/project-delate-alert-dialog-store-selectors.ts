import type { ProjectDelateAlertDialogState as State } from './project-delate-alert-dialog-store.types';

// project id
export const selectProjectId = (state: State) => state.projectId;
export const selectSetProjectId = (state: State) => state.setProjectId;

// project name
export const selectProjectName = (state: State) => state.projectName;
export const selectSetProjectName = (state: State) => state.setProjectName;

// alert dialog open
export const selectAlertDialogOpen = (state: State) => state.alertDialogOpen;
export const selectSetAlertDialogOpen = (state: State) => state.setAlertDialogOpen;
