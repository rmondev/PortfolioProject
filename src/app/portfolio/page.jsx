"use client"
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { techIcons } from '../../../public/iconsImageData/techIcons';




const PortfolioPage = () => {

  const items = [

    {
      id: 13,
      title: "TraderJoeAI — Autonomous Equity Trading Research System",
      platform: ' | Personal Project | Automation System | Systems Design | AI Integration | ',
      desc: "TraderJoeAI is a paper-trading equity research system I designed and built to explore the intersection of business analysis, systems architecture, and quantitative decision-making. The system runs in simulation mode against live market data — no real trades are placed — with strategy performance benchmarked against the S&P 500. I designed the requirements and data flow architecture across three integrated data sources (Perplexity AI, Alpaca Markets, Alpha Vantage), built a risk governance framework with hard enforcement rules, mapped a scheduling model of 10 automated routines, and established audit trails via append-only trading journals and benchmark logs. Research summaries and trade notifications are delivered to users in real time via Discord.",
      img: [
        '/screenshots/traderJoeAI/Screenshot1.png',
      ],
      githubLink: "#",
      link: '#',
      hideLinks: true,
      imgLayout: 'landscape',
      techStack: techIcons.filter(icon =>
        ["TypeScript", "Node.js", "Github", "Discord", "Twilio", "Alpaca Markets", "Claude", "Perplexity"].includes(icon.name)
      )
    },

    {
      id: 14,
      title: "Foodie AI — Social Platform for Food Creators (Planning Phase)",
      platform: ' | Personal Project | Mobile App | Business Analysis | Planning Phase | AI Integration | ',
      desc: "Foodie AI is the planning-phase successor to CucinAI — a React Native social platform combining AI-powered recipe generation with community features. The project is deliberately structured as a business analysis exercise rather than a code-first build. Deliverables published publicly include functional and non-functional requirements documentation, screen flow design, Firestore data models and security rules, target user personas, and a tracked GitHub Projects board with 4 planning milestones.",
      img: [],
      githubLink: "https://github.com/rmondev/SocialRecipeAppPlanning",
      link: 'https://github.com/rmondev/SocialRecipeAppPlanning',
      linkLabel: 'View Planning Docs',
      techStack: techIcons.filter(icon =>
        ["Firebase", "OpenAI", "Figma", "Github", "React Native", "Expo"].includes(icon.name)
      )
    },

    {
      id: 1,
      title: "CucinAI - Your AI-powered kitchen companion for smarter, tastier recipes",
      platform: ' | Personal Project | Web App | Full-Stack | AI Integration | ',
      desc: "A recipe organizer with AI-powered enhancements to keep meals exciting. This project helped me explore AI integration with OpenAI, authentication, and full-stack development while building a useful and interactive app. Easily organize your favorite recipes and use AI to generate similar or enhanced variations. Whether you're looking to switch things up while keeping familiar flavors or improve a dish with smart ingredient suggestions, this app helps you keep your meals exciting and fresh. Log in with Google and Try It Out!",
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
      techStack: techIcons.filter(icon =>
        ["VSCode", "React", "Next.js", "Node.js","Tailwind CSS", "OpenAI", "JavaScript", "Github" ].includes(icon.name)
      )
    },
    {
      id: 2,
      title: "Met Gallery Web App",
      platform: ' | Academic Project | Web App | Full-Stack | ',
      desc: "The Met Gallery App is an interactive web application that allows users to explore and engage with the Metropolitan Museum of Art's collection. This app supports functionality for searching, viewing detailed information, managing favorites, and tracking search history using the Museum's public API.",
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
      loginCredentials: {
        userName: 'rmondev',
        password: 'cosmo123'
      },
      techStack: techIcons.filter(icon =>
        ["VSCode","React", "Next.js", "Tailwind CSS", "JavaScript", "Github", 'Express.js', 'MongoDB', 'Azure', 'Node.js' ].includes(icon.name)
      )
    },
    {
      id: 3,
      title: "Chef Claude - Your AI-powered kitchen companion for smarter, tastier recipes",
      platform: ' | Personal Project | Web App | Frontend | AI Integration | ',
      desc: "An AI powered recipe creation companion. Share a list of ingredients with Chef Claude, and the app will make a create a recipe for you to enjoy. This project helped me explore AI integration,by exploring AI API integration with multiple LLM providers including Hugging Face.",
      img: [
        '/screenshots/chefClaudeApp/Screenshot1.png',
        '/screenshots/chefClaudeApp/Screenshot2.png',
        '/screenshots/chefClaudeApp/Screenshot3.png',
        '/screenshots/chefClaudeApp/Screenshot4.png',
      ],
      githubLink: "https://github.com/rmondev/Chef-Claude-App",
      link: 'https://chef-claude-app-seven.vercel.app/',
      techStack: techIcons.filter(icon =>
        ["VSCode","React", "Vite.js", "Node.js", 'CSS3', "JavaScript", "Github" ].includes(icon.name)
      )
    },
    {
      id: 4,
      title: "Tenzies Game",
      platform: ' | Personal Project | Web App | Frontend | ',
      desc: `Tenzies is a fast-paced dice game where players race to get all ten of their dice to show the same number. The first player to shout "Tenzies!" after achieving this wins. It's a simple, fun game that can be played by 2 or more players of almost any age. `,
      img: [
        '/screenshots/tenziesGame/Screenshot1.png',
        '/screenshots/tenziesGame/Screenshot2.png',
        '/screenshots/tenziesGame/Screenshot3.png',
        '/screenshots/tenziesGame/Screenshot4.png',
      ],
      githubLink: "https://github.com/rmondev/Tenzies-Game",
      link: 'https://tenzies-game-ecru-delta.vercel.app/',
      techStack: techIcons.filter(icon =>
        ["VSCode","React", "Vite.js", "Node.js", "CSS3", "JavaScript", "Github" ].includes(icon.name)
      )
    },
    {
      id: 5,
      title: "Health Tracker Ring Product Showcase Website",
      platform: ' | Personal Project | Website | Frontend | ',
      desc: "This is a mock product showcase website for a Health Tracker Ring. In this project I learned how to create a static product showcase website, stylizing components with images, video and with carousels that translate product information into beautiful and effectively informative visuals.",
      img: [
        '/screenshots/vitalHealthWebsite/Screenshot1.png', 
        '/screenshots/vitalHealthWebsite/Screenshot2.png',
        '/screenshots/vitalHealthWebsite/Screenshot3.png',
        '/screenshots/vitalHealthWebsite/Screenshot4.png',
        '/screenshots/vitalHealthWebsite/Screenshot5.png',
        '/screenshots/vitalHealthWebsite/Screenshot6.png',
        '/screenshots/vitalHealthWebsite/Screenshot7.png',
        '/screenshots/vitalHealthWebsite/Screenshot8.png',
        '/screenshots/vitalHealthWebsite/Screenshot9.png',
        '/screenshots/vitalHealthWebsite/Screenshot10.png',
        '/screenshots/vitalHealthWebsite/Screenshot11.png'
      ],
      githubLink: "https://github.com/rmondev/vital-health-ring-interstitial",
      link: 'https://vital-health-ring-interstitial.vercel.app/',
      techStack: techIcons.filter(icon =>
        ["VSCode","React", "Next.js", "Tailwind CSS", "TypeScript", "Github", 'Node.js' ].includes(icon.name)
      )
      
    },
    {
      id: 6,
      title: "Chronicle: Your Ultimate Travel Companion ",
      platform: ' | Team Project | Web App | Full-Stack | ',
      desc: "Chronicle is a mobile web app for effortless travel documentation and sharing. Capture your journeys with text, photos, and videos, and relive your adventures anytime, anywhere.",
      img: ["/screenshots/webChronicleApp/main_screen.png", "/screenshots/webChronicleApp/home_screen.png", "/screenshots/webChronicleApp/forum.png"],
      githubLink: "https://github.com/Vaibhav-G-Parmar/PRJ566-Team_4",
      githubProjectLinks: {
        frontend: 'https://github.com/rmondev/chronicle-web-app/tree/0be3cee11c94a4bfc64811db098981fa2ff003f0',
        backend: 'https://github.com/rmondev/CHRONICLE_USERS_API/tree/7652d6680a762ee0b069b79a11006dfbc8ac8839'
      },
      link: 'https://chronicle-web-app-eight.vercel.app/',
      loginCredentials: {
        userName: 'rmondev',
        password: 'pass1234!'
      },
      techStack: techIcons.filter(icon =>
        ["VSCode","React", "Next.js", "Tailwind CSS", "TypeScript", "Github", 'Express.js', 'MongoDB', 'Azure', 'Node.js' ].includes(icon.name)
      )
      
    },
    {
      id: 7,
      hidden: true,
      title: "Meme Generator",
      platform: ' | Mobile Web App | Desktop Web App | ',
      desc: "A simple Meme Generator App built with React and Vite to fetch a random meme image from api.imgflip.com, and overlay text entered by the user onto the image.",
      img: [
        "/screenshots/memeGenerator/Screenshot1.png",
        "/screenshots/memeGenerator/Screenshot2.png", 
      ],
      githubLink: "https://github.com/rmondev/Meme-Generator.git",
      link: 'https://meme-generator-delta-olive.vercel.app/',
      techStack: techIcons.filter(icon =>
        ["VSCode","React", "Vite.js", "Node.js", "CSS3", "JavaScript", "Github" ].includes(icon.name)
      )
    },
    {
      id: 8,
      title: "iOS College Registration App",
      platform: ' | Academic Project | iOS App | Swift | ',
      desc: "This is a college registration app I created using Swift to practice implementing UI Elements.",
      img: ["/screenshots/iOSCollegeRegApp/WelcomeScreen1.png","/screenshots/iOSCollegeRegApp/ExploreScreen2.png", "/screenshots/iOSCollegeRegApp/RegistrationScreen2.png"],
      githubLink: "https://github.com/rmondev/iOS-College-Registration-App",
      link: 'https://appetize.io/app/b_ekubowyrkxfhaml2zzsphzwh5y',
      techStack: techIcons.filter(icon =>
        ['XCode','Swift'].includes(icon.name)
      )
    },
    {
      id: 9,
      hidden: true,
      title: "iOS Movie Database App",
      platform: ' | iOS | ',
      desc: "This is a movie database application I created to practice and showcases search bar functionality, swipe functionality and alert controllers.",
      img: ["/screenshots/iOSMovieDBApp/WelcomeScreen.png","/screenshots/iOSMovieDBApp/FilmListing.png","/screenshots/iOSMovieDBApp/AddFilm.png"],
      githubLink: "https://github.com/rmondev/iOS-Movie-Database-Application",
      link: 'https://appetize.io/app/b_glvjthcirf6wkf2fdhgufrttya',
      techStack: techIcons.filter(icon =>
        ['XCode','Swift', 'SQLite'].includes(icon.name)
      )
    },
    {
      id: 10,
      hidden: true,
      title: "iOS Tax Filing Management App",
      platform: ' | iOS | ',
      desc: "This is an app I created to Tax Filing Management App to handle a customer database for a tax filing agency. This application implements iOS CoreData to enable database persistence.",
      img: ["/screenshots/iOSTaxFilingApp/MainScreen.png","/screenshots/iOSTaxFilingApp/BeforeScreen.png","/screenshots/iOSTaxFilingApp/AfterScreen.png",],
      githubLink: "https://github.com/rmondev/iOS-Tax-Filing-Management-App",
      link: 'https://appetize.io/app/b_sfa3fvbzqebzlx3tgx4f5cwp2u',
      techStack: techIcons.filter(icon =>
        ['XCode','Swift', 'SQLite'].includes(icon.name)
      )
    },
    {
      id: 11,
      hidden: true,
      title: "Android To-Do List App",
      platform: ' | Android |',
      desc: "This application showcases the implementation of various android UI Elements and Room database functionality.",
      img: ["/screenshots/androidToDoApp/SplashScreen.png","/screenshots/androidToDoApp/AddNewToDoItem.png","/screenshots/androidToDoApp/NewToDoListItemAdded.png"],
      githubLink: "https://github.com/rmondev/Android-ToDo-App",
      link: 'https://appetize.io/app/b_4i4ze3qalnxlsipbdulxzikoqq',
      techStack: techIcons.filter(icon =>
        ['Android Studio','Java', 'SQLite'].includes(icon.name)
      )
    },
    {
      id: 12,
      hidden: true,
      title: "Android Multi App",
      platform: ' | Android | ',
      desc: "A multi-feature Android application that showcases various functionalities such as Camera, Phone and Messaging intents.",
      img: ["/screenshots/androidMultiApp/splash_screen.png","/screenshots/androidMultiApp/app_selection.png","/screenshots/androidMultiApp/calling_permission.png"],
      githubLink: "https://github.com/rmondev/Android-Multi-App",
      link: 'https://appetize.io/app/b_5kl22a5eofrcuzotistajtm2kq',
      techStack: techIcons.filter(icon =>
        ['Android Studio','Java'].includes(icon.name)
      )
    },
  ];

  const openAppInWindow = (url) => {
    window.open(url, "_blank", "width=400,height=800,scrollbars=yes");
  };

  const ref = useRef();
  const {scrollYProgress} = useScroll({target: ref});
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const animationText = " <- Fullstack <- React <- Mobile <- Developer"

  
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black text-white text-2xl flex items-center justify-center hover:bg-white hover:text-black border-2 border-black transition-all shadow-md"
    >
      ‹
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black text-white text-2xl flex items-center justify-center hover:bg-white hover:text-black border-2 border-black transition-all shadow-md"
    >
      ›
    </button>
  );

  const ChildPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black text-white text-xl flex items-center justify-center hover:bg-white hover:text-black border-2 border-black transition-all shadow-md"
    >
      ‹
    </button>
  );

  const ChildNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black text-white text-xl flex items-center justify-center hover:bg-white hover:text-black border-2 border-black transition-all shadow-md"
    >
      ›
    </button>
  );

  const parentSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  const childSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: false,
    prevArrow: <ChildPrevArrow />,
    nextArrow: <ChildNextArrow />
  };

  

  const sliderProjectShowcase = () => {
    return (
      <Slider
        {...parentSettings}
        className="w-10/12 max-w-[95vw] mx-auto px-2 bg-stone-300"
      >
        {items.map((item) => {
          if (!item.title || !item.githubLink || item.hidden) return null;
  
          return (
            <div
              key={item.id}
              className="flex flex-col items-center content-center justify-center gap-6 py-8 px-16 rounded-2xl"
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center">
                {item.title}
              </h1>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {item.platform.split('|').map(p => p.trim()).filter(Boolean).map((tag, i) => (
                  <span key={i} className="text-xs sm:text-sm px-3 py-1 rounded-full border border-black text-black font-medium">
                    {tag}
                  </span>
                ))}
              </div>

            

              <div className="w-full flex justify-center items-center p-6">
                {item.img.length === 0 ? (
                  <div className="w-full max-w-3xl aspect-video rounded-xl border border-black flex items-center justify-center bg-stone-200">
                    <p className="text-black text-sm sm:text-base italic">Screenshots coming soon</p>
                  </div>
                ) : item.img.length > 1 ? (
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
                ) : item.imgLayout === 'landscape' ? (
                  <div className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden bg-black">
                    <Image
                      src={item.img[0]}
                      alt={`${item.title} screenshot`}
                      fill
                      className="object-contain"
                    />
                  </div>
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
  
              <div className='mt-4'>
                <h1 className='font-bold text-center text-lg'>Description</h1>  
                <p className="text-black text-sm sm:text-base md:text-lg px-4 max-w-2xl text-center mx-auto">
                  {item.desc}
                </p>
              </div>


              <h1 className='text-black text-sm font-bold sm:text-base md:text-lg px-4 max-w-2xl text-center mx-auto mt-4'>Built with:</h1>
              <div className="flex flex-wrap justify-center items-center gap-4 mt-4 bg-white rounded-2xl p-4 mx-auto w-fit"> 
                {item.techStack?.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <Image src={tech.url} alt={tech.name} width={40} height={40} />
                    <p className="text-xs mt-1">{tech.name}</p>
                  </div>
                ))}
              </div>

              { item.loginCredentials?.userName && item.loginCredentials?.password &&
                <div className='text-black text-sm sm:text-base md:text-lg px-4 max-w-2xl text-center mx-auto mt-4'>
                  <h1 className='font-bold'>Login Credentials:</h1>
                  <div className='mt-2'>
                    <p>Username: {item.loginCredentials.userName}</p>
                    <p>Password: {item.loginCredentials.password}</p>
                  </div>
                </div>
              }

              
            

              {/* BUTTONS */}
              {!item.hideLinks && <div className="flex w-full gap-4 items-center justify-center p-6">
              
              {item.githubProjectLinks?.frontend && item.githubProjectLinks?.backend ? (
                <>

                    
                      <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black hover:border-black border-white border-2"
                      onClick={() => openAppInWindow(item.githubProjectLinks.frontend)}>
                        {'Frontend <code/>'}
                      </button>
                   
               
                 
                    
                      <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black hover:border-black border-white border-2"
                      onClick={() => openAppInWindow(item.githubProjectLinks.backend)}>
                        {'Backend <code/>'}
                      </button>
                    
                
                  <button
                    className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black hover:border-black border-white border-2"
                    onClick={() => openAppInWindow(item.link)}
                  >
                    {item.linkLabel || 'Try it Out!'}
                  </button>
                </>
              ) : (
                <>
                  
                    
                      <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black hover:border-black border-white border-2"
                      onClick={() => openAppInWindow(item.githubLink)}>
                        {'<code/>'}
                      </button>
                   
                
                  <button
                    className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-white hover:text-black hover:border-black border-white border-2"
                    onClick={() => openAppInWindow(item.link)}
                  >
                    {item.linkLabel || 'Try it Out!'}
                  </button>
                </>
              )}

             

              </div>}

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
