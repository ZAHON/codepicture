'use client';
import Image from 'next/image';
import {
  useStore,
  selectWindowTabIconVisible,
  selectEditorLanguage,
  selectEditorLanguageIsLoading,
} from '@project/store';
import { Loader } from '@/components';

export function SandboxWindowTabIcon() {
  const windowTabIconVisible = useStore(selectWindowTabIconVisible);
  const editorLanguage = useStore(selectEditorLanguage);
  const editorLanguageIsLoading = useStore(selectEditorLanguageIsLoading);

  if (!windowTabIconVisible) {
    return null;
  }

  if (editorLanguageIsLoading) {
    return <Loader size={16} />;
  }

  return (
    <Image
      src={`/languages-icons/${editorLanguage}.svg`}
      alt="Language icon"
      height={16}
      width={16}
    />
  );
}
