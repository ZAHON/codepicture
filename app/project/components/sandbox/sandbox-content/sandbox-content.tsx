'use client';
import type { SandboxContentProps } from './sandbox-content.types';
import { useSandboxContentStyle } from './hooks';
import { sandboxContentStyles } from './sandbox-content.styles';

export function SandboxContent(props: SandboxContentProps) {
  const { children } = props;

  const sandboxContentStyle = useSandboxContentStyle();

  return (
    <div style={sandboxContentStyle} className={sandboxContentStyles()}>
      {children}
    </div>
  );
}
