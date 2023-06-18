'use client';
import { signIn } from 'next-auth/react';
import { IconBrandGithub } from '@tabler/icons-react';
import { Button } from '@/components';

export function LoginButtonInner() {
  function handleSignIn() {
    signIn('github', { callbackUrl: '/projects' });
  }

  return (
    <Button
      color="neutral"
      variant="light"
      icon={<IconBrandGithub size="1.25rem" aria-hidden="true" focusable="false" />}
      onClick={handleSignIn}
    >
      Login
    </Button>
  );
}
