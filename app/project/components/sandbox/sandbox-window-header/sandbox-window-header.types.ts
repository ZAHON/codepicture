import type { ReactNode, CSSProperties } from 'react';

export interface SandboxWindowHeaderProps {
  /**
   * The content of the sandbox window header - `SandboxWindowControls` and `SandboxWindowTab` components.
   */
  children: ReactNode;
}

export interface SandboxWindowHeaderStyle extends CSSProperties {
  '--sandbox-window-header-fill': string;
  '--sandbox-window-header-flex-direction': string;
}
