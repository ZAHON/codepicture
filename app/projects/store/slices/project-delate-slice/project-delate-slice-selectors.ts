import type { ProjectsPageState as State } from '../../use-projects-page-store.types';

// project id
export const selectProjectDelateId = (state: State) => state.projectDelateId;
export const selectSetProjectDelateId = (state: State) => state.setProjectDelateId;

// project name
export const selectProjectDelateName = (state: State) => state.projectDelateName;
export const selectSetProjectDelateName = (state: State) => state.setProjectDelateName;

// alert dialog open
export const selectProjectDelateAlertDialogOpen = (state: State) =>
  state.projectDelateAlertDialogOpen;
export const selectSetProjectDelateAlertDialogOpen = (state: State) =>
  state.setProjectDelateAlertDialogOpen;

// open project delate alert dialog
export const selectOpenProjectDelateAlertDialog = (state: State) =>
  state.openProjectDelateAlertDialog;

// close project delate alert dialog
export const selectCloseProjectDelateAlertDialog = (state: State) =>
  state.closeProjectDelateAlertDialog;
