'use client';
import type { ProjectCardMenuCloneProps } from './project-card-menu-clone.types';
import { useTransition } from 'react';
import { IconCopy } from '@tabler/icons-react';
import { MenuItem } from '@/components';
import { notify } from '@/lib-client';
import {
  useProjectsPageStore,
  selectProjectsCount,
  selectSetProjectCloneId,
} from '@projects/store';
import { cloneProject } from '@projects/server-actions';

const notificationId = crypto.randomUUID();

export function ProjectCardMenuClone(props: ProjectCardMenuCloneProps) {
  const { projectId, projectName } = props;

  const [isPending, startTransition] = useTransition();

  const projectsCount = useProjectsPageStore(selectProjectsCount);
  const setProjectCloneId = useProjectsPageStore(selectSetProjectCloneId);

  const projectsLimt = projectsCount && projectsCount >= 50 ? true : false;

  function handleCloneProject() {
    if (projectsLimt) {
      notify.show({
        id: notificationId,
        position: 'bottom-right',
        type: 'error',
        message: 'You have reached projects limit',
      });

      return;
    }

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
