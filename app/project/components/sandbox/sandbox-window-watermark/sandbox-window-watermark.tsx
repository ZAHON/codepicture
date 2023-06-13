'use client';
import { useStore, selectWindowWatermark } from '@/store';
import { Logo } from '@/svgs';
import { sandboxWindowWatermarkStyles } from './sandbox-window-watermark.styles';

export function SandboxWindowWatermark() {
  const windowWatermark = useStore(selectWindowWatermark);

  if (!windowWatermark) {
    return null;
  }

  return (
    <div className={sandboxWindowWatermarkStyles()}>
      <Logo height="1rem" />
    </div>
  );
}
