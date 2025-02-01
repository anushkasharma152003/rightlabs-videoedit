// TeamSection.jsx
export default function TeamSection() {
  const teamSections = [
    {
      emoji: "🎨",
      title: "Visual Wizards",
      description: "Color grading so good, it'll make your Instagram filters cry"
    },
    {
      emoji: "✨",
      title: "Transition Gods",
      description: "Smoother than your brain after watching ASMR videos"
    },
    {
      emoji: "⚡️",
      title: "VFX Legends",
      description: "Adding effects that'll make your mom ask if you're a hacker"
    },
    {
      emoji: "🚀",
      title: "Motion Masters",
      description: "Making things move faster than your coffee kicks in"
    }
  ];

  return (
    <section className=" bg-white min-h-screen pt-32 relative overflow-hidden ">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 ">
        {/* Enhanced Title Section */}
        <div className="mb-24 relative  ">
          {/* Background Text Effect */}
          <span className="text-[180px]   absolute -top-28 left-0 opacity-[0.09] font-bold tracking-tighter">
            
           TEAM
          </span>

          {/* Main Heading with Enhanced Gradient */}
          <div className="relative ">
            <h2 className="text-[100px]  font-medium leading-tight bg-clip-text text-transparent 
                         bg-gradient-to-r from-[#211c4d] via-[#010001] to-[#0e0007] 
                         animate-gradient bg-[length:200%_auto]">
              Squad Goals
              <span className="ml-4 text-2xl align-top inline-block animate-bounce">✌️</span>
              <span className=" text-8xl text-yellow-300 align-top">✌️</span>
            </h2>

            {/* Shine Effect Overlay */}
            <div className="absolute top-0 -inset-x-20 h-full skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent
                          animate-shine" />

            {/* Sparkle Elements */}
            <span className="absolute -top-10 right-40 text-3xl animate-[spin_4s_linear_infinite]">✨</span>
            <span className="absolute top-20 right-20 text-3xl animate-[spin_5s_linear_infinite]">✨</span>
          </div>

          <p className="text-[20px] font-normal text-gray-600 max-w-3xl mt-4  ">
            Not your average editing team. We're the ones who stay up late debating 
            whether that transition was smooth enough (it wasn't).
            <img className="w-[350px] opacity-50 mt-[-280px] ml-[60px]" src="/img/img123.svg" alt="" />
          </p>
        </div>

        {/* Full Width Image with Playful Elements */}
        <div className="relative w-full  mb-24 overflow-hidden group">
          <img 
            src="/img/team1.jpeg" 
            alt="RightLabs Team" 
            className="w-full h-full object-cover object-center rounded-3xl group-hover:scale-105 transition-all duration-700"
          />
          
          {/* Playful Floating Elements */}
          <div className="absolute top-10 left-10 text-6xl animate-bounce">🎬</div>
          <div className="absolute bottom-10 right-10 text-6xl animate-pulse">✨</div>
          
          {/* Hover Overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       bg-black/70 backdrop-blur-sm rounded-2xl p-8 opacity-0 
                       group-hover:opacity-100 transition-all duration-500">
            <p className="text-white text-2xl font-normal text-center">
              Swipe → to meet the team
            </p>
          </div>
        </div>

        {/* Team Info with Modern Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32 ">

        {/* <img className="opacity-10 w-[1000px] left-[200px] top-[1050px] absolute" src="/img/img2.svg" alt="" /> */}
          {teamSections.map((section, index) => (
            <div key={index} className="group relative">
          

              <div className="flex items-start space-x-6 ">
                <span className="text-6xl transform group-hover:scale-125 transition-transform duration-300">
                  {section.emoji}
                </span>
                <div>
                  <h3 className="text-[38px] font-normal text-gray-800 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-[20px] font-normal text-gray-800">
                    {section.description}
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 left-0 w-0 h-1 bg-[#18145d] 
                           group-hover:w-full transition-all duration-300"/>
            </div>
          ))}
        </div>

        {/* Fun Bottom Section */}
        <div className="text-center pb-32 relative">
          <div className="inline-block relative">
            <p className="text-[20px] font-normal text-gray-600 max-w-2xl mx-auto">
              Want to join the coolest editing team this side of the internet? 
              We're always looking for fellow video nerds! 
              <span className="ml-2 text-3xl inline-block animate-bounce">🎮</span>
            </p>
            <div className="absolute -right-16 -top-16 text-8xl animate-[spin_8s_linear_infinite]">
              ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}