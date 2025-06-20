
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "PEC HACKS 3.0";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      data-scroll-section
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10" data-scroll data-scroll-speed="1">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="gradient-text-hero glow-effect">
              {typedText}
              <span className="animate-ping">|</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2" data-aos="fade-up" data-aos-delay="3500">
            The <span className="gradient-text">Largest</span> Hackathon in Punjab
          </p>
          <p className="text-lg md:text-xl text-gray-400" data-aos="fade-up" data-aos-delay="4000">
            March 15-17, 2024 | Punjab Engineering College
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12" data-aos="fade-up" data-aos-delay="4500">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">1000+</div>
            <div className="text-gray-400">Participants</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">₹5L+</div>
            <div className="text-gray-400">Prize Pool</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">48</div>
            <div className="text-gray-400">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">10+</div>
            <div className="text-gray-400">Tracks</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16" data-aos="fade-up" data-aos-delay="5000">
          <button className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 button-glow">
            Register Now
          </button>
          <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
            View Tracks
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-aos="fade-in" data-aos-delay="6000">
          <ArrowDown className="w-6 h-6 text-cyan-400" />
          <p className="text-sm text-gray-400 mt-2">Scroll to explore</p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-cyan-400 rounded-full float-animation"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-500 rounded-full float-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 right-10 w-5 h-5 bg-pink-500 rounded-full float-animation" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default Hero;
