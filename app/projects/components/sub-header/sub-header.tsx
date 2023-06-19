import { CreateProject } from '..';

export function SubHeader() {
  return (
    <div className="p-4 lg:mx-auto lg:max-w-7xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium">My projects</h1>
        <CreateProject />
      </div>
    </div>
  );
}
