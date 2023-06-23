'use client';
import { useTransition } from 'react';
import { IconPlus } from '@tabler/icons-react';
import { useSession } from 'next-auth/react';
import { Button } from '@/components';
import { notify } from '@/lib-client';
import { createProject } from '@projects/server-actions';
import { useProjectsPageStore, selectProjectsCount } from '@projects/store';

const notificationId = crypto.randomUUID();

export function CreateProject() {
  const { data: session } = useSession();
  const [isPending, startTransition] = useTransition();
  const projectsCount = useProjectsPageStore(selectProjectsCount);

  const ownerId = session?.user?.id;

  const projectsLimt = projectsCount && projectsCount >= 50 ? true : false;

  function handleCreateProject() {
    if (projectsLimt) {
      notify.show({
        id: notificationId,
        position: 'bottom-right',
        type: 'error',
        message: 'You have reached projects limit',
      });

      return;
    }

    if (ownerId) {
      startTransition(async () => {
        try {
          notify.show({
            id: notificationId,
            position: 'bottom-right',
            type: 'loading',
            message: `New project is being created`,
          });

          await createProject(ownerId);

          notify.show({
            id: notificationId,
            position: 'bottom-right',
            type: 'success',
            message: `New project has been created`,
          });
        } catch {
          notify.show({
            id: notificationId,
            position: 'bottom-right',
            type: 'error',
            message: 'An error occurred while creating a new project',
          });
        }
      });
    } else {
      notify.show({
        id: notificationId,
        position: 'bottom-right',
        type: 'error',
        message: 'An error occurred while creating a new project',
      });
    }
  }

  return (
    <Button
      onClick={handleCreateProject}
      loading={isPending}
      disabled={!Boolean(ownerId)}
      icon={<IconPlus size="1.25rem" aria-hidden="true" focusable="false" />}
    >
      New
    </Button>
  );
}
