'use client';
import type { LoadingOverlayProps } from './loading-overlay.types';
import { useEffect } from 'react';
import { useStore, selectHighlighter, selectSetHighlighter } from '@project/store';
import { Logo } from '@/svgs';

export function LoadingOverlay(props: LoadingOverlayProps) {
  const { projectInfoData, frameData, windowData, editorData, fontData } = props;

  const highlighter = useStore(selectHighlighter);
  const setHighlighter = useStore(selectSetHighlighter);

  useEffect(() => {
    if (!highlighter) {
      useStore.setState({
        ...projectInfoData,
        ...frameData,
        ...windowData,
        ...editorData,
        ...fontData,
      });
      setHighlighter();
    }
  }, [highlighter]);

  if (highlighter) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-neutral-1">
      <Logo height="2.5rem" />
    </div>
  );
}
