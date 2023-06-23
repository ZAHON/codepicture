import { useProjectPageStore, selectEditorCode } from '@project/store';

export function useSandboxEditorLineNumbers() {
  const editorCode = useProjectPageStore(selectEditorCode);

  const codeLines = Array.from(Array(editorCode.split('\n').length).keys());
  const lineNumbers = codeLines.map((el) => el + 1);

  return lineNumbers;
}
