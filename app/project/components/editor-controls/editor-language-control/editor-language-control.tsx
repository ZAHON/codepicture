'use client';
import type { LanguageId } from '@/data';
import { useId } from 'react';
import {
  useStore,
  selectEditorLanguage,
  selectEditorLanguageIsLoading,
  selectSetEditorLanguage,
} from '@/store';
import { Label, Select, SelectContent, SelectGroup, SelectItem } from '@/components';
import { languages } from '@/data';

const languagesSorted = languages
  .filter(({ public: languageIsPublic }) => languageIsPublic)
  .sort((a, b) => a.label.toLocaleLowerCase().localeCompare(b.label.toLocaleLowerCase()));

export function EditorLanguageControl() {
  const controlId = useId();
  const editorLanguage = useStore(selectEditorLanguage);
  const editorLanguageIsLoading = useStore(selectEditorLanguageIsLoading);
  const setEditorLanguage = useStore(selectSetEditorLanguage);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label size="sm" htmlFor={controlId}>
        Language
      </Label>
      <Select
        size="sm"
        value={editorLanguage}
        onValueChange={(value) => setEditorLanguage(value as LanguageId)}
        id={controlId}
        disabled={editorLanguageIsLoading}
        className="col-span-2"
      >
        <SelectContent>
          <SelectGroup>
            {languagesSorted.map(({ id, label }) => (
              <SelectItem key={id} value={id}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
