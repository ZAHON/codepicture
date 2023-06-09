import type { ReactNode, CSSProperties } from 'react';

export interface SandboxFrameProps {
  /**
   * The content of the sandbox frame - `SandboxContent` component.
   */
  children: ReactNode;
}

export interface SandboxFrameStyle extends CSSProperties {
  '--sandbox-frame-padding-inline': string;
  '--sandbox-frame-padding-block': string;
  '--sandbox-frame-fill': string;
  '--sandbox-frame-opacity': number;
}
