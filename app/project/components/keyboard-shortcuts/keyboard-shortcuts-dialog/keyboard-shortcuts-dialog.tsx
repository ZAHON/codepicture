'use client';
import { Dialog, DialogPortal, DialogOverlay, DialogContent } from '@/components';
import {
  useProjectStore,
  selectKeyboardShortcutsDialogOpen,
  selectSetKeyboardShortcutsDialogOpen,
} from '@project/store';
import { KeyboardShortcutsDialogHeader } from './keyboard-shortcuts-dialog-header';
import { KeyboardShortcutsDialogBody } from './keyboard-shortcuts-dialog-body';

export function KeyboardShortcutsDialog() {
  const keyboardShortcutsDialogOpen = useProjectStore(selectKeyboardShortcutsDialogOpen);
  const setKeyboardShortcutsDialogOpen = useProjectStore(selectSetKeyboardShortcutsDialogOpen);

  return (
    <Dialog open={keyboardShortcutsDialogOpen} onOpenChange={setKeyboardShortcutsDialogOpen}>
      <DialogPortal>
        <DialogOverlay blur />
        <DialogContent className="max-w-md focus:outline-none">
          <KeyboardShortcutsDialogHeader />
          <KeyboardShortcutsDialogBody />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
