'use client';
import {
  useProjectsPageStore,
  selectProjectRenameDialogOpen,
  selectSetProjectRenameDialogOpen,
  selectCloseProjectRenameDialog,
} from '@projects/store';
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
  const projectRenameDialogOpen = useProjectsPageStore(selectProjectRenameDialogOpen);
  const setProjectRenameDialogOpen = useProjectsPageStore(selectSetProjectRenameDialogOpen);
  const closeProjectRenameDialog = useProjectsPageStore(selectCloseProjectRenameDialog);

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
