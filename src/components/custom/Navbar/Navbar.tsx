'use client';

import { ModeToggle } from '@/components/custom/Navbar/ModeToggle';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname() as string;
  return pathname?.toString() !== '/auth/sign-in' ? (
    <NavigationMenu>
      <NavigationMenuList className="flex w-screen flex-row justify-between p-2">
        <NavigationMenuItem>
          <span className="p-2 text-center font-mono text-xl">Investobot</span>
        </NavigationMenuItem>
        <div className="flex flex-row gap-2">
          <ModeToggle />
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Dashboard
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <Button
            onClick={() => {
              session?.user?.name ? signOut() : signIn();
            }}
          >
            {session?.user?.name ? 'Sign Out' : 'Sign in'}
          </Button>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  ) : (
    <></>
  );
};

export default Navbar;
