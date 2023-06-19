'use client';
import { useTransition } from 'react';
import { IconPlus } from '@tabler/icons-react';
import { useSession } from 'next-auth/react';
import { Button } from '@/components';
import { createProject } from '../../server-actions';

export function CreateProject() {
  const { data: session } = useSession();
  const [isPending, startTransition] = useTransition();

  function handleCreateProject() {
    const ownerId = session?.user?.id;

    if (ownerId) {
      startTransition(() => createProject(ownerId));
    }
  }

  return (
    <Button
      onClick={handleCreateProject}
      disabled={isPending}
      icon={<IconPlus size="1.25rem" aria-hidden="true" focusable="false" />}
    >
      New
    </Button>
  );
}
