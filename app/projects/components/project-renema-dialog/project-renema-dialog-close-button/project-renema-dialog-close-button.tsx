'use client';
import { useProjectsPageStore, selectCloseProjectRenameDialog } from '@projects/store';
import { Button } from '@/components';

export function ProjectRenemaDialogCloseButton() {
  const closeProjectRenameDialog = useProjectsPageStore(selectCloseProjectRenameDialog);

  return (
    <Button onClick={closeProjectRenameDialog} color="neutral">
      Close
    </Button>
  );
}
