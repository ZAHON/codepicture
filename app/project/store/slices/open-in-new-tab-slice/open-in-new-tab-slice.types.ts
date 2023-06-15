import type { StateCreator } from 'zustand';
import type { WindowSlice } from '..';

export interface OpenInNewTabSlice {
  openInNewTabPrePreparingLink: boolean;

  openInNewTabPrePrepareLink: () => void;
}

export type CreateOpenInNewTabSlice = StateCreator<
  OpenInNewTabSlice & WindowSlice,
  [],
  [],
  OpenInNewTabSlice
>;
