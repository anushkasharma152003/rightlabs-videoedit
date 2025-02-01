'use client';

const StorySection = () => {
  return (
    <section className="bg-white min-h-screen text-black font-inter">
      <div className="container mx-auto px-8 py-24">
        <h1 className="text-[50px] lg:text-[70px] font-normal mb-12 text-center font-madefor font-stretch-ultra-condensed  tracking-tighter">
        Editing So Lit, Even TikTok Can’t <span className="animate-twinkle text-[#021842]"> Handle It</span>.
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center mt-[150px] ">
          {/* Left Side - Cameras in Increasing Order */}
          <div className="w-full lg:w-1/2 flex justify-start ">
            <div className="flex items-end ml-[-100px] ">
              {[
                { gradient: ['#ff00ff', '#ff9900'], scale: 0.6 }, // Smallest
                { gradient: ['#00ff99', '#33ccff'], scale: 0.7 },
                { gradient: ['#ff3399', '#ff0000'], scale: 0.85 },
                { gradient: ['#33ffcc', '#00ff99'], scale: 1.0 }, // Largest
              ].map((camera, index) => (
                <div
                  key={index}
                  className="transition-all duration-500 ease-in-out transform mr-[-25px]  hover:scale-110"
                  style={{
                    transform: `scale(${camera.scale})`,
                  }}
                >
                  <svg
                    viewBox="0 0 200 200"
                    className="w-36 lg:w-48 h-36 lg:h-48"
                    style={{
                      filter: 'drop-shadow(0 0 15px rgba(0, 0, 255, 0.5))',
                    }}
                  >
                    {/* Camera Body */}
                    <rect
                      x="30"
                      y="50"
                      width="140"
                      height="100"
                      rx="20"
                      fill="black"
                      stroke="#444"
                      strokeWidth="3"
                    />

                    {/* Top Bar */}
                    <rect x="50" y="40" width="100" height="10" rx="5" fill="#222" />

                    {/* Lens Outer Ring */}
                    <circle
                      cx="100"
                      cy="100"
                      r="35"
                      fill="black"
                      stroke="gray"
                      strokeWidth="3"
                    />

                    {/* Neon Lens Effect */}
                    <defs>
                      <radialGradient id={`grad-${index}`} cx="50%" cy="50%" r="50%">
                        <stop offset="10%" stopColor={camera.gradient[0]} />
                        <stop offset="90%" stopColor={camera.gradient[1]} />
                      </radialGradient>
                    </defs>
                    <circle
                      cx="100"
                      cy="100"
                      r="28"
                      fill={`url(#grad-${index})`}
                      style={{ filter: 'blur(2px)' }}
                    />

                    {/* Flash */}
                    <rect x="140" y="65" width="20" height="10" rx="2" fill="white" opacity="0.9" />

                    {/* Detail Lines */}
                    <line x1="50" y1="75" x2="70" y2="75" stroke="gray" strokeWidth="2" />
                    <line x1="130" y1="75" x2="150" y2="75" stroke="gray" strokeWidth="2" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Story Text */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-0 text-[20px] text-gray-700 font-normal">
              {/* <p className="leading-relaxed">
                It began with two passionate editors, one shared vision, and some
                groundbreaking ideas that made people rethink how video content could
                be created. It was in the year 2020.
              </p> */}
              <p className="leading-relaxed">
                Today, our team of editors and visual artists are constantly pushing
                creative boundaries, challenging conventions, and bringing fresh
                perspectives to every project. Sometimes competing, sometimes
                collaborating, but always delivering exceptional results.
              </p>
            </div>
          </div>
        </div>


            
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[150px] items-center mt-[150px] mb-[100px] ">

            {/* Right Side - Story Text */}
            <div className="w-full lg:w-1/2">
            <div className="space-y-6 text-lg text-gray-700 font-bold " >
              {/* <p className="leading-relaxed">
                It began with two passionate editors, one shared vision, and some
                groundbreaking ideas that made people rethink how video content could
                be created. It was in the year 2020.
              </p> */}
              <p className="leading-relaxed space-y-0 text-[20px] text-gray-700 font-normal">
                Today, our team of editors and visual artists are constantly pushing
                creative boundaries, challenging conventions, and bringing fresh
                perspectives to every project. Sometimes competing, sometimes
                collaborating, but always delivering exceptional results.
              </p>
            </div>
          </div>




          {/* Left Side - Cameras in Increasing Order */}
          <div className="w-full lg:w-1/2 flex justify-start mr-[-80px] ">
            <div className="flex items-end ml-[-100px] ">
              {[
                { gradient: ['#ff00ff', '#ff9900'], scale: 1.0 }, // Smallest
                { gradient: ['#00ff99', '#33ccff'], scale: 0.88 },
                { gradient: ['#ff3399', '#ff0000'], scale: 0.7 },
                { gradient: ['#33ffcc', '#00ff99'], scale: 0.6 }, // Largest
              ].map((camera, index) => (
                <div
                  key={index}
                  className="transition-all duration-500 ease-in-out transform mr-[-25px]  hover:scale-110"
                  style={{
                    transform: `scale(${camera.scale})`,
                  }}
                >
                  <svg
                    viewBox="0 0 200 200"
                    className="w-36 lg:w-48 h-36 lg:h-48"
                    style={{
                      filter: 'drop-shadow(0 0 15px rgba(0, 0, 255, 0.5))',
                    }}
                  >
                    {/* Camera Body */}
                    <rect
                      x="30"
                      y="50"
                      width="140"
                      height="100"
                      rx="20"
                      fill="black"
                      stroke="#444"
                      strokeWidth="3"
                    />

                    {/* Top Bar */}
                    <rect x="50" y="40" width="100" height="10" rx="5" fill="#222" />

                    {/* Lens Outer Ring */}
                    <circle
                      cx="100"
                      cy="100"
                      r="35"
                      fill="black"
                      stroke="gray"
                      strokeWidth="3"
                    />

                    {/* Neon Lens Effect */}
                    <defs>
                      <radialGradient id={`grad-${index}`} cx="50%" cy="50%" r="50%">
                        <stop offset="10%" stopColor={camera.gradient[0]} />
                        <stop offset="90%" stopColor={camera.gradient[1]} />
                      </radialGradient>
                    </defs>
                    <circle
                      cx="100"
                      cy="100"
                      r="28"
                      fill={`url(#grad-${index})`}
                      style={{ filter: 'blur(2px)' }}
                    />

                    {/* Flash */}
                    <rect x="140" y="65" width="20" height="10" rx="2" fill="white" opacity="0.9" />

                    {/* Detail Lines */}
                    <line x1="50" y1="75" x2="70" y2="75" stroke="gray" strokeWidth="2" />
                    <line x1="130" y1="75" x2="150" y2="75" stroke="gray" strokeWidth="2" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

        
        </div>


          


        {/* Bottom Text */}
        <div className="mt-[150px] text-center max-w-4xl mx-auto  mb-[100px]">
          <p className="space-y-0 text-[20px] text-gray-700 font-normal">
            Backed by a strong fundamental/value system, and experience of working
            with over 1000+ video projects, our team of creative editors, motion
            designers, colorists, and VFX artists believe RightLabs is an experience
            rather than just a company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
