import type { CreateHighlighterSlice } from './highlighter-slice.types';
import { getHighlighter, setCDN, setWasm } from 'shiki';

export const createHighlighterSlice: CreateHighlighterSlice = (set, get) => ({
  highlighter: undefined,
  highlighterError: false,
  setHighlighter: async () => {
    const highlighter = get().highlighter;

    set(() => ({ highlighterError: false }));

    if (!highlighter) {
      try {
        const wasmResponse = await fetch('/assets/wasm/onig.wasm');
        const wasmBuffer = await wasmResponse.arrayBuffer();

        setWasm(wasmBuffer);
        setCDN('/assets/');

        const editorLanguage = get().editorLanguage;
        const editorTheme = get().editorTheme;

        const highlighter = await getHighlighter({
          langs: [editorLanguage],
          theme: editorTheme,
        });

        set(() => ({
          highlighter,
          highlighterError: false,
          editorLanguageIsLoading: false,
          editorThemeIsLoading: false,
        }));
      } catch {
        set(() => ({ highlighterError: true }));
      }
    }
  },
});
