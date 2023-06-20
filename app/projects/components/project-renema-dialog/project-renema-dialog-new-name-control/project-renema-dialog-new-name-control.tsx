'use client';
import { useId } from 'react';
import { Label, TextInput } from '@/components';
import {
  useProjectRenameDialogStore,
  selectProjectRenameNewName,
  selectSetProjectRenameNewName,
} from '../project-renema-dialog-store';

export function ProjectRenemaDialogNewNameControl() {
  const controlId = useId();
  const projectRenameNewName = useProjectRenameDialogStore(selectProjectRenameNewName);
  const setProjectRenameNewName = useProjectRenameDialogStore(selectSetProjectRenameNewName);

  return (
    <div className="flex flex-col gap-y-1.5">
      <Label htmlFor={controlId} className="pl-1">
        Enter a new name for the project
      </Label>
      <TextInput
        value={projectRenameNewName}
        onChange={(e) => setProjectRenameNewName(e.target.value)}
        id={controlId}
      />
    </div>
  );
}
