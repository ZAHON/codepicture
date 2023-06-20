'use client';
import type { ProjectCardMenuDeleteProps } from './project-card-menu-delate.types';
import { IconTrash } from '@tabler/icons-react';
import { MenuItem } from '@/components';
import {
  useProjectDelateAlertDialogStore as useStore,
  selectSetAlertDialogOpen,
  selectSetProjectId,
  selectSetProjectName,
} from '../../..';

export function ProjectCardMenuDelete(props: ProjectCardMenuDeleteProps) {
  const { projectId, projectName } = props;

  const setAlertDialogOpen = useStore(selectSetAlertDialogOpen);
  const setProjectId = useStore(selectSetProjectId);
  const setProjectName = useStore(selectSetProjectName);

  function handleSelect() {
    setAlertDialogOpen(true);
    setProjectId(projectId);
    setProjectName(projectName);
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
