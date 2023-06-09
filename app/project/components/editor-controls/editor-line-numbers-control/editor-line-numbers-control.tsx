'use client';
import { useId } from 'react';
import { useMediaQuery } from '@/hooks';
import { useStore, selectEditorLineNumbers, selectSetEditorLineNumbers } from '@/store';
import { Label, SegmentedSwitch } from '@/components';

export function EditorLineNumbersControl() {
  const controlId = useId();
  const matches = useMediaQuery('(min-width: 768px)');
  const editorLineNumbers = useStore(selectEditorLineNumbers);
  const setEditorLineNumbers = useStore(selectSetEditorLineNumbers);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} size={matches ? 'sm' : 'md'}>
        Line numbers
      </Label>
      <SegmentedSwitch
        inverted
        checked={editorLineNumbers}
        onCheckedChange={setEditorLineNumbers}
        id={controlId}
        size={matches ? 'sm' : 'md'}
        checkedLabel="Show"
        uncheckedLabel="Hide"
        className="col-span-2"
      />
    </div>
  );
}
