'use client';

import { Inter } from 'next/font/google';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const inter = Inter({ subsets: ['latin'] });

const Hero = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const sections = sectionsRef.current;

    sections.forEach((section, i) => {
      gsap.fromTo(section,
        {
          opacity: i === 0 ? 1 : 1,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const slides = [
    {
      title: "Lights. Camera. Chaos.",
      description: "Not just an ad agency or a creative agency, we are a Communication Company. Definitions are limiting (and boring). Just releasing ourselves from the shackles of these preset definitions, we are left in a world full of possibilities. Our creative minds are unleashed.",
      img: "/img/img123.svg"
    },
    {
      title: "With Your Video Editing Dreams",
      description: "If it's extraordinary, extraverted and extra creative it's what we do. We push boundaries and create experiences that leave lasting impressions. f it's extraordinary, extraverted and extra creative it's what we do. We push boundaries and create experiences that ",
      //  img: "/img/img2.svg"
    },

  //   {
  //     title: "UNLEASH\nYOUR STORY",
  //     description: "We blend creativity with strategy, innovation with execution, and passion with precision. Every project is a new opportunity to create something remarkable.",
  //  img: "/img/img3.svg"
  //   }
  ];

  return (
    <div className={`relative min-h-screen  bg-black overflow-hidden ${inter.className}`}>
      <div className="flex">
     

        {/* Right Side - Video */}
        <div className="w-1/2  right-0 h-screen overflow-hidden relative ">
  
            
        <img className='' src="/img/vid123.jpeg" alt="" />
          {/* <video 
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/your-video.mp4" type="video/mp4" />
          </video> */}
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r  to-black/20"></div>
        </div>


             {/* Left Side - Scrolling Content with Background Effects */}
        <div className="w-1/2 relative">
          {/* Background Effects Container */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Stars */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: 0.6
                }}
              />
            ))}

            {/* Red Ring - Smaller and centered in left section */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              <div className="relative w-[400px] h-[400px]">
                {/* <div 
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '1.5px solid rgba(255, 0, 0, 0.8)',
                    boxShadow: '0 0 30px 2px rgba(255, 0, 0, 0.5)',
                  }}
                ></div> */}
              </div>
            </div>
          </div>

          {/* Scrolling Content */}
          <div className="h-screen overflow-y-auto   ">
            {slides.map((slide, index) => (
              <div
                key={index}
                ref={el => sectionsRef.current[index] = el}
                className="min-h-screen flex items-center relative z-10  "
                style={{ padding: '0 2.5rem' }}


              
              >

                <div className="max-w-xl opacity-100  h-[404px] pl-[40px] bg-[url('/img/img1234.svg')]  ">
                    
                  <h1 className="text-[3.5rem] font-normal  leading-[1.1] tracking-tight mb-6   font-madefor  text-gray-100 i whitespace-pre-line opacity-100">
                    {slide.title}
                  </h1>
                  <p className=" text-white/90   font-madefor font-mormal text-[20px] leading-relaxed opacity-100 ">
                    {slide.description}
                  </p>
                  <div className= "   h-[700px]]  "><img
                            src={slide.img}
                            alt="Quirky Team Picture"
  
                        class=" max-w-md mx-auto opacity-40 mt-[-150px] ml-[20px]  rounded-xl shadow-xl  transition-all duration-300 transform hover:scale-105"
                           /></div>
                </div>
               
              </div>
            ))}
          </div>
        </div>


      </div>




      {/* Chat Button */}
      <button className="fixed bottom-8 left-8 bg-[#F7E987] text-black px-6 py-3 rounded-full hover:bg-[#F7E987]/90 transition-colors z-50 flex items-center space-x-2">
        <span className="text-xl">👋</span>
        <span>Let's Chat!</span>
      </button>
    </div>
  );
};

export default Hero;