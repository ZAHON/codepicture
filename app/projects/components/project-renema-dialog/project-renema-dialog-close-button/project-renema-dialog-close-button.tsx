'use client';
import {
  useProjectRenameDialogStore,
  selectCloseProjectRenameDialog,
} from '../project-renema-dialog-store';
import { Button } from '@/components';

export function ProjectRenemaDialogCloseButton() {
  const closeProjectRenameDialog = useProjectRenameDialogStore(selectCloseProjectRenameDialog);

  return (
    <Button onClick={closeProjectRenameDialog} color="neutral">
      Close
    </Button>
  );
}
