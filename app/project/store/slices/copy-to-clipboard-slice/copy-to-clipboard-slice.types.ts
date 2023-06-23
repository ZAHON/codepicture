import type { StateCreator } from 'zustand';
import type { ProjectSlice } from '..';

export interface CopyToClipboardSlice {
  copyToClipboardCopying: boolean;

  copyToClipboardCopy: () => void;
}

export type CreateCopyToClipboardSlice = StateCreator<
  CopyToClipboardSlice & ProjectSlice,
  [],
  [],
  CopyToClipboardSlice
>;
