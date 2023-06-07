import { useMemo } from 'react';
import { useStore, selectEditorCode, selectEditorFirstLineNumber } from '@/store';

export function useSandboxLineNumbers() {
  const editorCode = useStore(selectEditorCode);
  const editorFirstLineNumber = useStore(selectEditorFirstLineNumber);

  const codeLines = useMemo(() => {
    return Array.from(Array(editorCode.split('\n').length).keys());
  }, [editorCode]);

  const firstNumber = useMemo(() => {
    return editorFirstLineNumber >= 1 ? editorFirstLineNumber : 1;
  }, [editorFirstLineNumber]);

  const lineNumbers = useMemo(() => {
    return codeLines.map((el) => el + firstNumber);
  }, [codeLines, firstNumber]);

  return lineNumbers;
}
