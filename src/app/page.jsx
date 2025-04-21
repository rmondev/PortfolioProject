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

      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-15 xl:px-16 bg-stone-300">

        {/* IMAGE CONTAINER */}      
        <div className="h-3/4 lg:h-full lg:w-3/4 relative z-0 mb-20">
          <Image
          src='/striker_and_gear.png'
          alt=''
          fill
          className='object-contain'
          />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-center justify-center relative z-20 gap-8 bg-stone-300">
          {/* TITLE */}
          <h1 className="text-3xl text-black font-semibold md:text-5xl">Kicking Ideas Into Motion</h1>
          

          


          {/*DESCRIPTION */}
          <p className="md:text-xl">
          Welcome to my developer portfolio — where every project is driven by precision, momentum, and purpose. Just like gears in motion, my code turns ideas into seamless, scalable applications.

            </p>

          <p className="md:text-xl">
          I’m a Full-Stack Developer with a passion for building intuitive web and mobile experiences. From front-end interfaces to backend logic and cloud deployment, I specialize in technologies like React.js, Node.js, and Azure. With a strong foundation in CI/CD, API integration, and Agile workflows, I bring both creativity and technical rigor to every build.

          </p>
          
          {/* BUTTONS */}
          <div className="flex w-full gap-4 items-center justify-center p-6 ">
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
