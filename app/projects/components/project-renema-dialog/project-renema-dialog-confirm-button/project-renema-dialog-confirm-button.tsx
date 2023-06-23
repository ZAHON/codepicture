'use client';
import { useTransition } from 'react';
import {
  useProjectsPageStore,
  selectProjectRenameId,
  selectProjectRenameName,
  selectProjectRenameNewName,
  selectCloseProjectRenameDialog,
} from '@projects/store';
import { Button } from '@/components';
import { notify } from '@/lib-client';
import { renameProject } from '@projects/server-actions';

export function ProjectRenemaDialogConfirmButton() {
  const [isPending, startTransition] = useTransition();

  const projectRenameId = useProjectsPageStore(selectProjectRenameId);
  const projectRenameName = useProjectsPageStore(selectProjectRenameName);
  const projectRenameNewName = useProjectsPageStore(selectProjectRenameNewName);

  const closeProjectRenameDialog = useProjectsPageStore(selectCloseProjectRenameDialog);

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
