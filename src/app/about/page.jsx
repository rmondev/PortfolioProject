"use client"
import Brain from '@/components/brain';
import { motion, useInView, useScroll } from 'framer-motion';
import { useRef } from 'react';

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once: true});
  const isSkillRefInView = useInView(skillRef, {margin:"-100px"});

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, {once: true});


  return (

    <motion.div 
      className='h-full' 
      initial={{y:"-200vh"}} 
      animate={{y:"0vh"}}
      transition={{duration: 1}}
      >
      {/*CONTAINER*/}
      <div className='h-full overflow-scroll lg:flex' ref={containerRef}>
        {/*TEXT CONTAINER*/}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/*BIOGRAPHY CONTAINER*/}
          <div className="flex flex-col gap-12 justify-center">
            {/*BIO TITLE*/}
            <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
            {/*BIOGRAPHY TEXT*/}
            <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at volutpat elementum, risus nisl aliquam velit, vitae consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at volutpat elementum, risus nisl aliquam velit, vitae consequat. </p>
            {/*BIOGRAPHY QUOTE*/}
            <span className='italic'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            {/*BIOGRAPHY SIGNATURE*/}
            <div className="self-end">
              <svg 
                width="208.25" 
                height="62" 
                viewBox="0 0 833 248" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 16.0804C2.25251 17.5954 3.10164 19.0136 3.6734 20.416C9.5456 34.8195 11.9509 50.8254 14.6265 66.016C22.9417 113.225 24.9831 160.915 25.8078 208.749C25.9963 219.679 26.2721 230.604 26.4924 241.532C26.7295 253.291 24.0124 239.568 23.602 236.17C21.4411 218.278 21.4755 200.067 22.1568 182.089C23.3503 150.593 26.5744 118.58 35.62 88.2646C41.2588 69.3671 49.5048 51.0287 61.7858 35.4766C72.1947 22.2953 87.2028 7.14776 104.001 2.6552C112.476 0.388645 116.885 4.06056 115.411 12.7716C111.846 33.8219 98.367 54.9496 86.5825 72.2152C76.1124 87.5551 63.6184 100.698 50.8327 114.05C41.2423 124.066 28.0579 136.572 33.6424 151.93C39.7772 168.801 58.3834 179.792 73.6898 186.843C92.2382 195.387 112.168 199.673 132.068 203.653" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M137.574 233.967C137.121 233.448 149.851 218.2 151.266 216.32C152.191 215.091 157.99 208.613 157.655 209.474C155.507 214.999 151.853 219.309 150.581 225.296C149.525 230.266 153.928 227.757 156.134 225.98C162.952 220.488 168.03 213.467 175.53 208.638C179.095 206.343 185.505 204.392 189.83 204.911C194.047 205.417 188.434 207.046 187.244 207.421C180.453 209.557 173.062 213.17 169.255 219.515C166.522 224.069 168.184 228.186 173.857 228.186C180.882 228.186 188.003 222.897 193.025 218.526C195.998 215.938 202.78 207.197 207.629 208.41C212.619 209.657 203.8 221.67 202.571 222.9C200.751 224.719 198.117 227.115 195.269 226.475C191.432 225.611 194.217 220.266 195.383 218.374C197.698 214.615 202.699 209.45 207.058 213.163C211.355 216.823 213.154 219.557 218.696 215.369C223.445 211.781 226.323 205.323 231.437 202.401C232.483 201.803 229.109 204.828 228.889 205.101C226.228 208.387 221.751 214.713 228.851 214.342C238.452 213.841 246.208 209.265 254.522 204.949C257.764 203.265 266.673 197.976 263.764 206.28C262.579 209.661 256.893 217.789 252.316 216.396C248.851 215.341 257.075 202.396 260.265 202.705C264.267 203.092 264.269 215.967 261.862 218.374C261.166 219.07 261.482 216.43 261.482 215.445C261.482 200.964 264.071 186.328 266.958 172.203C270.527 154.741 274.658 136.676 282.171 120.404C284.325 115.738 289.87 102.617 295.71 100.97C298.925 100.063 295.544 113.624 295.482 113.901C292.134 128.782 287.348 143.193 284.453 158.208C281.262 174.754 278.913 191.453 275.477 207.953C274.426 213.003 269.505 227.513 272.093 223.052C281.524 206.791 294.391 186.262 313.281 179.734C328.924 174.327 326.866 194.617 323.169 203.047C321.19 207.561 317.65 214.827 312.406 216.434C304.817 218.76 311.941 199.102 312.444 197.913C315.972 189.582 322.389 178.282 326.668 170.986C338.857 150.208 351.663 129.593 365.727 110.021C373.244 99.5604 378.158 93.3779 386.91 84.274C397.051 73.7264 408.494 65.3637 419.618 55.9784" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M441.741 33.6278C441.741 28.5127 443.065 36.9928 443.11 38.0394C445.629 97.2417 446.525 157.119 442.045 216.256C441.616 221.925 438.247 238.679 439.155 233.066C442.126 214.696 444.794 196.298 447.978 177.958C453.293 147.349 459.578 117.252 468.819 87.5567C471.567 78.7273 474.391 69.8599 477.947 61.3148C480.097 56.1482 482.667 49.5137 487.113 45.7599C492.628 41.1025 492.23 56.2661 492.209 57.968C492.102 66.4859 491.074 74.9729 490.345 83.4493C488.871 100.598 488.082 117.74 487.607 134.944C486.991 157.257 486.171 179.567 485.591 201.88C485.576 202.463 485.292 203.108 485.553 203.629C486.44 205.404 485.805 199.669 486.01 197.697C487.786 180.543 491.635 163.746 496.126 147.114C502.024 125.272 508.223 103.019 517.386 82.2703C521.652 72.6094 528.171 59.9556 537.619 54.0508C539.505 52.8719 541.186 53.1706 541.232 55.6861C541.477 69.2572 536.623 83.8881 534.386 97.1407C529.186 127.941 525.823 159.242 535.793 189.482C539.449 200.571 544.111 212.137 554.315 218.842C561.312 223.44 569.372 224.048 577.286 225.308" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M564.279 198.609C564.279 194.095 570.63 193.723 573.939 193.855C577.422 193.995 580.867 194.502 584.36 194.502C585.267 194.502 589.507 193.388 587.783 194.806C581.651 199.848 571.271 208.613 574.738 217.929C577.128 224.355 586.288 221.969 588.923 217.321C591.353 213.036 592.869 208.192 593.525 203.325C594.034 199.553 593.963 196.883 590.673 200.016C585.377 205.061 595.639 207.917 599.344 207.889C610.725 207.804 619.571 198.918 627.792 192.296C630.92 189.776 629.521 192.286 628.324 194.274C624.915 199.938 621.211 205.426 619.349 211.844C619.068 212.813 617.179 217.878 619.957 216.142C625.093 212.932 628.978 207.312 632.964 202.869C635.047 200.547 637.712 196.657 640.799 195.491C643.858 194.335 640.44 202.535 640.266 203.021C638.509 207.942 633.076 225.273 644.792 218.918C652.753 214.601 657.857 205.845 666.128 202.184C670.082 200.434 667.172 203.181 666.28 204.2C663.505 207.371 659.795 210.069 658.521 214.278C656.117 222.224 673.344 213.149 674.875 212.301C677.296 210.96 697.293 198.573 698.835 201.804C701.201 206.762 691.115 218.459 685.904 217.625C681.692 216.951 688.484 203.552 693.815 205.075C698.67 206.462 700.573 218.544 706.67 215.495C714.389 211.636 715.5 198.201 723.632 195.491C730.217 193.296 730.513 202.237 729.108 206.14C727.558 210.446 717.89 220.965 718.764 210.095C719.018 206.931 725.42 192.935 729.146 200.853C730.458 203.641 730.126 207.685 729.641 210.627C729.482 211.587 727.674 216.947 727.359 213.061C726.892 207.298 729.563 200.79 731.162 195.415C736.005 179.134 741.189 162.646 747.63 146.924C750.223 140.594 752.28 136.233 755.426 130.19C757.047 127.077 759.863 120.242 763.185 117.906C766.143 115.826 763.356 133.321 763.337 133.423C760.685 147.241 757.58 160.96 752.84 174.231C747.916 188.018 741.028 201.034 734.243 213.974C732.161 217.944 733.257 215.698 735.574 214.659C739.63 212.838 743.693 211.881 747.592 209.562C749.874 208.205 765.327 198.206 765.771 202.945C766.235 207.892 755.803 221.264 752.308 212.909C750.673 209.002 752.58 203.352 755.274 200.359C759.499 195.664 764.771 206.056 766.76 208.536C784.043 230.081 813.656 213.923 831.262 201.348" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M167.011 188.101C167.011 186.175 167.011 186.175 167.011 188.101" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                </svg>
            </div>

            {/*BIOGRAPHY SCROLL SVG*/}
            <motion.svg 
            initial={{opacity:0.2, y:0}}
            animate={{opacity:1, y:"10px"}}
            transition={{duration:3, repeat:Infinity, ease: "easeInOut"}}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
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



          {/*SKILLS CONTAINER*/}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
          {/*SKILLS TITLE*/}
          <motion.h1  
            initial={{x:"-300px"}} 
            animate={isSkillRefInView ? {x:0} : {}} 
            transition={{delay:0.2}} 
            className='font-bold text-2xl'
            >
              SKILLS
          </motion.h1>
          {/*SKILLS LIST*/}
            <motion.div 
            initial={{x:"-1000px"}} 
            animate={isSkillRefInView ? {x:0} : {}} 
            transition={{delay:0.4}} 
            ref={skillRef}
            className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">TypeScript</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Node.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">React.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">SCSS</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind CSS</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MongoDB</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Express.js</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Redux</div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Framer Motion</div>
              
            </motion.div>

           
            {/*SKILL SCROLL SVG*/}

            <motion.svg 
            initial={{opacity:0.2, y:0}}
            animate={{opacity:1, y:"10px"}}
            transition={{duration:3, delay:1, repeat:Infinity, ease: "easeInOut"}}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
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


          {/*EXPERIENCE CONTAINER*/}
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
          {/*EXPERIENCE TITLE*/}
          <motion.h1 
          initial={{x:"-400px"}} 
          animate={isExperienceRefInView ? {x:0} : {}} 
          transition={{delay:0.2}} 
          className='font-bold text-2xl'
          >
            EXPERIENCE
          </motion.h1>

            {/*EXPERIENCE LIST*/}
            <div className="">

              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                  <motion.div
                  initial={{x:"-1000px"}} 
                  animate={isExperienceRefInView ? {x:0} : {}} 
                  transition={{delay:0.4}} 
                  ref={experienceRef} 
                  className="w-1/3">
                    {/* JOB TITLE */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Programmer Analyst</div>
                    {/* JOB DESCRIPTION */}
                    <div className="p-3 text-sm italic">The role focused on enhancing and automating internal systems to optimize functionality and efficiency.</div>
                    {/* JOB DATE */}
                    <div className="p-3 text-red-400 text-sm font-semibold">2022 - 2023</div>
                    {/* JOB COMPANY */}
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Toronto Transit Commission</div>
                  </motion.div>
                {/* CENTER */}
                <motion.div 
                initial={{x:"-1000px"}} 
                animate={isExperienceRefInView ? {x:0} : {}} 
                transition={{delay:0.6}} 
                ref={experienceRef} 
                className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </motion.div>
                {/* RIGHT */}
                  <div className="w-1/3">

                  </div>
              </div>
               
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
            {/* LEFT */}
              <div className="w-1/3">
              </div>
            {/* CENTER */}
            <motion.div 
            initial={{x:"-1000px"}} 
            animate={isExperienceRefInView ? {x:0} : {}} 
            transition={{delay:0.6}} 
            ref={experienceRef} 
            className="w-1/6 flex justify-center">
              {/* LINE */}
              <div className="w-1 h-full bg-gray-600 rounded relative">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
              </div>
            </motion.div>
            {/* RIGHT */}
              <motion.div 
              initial={{x:"-1000px"}} 
              animate={isExperienceRefInView ? {x:0} : {}} 
              transition={{delay:0.8}} 
              ref={experienceRef} 
              className="w-1/3">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Programmer Analyst</div>
                {/* JOB DESCRIPTION */}
                <div className="p-3 text-sm italic">The role focused on enhancing and automating internal systems to optimize functionality and efficiency.</div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">2022 - 2023</div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Toronto Transit Commission</div>
              </motion.div>
            </div>

            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
                {/* LEFT */}
                  <motion.div 
                  initial={{x:"-1000px"}} 
                  animate={isExperienceRefInView ? {x:0} : {}} 
                  transition={{delay:0.4}} 
                  ref={experienceRef} 
                  className="w-1/3">
                    {/* JOB TITLE */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Programmer Analyst</div>
                    {/* JOB DESCRIPTION */}
                    <div className="p-3 text-sm italic">The role focused on enhancing and automating internal systems to optimize functionality and efficiency.</div>
                    {/* JOB DATE */}
                    <div className="p-3 text-red-400 text-sm font-semibold">2022 - 2023</div>
                    {/* JOB COMPANY */}
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Toronto Transit Commission</div>
                  </motion.div>
                {/* CENTER */}
                <motion.div 
                initial={{x:"-1000px"}} 
                animate={isExperienceRefInView ? {x:0} : {}} 
                transition={{delay:0.6}} 
                ref={experienceRef} 
                className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </motion.div>
                {/* RIGHT */}
                  <div className="w-1/3">

                  </div>
              </div>

            </div>
          </div>
        </div>
        
        
        {/*SVG CONTAINER*/}
        
        <div className='hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2'>
          <Brain scrollYProgress={scrollYProgress}/>
        </div>
        
      </div>
    </motion.div>
  )
}

export default AboutPage;
