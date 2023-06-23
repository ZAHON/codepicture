'use client';
import {
  useProjectsPageStore,
  selectProjectDelateAlertDialogOpen,
  selectSetProjectDelateAlertDialogOpen,
  selectCloseProjectDelateAlertDialog,
} from '@projects/store';
import {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from '@/components';
import { ProjectDelateAlertDialogCancelButton } from './project-delate-alert-dialog-cancel-button';
import { ProjectDelateAlertDialogConfirmButton } from './project-delate-alert-dialog-confirm-button';

export function ProjectDelateAlertDialog() {
  const projectDelateAlertDialogOpen = useProjectsPageStore(selectProjectDelateAlertDialogOpen);

  const setProjectDelateAlertDialogOpen = useProjectsPageStore(
    selectSetProjectDelateAlertDialogOpen
  );
  const closeProjectDelateAlertDialog = useProjectsPageStore(selectCloseProjectDelateAlertDialog);

  return (
    <AlertDialog open={projectDelateAlertDialogOpen} onOpenChange={setProjectDelateAlertDialogOpen}>
      <AlertDialogPortal>
        <AlertDialogOverlay blur />
        <AlertDialogContent
          onEscapeKeyDown={closeProjectDelateAlertDialog}
          className="max-w-md p-0"
        >
          <AlertDialogHeader>
            <AlertDialogTitle className="border-b border-b-neutral-5 px-6 py-4">
              Delete project
            </AlertDialogTitle>
            <AlertDialogDescription className="px-6">
              This action cannot be undone. This will permanently delete your project.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="px-6 py-3">
            <ProjectDelateAlertDialogCancelButton />
            <ProjectDelateAlertDialogConfirmButton />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
}
