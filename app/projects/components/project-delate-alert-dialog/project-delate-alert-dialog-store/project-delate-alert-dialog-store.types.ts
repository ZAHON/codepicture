export interface ProjectDelateAlertDialogState {
  projectId: string | undefined;
  projectName: string | undefined;
  alertDialogOpen: boolean;

  setProjectId: (projectId: string | undefined) => void;
  setProjectName: (projectName: string | undefined) => void;
  setAlertDialogOpen: (alertDialogOpen: boolean) => void;
}
