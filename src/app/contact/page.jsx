"use client"
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Social from '@/components/social';

const ContactPage = () => {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [user_email, setUserEmail] = useState('');
  const [user_message, setUserMessage] = useState('');
  const [user_name, setUsername] = useState('');

  const text = "Contact Me "
  //const form = useRef();

  const templateParams = {
    to_name: 'rmon.dev',
    from_name: user_name,
    from_email: user_email,
    message: user_message
  };

  const sendEmail = (e) =>{
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID, 
      templateParams,
      process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);

        setUserEmail('');
        setUsername('');
        setUserMessage('');

        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
      }, 5000);


        
      })
      .catch((error) => {
        console.log('FAILED...', error);
        setError(true);
        setTimeout(() => {
          setError(false);
      }, 5000);
      });
    
    
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
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-5xl">
          <div className="items-center justify-center">
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
                
              </div>
              <div className='flex flex-col items-center justify-center p-2'><Social/></div>
            </div>
            
          </div>

          <div className="bg-red-50 h-5/6 lg:h-full lg:w-1/2 rounded-xl text-lg flex flex-col justify-center p-10 mb-8">
            <form
            onSubmit={sendEmail}
            >
              <div className="flex flex-col gap-1">
                <span className='pb-2'>Dear rmon.dev,</span>
                <span className='pb-2'>My name is:</span>
                <textarea
                  autoFocus
                  rows={1}
                  type="name"
                  value={user_name}
                  onChange={(e) => setUsername(e.target.value)}
                  className='bg-transparent border-b-2 border-b-black outline-none resize-none'
                  name="user_name"
                />

                <div className="flex flex-col">
                  <span>Message:</span>
                  <textarea 
                    rows={4}
                    className='bg-transparent border-2 border-black pb-2 resize-none'
                    name="user_message"
                    value={user_message}
                    onChange={(e) => setUserMessage(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <span className='pb-2'>My email address is:</span>
                    <textarea
                      rows={1}
                      type="email"
                      className='bg-transparent border-b-2 border-b-black outline-none resize-none'
                      name="user_email"
                      value={user_email}
                      onChange={(e) => setUserEmail(e.target.value)}
                      />
                </div>

                <div className="flex flex-col">
                  <span className='p-2'>Regards</span>
                    <button 
                    className="bg-purple-200 rounded-xl font-semibold text-gray-600 p-2"
                    type='submit'>
                        Send
                      </button>
                </div>

                <div className="flex flex-col">
                  {success && (
                    <span className="text-green-600 font-semibold italic text-lg sm:text-sm">
                      Message Sent!
                    </span>
                  )}
                  {error && (
                    <span className="text-red-600 font-semibold italic text-lg sm:text-sm">
                      Something went wrong!
                    </span>
                  )}
                </div>

              </div>
              



            </form>
          </div>

          {/* CONTACT FORM CONTAINER*/}

          {/* <form
          onSubmit={sendEmail}
          ref={form}
          className="h-5/6 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-5 justify-center p-20 mb-8"
          >
            <span>Dear rmon.dev,</span>
            <span>My name is:</span>
            <input
              type="name"
              value={user_name}
              onChange={(e) => setUsername(e.target.value)}
              className='bg-transparent border-b-2 border-b-black outline-none'
              name="user_name"
              />

            <span>Message:</span>
            
            <textarea 
              rows={4}
              className='bg-transparent border-2 border-gray-600'
              name="user_message"
              value={user_message}
              onChange={(e) => setUserMessage(e.target.value)}
              />
            
            <span>My email address is:</span>
            <input
              type="email"
              className='bg-transparent border-b-2 border-b-black outline-none'
              name="user_email"
              value={user_email}
              onChange={(e) => setUserEmail(e.target.value)}
              />

            

            <span>Regards</span>
            <button 
            className="bg-purple-200 rounded-xl font-semibold text-gray-600 p-4"
            type='submit'>
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
          </form> */}


          
        
      </div>
    
  </motion.div>
  )
}

export default ContactPage
