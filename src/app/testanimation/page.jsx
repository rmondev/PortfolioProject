'use client'
import React from 'react'
import { motion } from 'framer-motion'

const TestPage = () => {
  return (
    <div className="h-full flex items-center justify-center">
        <motion.div 
            className="h-48 w-48 bg-red-400 rounded" 
            initial={{x:-300}} 
            animate={{x:400, opacity:0.5, rotate:360, scale:1}}
            transition={{duration:4, delay:2}}
        ></motion.div>
    </div>
  )
}

export default TestPage
