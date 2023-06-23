import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib-client/auth';
import { LoginButtonInner } from './login-button-inner';

export async function LoginButton() {
  const session = await getServerSession(authOptions);

  if (session) {
    return null;
  }

  return <LoginButtonInner />;
}
