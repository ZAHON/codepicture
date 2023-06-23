'use client';
import { useTransition } from 'react';
import { Button } from '@/components';
import {
  useProjectsPageStore,
  selectProjectDelateId,
  selectProjectDelateName,
  selectCloseProjectDelateAlertDialog,
} from '@projects/store';
import { notify } from '@/lib';
import { delateProject } from '@projects/server-actions';

export function ProjectDelateAlertDialogConfirmButton() {
  const [isPending, startTransition] = useTransition();

  const projectDelateId = useProjectsPageStore(selectProjectDelateId);
  const projectDelateName = useProjectsPageStore(selectProjectDelateName);

  const closeProjectDelateAlertDialog = useProjectsPageStore(selectCloseProjectDelateAlertDialog);

  function handleDelateProject() {
    const notificationId = crypto.randomUUID();

    if (projectDelateId && projectDelateName) {
      startTransition(async () => {
        try {
          await delateProject(projectDelateId);

          notify.show({
            id: notificationId,
            position: 'bottom-right',
            type: 'success',
            message: `Project ${projectDelateName} has been deleted`,
          });
        } catch {
          notify.show({
            id: notificationId,
            position: 'bottom-right',
            type: 'error',
            message: `Failed to delete project ${projectDelateName}`,
          });
        } finally {
          closeProjectDelateAlertDialog();
        }
      });
    } else {
      closeProjectDelateAlertDialog();

      notify.show({
        id: notificationId,
        position: 'bottom-right',
        type: 'error',
        message: 'An error occurred while deleting the project',
      });
    }
  }

  return (
    <Button onClick={handleDelateProject} loading={isPending} color="error" variant="light">
      Confirm
    </Button>
  );
}
