'use client';
import Image from 'next/image';
import {
  useProjectPageStore,
  selectWindowTabIconVisible,
  selectWindowTabIconSize,
  selectEditorLanguage,
  selectEditorLanguageIsLoading,
} from '@project/store';
import { Loader } from '@/components';
import { sandboxWindowTabIconStyles } from './sandbox-window-tab-icon.styles';

export function SandboxWindowTabIcon() {
  const windowTabIconVisible = useProjectPageStore(selectWindowTabIconVisible);
  const windowTabIconSize = useProjectPageStore(selectWindowTabIconSize);
  const editorLanguage = useProjectPageStore(selectEditorLanguage);
  const editorLanguageIsLoading = useProjectPageStore(selectEditorLanguageIsLoading);

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
