import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib-server/auth';
import { LoadingOverlay, Sandbox } from './components';

export default async function ProjectPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/projects');
  }

  return (
    <>
      <LoadingOverlay />
      <Sandbox />
    </>
  );
}
