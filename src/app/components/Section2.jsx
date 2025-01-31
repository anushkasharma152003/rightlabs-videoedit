'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Film, Play, Award, Sparkles } from 'lucide-react';
import { useMemo } from 'react';

const CommunicationSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the title
    gsap.fromTo(".gradient-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".gradient-title",
          start: "top center+=100",
          end: "top center",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate the cards
    gsap.from(".feature-card", {
      opacity: 1,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".features-container",
        start: "top center+=100",
        end: "top center",
        toggleActions: "play none none reverse"
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);


  

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] top-0 left-0 bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute w-[500px] h-[500px] bottom-0 right-0 bg-pink-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Main Title */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="gradient-title text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent italic">
          Why RightLabs? Because 
            <br />
            Regular Editing Is Boring
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            At RightLabs, we transform raw footage into compelling narratives. 
            We understand that every frame tells a story, and every edit shapes the message.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-container grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: <Film className="w-10 h-10 text-purple-400" />,
              title: "Creative Excellence",
              description: "Our expert editors blend technical precision with creative innovation to deliver content that stands out."
            },
            {
              icon: <Play className="w-10 h-10 text-pink-400" />,
              title: "Strategic Storytelling",
              description: "We craft narratives that engage your audience and deliver your message with maximum impact."
            },
            {
              icon: <Award className="w-10 h-10 text-purple-400" />,
              title: "Industry Experience",
              description: "From commercial projects to creative content, we bring years of expertise to every project."
            },
            {
              icon: <Sparkles className="w-10 h-10 text-pink-400" />,
              title: "Creative Innovation",
              description: "We stay ahead of trends and technologies to give your content a competitive edge."
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="feature-card p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10  duration-300"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "50+", label: "Expert Editors" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center mt-[100px]">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunicationSection;