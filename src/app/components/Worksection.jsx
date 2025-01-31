export default function RightLabsExperience() {


    
    return (
      <section className="min-h-screen bg-black text-white py-20 relative">
        {/* Starry background */}
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `
                 radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 1px, transparent 1px),
                 radial-gradient(circle at 70% 30%, rgba(255,255,255,0.5) 1px, transparent 1px)
               `,
               backgroundSize: '100px 100px, 80px 80px',
             }} />
  
        <div className="container mx-auto px-4 relative z-10 pb-[100px]">
          <h1 className="text-8xl font-extrabol text-center mb-8 tracking-tighter mt-[100px]">
            THE RIGHTLABS VIBE CHECK
          </h1>
          
          <p className="text-xl text-center max-w-3xl mx-auto mb-20">
            No cap, we're here to make your content absolutely bussin'. From TikTok trends to viral moments,
            we keep it 💯 with premium edits that'll have your followers smashing that like button fr fr.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 01 - Speech Bubble */}
            <div className="relative rounded-2xl overflow-hidden bg-[#2B2B2B] aspect-video">
              <span className="absolute top-4 right-6 text-8xl font-bold text-white/90">01</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#1E2937] p-8 rounded-2xl transform rotate-2 w-4/5">
                  <h3 className="text-2xl font-bold text-center">
                    Vibes on Point
                  </h3>
                </div>
              </div>
            </div>
  
            {/* Card 02 - Red X */}
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video">
              <span className="absolute top-4 right-6 text-8xl font-bold text-white/90">02</span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4/5 h-4/5 relative">
                  <div className="absolute inset-0 bg-red-500 transform rotate-45"></div>
                  <div className="absolute inset-0 bg-red-500 transform -rotate-45"></div>
                </div>
              </div>
            </div>
  
            {/* Card 03 - Neon Sign */}
            <div className="relative rounded-2xl overflow-hidden bg-blue-900 aspect-video">
              <span className="absolute top-4 right-6 text-8xl font-bold text-white/90">03</span>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 
                            flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-2xl font-bold tracking-wider">MAIN CHARACTER ENERGY</span>
                </div>
              </div>
            </div>
          </div>
  
          <p className="text-xl text-center max-w-2xl mx-auto my-12">
            Your content? We're gonna make it slap harder than your mom's flip-flop. 
            No boring edits allowed in this house bestie!
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 04 */}
            <div className="relative rounded-2xl overflow-hidden bg-[#2B2B2B] aspect-video">
              <span className="absolute top-4 right-6 text-8xl font-bold text-white/90">04</span>
            </div>
  
            {/* Card 05 */}
            <div className="relative rounded-2xl overflow-hidden bg-[#2B2B2B] aspect-video">
              <span className="absolute top-4 right-6 text-8xl font-bold text-white/90">05</span>
            </div>
  
            {/* Card 06 */}
            <div className="relative rounded-2xl overflow-hidden bg-[#2B2B2B] aspect-video">
              <span className="absolute top-4 right-6 text-8xl font-bold text-white/90">06</span>
            </div>

           

            


          
            
          </div>


          
        </div>
      </section>
    );
  }