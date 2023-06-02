import type { ThemeCSSProperties } from '@/data';
import { useMemo, useRef } from 'react';
import { getThemeColors } from '../utils';
import {
  useStore,
  selectHighlighter,
  selectEditorTheme,
  selectEditorThemeIsLoading,
} from '@/store';

export function useSandboxContentStyle() {
  const highlighter = useStore(selectHighlighter);
  const editorTheme = useStore(selectEditorTheme);
  const editorThemeIsLoading = useStore(selectEditorThemeIsLoading);

  const prevSandboxContentStyle = useRef<ThemeCSSProperties | null>(null);

  const sandboxContentStyle: ThemeCSSProperties = useMemo(() => {
    if (highlighter) {
      if (!editorThemeIsLoading) {
        const colors = getThemeColors({ highlighter, theme: editorTheme });

        prevSandboxContentStyle.current = colors;

        return colors;
      }

      return prevSandboxContentStyle.current ? prevSandboxContentStyle.current : {};
    }

    return {};
  }, [highlighter, editorTheme, editorThemeIsLoading]);

  return sandboxContentStyle;
}
