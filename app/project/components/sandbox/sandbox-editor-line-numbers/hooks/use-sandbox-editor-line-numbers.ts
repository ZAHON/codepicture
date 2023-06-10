import { useStore, selectEditorCode } from '@/store';

export function useSandboxEditorLineNumbers() {
  const editorCode = useStore(selectEditorCode);

  const codeLines = Array.from(Array(editorCode.split('\n').length).keys());
  const lineNumbers = codeLines.map((el) => el + 1);

  return lineNumbers;
}
