'use client';
import type { ProjectCardMenuRenameProps } from './project-card-menu-rename.types';
import { IconPencil } from '@tabler/icons-react';
import { MenuItem } from '@/components';
import { useProjectsPageStore, selectOpenProjectRenameDialog } from '@projects/store';

export function ProjectCardMenuRename(props: ProjectCardMenuRenameProps) {
  const { projectId, projectName } = props;

  const openProjectRenameDialog = useProjectsPageStore(selectOpenProjectRenameDialog);

  function handleOpenProjectRenameDialog() {
    openProjectRenameDialog({
      projectRenameId: projectId,
      projectRenameName: projectName,
      projectRenameNewName: projectName,
    });
  }

  return (
    <MenuItem
      onSelect={handleOpenProjectRenameDialog}
      icon={<IconPencil size="1rem" aria-hidden="true" focusable="false" />}
    >
      Rename
    </MenuItem>
  );
}
