"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import Link from 'next/link';


const Homepage = () => {
  return (

  <motion.div 
    className='h-full' 
    initial={{y:"-200vh"}} 
    animate={{y:"0vh"}}
    transition={{duration: 1}}
    >

      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">

        {/* IMAGE CONTAINER */}      
        <div className="h-3/4 lg:h-full lg:w-1/2 relative z-0">
          <Image
          src='/explosion_of_color.png'
          alt=''
          fill
          className='object-contain'
          />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-4 items-center justify-center relative z-20">
          {/* TITLE */}
          <h1 className="text-3xl text-black font-semibold md:text-5xl">Crafting Tomorrow’s Technology, Today.</h1>
          
          {/*DESCRIPTION */}
          <p className="md:text-xl">
          Welcome to my digital canvas, where innovation meets artistry. 
          Here, meticulous coding and a refined aesthetic sense unite, 
          presenting a portfolio rich with diverse projects that exemplify 
          my dedication to excellence. 
            </p>

          <p className="md:text-xl">
          I am an emerging Full-Stack Developer passionate about building scalable and user-friendly applications. 
          Experienced in web and mobile development, cloud deployment, and backend systems, with expertise in React.js, Node.js, and Azure services. 
          Skilled in CI/CD, API integration, and Agile development, with the ability to collaborate in cross-functional teams.
          </p>
          
          {/* BUTTONS */}
          <div className="flex w-full gap-4 items-center justify-center mb-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
            </Link>
          </div>
          
        </div>
      </div>
    </motion.div>
  )
}

export default Homepage
