'use client';
import type { SandboxOverlayProps } from './sandbox-overlay.types';
import { sandboxOverlayStyles } from './sandbox-overlay.styles';

export function SandboxOverlay(props: SandboxOverlayProps) {
  const { children } = props;

  return <div className={sandboxOverlayStyles()}>{children}</div>;
}
