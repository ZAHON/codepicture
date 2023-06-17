'use client';
import Image from 'next/image';
import { useStore, selectEditorLanguage, selectEditorLanguageIsLoading } from '@project/store';
import { Loader } from '@/components';

export function SandboxWindowTabIcon() {
  const editorLanguage = useStore(selectEditorLanguage);
  const editorLanguageIsLoading = useStore(selectEditorLanguageIsLoading);

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
