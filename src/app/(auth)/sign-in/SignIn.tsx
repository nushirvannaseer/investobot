import { Button } from '@/components/ui/button';
import { signIn, auth } from '@/auth';
import { redirect } from 'next/navigation';

async function getSession() {
  const session = await auth();
  return {
    session,
  };
}

export default async function SignInPage() {
  const { session } = await getSession();
  if (session) return redirect('/');

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <span className="mx-auto mb-4">
        Authenticate to continue to investobot
      </span>
      <form
        action={async () => {
          'use server';
          await signIn('google');
        }}
      >
        <Button type="submit">Signin with Google</Button>
      </form>
    </div>
  );
}
