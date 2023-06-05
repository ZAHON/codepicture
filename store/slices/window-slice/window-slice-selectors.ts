import type { State } from '../../store.types';

// window reflection
export const selectWindowReflection = (state: State) => state.windowReflection;
export const selectSetWindowReflection = (state: State) => state.setWindowReflection;
