import type { IThemedToken } from 'shiki';
import { useRef, useMemo } from 'react';
import {
  useProjectPageStore,
  selectHighlighter,
  selectEditorCode,
  selectEditorLanguage,
  selectEditorLanguageIsLoading,
  selectEditorTheme,
  selectEditorThemeIsLoading,
} from '@project/store';
import { getThemedTokens } from '../utils';

export function useSandboxSyntaxHighlighter() {
  const highlighter = useProjectPageStore(selectHighlighter);
  const editorCode = useProjectPageStore(selectEditorCode);
  const editorLanguage = useProjectPageStore(selectEditorLanguage);
  const editorLanguageIsLoading = useProjectPageStore(selectEditorLanguageIsLoading);
  const editorTheme = useProjectPageStore(selectEditorTheme);
  const editorThemeIsLoading = useProjectPageStore(selectEditorThemeIsLoading);

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
