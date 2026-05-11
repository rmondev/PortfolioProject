"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import Link from 'next/link';

const Homepage = () => {
  return (
    <div className="min-h-[100dvh] lg:h-screen overflow-y-auto">
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-15 xl:px-16 bg-stone-300">

        {/* IMAGE CONTAINER */}
        <motion.div 
          className="relative w-full h-[60vh] lg:h-full lg:w-3/4 z-0"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/striker_and_gear.png"
            alt=""
            fill
            className="object-contain"
          />
        </motion.div>

        {/* TEXT CONTAINER */}
        <motion.div 
          className="min-h-[50vh] lg:h-full lg:w-1/2 flex flex-col items-center justify-center relative z-20 gap-8 bg-stone-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* TITLE */}
          <h1 className="text-3xl text-black font-semibold md:text-5xl">Bridging Requirements and Working Systems</h1>

          {/* DESCRIPTION */}
          <p className="md:text-xl">
            Welcome — I&apos;m Riccardo Moncada, a Computer Programming &amp; Analysis graduate (Seneca College, 3.9 GPA) working across the full software development lifecycle. My focus is on the analyst-track work that shapes how systems get built: gathering requirements, designing data flows, mapping processes, and producing the documentation that makes development teams effective. When the role calls for it, I write the code myself. Currently exploring junior Business Analyst, Systems Analyst, Programmer Analyst, and full-stack development opportunities.
          </p>

          {/* BUTTONS */}
          <div className="flex w-full gap-4 items-center justify-center p-6">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Homepage;
