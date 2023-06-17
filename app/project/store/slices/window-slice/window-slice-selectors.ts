import type { StoreState } from '../../use-store.types';

// window border radius
export const selectWindowBorderRadius = (state: StoreState) => state.windowBorderRadius;
export const selectSetWindowBorderRadius = (state: StoreState) => state.setWindowBorderRadius;

// window controls type
export const selectWindowControlsType = (state: StoreState) => state.windowControlsType;
export const selectSetWindowControlsType = (state: StoreState) => state.setWindowControlsType;

// window header visible
export const selectWindowHeaderVisible = (state: StoreState) => state.windowHeaderVisible;
export const selectSetWindowHeaderVisible = (state: StoreState) => state.setWindowHeaderVisible;

// window reflection
export const selectWindowReflection = (state: StoreState) => state.windowReflection;
export const selectSetWindowReflection = (state: StoreState) => state.setWindowReflection;

// window shadow
export const selectWindowShadow = (state: StoreState) => state.windowShadow;
export const selectSetWindowShadow = (state: StoreState) => state.setWindowShadow;

// window tab accent
export const selectWindowTabAccent = (state: StoreState) => state.windowTabAccent;
export const selectSetWindowTabAccent = (state: StoreState) => state.setWindowTabAccent;

// window tab content
export const selectWindowTabContent = (state: StoreState) => state.windowTabContent;
export const selectSetWindowTabContent = (state: StoreState) => state.setWindowTabContent;

// window tab visible
export const selectWindowTabVisible = (state: StoreState) => state.windowTabVisible;
export const selectSetWindowTabVisible = (state: StoreState) => state.setWindowTabVisible;

// window tab icon visible
export const selectWindowTabIconVisible = (state: StoreState) => state.windowTabIconVisible;
export const selectSetWindowTabIconVisible = (state: StoreState) => state.setWindowTabIconVisible;

// window watermark
export const selectWindowWatermark = (state: StoreState) => state.windowWatermark;
export const selectSetWindowWatermark = (state: StoreState) => state.setWindowWatermark;
