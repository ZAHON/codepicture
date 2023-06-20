'use client';
import {
  useProjectRenameDialogStore,
  selectProjectRenameDialogOpen,
  selectSetProjectRenameDialogOpen,
  selectCloseProjectRenameDialog,
} from './project-renema-dialog-store';
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogBody,
  DialogFooter,
} from '@/components';
import { ProjectRenemaDialogNewNameControl } from './project-renema-dialog-new-name-control';
import { ProjectRenemaDialogCloseButton } from './project-renema-dialog-close-button';
import { ProjectRenemaDialogConfirmButton } from './project-renema-dialog-confirm-button';

export function ProjectRenameDialog() {
  const projectRenameDialogOpen = useProjectRenameDialogStore(selectProjectRenameDialogOpen);
  const setProjectRenameDialogOpen = useProjectRenameDialogStore(selectSetProjectRenameDialogOpen);
  const closeProjectRenameDialog = useProjectRenameDialogStore(selectCloseProjectRenameDialog);

  return (
    <Dialog open={projectRenameDialogOpen} onOpenChange={setProjectRenameDialogOpen}>
      <DialogPortal>
        <DialogOverlay blur />
        <DialogContent
          onEscapeKeyDown={closeProjectRenameDialog}
          onPointerDownOutside={closeProjectRenameDialog}
          className="max-w-md focus:outline-none"
        >
          <DialogHeader>
            <DialogTitle>Rename project</DialogTitle>
            <DialogClose onClick={closeProjectRenameDialog} />
          </DialogHeader>
          <DialogBody>
            <ProjectRenemaDialogNewNameControl />
          </DialogBody>
          <DialogFooter className="py-6">
            <ProjectRenemaDialogCloseButton />
            <ProjectRenemaDialogConfirmButton />
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
