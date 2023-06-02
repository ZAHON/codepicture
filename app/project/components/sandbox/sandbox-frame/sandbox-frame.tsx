'use client';
import type { SandboxFrameProps } from './sandbox-frame.types';
import { useSandboxFrameStyle } from './hooks';
import { sandboxFrameStyles } from './sandbox-frame.styles';

export function SandboxFrame(props: SandboxFrameProps) {
  const { children } = props;

  const sandboxframeStyle = useSandboxFrameStyle();

  return (
    <div style={sandboxframeStyle} className={sandboxFrameStyles()}>
      {children}
    </div>
  );
}
