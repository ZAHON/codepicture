import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { ProjectCard } from './components';
import { getOwnerProjects } from './server-actions';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
  const session = await getServerSession(authOptions);
  const ownerId = session?.user?.id;

  if (!session || !ownerId) {
    redirect('/');
  }

  const ownerProjects = await getOwnerProjects(ownerId);

  return (
    <>
      {ownerProjects.map(({ id, ...others }) => (
        <ProjectCard key={id} id={id} {...others} />
      ))}
    </>
  );
}
