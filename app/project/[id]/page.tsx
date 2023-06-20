import { getProjectData } from './server-actions';
import { Sandbox } from '../components';
import { LoadingOverlay, SaveProjectData } from './components';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default async function ProjectIDPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const projectData = await getProjectData(id);

  return (
    <>
      <LoadingOverlay {...projectData} />
      <SaveProjectData />
      <Sandbox />
    </>
  );
}
