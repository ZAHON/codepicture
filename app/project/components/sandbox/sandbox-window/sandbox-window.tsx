'use client';
import type { SandboxWindowProps } from './sandbox-window.types';
import { useSandboxWindowStyle } from './hooks';
import { sandboxWindowStyles } from './sandbox-window.styles';

export function SandboxWindow(props: SandboxWindowProps) {
  const { children } = props;

  const sandboxWindowStyle = useSandboxWindowStyle();

  return (
    <div style={sandboxWindowStyle} className={sandboxWindowStyles()}>
      {children}
    </div>
  );
}
