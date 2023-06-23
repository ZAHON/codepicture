'use client';
import type { ProjectCardMenuCloneProps } from './project-card-menu-clone.types';
import { useTransition } from 'react';
import { IconCopy } from '@tabler/icons-react';
import { MenuItem } from '@/components';
import { notify } from '@/lib';
import { useProjectsPageStore, selectSetProjectCloneId } from '@projects/store';
import { cloneProject } from '@projects/server-actions';

export function ProjectCardMenuClone(props: ProjectCardMenuCloneProps) {
  const { projectId, projectName } = props;

  const [isPending, startTransition] = useTransition();

  const setProjectCloneId = useProjectsPageStore(selectSetProjectCloneId);

  function handleCloneProject() {
    const notificationId = crypto.randomUUID();

    startTransition(async () => {
      try {
        setProjectCloneId(projectId);

        notify.show({
          id: notificationId,
          position: 'bottom-right',
          type: 'loading',
          message: `Project ${projectName} is being cloned`,
        });

        await cloneProject(projectId);

        notify.show({
          id: notificationId,
          position: 'bottom-right',
          type: 'success',
          message: `Project ${projectName} has been cloned`,
        });
      } catch {
        notify.show({
          id: notificationId,
          position: 'bottom-right',
          type: 'error',
          message: `Failed to cloned project ${projectName}`,
        });
      } finally {
        setProjectCloneId(undefined);
      }
    });
  }

  return (
    <MenuItem
      onSelect={handleCloneProject}
      disabled={isPending}
      icon={<IconCopy size="1rem" aria-hidden="true" focusable="false" />}
    >
      Clone
    </MenuItem>
  );
}
