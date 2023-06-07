'use client';
import { useId } from 'react';
import {
  useStore,
  selectEditorLineNumbers,
  selectEditorFirstLineNumber,
  selectSetEditorFirstLineNumber,
} from '@/store';
import { Label, NumberInput } from '@/components';

export function EditorFirstLineNumberControl() {
  const controlId = useId();
  const editorLineNumbers = useStore(selectEditorLineNumbers);
  const editorFirstLineNumber = useStore(selectEditorFirstLineNumber);
  const setEditorFirstLineNumber = useStore(selectSetEditorFirstLineNumber);

  if (!editorLineNumbers) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} size="sm">
        First line
      </Label>
      <NumberInput
        value={editorFirstLineNumber}
        onValueChange={setEditorFirstLineNumber}
        min={1}
        max={10000}
        id={controlId}
        size="sm"
        wrapperClassName="col-span-2"
      />
    </div>
  );
}
