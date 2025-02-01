export default function OriginStory() {
  return (
    <section className="bg-black min-h-screen py-32 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative group">
            <img 
              src="/img/c1.jpeg" 
              alt="RightLabs Origin" 
              className=" w-full  object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 " />
            
            {/* Floating Text Overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-3xl text-white font-light mb-4">RightLabs</h3>
              <div className="h-[2px] w-16 bg-gradient-to-r from-blue-900 to-pink-500" />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-[100px] font-normal leading-none text-white mb-8">
              BUT, WHY
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-blue-900 text-transparent bg-clip-text">
                RIGHTLABS?
              </span>
            </h2>

            <div className="space-y-8 text-[20px] text-gray-300 font-light">

           
              <p>
                Started by a bunch of Gen-Z editors who got tired of boring corporate videos. 
                We believed videos could be both professional AND absolutely fire 🔥
              </p>

              <p>
                The name? Well, we always believed in doing things the "right" way, but with 
                a twist of creativity. Plus, it sounds cooler than "Professional Video Editing Inc." 
                (which was taken anyway 😅)
              </p>
                
              <img className=" opacity-50" src="/img/img2.svg" alt="" />

              <p>
                Now we're here, turning client briefs into viral content and making sure 
                your audience forgets what the scroll button looks like.
              </p>

            
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mt-16">
              <div className="border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition-colors">
                <div className="text-4xl font-light text-purple-500 mb-2">500+</div>
                <div className="text-gray-400">Videos Edited</div>
              </div>
              <div className="border border-gray-800 rounded-xl p-6 hover:border-pink-500 transition-colors">
                <div className="text-4xl font-light text-pink-500 mb-2">100%</div>
                <div className="text-gray-400">That Guy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Emoji */}
      <div className="absolute top-20 right-20 text-6xl animate-bounce">
        🎥
      </div>
      <div className="absolute bottom-20 left-20 text-6xl animate-pulse">
        ✨
      </div>
    </section>
  );
}