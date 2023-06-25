'use client';
import { useId, useState } from 'react';
import { Close } from '@radix-ui/react-dialog';
import { DialogBody, Label, TextInput, Button } from '@/components';
import { useProjectPageStore, selectProjectName, selectSetProjectName } from '@project/store';

export function RenameProjectDialogBody() {
  const controlId = useId();

  const projectName = useProjectPageStore(selectProjectName);
  const setProjectName = useProjectPageStore(selectSetProjectName);

  const [projectNewName, setProjectNewName] = useState(projectName);

  function handleRenameProject() {
    const projectNameTrim = projectName.trim();
    const projectNewNameTrim = projectNewName.trim();

    if (projectNameTrim !== projectNewNameTrim && projectNewNameTrim.length !== 0) {
      setProjectName(projectNewNameTrim);
    }
  }

  return (
    <>
      <DialogBody>
        <div className="flex flex-col gap-y-1.5">
          <Label htmlFor={controlId} className="pl-1">
            Enter a new name for the project
          </Label>
          <TextInput
            value={projectNewName}
            onChange={(e) => setProjectNewName(e.target.value)}
            id={controlId}
          />
        </div>
      </DialogBody>
      <div className="flex justify-end gap-x-4 p-6">
        <Close asChild>
          <Button color="neutral">Close</Button>
        </Close>
        <Close asChild onClick={handleRenameProject}>
          <Button>Confirm</Button>
        </Close>
      </div>
    </>
  );
}
