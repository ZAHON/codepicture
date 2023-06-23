'use client';
import { useId } from 'react';
import { Label, TextInput } from '@/components';
import {
  useProjectPageStore,
  selectExportImageName,
  selectSetExportImageName,
} from '@project/store';

export function ExportMenuFileNameControl() {
  const controlId = useId();
  const exportImageName = useProjectPageStore(selectExportImageName);
  const setExportImageName = useProjectPageStore(selectSetExportImageName);

  return (
    <div className="flex flex-col gap-y-1.5">
      <Label htmlFor={controlId} className="pl-1">
        File name
      </Label>
      <TextInput
        value={exportImageName}
        onChange={(e) => setExportImageName(e.target.value)}
        id={controlId}
        placeholder="Enter file name..."
      />
    </div>
  );
}
