'use client';
import { useTransition } from 'react';
import {
  useProjectRenameDialogStore,
  selectProjectRenameId,
  selectProjectRenameName,
  selectProjectRenameNewName,
  selectCloseProjectRenameDialog,
} from '../project-renema-dialog-store';
import { Button } from '@/components';
import { notify } from '@/lib';
import { renameProject } from '../../../server-actions';

export function ProjectRenemaDialogConfirmButton() {
  const [isPending, startTransition] = useTransition();

  const projectRenameId = useProjectRenameDialogStore(selectProjectRenameId);
  const projectRenameName = useProjectRenameDialogStore(selectProjectRenameName);
  const projectRenameNewName = useProjectRenameDialogStore(selectProjectRenameNewName);

  const closeProjectRenameDialog = useProjectRenameDialogStore(selectCloseProjectRenameDialog);

  function handleRenameProject() {
    const notificationId = crypto.randomUUID();

    if (projectRenameId && projectRenameName) {
      const projectRenameNameTrim = projectRenameName.trim();
      const projectRenameNewNameTrim = projectRenameNewName?.trim();

      if (
        projectRenameNewNameTrim &&
        projectRenameNameTrim !== projectRenameNewNameTrim &&
        projectRenameNewNameTrim.length !== 0
      ) {
        startTransition(async () => {
          try {
            await renameProject({
              projectId: projectRenameId,
              projectName: projectRenameNewNameTrim,
            });

            notify.show({
              id: notificationId,
              position: 'bottom-right',
              type: 'success',
              message: `Project has been renamed`,
            });
          } catch {
            notify.show({
              id: notificationId,
              position: 'bottom-right',
              type: 'error',
              message: `Failed to rename project ${projectRenameNameTrim}`,
            });
          } finally {
            closeProjectRenameDialog();
          }
        });
      } else {
        closeProjectRenameDialog();
      }
    } else {
      closeProjectRenameDialog();

      notify.show({
        id: notificationId,
        position: 'bottom-right',
        type: 'error',
        message: 'An error occurred while renaming the project',
      });
    }
  }

  return (
    <Button onClick={handleRenameProject} size="md" loading={isPending}>
      Confirm
    </Button>
  );
}
