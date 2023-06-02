'use client';
import { useEffect } from 'react';
import { useStore, selectHighlighter, selectSetHighlighter } from '@/store';
import { Loader } from '@/components';

export function LoadingOverlay() {
  const highlighter = useStore(selectHighlighter);
  const setHighlighter = useStore(selectSetHighlighter);

  useEffect(() => {
    if (!highlighter) {
      setHighlighter();
    }
  }, [highlighter]);

  if (highlighter) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-neutral-1">
      <Loader size={48} />
    </div>
  );
}