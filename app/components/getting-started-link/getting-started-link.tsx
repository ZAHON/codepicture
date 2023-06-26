import type { GettingStartedLinkProps } from './getting-started-link.types';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib-server/auth';
import { LinkAsButton } from '@/components';

export async function GettingStartedLink(props: GettingStartedLinkProps) {
  const session = await getServerSession(authOptions);

  const href = session ? '/projects' : '/project';

  return (
    <LinkAsButton href={href} {...props}>
      Getting started
    </LinkAsButton>
  );
}
