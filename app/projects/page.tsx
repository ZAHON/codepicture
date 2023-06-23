import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib-server/auth';
import { NotFound, InitStore, ProjectCardsWrapper, ProjectCard } from './components';
import { getProjects } from './server-actions';

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

  const projects = await getProjects({
    ownerId,
    projectName: search,
  });

  if (projects.length === 0) {
    return <NotFound />;
  }

  return (
    <>
      <InitStore projectsCount={projects.length} />
      <ProjectCardsWrapper>
        {projects.map(({ id, ...others }) => (
          <ProjectCard key={id} id={id} {...others} />
        ))}
      </ProjectCardsWrapper>
    </>
  );
}
