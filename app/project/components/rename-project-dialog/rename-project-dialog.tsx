'use client';
import { useSession } from 'next-auth/react';
import { Dialog, DialogPortal, DialogOverlay, DialogContent } from '@/components';
import { RenameProjectDialogTrigger } from './rename-project-dialog-trigger';
import { RenameProjectDialogHeader } from './rename-project-dialog-header';
import { RenameProjectDialogBody } from './rename-project-dialog-body';

export function RenameProjectDialog() {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <Dialog>
      <RenameProjectDialogTrigger />
      <DialogPortal>
        <DialogOverlay blur />
        <DialogContent className="max-w-md focus:outline-none">
          <RenameProjectDialogHeader />
          <RenameProjectDialogBody />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
