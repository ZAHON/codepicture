'use client';
import type { ProjectCardMenuDeleteProps } from './project-card-menu-delate.types';
import { IconTrash } from '@tabler/icons-react';
import { MenuItem } from '@/components';
import { useProjectsPageStore, selectOpenProjectDelateAlertDialog } from '@projects/store';

export function ProjectCardMenuDelete(props: ProjectCardMenuDeleteProps) {
  const { projectId, projectName } = props;

  const openProjectDelateAlertDialog = useProjectsPageStore(selectOpenProjectDelateAlertDialog);

  function handleSelect() {
    openProjectDelateAlertDialog({
      projectDelateId: projectId,
      projectDelateName: projectName,
    });
  }

  return (
    <MenuItem
      onSelect={handleSelect}
      color="error"
      icon={<IconTrash size="1rem" aria-hidden="true" focusable="false" />}
    >
      Delete
    </MenuItem>
  );
}
