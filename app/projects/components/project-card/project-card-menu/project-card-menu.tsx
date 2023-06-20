'use client';
import type { ProjectCardMenuProps } from './project-card-menu.types';
import { useState } from 'react';
import { IconDots } from '@tabler/icons-react';
import { IconButton, Menu, MenuTrigger, MenuContent, MenuSeparator, MenuGroup } from '@/components';
import { ProjectCardMenuClone } from './project-card-menu-clone';
import { ProjectCardMenuRename } from './project-card-menu-rename';
import { ProjectCardMenuDelete } from './project-card-menu-delate';
// import {
//   useProjectDelateAlertDialogStore,
//   selectProjectId as selectDeletingProjectId,
// } from '../../';
import {
  useProjectRenameDialogStore,
  selectProjectRenameId,
} from '../../project-renema-dialog/project-renema-dialog-store';
import {
  useProjectCardMenuCloneStore,
  selectProjectCloneId,
} from './project-card-menu-clone/project-card-menu-clone-store';

export function ProjectCardMenu(props: ProjectCardMenuProps) {
  const { projectId, projectName } = props;

  const [open, setOpen] = useState(false);

  const projectRenameId = useProjectRenameDialogStore(selectProjectRenameId);
  const projectCloneId = useProjectCardMenuCloneStore(selectProjectCloneId);

  const label = `${open ? 'Close' : 'Open'} project card menu`;
  const disabled = projectId === projectRenameId || projectId === projectCloneId;

  return (
    <Menu open={open} onOpenChange={setOpen}>
      <MenuTrigger disabled={disabled}>
        <IconButton aria-label={label} variant="light" className="flex-shrink-0">
          <IconDots size="1.25rem" aria-hidden="true" focusable="false" />
        </IconButton>
      </MenuTrigger>
      <MenuContent align="end">
        <MenuGroup>
          <ProjectCardMenuClone projectId={projectId} projectName={projectName} />
          <ProjectCardMenuRename projectId={projectId} projectName={projectName} />
          <MenuSeparator />
          <ProjectCardMenuDelete projectId={projectId} projectName={projectName} />
        </MenuGroup>
      </MenuContent>
    </Menu>
  );
}
