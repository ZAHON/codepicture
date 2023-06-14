'use client';
import type { SandboxWindowHeaderProps } from './sandbox-window-header.types';
import { useStore, selectWindowHeaderVisible } from '@project/store';
import { useSandboxWindowHeaderStyle } from './hooks';
import { sandboxWindowHeaderStyles } from './sandbox-window-header.styles';

export function SandboxWindowHeader(props: SandboxWindowHeaderProps) {
  const { children } = props;

  const windowHeaderVisible = useStore(selectWindowHeaderVisible);
  const sandboxWindowHeaderStyle = useSandboxWindowHeaderStyle();

  if (!windowHeaderVisible) {
    return null;
  }

  return (
    <div style={sandboxWindowHeaderStyle} className={sandboxWindowHeaderStyles()}>
      {children}
    </div>
  );
}
