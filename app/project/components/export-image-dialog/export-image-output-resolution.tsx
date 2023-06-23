'use client';
import { useProjectPageStore, selectExportImageScale } from '@project/store';

export function ExportImageOutputResolution() {
  const exportImageScale = useProjectPageStore(selectExportImageScale);

  const sandboxFrameElement = document.getElementById('sandbox-frame');

  if (!sandboxFrameElement) {
    return null;
  }

  const { clientWidth, clientHeight } = sandboxFrameElement;

  const outputWidth = clientWidth * exportImageScale;
  const outputHeight = clientHeight * exportImageScale;
  const output = `${outputWidth}x${outputHeight}`;

  return (
    <div className="flex cursor-default justify-between text-sm">
      <span>Output resolution</span>
      <span className="font-medium">{output}</span>
    </div>
  );
}
