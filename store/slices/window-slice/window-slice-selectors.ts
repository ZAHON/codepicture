import type { State } from '../../store.types';

// window controls type
export const selectWindowControlsType = (state: State) => state.windowControlsType;
export const selectSetWindowControlsType = (state: State) => state.setWindowControlsType;

// window header visible
export const selectWindowHeaderVisible = (state: State) => state.windowHeaderVisible;
export const selectSetWindowHeaderVisible = (state: State) => state.setWindowHeaderVisible;

// window reflection
export const selectWindowReflection = (state: State) => state.windowReflection;
export const selectSetWindowReflection = (state: State) => state.setWindowReflection;

// window shadow
export const selectWindowShadow = (state: State) => state.windowShadow;
export const selectSetWindowShadow = (state: State) => state.setWindowShadow;

// window tab accent
export const selectWindowTabAccent = (state: State) => state.windowTabAccent;
export const selectSetWindowTabAccent = (state: State) => state.setWindowTabAccent;

// window tab content
export const selectWindowTabContent = (state: State) => state.windowTabContent;
export const selectSetWindowTabContent = (state: State) => state.setWindowTabContent;

// window tab visible
export const selectWindowTabVisible = (state: State) => state.windowTabVisible;
export const selectSetWindowTabVisible = (state: State) => state.setWindowTabVisible;
