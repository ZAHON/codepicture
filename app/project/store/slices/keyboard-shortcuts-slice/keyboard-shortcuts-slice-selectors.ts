import type { ProjectState } from '../../use-project-store.types';

export const selectKeyboardShortcutsDialogOpen = (state: ProjectState) =>
  state.keyboardShortcutsDialogOpen;

export const selectSetKeyboardShortcutsDialogOpen = (state: ProjectState) =>
  state.setKeyboardShortcutsDialogOpen;
