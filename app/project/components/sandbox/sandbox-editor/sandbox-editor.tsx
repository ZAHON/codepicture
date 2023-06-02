'use client';
import type { SandboxEditorProps } from './sandbox-editor.types';
import { useSandboxEditorStyle } from './hooks';
import { sandboxEditorStyles } from './sandbox-editor.styles';

export function SandboxEditor(props: SandboxEditorProps) {
  const { children } = props;

  const sandboxEditorStyle = useSandboxEditorStyle();

  return (
    <div style={sandboxEditorStyle} className={sandboxEditorStyles()}>
      {children}
    </div>
  );
}
