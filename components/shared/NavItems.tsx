'use client'

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {

  const pathname = usePathname();
// hook, client component

  return (
    <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
      {/* flex-between at global css */}
      {headerLinks.map((link) => {
      const isActive = pathname === link.route;

      return(
        <li
          key={link.route}
          className={
            `${isActive && 'text-primary-500'}
             flex-center p-medium-16 whitespace-nowrap`
          }
        >
          {/* on current path the color of li will be purple */}
          <Link href={link.route}>{link.label}</Link>
        </li>
      )}
      )}
    </ul>
  )
}

export default NavItems