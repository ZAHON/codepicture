import type { StateCreator } from 'zustand';

export interface ProjectDelateSlice {
  projectDelateId: string | undefined;
  projectDelateName: string | undefined;
  projectDelateAlertDialogOpen: boolean;

  setProjectDelateId: (projectDelateId: string | undefined) => void;
  setProjectDelateName: (projectDelateName: string | undefined) => void;
  setProjectDelateAlertDialogOpen: (projectDelateAlertDialogOpen: boolean) => void;

  openProjectDelateAlertDialog: (args: {
    projectDelateId: string;
    projectDelateName: string;
  }) => void;

  closeProjectDelateAlertDialog: () => void;
}

export type CreateProjectDelateSlice = StateCreator<ProjectDelateSlice, [], [], ProjectDelateSlice>;
