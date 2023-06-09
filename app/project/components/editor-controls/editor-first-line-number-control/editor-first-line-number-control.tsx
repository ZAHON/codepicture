'use client';
import { useId } from 'react';
import { useMediaQuery } from '@/hooks';
import {
  useStore,
  selectEditorLineNumbers,
  selectEditorFirstLineNumber,
  selectSetEditorFirstLineNumber,
} from '@/store';
import { Label, NumberInput } from '@/components';

export function EditorFirstLineNumberControl() {
  const controlId = useId();
  const matches = useMediaQuery('(min-width: 768px)');
  const editorLineNumbers = useStore(selectEditorLineNumbers);
  const editorFirstLineNumber = useStore(selectEditorFirstLineNumber);
  const setEditorFirstLineNumber = useStore(selectSetEditorFirstLineNumber);

  if (!editorLineNumbers) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} size={matches ? 'sm' : 'md'}>
        First line
      </Label>
      <NumberInput
        value={editorFirstLineNumber}
        onValueChange={setEditorFirstLineNumber}
        min={1}
        max={10000}
        id={controlId}
        size={matches ? 'sm' : 'md'}
        wrapperClassName="col-span-2"
      />
    </div>
  );
}
