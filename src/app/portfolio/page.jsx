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
      color: "from-green-300 to-red-300",
      title: "Chronicle: Your Ultimate Travel Companion ",
      desc: "Chronicle is a mobile web app for effortless travel documentation and sharing. Capture your journeys with text, photos, and videos, and relive your adventures anytime, anywhere.",
      img: ["/screenshots/webChronicleApp/main_screen.png", "/screenshots/webChronicleApp/home_screen.png", "/screenshots/webChronicleApp/forum.png"],
      link: "https://github.com/Vaibhav-G-Parmar/PRJ566-Team_4",
    },
    {
      id: 2,
      color: "from-red-300 to-blue-300",
      title: "iOS College Registration App",
      desc: "This is a college registration app I created using Swift to practice implementing UI Elements.",
      img: ["/screenshots/iOSCollegeRegApp/WelcomeScreen1.png","/screenshots/iOSCollegeRegApp/ExploreScreen2.png", "/screenshots/iOSCollegeRegApp/RegistrationScreen2.png"],
      link: "https://github.com/rmondev/iOS-College-Registration-App",
    },
    {
      id: 3,
      color: "from-blue-300 to-yellow-300",
      title: "iOS Movie Database App",
      desc: "This is a movie database application I created to practice and showcases search bar functionality, swipe functionality and alert controllers.",
      img: ["/screenshots/iOSMovieDBApp/WelcomeScreen.png","/screenshots/iOSMovieDBApp/FilmListing.png","/screenshots/iOSMovieDBApp/AddFilm.png"],
      link: "https://github.com/rmondev/iOS-Movie-Database-Application",
    },
    {
      id: 4,
      color: "from-yellow-300 to-purple-300",
      title: "iOS Tax Filing Management App",
      desc: "This is an app I created to Tax Filing Management App to handle a customer database for a tax filing agency. This application implements iOS CoreData to enable database persistence.",
      img: ["/screenshots/iOSTaxFilingApp/MainScreen.png","/screenshots/iOSTaxFilingApp/BeforeScreen.png","/screenshots/iOSTaxFilingApp/AfterScreen.png",],
      link: "https://github.com/rmondev/iOS-Tax-Filing-Management-App",
    },
    {
      id: 5,
      color: "from-purple-300 to-blue-300",
      title: "Android To-Do List App",
      desc: "This application showcases the implementation of various android UI Elements and Room database functionality.",
      img: ["/screenshots/androidToDoApp/SplashScreen.png","/screenshots/androidToDoApp/AddNewToDoItem.png","/screenshots/androidToDoApp/NewToDoListItemAdded.png"],
      link: "https://github.com/rmondev/Android-ToDo-App",
    },
    {
      id: 6,
      color: "from-blue-300 to-blue-500",
      title: "Android Multi App",
      desc: "A multi-feature Android application that showcases various functionalities such as Camera, Phone and Messaging intents.",
      img: ["/screenshots/androidMultiApp/splash_screen.png","/screenshots/androidMultiApp/app_selection.png","/screenshots/androidMultiApp/calling_permission.png"],
      link: "https://github.com/rmondev/Android-Multi-App",
    },
    {
      id: 7,
      color: "from-blue-500 to-sky-300",
      title: "Met Gallery Web App",
      desc: "The Met Artwork App is an interactive web application that allows users to explore and engage with the Metropolitan Museum of Art's collection. This app supports functionality for searching, viewing detailed information, managing favorites, and tracking search history using the Museum's public API.",
      img: ["/screenshots/webMETGalleryApp/home_screen.png"],
      link: "https://github.com/rmondev/MET-Gallery-Web-App",
    },
    {
      id: 9,
      color: "from-sky-300 to-white",
      title: "",
      desc: "",
      img: [],
      link: "",
    },
   


  ];

  const ref = useRef();
  const {scrollYProgress} = useScroll({target: ref});
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const animationText = " <- Fullstack <- React <- Mobile <- Developer"

  return (
    <motion.div 
      className='h-full' 
      initial={{y:"-200vh"}} 
      animate={{y:"0vh"}}
      transition={{duration: 1}}
      >
      <div className="h-[600vh] relative" ref={ref}>
        
          <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-5xl sm:text-5xl md:text-5xl lg:text-8xl text-center">

          <div className='flex flex-col items-center justify-center gap-2'>
            My Works
            <motion.svg 
            initial={{opacity:0.2, y:0}}
            animate={{opacity:1, y:"10px"}}
            transition={{duration:3, repeat:Infinity, ease: "easeInOut"}}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={75}
            height={75}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path
              d="M15 11L12 14L9 11"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            </motion.svg>
            </div>

          </div>

          

        
          <div className="sticky top-0 flex h-screen gap-8 items-center overflow-hidden">

            <motion.div style={{ x }}className="flex">
            
              <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-yellow-200 to-green-300">
              </div>
              {items.map((item) => (
                <div 
                  className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                  key={item.id}
                >
                  <div className="mt-4 mb-4 flex flex-col gap-8 text-white">
                    <h1 className="text-xl font-bold md:text-xl lg:text-4xl xl:text-4xl">{item.title}</h1>
                    <Link href={item.link}>
                      <div className="flex items-center justify-center gap-2">

                        
                        
                        {item.img.map((imgPath, index) => (

                        item.img.length > 1 ? (
                          <div key={index} 
                          className="w-24 h-52 sm:w-[94px] sm:h-[213px] md:w-[106px] md:h-[213px] lg:w-[202px] lg:h-[426px] xl:w-[230px] xl:h-[510px] border-2 border-black md:rounded-lg lg:rounded-2xl xl:rounded-2xl rounded-md relative overflow-hidden"
                          >
                            <Image src={imgPath} alt="" fill />
                        </div>
                         ) : (
                        <div key={index} className="">
                          <Image 
                          className='border border-black'
                          src={imgPath} 
                          width={1000}
                          height={1000}
                          alt="" />
                        </div>
                         )
                          ))}

                      


                      </div>
                    </Link>
                    <p className='w-100 lg:w-[600px] lg:text-lg xl:w-[700px]'>{item.desc}</p>
                    
                      <Link href={item.link} className='flex justify-end'>
                        <button className='m-4 p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold rounded-xl border border-black'>See Demo</button>
                      </Link>
                    
                  </div>
                </div>
              ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: -360 }}
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
              <textPath xlinkHref="#circlePath" className="text-lg">
                {animationText}
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
