'use client';
import Image from 'next/image';
import {
  useStore,
  selectWindowTabIconVisible,
  selectWindowTabIconSize,
  selectEditorLanguage,
  selectEditorLanguageIsLoading,
} from '@project/store';
import { Loader } from '@/components';
import { sandboxWindowTabIconStyles } from './sandbox-window-tab-icon.styles';

export function SandboxWindowTabIcon() {
  const windowTabIconVisible = useStore(selectWindowTabIconVisible);
  const windowTabIconSize = useStore(selectWindowTabIconSize);
  const editorLanguage = useStore(selectEditorLanguage);
  const editorLanguageIsLoading = useStore(selectEditorLanguageIsLoading);

  if (!windowTabIconVisible) {
    return null;
  }

  if (editorLanguageIsLoading) {
    return <Loader size={windowTabIconSize} />;
  }

  return (
    <Image
      src={`/languages-icons/${editorLanguage}.svg`}
      alt="Language icon"
      height={windowTabIconSize}
      width={windowTabIconSize}
      className={sandboxWindowTabIconStyles()}
    />
  );
}
