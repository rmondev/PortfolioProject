'use client'
import React from 'react';
import Link from 'next/link';
import {useState} from 'react';
import Image from 'next/image';
import NavLink from '@/components/navLink';

  const links = [
    {url: "/", title: "Home"},
    {url: "/about", title: "About"},
    {url: "/portfolio", title: "Portfolio"},
    {url: "/contact", title: "Contact"},  
  ]

const Navbar = () => {

  const [open, setOpen] = useState(false);
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>

      {/* Links*/}
      <div className='hidden md:flex gap-4 w-1/3'>
        {links.map(link => (
          <NavLink key={link.title} link={link}/>
          
        ))}
      </div>


        {/* Logo */}
        <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
          <Link href='/' className='text-sm bg-black rounded-xl p-1 font-semibold flex items-center justify-center'>
            <span className='text-white mr-1 ml-1'>rmon</span>
            <span className="w-12 h-8 rounded-lg bg-white text-black flex items-center justify-center">.dev</span>
            </Link>
        </div>

        {/*Social Media*/}
        <div className="hidden md:flex gap-4 w-1/3">
          <Link href="https://www.github.com/rmondev" target="_blank">
            <Image
            src='/github.png'
            alt=''
            width={24}
            height={24}
            />
          </Link>

          <Link href="https://www.linkedin.com/in/rmondev" target="_blank">
            <Image
            src='/linkedin.png'
            alt=''
            width={24}
            height={24}
            />
          </Link>

          <Link href="https://www.instagram.com/rmon.dev" target="_blank">
            <Image
            src='/instagram.png'
            alt=''
            width={24}
            height={24}
            />
          </Link>
        </div>
        
        

        {/* Responsive Menu */}
        <div className='md:hidden'>


          {/* Hamburger Menu */}
          <button className='w-10 h-8 flex flex-col justify-between z-50 relative' 
            onClick={(()=> setOpen(!open))}>
              <div className='w-10 h-1 bg-white rounded'></div>
              <div className='w-10 h-1 bg-white rounded'></div>
              <div className='w-10 h-1 bg-white rounded'></div>
          </button>

           {/* Menu List */}
           {open && (
            <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
           
              {links.map(link => (
                <Link href={link.url} key={link.title}>
                  {link.title}
                  </Link>
              ))}

            </div>
            )}
        </div>
      </div>
  )
}

export default Navbar
