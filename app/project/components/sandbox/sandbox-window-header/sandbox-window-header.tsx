'use client';
import { SandboxWindowHeaderProps } from './sandbox-window-header.types';
import { sandboxWindowHeaderStyles } from './sandbox-window-header.styles';

export function SandboxWindowHeader(props: SandboxWindowHeaderProps) {
  const { children } = props;

  return <div className={sandboxWindowHeaderStyles()}>{children}</div>;
}
