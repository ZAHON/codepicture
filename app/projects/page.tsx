import { UserMenu } from '@/components';

export default function ProjectsPage() {
  return (
    <div className="p-4">
      <h1>Projects page</h1>
      {/* @ts-expect-error Server Component */}
      <UserMenu />
    </div>
  );
}
