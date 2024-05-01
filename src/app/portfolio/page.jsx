"use client"
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioPage = () => {

  const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "iOS College Registration App",
      desc: "This is a college registration app I created using Swift to practice implementing UI Elements.",
      img: ["/screenshots/iOSCollegeRegApp/WelcomeScreen1.png","/screenshots/iOSCollegeRegApp/ExploreScreen2.png", "/screenshots/iOSCollegeRegApp/RegistrationScreen2.png"],
      link: "https://github.com/rmondev/iOS-College-Registration-App",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "iOS Movie Database App",
      desc: "This is a movie database application I created to practice and showcases search bar functionality, swipe functionality and alert controllers.",
      img: ["/screenshots/iOSMovieDBApp/WelcomeScreen.png","/screenshots/iOSMovieDBApp/FilmListing.png","/screenshots/iOSMovieDBApp/AddFilm.png"],
      link: "https://github.com/rmondev/iOS-Movie-Database-Application",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "Android To-Do List App",
      desc: "This application showcases the implementation of various android UI Elements and Room database functionality.",
      img: ["/screenshots/androidToDoApp/SplashScreen.png","/screenshots/androidToDoApp/AddNewToDoItem.png","/screenshots/androidToDoApp/NewToDoListItemAdded.png"],
      link: "https://github.com/rmondev/Android-ToDo-App",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Android Multi App",
      desc: "A multi-feature Android application that showcases various functionalities such as Camera, Phone and Messaging intents. This project has been extracted from a larger Android development repository for focused development, easier management, and portfolio showcasing.",
      img: ["/screenshots/androidMultiApp/splash_screen.png","/screenshots/androidMultiApp/app_selection.png","/screenshots/androidMultiApp/calling_permission.png"],
      link: "https://github.com/rmondev/Android-Multi-App",
    },
  ];

  const ref = useRef();
  const {scrollYProgress} = useScroll({target: ref});
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div 
      className='h-full' 
      initial={{y:"-200vh"}} 
      animate={{y:"0vh"}}
      transition={{duration: 1}}
      >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
          <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">

            <motion.div style={{ x }}className="flex">
              <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"></div>
              {items.map((item) => (
  <div 
    className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
    key={item.id}
  >
    <div className="flex flex-col gap-8 text-white">
      <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">{item.title}</h1>
      <Link href={item.link}>
        <div className="flex items-center justify-center gap-4">
          {item.img.map((imgPath, index) => (
        
            <Image 
            className="border-4 border-black rounded-2xl"
            src={imgPath} 
            alt="" 
            width={196} 
            height={426} 
            key={index} />
          ))}
        </div>
      </Link>
      <p className='w-80 lg:w-[500px] lg:text-lg xl:w-[600px]'>{item.desc}</p>
      <Link href={item.link} className='flex justify-end'>
        <button className='p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded-xl'>See Demo</button>
      </Link>
    </div>
  </div>
))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default PortfolioPage
