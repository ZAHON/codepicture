import { ProjectCardSkeleton } from './components';

const skeletons = Array.from(Array(5).keys());

export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {skeletons.map((skeleton) => (
        <ProjectCardSkeleton key={skeleton} />
      ))}
    </div>
  );
}
