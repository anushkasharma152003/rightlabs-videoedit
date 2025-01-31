'use client';

import React, { use, useState } from 'react';

import { Camera, Play, FastForward, Scissors, Palette, Sparkles, MessageCircle } from 'lucide-react';

const LandingPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "RightLabs took my disaster and made it a masterpiece. 10/10 would cry again.",
      author: "Sarah K., Influencer"
    },
    {
      text: "I can't believe it's not Hollywood.",
      author: "Mike R., Content Creator"
    }
  ];

  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Cut It, Crop It, Drop It",
      description: "Professional video editing that makes your content pop"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Glow Up Your Videos",
      description: "Color grading that'll make your viewers go wow"
    },
    {
      icon: <FastForward className="w-8 h-8" />,
      title: "We Add BOOM to Your Zoom",
      description: "Motion graphics that'll make your head spin"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Lights. Camera. Chaos.
            <br />
            Welcome to RightLabs.
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
            Your video editing dreams—unfiltered, unpredictable, unforgettable.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:scale-105 transition-transform">
            Make My Videos Cool
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            We Fix Your Clips (and Your Vibes).
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:scale-105 transition-transform">
                <div className="text-purple-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">
            What People Are Saying
            <br />
            <span className="text-gray-400">(and What We Bribed Them to Say)</span>
          </h2>
          <div className="bg-gray-800 p-8 rounded-lg">
            <p className="text-2xl italic mb-4">
              "{testimonials[activeTestimonial].text}"
            </p>
            <p className="text-purple-400">
              {testimonials[activeTestimonial].author}
            </p>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeTestimonial === index ? 'bg-purple-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Slide Into Our DMs
            <br />
            <span className="text-gray-400">(Or Email If You're Fancy)</span>
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name (Tell Us What Your Mom Calls You)"
              className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Email (Don't Ghost Us)"
              className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Message (Spill the Tea)"
              rows="4"
              className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:scale-105 transition-transform">
              Send It
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xl mb-6">Made with Love and a Lot of Ctrl+Z</p>
          <p className="text-gray-400 mb-8">
            No editors were harmed in the making of this website.
          </p>
          <div className="flex justify-center gap-6 text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Services
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Careers
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Blog
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;