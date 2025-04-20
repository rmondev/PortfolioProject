"use client"
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from "@/components/navbar";
import { usePathname } from 'next/navigation';


const TransitionProvider = ({children}) => {
    const pathName = usePathname();
  return (
    <div>
      <AnimatePresence mode="wait">
        <div key={pathName} className="w-screen h-screen bg-gray-400"
      >
        <motion.div className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
        animate={({height:"0vh"})}
        exit={{height:"140vh"}}
        transition={{duration:0.75, ease:"easeOut"}}
        />
        <motion.div className='fixed m-auto top-0 right-0 bottom-0 left-0 text-white text-6xl bg-transparent cursor-default z-50 w-fit h-fit'
        initial={({opacity:1})}
        animate={{opacity:0}}
        transition={{duration:1.5, ease:"easeOut"}}
        >
            {pathName.substring(1)}
        </motion.div>
        <motion.div className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40'
        initial={({height:"140vh"})}
        animate={{height:"0vh", transition:{delay:1}}}
        />
          <div className="h-24">
            <Navbar />
          </div>
            <div className="h-[calc(100vh-6rem)]">{children}</div>
        </div>
      </AnimatePresence>
    </div>
  )
}

export default TransitionProvider
