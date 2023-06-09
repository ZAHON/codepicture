'use client';
import type { LanguageId } from '@/data';
import { useId } from 'react';
import { useMediaQuery } from '@/hooks';
import {
  useStore,
  selectEditorLanguage,
  selectEditorLanguageIsLoading,
  selectSetEditorLanguage,
} from '@/store';
import { Label, Select, SelectContent, SelectGroup, SelectItem, NativeSelect } from '@/components';
import { languages } from '@/data';

const languagesSorted = languages
  .filter(({ public: languageIsPublic }) => languageIsPublic)
  .sort((a, b) => a.label.toLocaleLowerCase().localeCompare(b.label.toLocaleLowerCase()));

export function EditorLanguageControl() {
  const controlId = useId();
  const matches = useMediaQuery('(min-width: 768px)');
  const editorLanguage = useStore(selectEditorLanguage);
  const editorLanguageIsLoading = useStore(selectEditorLanguageIsLoading);
  const setEditorLanguage = useStore(selectSetEditorLanguage);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} size={matches ? 'sm' : 'md'}>
        Language
      </Label>
      {matches ? (
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
      ) : (
        <NativeSelect
          size="md"
          value={editorLanguage}
          onChange={(e) => setEditorLanguage(e.target.value as LanguageId)}
          id={controlId}
          disabled={editorLanguageIsLoading}
          wrapperProps={{ className: 'col-span-2' }}
        >
          {languagesSorted.map(({ id, label }) => (
            <option key={id} value={id}>
              {label}
            </option>
          ))}
        </NativeSelect>
      )}
    </div>
  );
}
