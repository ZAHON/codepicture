import { IconBoxOff } from '@tabler/icons-react';

export function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-y-2 rounded-lg border border-neutral-5 bg-neutral-1 dark:bg-neutral-2">
      <IconBoxOff size="12rem" aria-hidden="true" focusable="false" />
      <h2 className="text-xl font-medium">No projects found</h2>
      <p>Create new project or edit your search filters.</p>
    </div>
  );
}
