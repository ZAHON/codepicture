'use client';
import type { SandboxFrameProps } from './sandbox-frame.types';
import { useProjectPageStore, selectFramePaddingType } from '@project/store';
import { useSandboxFrameStyle } from './hooks';
import { sandboxFrameStyles } from './sandbox-frame.styles';

export function SandboxFrame(props: SandboxFrameProps) {
  const { children } = props;

  const framePaddingType = useProjectPageStore(selectFramePaddingType);
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
