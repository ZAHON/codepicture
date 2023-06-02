import type { IThemedToken } from 'shiki';
import { useRef, useMemo } from 'react';
import {
  useStore,
  selectHighlighter,
  selectEditorCode,
  selectEditorLanguage,
  selectEditorLanguageIsLoading,
  selectEditorTheme,
  selectEditorThemeIsLoading,
} from '@/store';
import { getThemedTokens } from '../utils';

export function useSandboxSyntaxHighlighter() {
  const highlighter = useStore(selectHighlighter);
  const editorCode = useStore(selectEditorCode);
  const editorLanguage = useStore(selectEditorLanguage);
  const editorLanguageIsLoading = useStore(selectEditorLanguageIsLoading);
  const editorTheme = useStore(selectEditorTheme);
  const editorThemeIsLoading = useStore(selectEditorThemeIsLoading);

  const prevLinesWithTokens = useRef<IThemedToken[][] | string>('');

  const linesWithTokens = useMemo(() => {
    if (highlighter) {
      if (!editorLanguageIsLoading && !editorThemeIsLoading) {
        const themedTokens = getThemedTokens({
          highlighter,
          code: editorCode,
          language: editorLanguage,
          theme: editorTheme,
        });

        prevLinesWithTokens.current = themedTokens;
        return themedTokens;
      }

      return prevLinesWithTokens.current ? prevLinesWithTokens.current : editorCode;
    }

    return editorCode;
  }, [
    highlighter,
    editorCode,
    editorLanguage,
    editorLanguageIsLoading,
    editorTheme,
    editorThemeIsLoading,
  ]);

  return linesWithTokens;
}
