'use client';
import { useId } from 'react';
import { Label, TextInput } from '@/components';
import {
  useProjectsPageStore,
  selectProjectRenameNewName,
  selectSetProjectRenameNewName,
} from '@projects/store';

export function ProjectRenemaDialogNewNameControl() {
  const controlId = useId();
  const projectRenameNewName = useProjectsPageStore(selectProjectRenameNewName);
  const setProjectRenameNewName = useProjectsPageStore(selectSetProjectRenameNewName);

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
