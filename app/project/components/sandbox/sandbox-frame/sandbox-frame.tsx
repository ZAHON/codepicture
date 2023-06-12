'use client';
import type { SandboxFrameProps } from './sandbox-frame.types';
import { useStore, selectFramePaddingType } from '@/store';
import { useSandboxFrameStyle } from './hooks';
import { sandboxFrameStyles } from './sandbox-frame.styles';

export function SandboxFrame(props: SandboxFrameProps) {
  const { children } = props;

  const framePaddingType = useStore(selectFramePaddingType);
  const sandboxframeStyle = useSandboxFrameStyle();

  const transitionPadding = framePaddingType !== 'custom';

  return (
    <div
      id="sandbox-frame"
      style={sandboxframeStyle}
      className={sandboxFrameStyles({ transitionPadding })}
    >
      {children}
    </div>
  );
}
