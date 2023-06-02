import type { CreateHighlighterSlice } from './highlighter-slice.types';
import { getHighlighter, setCDN, setWasm } from 'shiki';

export const createHighlighterSlice: CreateHighlighterSlice = (set, get) => ({
  highlighter: undefined,
  setHighlighter: async () => {
    const highlighter = get().highlighter;

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

        set(() => ({ highlighter, editorLanguageIsLoading: false, editorThemeIsLoading: false }));
      } catch {
        console.error('Failed to load highlighter');
        // TODO Show error modal containing "Try again" button
      }
    }
  },
});
