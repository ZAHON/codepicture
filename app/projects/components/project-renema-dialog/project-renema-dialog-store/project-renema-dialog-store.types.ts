export interface ProjectRenameDialogState {
  projectRenameId: string | undefined;
  projectRenameName: string | undefined;
  projectRenameNewName: string | undefined;
  projectRenameDialogOpen: boolean;

  setProjectRenameId: (projectRenameId: string | undefined) => void;
  setProjectRenameName: (projectRenameName: string | undefined) => void;
  setProjectRenameNewName: (projectRenameName: string | undefined) => void;
  setProjectRenameDialogOpen: (projectRenameDialogOpen: boolean) => void;
  openProjectRenameDialog: (args: {
    projectRenameId: string;
    projectRenameName: string;
    projectRenameNewName: string;
  }) => void;
  closeProjectRenameDialog: () => void;
}
