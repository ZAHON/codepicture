'use client';
import { Logo } from '@/svgs';
import { sandboxWindowWatermarkStyles } from './sandbox-window-watermark.styles';

export function SandboxWindowWatermark() {
  return (
    <div className={sandboxWindowWatermarkStyles()}>
      <Logo height="1rem" />
    </div>
  );
}
