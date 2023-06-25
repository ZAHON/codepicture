'use client';
import { IconPencil } from '@tabler/icons-react';
import { useMediaQuery } from '@/hooks';
import { DialogTrigger, Button, IconButton } from '@/components';
import { useProjectPageStore, selectProjectName } from '@project/store';

export function RenameProjectDialogTrigger() {
  const matches = useMediaQuery('(min-width: 768px)');

  const projectName = useProjectPageStore(selectProjectName);

  const label = 'Change project name';

  function getTrigger() {
    if (matches) {
      return (
        <Button aria-label={label} color="neutral" variant="light">
          <span className="max-w-[12rem] truncate">{projectName}</span>
        </Button>
      );
    }

    return (
      <IconButton aria-label={label} variant="light">
        <IconPencil size="1.25rem" aria-hidden="true" focusable="false" />
      </IconButton>
    );
  }

  return <DialogTrigger>{getTrigger()}</DialogTrigger>;
}
