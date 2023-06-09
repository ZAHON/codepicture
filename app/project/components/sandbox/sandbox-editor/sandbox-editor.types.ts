import type { ReactNode, CSSProperties } from 'react';

export interface SandboxEditorProps {
  /**
   * The content of the sandbox editor - `SandboxEditorLineNumbers` and `SandboxSimpleCodeEditor` components.
   */
  children: ReactNode;
}

export interface SandboxEditorStyle extends CSSProperties {
  '--sandbox-editor-font-family': string;
  '--sandbox-editor-font-ligatures': string;
  '--sandbox-editor-font-size': string;
  '--sandbox-editor-line-height': string;
  '--sandbox-editor-letter-spacing': string;

  '--sandbox-editor-padding-left': string;
  '--sandbox-editor-padding-top': string;
  '--sandbox-editor-padding-bottom': string;
}
