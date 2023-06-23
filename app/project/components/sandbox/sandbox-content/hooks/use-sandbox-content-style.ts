import type { ThemeCSSProperties } from '@/data';
import { useMemo, useRef } from 'react';
import { getThemeColors } from '../utils';
import {
  useProjectPageStore,
  selectHighlighter,
  selectEditorTheme,
  selectEditorThemeIsLoading,
} from '@project/store';

export function useSandboxContentStyle() {
  const highlighter = useProjectPageStore(selectHighlighter);
  const editorTheme = useProjectPageStore(selectEditorTheme);
  const editorThemeIsLoading = useProjectPageStore(selectEditorThemeIsLoading);

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
