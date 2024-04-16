import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='w-full border-b'>
        <div className='wrapper flex items-center justify-between'>
            {/* wrapper is the custome class we have added in the global.css , this is the thing which is making it responsive */}
            <Link href="/" className='w-36'>
                {/* pointing to the home */}
                <Image 
                    src="/assets/images/logo.svg" width={128} height={38}
                    alt='Evently logo'
                />
            </Link>

            <SignedIn>
                <nav className='md:flex-between hidden w-full max-w-xs'>
                    <NavItems></NavItems>
                </nav>
            </SignedIn>

            <div className='flex w-32 justify-end gap-3'>
            {/* justify-end to move it to the end of the container */}
            {/* Here we will set up the Clerk */}
            <SignedIn>
                <UserButton afterSignOutUrl='/'>
                </UserButton>
                <MobileNav />
            </SignedIn>
            <SignedOut>
                <Button asChild className='rounded-full' size="lg">
                    <Link href='/sign-in'>
                        Login
                    </Link>
                </Button>
            </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default Header