import { useStore, selectEditorCode } from '@/store';

export function useSandboxLineNumbers() {
  const editorCode = useStore(selectEditorCode);

  const lineNumbers = Array.from(Array(editorCode.split('\n').length).keys()).map((el) => el + 1);

  return lineNumbers;
}
