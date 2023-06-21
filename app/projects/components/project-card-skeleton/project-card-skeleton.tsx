import { Skeleton } from '@/components';

export function ProjectCardSkeleton() {
  return (
    <div className="flex flex-col gap-y-4 rounded-lg border border-neutral-5 bg-white p-4 dark:bg-neutral-2">
      <div className="flex flex-col gap-y-2">
        <Skeleton className="h-9 rounded-lg" />
        <Skeleton className="h-4 rounded-lg" />
      </div>
      <Skeleton className="h-4 rounded-lg" />
    </div>
  );
}
