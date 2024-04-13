"use client"

import { ModeToggle } from "@/components/custom/Navbar/ModeToggle"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
  

const Navbar = () => {
    const { data: session } = useSession();
    const pathname = usePathname() as string;
    return (pathname?.toString()!== "/auth/sign-in" ?
            <NavigationMenu>
                <NavigationMenuList className="w-screen p-2 flex flex-row justify-between">
                    <NavigationMenuItem>
                        <span className="text-xl font-mono text-center p-2">Investobot</span>
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
                        <Button onClick={() => { session?.user?.name ? signOut() : signIn() }}>{session?.user?.name ? "Sign Out" : "Sign in"}</Button>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
            : <></>
    )
}

export default Navbar 