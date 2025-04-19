'use client'


import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'





const NavLink = ({link}) => {

    const pathName= usePathname();



  return (


    <Link className={`rounded-lg p-2 ${pathName === link.url && 'bg-black text-white hover:bg-white hover:text-black hover:border-black border-white border-2'} z-60`} href={link.url}>
        {link.title}
    </Link>
  )
}

export default NavLink
