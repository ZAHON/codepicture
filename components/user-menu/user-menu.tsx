import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib';
import { UserMenuInner } from './user-menu-inner';

export async function UserMenu() {
  const session = await getServerSession(authOptions);

  const userImage = session && session.user && session.user.image;

  if (!session) {
    return null;
  }

  return <UserMenuInner userImage={userImage} />;
}
