import type { StoreState } from '../../use-store.types';

export const selectCopyToClipboardCopying = (state: StoreState) => state.copyToClipboardCopying;

export const selectCopyToClipboardCopy = (state: StoreState) => state.copyToClipboardCopy;
