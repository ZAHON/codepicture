'use client';
import { useId } from 'react';
import { useMediaQuery } from '@/hooks';
import {
  useProjectPageStore,
  selectEditorLanguage,
  selectEditorLanguageIsLoading,
  selectSetEditorLanguage,
} from '@project/store';
import { Label } from '@/components';
import { languages } from '@/data';
import { EditorLanguageControlSelect } from './editor-language-control-select';
import { EditorLanguageControlNativeSelect } from './editor-language-control-native-select';

const languagesSorted = languages
  .filter(({ public: languageIsPublic }) => languageIsPublic)
  .sort((a, b) => a.label.toLocaleLowerCase().localeCompare(b.label.toLocaleLowerCase()));

export function EditorLanguageControl() {
  const controlId = useId();
  const matches = useMediaQuery('(min-width: 768px)');
  const editorLanguage = useProjectPageStore(selectEditorLanguage);
  const editorLanguageIsLoading = useProjectPageStore(selectEditorLanguageIsLoading);
  const setEditorLanguage = useProjectPageStore(selectSetEditorLanguage);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} className="text-sm md:text-xs">
        Language
      </Label>
      {matches ? (
        <EditorLanguageControlSelect
          id={controlId}
          disabled={editorLanguageIsLoading}
          data={languagesSorted}
          value={editorLanguage}
          onChange={setEditorLanguage}
        />
      ) : (
        <EditorLanguageControlNativeSelect
          id={controlId}
          disabled={editorLanguageIsLoading}
          data={languagesSorted}
          value={editorLanguage}
          onChange={setEditorLanguage}
        />
      )}
    </div>
  );
}
