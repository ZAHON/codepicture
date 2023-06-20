'use client';
import type { ProjectCardMenuProps } from './project-card-menu.types';
import { useState } from 'react';
import { IconDots } from '@tabler/icons-react';
import { IconButton, Menu, MenuTrigger, MenuContent, MenuSeparator, MenuGroup } from '@/components';
import { ProjectCardMenuDelete } from './project-card-menu-delate';
import {
  useProjectDelateAlertDialogStore,
  selectProjectId as selectDeletingProjectId,
} from '../../';

export function ProjectCardMenu(props: ProjectCardMenuProps) {
  const { projectId, projectName } = props;

  const [open, setOpen] = useState(false);

  const deletingProjectId = useProjectDelateAlertDialogStore(selectDeletingProjectId);

  const label = `${open ? 'Close' : 'Open'} project card menu`;
  const disabled = projectId === deletingProjectId;

  return (
    <Menu open={open} onOpenChange={setOpen}>
      <MenuTrigger>
        <IconButton
          disabled={disabled}
          aria-label={label}
          variant="light"
          className="flex-shrink-0"
        >
          <IconDots size="1.25rem" aria-hidden="true" focusable="false" />
        </IconButton>
      </MenuTrigger>
      <MenuContent align="end">
        <MenuGroup>
          <MenuSeparator />
          <ProjectCardMenuDelete projectId={projectId} projectName={projectName} />
        </MenuGroup>
      </MenuContent>
    </Menu>
  );
}
