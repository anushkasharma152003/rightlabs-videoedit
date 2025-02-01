export default function CTASection() {
    return (
      <section className="bg-black text-white py-32 relative">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4">
          {/* Top Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            {/* Left Side Text */}
            <div>
              <h2 className="text-[75px] font-normal leading-none mb-6">
                WE'RE GETTING A
                <span className="text-6xl mx-2 inline-block animate-bounce">🤔</span>
                <br />
                FEELING THAT YOU'RE
                <br />
                GONNA 
                <span className="text-[#FF3366]"> HIT</span>
                <br />
                <span className="text-yellow-400">THAT CONTACT BUTTON</span>
                <br />
                <span className="text-[#00B4FF]">RIGHT NOW</span>
                <span className="text-4xl ml-2 inline-block">👉</span>
              </h2>
            </div>
  
            {/* Right Side GIF/Image */}
            <div className="relative group">
              <img 
                src="/img/cta1.jpeg" 
                alt="Cool Video Edit" 
                className="rounded-3xl w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF3366]/20 to-[#00B4FF]/20 rounded-3xl 
                           group-hover:opacity-0 transition-opacity duration-500" />
            </div>
          </div>
  
          {/* Bottom CTA Box */}
          <div className="relative">
            <div className="bg-gradient-to-r from-purple-900 via-[#FF3366] to-[#00B4FF] p-[1px] rounded-3xl">
              <div className="bg-black rounded-3xl p-16 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF3366]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00B4FF]/10 rounded-full blur-3xl" />
                
                {/* Content */}
                <div className="relative text-center">
                  <h3 className="text-5xl font-normal mb-6">
                    Want to elevate your content game?
                  </h3>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                    Just bring your wildest video ideas or editing challenges.
                    Let's create something legendary together.
                  </p>
                  
                  {/* CTA Buttons */}
                  <div className="flex justify-center gap-6">
                    <button className="bg-gradient-to-r from-[#FF3366] to-[#FF3366] px-8 py-4 rounded-full
                                  text-xl hover:shadow-lg hover:shadow-[#FF3366]/50 transition-all duration-300
                                  hover:scale-105">
                      CONTACT US
                    </button>
                    <button className="bg-white text-black px-8 py-4 rounded-full text-xl
                                  hover:shadow-lg hover:shadow-white/50 transition-all duration-300
                                  hover:scale-105">
                      REQUEST A QUOTE
                    </button>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Floating Elements */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
              <span className="text-6xl animate-bounce">🎬</span>
            </div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
              <span className="text-6xl animate-pulse">✨</span>
            </div>
          </div>
  
          {/* Bottom Text */}
          <div className="text-center mt-12 text-gray-400 text-lg">
            P.S. - Already got over 500+ videos looking absolutely fire 🔥
          </div>
        </div>
  
        {/* Additional Background Effects */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(0,180,255,0.1),transparent_50%)] pointer-events-none" />
      </section>
    );
  }