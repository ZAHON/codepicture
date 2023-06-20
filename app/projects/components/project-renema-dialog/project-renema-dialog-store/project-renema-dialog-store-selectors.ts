import type { ProjectRenameDialogState as State } from './project-renema-dialog-store.types';

// project rename id
export const selectProjectRenameId = (state: State) => state.projectRenameId;
export const selectSetProjectRenameId = (state: State) => state.setProjectRenameId;

// project rename name
export const selectProjectRenameName = (state: State) => state.projectRenameName;
export const selectSetProjectRenameName = (state: State) => state.setProjectRenameName;

// project rename new name
export const selectProjectRenameNewName = (state: State) => state.projectRenameNewName;
export const selectSetProjectRenameNewName = (state: State) => state.setProjectRenameNewName;

// alert dialog open
export const selectProjectRenameDialogOpen = (state: State) => state.projectRenameDialogOpen;
export const selectSetProjectRenameDialogOpen = (state: State) => state.setProjectRenameDialogOpen;

// open project rename dialog
export const selectOpenProjectRenameDialog = (state: State) => state.openProjectRenameDialog;

// close project rename dialog
export const selectCloseProjectRenameDialog = (state: State) => state.closeProjectRenameDialog;
