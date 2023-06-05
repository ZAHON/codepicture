import type { State } from '../../store.types';

// window header visible
export const selectWindowHeaderVisible = (state: State) => state.windowHeaderVisible;
export const selectSetWindowHeaderVisible = (state: State) => state.setWindowHeaderVisible;

// window reflection
export const selectWindowReflection = (state: State) => state.windowReflection;
export const selectSetWindowReflection = (state: State) => state.setWindowReflection;

// window shadow
export const selectWindowShadow = (state: State) => state.windowShadow;
export const selectSetWindowShadow = (state: State) => state.setWindowShadow;
