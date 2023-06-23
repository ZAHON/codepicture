'use client';
import { Button } from '@/components';
import { useProjectsPageStore, selectCloseProjectDelateAlertDialog } from '@projects/store';

export function ProjectDelateAlertDialogCancelButton() {
  const closeProjectDelateAlertDialog = useProjectsPageStore(selectCloseProjectDelateAlertDialog);

  return (
    <Button onClick={closeProjectDelateAlertDialog} color="neutral" variant="light">
      Cancel
    </Button>
  );
}
