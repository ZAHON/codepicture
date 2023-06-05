'use client';
import type { SandboxWindowHeaderProps } from './sandbox-window-header.types';
import { useStore, selectWindowHeaderVisible } from '@/store';
import { sandboxWindowHeaderStyles } from './sandbox-window-header.styles';

export function SandboxWindowHeader(props: SandboxWindowHeaderProps) {
  const { children } = props;

  const windowHeaderVisible = useStore(selectWindowHeaderVisible);

  if (!windowHeaderVisible) {
    return null;
  }

  return <div className={sandboxWindowHeaderStyles()}>{children}</div>;
}
