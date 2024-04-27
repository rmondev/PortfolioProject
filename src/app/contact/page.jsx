"use client"
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const ContactPage = () => {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const text = "Contact Me "
  const form = useRef();

  const sendEmail = (e) =>{
    e.preventDefault();
    setError(false);
    setSuccess(false);
    
  }

  return (
    <motion.div 
      className='h-full' 
      initial={{y:"-200vh"}} 
      animate={{y:"0vh"}}
      transition={{duration: 1}}
      >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
                >
                  { char }
                </motion.span>

              ))}
              😃
            </div>
          </div>

          {/* CONTACT FORM CONTAINER*/}

          <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
          >
            <span>Dear rmon.dev,</span>
            <textarea 
              rows={6}
              className='bg-transparent border-b-2 border-b-black outline-none resize-none '
              name="user_message"/>
            
            <span>My email address is:</span>
            <input
              type="email"
              className='bg-transparent border-b-2 border-b-black outline-none'
              name="user_email"/>

            <span>Regards</span>
            <button className="bg-purple-200 rounded-xl font-semibold text-gray-600 p-4">
                Send
              </button>

            {success && (
              <span className="text-green-600 font-semibold italic">
                Your message has been sent successfully!
              </span>
            )}
            {error && (
              <span className="text-red-600 font-semibold italic">
                Something went wrong!
              </span>
            )}
          </form>


          
        
      </div>
    
  </motion.div>
  )
}

export default ContactPage
