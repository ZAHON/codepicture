'use client';
import { useId } from 'react';
import {
  useProjectPageStore,
  selectEditorLineNumbers,
  selectSetEditorLineNumbers,
} from '@project/store';
import { Label, SegmentedSwitch } from '@/components';

export function EditorLineNumbersControl() {
  const controlId = useId();
  const editorLineNumbers = useProjectPageStore(selectEditorLineNumbers);
  const setEditorLineNumbers = useProjectPageStore(selectSetEditorLineNumbers);

  return (
    <div className="grid grid-cols-3 items-center pl-2">
      <Label htmlFor={controlId} className="text-sm md:text-xs">
        Line numbers
      </Label>
      <SegmentedSwitch
        inverted
        checked={editorLineNumbers}
        onCheckedChange={setEditorLineNumbers}
        id={controlId}
        checkedLabel="Show"
        uncheckedLabel="Hide"
        className="col-span-2 h-9 text-sm md:h-8 md:text-xs"
      />
    </div>
  );
}
