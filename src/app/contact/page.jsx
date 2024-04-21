"use client"

import React from 'react'
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <motion.div 
      className='h-full' 
      initial={{y:"-200vh"}} 
      animate={{y:"0vh"}}
      transition={{duration: 1}}
      >
      <div>
        ContactPage
      </div>
  </motion.div>
  )
}

export default ContactPage
