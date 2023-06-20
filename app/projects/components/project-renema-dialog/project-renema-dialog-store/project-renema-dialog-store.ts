import { create } from 'zustand';
import type { ProjectRenameDialogState } from './project-renema-dialog-store.types';

export const useProjectRenameDialogStore = create<ProjectRenameDialogState>()((set) => ({
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
}));
