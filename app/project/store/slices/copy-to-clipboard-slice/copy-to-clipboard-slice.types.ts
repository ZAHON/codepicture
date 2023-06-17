import type { StateCreator } from 'zustand';
import type { WindowSlice } from '..';

export interface CopyToClipboardSlice {
  copyToClipboardCopying: boolean;

  copyToClipboardCopy: () => void;
}

export type CreateCopyToClipboardSlice = StateCreator<
  CopyToClipboardSlice & WindowSlice,
  [],
  [],
  CopyToClipboardSlice
>;
