import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib-client/auth';
import { NotFound, ProjectCardsWrapper, ProjectCard } from './components';
import { getOwnerProjects } from './server-actions';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default async function ProjectsPage(props: { searchParams: { search?: string } }) {
  const { searchParams } = props;

  const search = searchParams?.search;

  const session = await getServerSession(authOptions);
  const ownerId = session?.user?.id;

  if (!session || !ownerId) {
    redirect('/');
  }

  const ownerProjects = await getOwnerProjects({
    ownerId,
    projectName: search,
  });

  if (ownerProjects.length === 0) {
    return <NotFound />;
  }

  return (
    <ProjectCardsWrapper>
      {ownerProjects.map(({ id, ...others }) => (
        <ProjectCard key={id} id={id} {...others} />
      ))}
    </ProjectCardsWrapper>
  );
}
