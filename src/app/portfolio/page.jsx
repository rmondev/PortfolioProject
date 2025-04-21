"use client"
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const PortfolioPage = () => {

  const items = [
    {
      id: 1,
      title: "Chronicle: Your Ultimate Travel Companion ",
      platform: 'Mobile Web',
      desc: "Chronicle is a mobile web app for effortless travel documentation and sharing. Capture your journeys with text, photos, and videos, and relive your adventures anytime, anywhere.",
      img: ["/screenshots/webChronicleApp/main_screen.png", "/screenshots/webChronicleApp/home_screen.png", "/screenshots/webChronicleApp/forum.png"],
      githubLink: "https://github.com/Vaibhav-G-Parmar/PRJ566-Team_4",
      githubProjectLinks: {
        frontend: 'https://github.com/rmondev/chronicle-web-app/tree/0be3cee11c94a4bfc64811db098981fa2ff003f0',
        backend: 'https://github.com/rmondev/CHRONICLE_USERS_API/tree/7652d6680a762ee0b069b79a11006dfbc8ac8839'
      },
      link: 'https://chronicle-web-app-eight.vercel.app/',
    },
    {
      id: 2,
      title: "iOS College Registration App",
      platform: 'iOS',
      desc: "This is a college registration app I created using Swift to practice implementing UI Elements.",
      img: ["/screenshots/iOSCollegeRegApp/WelcomeScreen1.png","/screenshots/iOSCollegeRegApp/ExploreScreen2.png", "/screenshots/iOSCollegeRegApp/RegistrationScreen2.png"],
      githubLink: "https://github.com/rmondev/iOS-College-Registration-App",
      link: 'https://appetize.io/app/b_ekubowyrkxfhaml2zzsphzwh5y',
    },
    {
      id: 3,
      title: "iOS Movie Database App",
      platform: 'iOS',
      desc: "This is a movie database application I created to practice and showcases search bar functionality, swipe functionality and alert controllers.",
      img: ["/screenshots/iOSMovieDBApp/WelcomeScreen.png","/screenshots/iOSMovieDBApp/FilmListing.png","/screenshots/iOSMovieDBApp/AddFilm.png"],
      githubLink: "https://github.com/rmondev/iOS-Movie-Database-Application",
      link: 'https://appetize.io/app/b_glvjthcirf6wkf2fdhgufrttya',
    },
    {
      id: 4,
      title: "iOS Tax Filing Management App",
      platform: 'iOS',
      desc: "This is an app I created to Tax Filing Management App to handle a customer database for a tax filing agency. This application implements iOS CoreData to enable database persistence.",
      img: ["/screenshots/iOSTaxFilingApp/MainScreen.png","/screenshots/iOSTaxFilingApp/BeforeScreen.png","/screenshots/iOSTaxFilingApp/AfterScreen.png",],
      githubLink: "https://github.com/rmondev/iOS-Tax-Filing-Management-App",
      link: 'https://appetize.io/app/b_sfa3fvbzqebzlx3tgx4f5cwp2u',
    },
    {
      id: 5,
      title: "Android To-Do List App",
      platform: 'Android',
      desc: "This application showcases the implementation of various android UI Elements and Room database functionality.",
      img: ["/screenshots/androidToDoApp/SplashScreen.png","/screenshots/androidToDoApp/AddNewToDoItem.png","/screenshots/androidToDoApp/NewToDoListItemAdded.png"],
      githubLink: "https://github.com/rmondev/Android-ToDo-App",
      link: 'https://appetize.io/app/b_4i4ze3qalnxlsipbdulxzikoqq',
    },
    {
      id: 6,
      title: "Android Multi App",
      platform: 'Android',
      desc: "A multi-feature Android application that showcases various functionalities such as Camera, Phone and Messaging intents.",
      img: ["/screenshots/androidMultiApp/splash_screen.png","/screenshots/androidMultiApp/app_selection.png","/screenshots/androidMultiApp/calling_permission.png"],
      githubLink: "https://github.com/rmondev/Android-Multi-App",
      link: 'https://appetize.io/app/b_5kl22a5eofrcuzotistajtm2kq',
    },
    {
      id: 7,
      title: "Met Gallery Web App",
      platform: 'Mobile Web | Desktop Web',
      desc: "The Met Artwork App is an interactive web application that allows users to explore and engage with the Metropolitan Museum of Art's collection. This app supports functionality for searching, viewing detailed information, managing favorites, and tracking search history using the Museum's public API.",
      img: [
        '/screenshots/webMETGalleryApp/Screenshot1.png', 
        '/screenshots/webMETGalleryApp/Screenshot2.png',
        '/screenshots/webMETGalleryApp/Screenshot3.png',
        '/screenshots/webMETGalleryApp/Screenshot4.png',
        '/screenshots/webMETGalleryApp/Screenshot5.png',
        '/screenshots/webMETGalleryApp/Screenshot6.png',
        '/screenshots/webMETGalleryApp/Screenshot7.png',
        '/screenshots/webMETGalleryApp/Screenshot8.png',
        '/screenshots/webMETGalleryApp/Screenshot9.png',
        '/screenshots/webMETGalleryApp/Screenshot10.png',
      ],
      githubLink: "https://github.com/rmondev/met-gallery-app",
      githubProjectLinks: {
        frontend: 'https://github.com/rmondev/met-gallery-app',
        backend: 'https://github.com/rmondev/Seneca_WEB422_MET_USER_DB_API'
      },
      link: 'https://met-gallery-app.vercel.app/',
    },
    {
      id: 8,
      title: "CucinAI - Your AI-powered kitchen companion for smarter, tastier recipes",
      platform: 'Mobile Web | Desktop Web',
      desc: "A recipe organizer with AI-powered enhancements to keep meals exciting. This project helps me explore AI integration, authentication, and full-stack development while building a useful and interactive app. Easily organize your favorite recipes and use AI to generate similar or enhanced variations. Whether you're looking to switch things up while keeping familiar flavors or improve a dish with smart ingredient suggestions, this app helps you keep your meals exciting and fresh. Log in with Google and Try It Out!",
      img: [
        '/screenshots/cucinaiAIChef/Screenshot1.png', 
        '/screenshots/cucinaiAIChef/Screenshot2.png',
        '/screenshots/cucinaiAIChef/Screenshot3.png',
        '/screenshots/cucinaiAIChef/Screenshot4.png',
        '/screenshots/cucinaiAIChef/Screenshot5.png',
        '/screenshots/cucinaiAIChef/Screenshot6.png',
        '/screenshots/cucinaiAIChef/Screenshot7.png',
        '/screenshots/cucinaiAIChef/Screenshot8.png',
        '/screenshots/cucinaiAIChef/Screenshot9.png',
        '/screenshots/cucinaiAIChef/Screenshot10.png',
        '/screenshots/cucinaiAIChef/Screenshot11.png'
      ],
      githubLink: "https://github.com/rmondev/cucinai",
      link: 'https://cucinai.vercel.app/',
    },

    {
      id: 9,
      title: "Chef Claude - Your AI-powered kitchen companion for smarter, tastier recipes",
      platform: 'Mobile Web | Desktop Web',
      desc: "An AI powered recipe creation companion. Share a list of ingredients with Chef Claude, and the app will make a create a recipe for you to enjoy. ",
      img: [
        '/screenshots/chefClaudeApp/Screenshot2.png',
        '/screenshots/chefClaudeApp/Screenshot3.png',
        '/screenshots/chefClaudeApp/Screenshot4.png',
        '/screenshots/chefClaudeApp/Screenshot5.png',
      ],
      githubLink: "https://github.com/rmondev/Chef-Claude-App",
      link: 'https://chef-claude-app-seven.vercel.app/',
    }
    
  ];

  const openAppInWindow = (url) => {
    window.open(url, "_blank", "width=400,height=800,scrollbars=yes");
  };

  const ref = useRef();
  const {scrollYProgress} = useScroll({target: ref});
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const animationText = " <- Fullstack <- React <- Mobile <- Developer"

  
  const parentSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  const childSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: false
  };

  

  const sliderProjectShowcase = () => {
    return (
      <Slider
        {...parentSettings}
        className="w-10/12 max-w-[95vw] mx-auto px-2 bg-stone-300"
      >
        {items.map((item) => {
          if (!item.title || !item.img.length || !item.githubLink) return null;
  
          return (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center gap-6 py-8 px-4 rounded-2xl"
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center">
                {item.title}
              </h1>
  
              <div className="w-full flex justify-center items-center p-6">
                {item.img.length > 1 ? (
                  <Slider
                    {...childSettings}
                    className="w-[220px] sm:w-[300px] md:w-[340px] lg:w-[360px] xl:w-[380px] border  border-black rounded-2xl bg-black px-1 pt-2 pb-10" // Smartphone look
                  >
                    {item.img.map((imgPath, index) => (
                      <div key={index} className="py-2 bg-black rounded-xl">
                        <div className="relative w-full h-[400px] sm:h-[550px] md:h-[600px] rounded-xl overflow-hidden bg-black">
                          <Image
                            src={imgPath}
                            alt={`${item.title} screenshot ${index + 1}`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="relative w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-[500px] md:h-[600px] border border-black rounded-[2rem] overflow-hidden bg-white px-1 pt-2 pb-10">
                    <Image
                      src={item.img[0]}
                      alt={`${item.title} screenshot`}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
              </div>
  
              <p className="text-black text-sm sm:text-base md:text-lg px-4 max-w-2xl text-center mx-auto">
                {item.desc}
              </p>

              {/* BUTTONS */}
              <div className="flex w-full gap-4 items-center justify-center p-6">
              
              {item.githubProjectLinks?.frontend && item.githubProjectLinks?.backend ? (
                <>
                  <Link href={item.githubProjectLinks.frontend} passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black hover:border-black border-white border-2">
                        {'Frontend <code/>'}
                      </button>
                    </a>
                  </Link>
                  <Link href={item.githubProjectLinks.backend} passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black hover:border-black border-white border-2">
                        {'Backend <code/>'}
                      </button>
                    </a>
                  </Link>
                  <button 
                    className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black hover:border-black border-white border-2"
                    onClick={() => openAppInWindow(item.link)}
                  >
                    Try it Out!
                  </button>
                </>
              ) : (
                <>
                  <Link href={item.githubLink} passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black hover:border-black border-white border-2">
                        {'<code/>'}
                      </button>
                    </a>
                  </Link>
                  <button 
                    className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black hover:border-black border-white border-2"
                    onClick={() => openAppInWindow(item.link)}
                  >
                    Try it Out!
                  </button>
                </>
              )}

             

              </div>

            </div>
          );
        })}
      </Slider>
    );
  };
  
  
  
  

  return (
    <div 
      >
      <div className="relative" ref={ref}>
        
          <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-5xl sm:text-5xl md:text-5xl lg:text-8xl text-center">

          <div className='flex flex-col items-center justify-center gap-2'>
            My Projects
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

          

        
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center bg-stone-300">


            {sliderProjectShowcase()}

           
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col items-center justify-center text-center bg-stone-300">
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
    </div>
  )
}

export default PortfolioPage
