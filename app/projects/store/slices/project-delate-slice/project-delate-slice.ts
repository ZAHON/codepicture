import type { CreateProjectDelateSlice } from './project-delate-slice.types';

export const createProjectDelateSlice: CreateProjectDelateSlice = (set) => ({
  projectDelateId: undefined,
  projectDelateName: undefined,
  projectDelateAlertDialogOpen: false,

  setProjectDelateId: (projectDelateId) => set(() => ({ projectDelateId })),
  setProjectDelateName: (projectDelateName) => set(() => ({ projectDelateName })),
  setProjectDelateAlertDialogOpen: (projectDelateAlertDialogOpen) =>
    set(() => ({ projectDelateAlertDialogOpen })),

  openProjectDelateAlertDialog: (args) => {
    const { projectDelateId, projectDelateName } = args;

    set(() => ({
      projectDelateId,
      projectDelateName,
      projectDelateAlertDialogOpen: true,
    }));
  },

  closeProjectDelateAlertDialog: () =>
    set(() => ({
      projectDelateId: undefined,
      projectDelateName: undefined,
      projectDelateAlertDialogOpen: false,
    })),
});
