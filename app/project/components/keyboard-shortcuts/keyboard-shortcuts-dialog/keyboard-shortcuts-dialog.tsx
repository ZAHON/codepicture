'use client';
import { Dialog, DialogPortal, DialogOverlay, DialogContent } from '@/components';
import {
  useProjectPageStore,
  selectKeyboardShortcutsDialogOpen,
  selectSetKeyboardShortcutsDialogOpen,
} from '@project/store';
import { KeyboardShortcutsDialogHeader } from './keyboard-shortcuts-dialog-header';
import { KeyboardShortcutsDialogBody } from './keyboard-shortcuts-dialog-body';

export function KeyboardShortcutsDialog() {
  const keyboardShortcutsDialogOpen = useProjectPageStore(selectKeyboardShortcutsDialogOpen);
  const setKeyboardShortcutsDialogOpen = useProjectPageStore(selectSetKeyboardShortcutsDialogOpen);

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
