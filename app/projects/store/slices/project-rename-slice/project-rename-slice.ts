import type { CreateProjectRenameSlice } from './project-rename-slice.types';

export const createProjectRenameSlice: CreateProjectRenameSlice = (set) => ({
  projectRenameId: undefined,
  projectRenameName: undefined,
  projectRenameNewName: undefined,
  projectRenameDialogOpen: false,

  setProjectRenameId: (projectRenameId) => set(() => ({ projectRenameId })),
  setProjectRenameName: (projectRenameName) => set(() => ({ projectRenameName })),
  setProjectRenameNewName: (projectRenameNewName) => set(() => ({ projectRenameNewName })),
  setProjectRenameDialogOpen: (projectRenameDialogOpen) => set(() => ({ projectRenameDialogOpen })),

  openProjectRenameDialog: (args) => {
    const { projectRenameId, projectRenameName, projectRenameNewName } = args;

    set(() => ({
      projectRenameId,
      projectRenameName,
      projectRenameNewName,
      projectRenameDialogOpen: true,
    }));
  },

  closeProjectRenameDialog: () =>
    set(() => ({
      projectRenameId: undefined,
      projectRenameName: undefined,
      projectRenameNewName: undefined,
      projectRenameDialogOpen: false,
    })),
});
