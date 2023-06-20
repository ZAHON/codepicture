'use client';
import { useTransition } from 'react';
import {
  useProjectDelateAlertDialogStore as useStore,
  selectProjectId,
  selectProjectName,
  selectAlertDialogOpen,
  selectSetAlertDialogOpen,
  selectSetProjectId,
  selectSetProjectName,
} from './project-delate-alert-dialog-store';
import {
  Button,
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components';
import { notify } from '@/lib';
import { delateProject } from '../../server-actions';

export function ProjectDelateAlertDialog() {
  const [isPending, startTransition] = useTransition();

  const projectId = useStore(selectProjectId);
  const projectName = useStore(selectProjectName);
  const alertDialogOpen = useStore(selectAlertDialogOpen);

  const setProjectId = useStore(selectSetProjectId);
  const setProjectName = useStore(selectSetProjectName);
  const setAlertDialogOpen = useStore(selectSetAlertDialogOpen);

  function handleDelateProject() {
    const notificationId = crypto.randomUUID();

    if (projectId && projectName) {
      startTransition(async () => {
        try {
          notify.show({
            id: notificationId,
            position: 'bottom-right',
            type: 'loading',
            message: `Project ${projectName} is being deleted`,
          });

          await delateProject(projectId);

          notify.show({
            id: notificationId,
            position: 'bottom-right',
            type: 'success',
            message: `Project ${projectName} has been deleted`,
          });
        } catch {
          notify.show({
            id: notificationId,
            position: 'bottom-right',
            type: 'error',
            message: `Failed to delete project ${projectName}`,
          });
        } finally {
          setProjectId(undefined);
          setProjectName(undefined);
        }
      });
    } else {
      notify.show({
        id: notificationId,
        position: 'bottom-right',
        type: 'error',
        message: 'An error occurred while deleting the project',
      });
    }
  }

  function handleCloseDelateAlertDialog() {
    setProjectId(undefined);
    setProjectName(undefined);
  }

  return (
    <AlertDialog open={alertDialogOpen} onOpenChange={setAlertDialogOpen}>
      <AlertDialogPortal>
        <AlertDialogOverlay blur />
        <AlertDialogContent className="max-w-md p-0">
          <AlertDialogHeader>
            <AlertDialogTitle className="border-b border-b-neutral-5 px-6 py-4">
              Delete project
            </AlertDialogTitle>
            <AlertDialogDescription className="px-6">
              This action cannot be undone. This will permanently delete your project.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="px-6 py-3">
            <AlertDialogCancel>
              <Button onClick={handleCloseDelateAlertDialog} color="neutral" variant="light">
                Cancel
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction>
              <Button
                onClick={handleDelateProject}
                disabled={isPending}
                color="error"
                variant="light"
              >
                Confirm
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
}
