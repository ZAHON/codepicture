import type { ReactNode, CSSProperties } from 'react';

export interface SandboxWindowProps {
  /**
   * The content of the sandbox window - `SandboxWindowReflection` component.
   */
  children: ReactNode;
}

export interface SandboxWindowStyle extends CSSProperties {
  '--sandbox-window-border-radius': string;
  '--sandbox-window-shadow': string;
}
