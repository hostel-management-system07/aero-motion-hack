
import React, { useEffect, useState } from 'react';
import { ArrowDown, Sparkles, Zap } from 'lucide-react';

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
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      data-scroll-section
    >
      {/* Enhanced Parallax Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl animate-pulse"
          data-scroll
          data-scroll-speed="-4"
        ></div>
        <div 
          className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse"
          data-scroll
          data-scroll-speed="-2"
          style={{ animationDelay: '1s' }}
        ></div>
        <div 
          className="absolute bottom-40 left-1/4 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl animate-pulse"
          data-scroll
          data-scroll-speed="-3"
          style={{ animationDelay: '2s' }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/3 w-24 h-24 bg-green-500/20 rounded-full blur-xl animate-pulse"
          data-scroll
          data-scroll-speed="-1"
          style={{ animationDelay: '0.5s' }}
        ></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-16 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 transform rotate-45"
          data-scroll
          data-scroll-speed="2"
        ></div>
        <div 
          className="absolute top-1/3 right-24 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
          data-scroll
          data-scroll-speed="3"
        ></div>
        <div 
          className="absolute bottom-1/4 right-16 w-8 h-8 border-2 border-cyan-400 transform rotate-12"
          data-scroll
          data-scroll-speed="1"
        ></div>
        <div 
          className="absolute bottom-1/3 left-20 w-5 h-5 bg-gradient-to-r from-pink-400 to-red-500 transform rotate-45"
          data-scroll
          data-scroll-speed="4"
        ></div>
      </div>

      <div 
        className="container mx-auto px-6 text-center relative z-10"
        data-scroll
        data-scroll-speed="1"
      >
        {/* Main Title with enhanced effects */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-cyan-400 mr-4 animate-spin" />
            <h1 className="text-7xl md:text-9xl font-black mb-4 relative">
              <span className="gradient-text-hero glow-effect tracking-wider">
                {typedText}
                <span className="animate-ping text-cyan-400">|</span>
              </span>
              <div className="absolute inset-0 gradient-text-hero opacity-30 blur-sm scale-110"></div>
            </h1>
            <Zap className="w-8 h-8 text-purple-400 ml-4 animate-bounce" />
          </div>
          
          <div 
            className="relative"
            data-aos="fade-up"
            data-aos-delay="3000"
          >
            <p className="text-2xl md:text-4xl text-gray-300 mb-4 font-light">
              The <span className="gradient-text font-bold">Largest</span> Hackathon in Punjab
            </p>
            <p className="text-lg md:text-2xl text-gray-400 font-light tracking-wide">
              March 15-17, 2024 | Punjab Engineering College
            </p>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          data-aos="fade-up"
          data-aos-delay="4000"
        >
          {[
            { value: "1000+", label: "Participants", icon: "👥" },
            { value: "₹5L+", label: "Prize Pool", icon: "💰" },
            { value: "48", label: "Hours", icon: "⏰" },
            { value: "10+", label: "Tracks", icon: "🚀" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-2xl p-6 card-hover-effect group"
              data-aos="zoom-in"
              data-aos-delay={4500 + index * 200}
            >
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:glow-effect">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Buttons */}
        <div 
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20"
          data-aos="fade-up"
          data-aos-delay="5500"
        >
          <button className="group relative bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all duration-300 button-glow overflow-hidden">
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-60 group-hover:animate-pulse"></div>
          </button>
          
          <button className="group relative border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-10 py-5 rounded-xl text-xl font-bold transition-all duration-300 overflow-hidden">
            <span className="relative z-10">View Tracks</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          data-aos="fade-in"
          data-aos-delay="6500"
        >
          <div className="flex flex-col items-center animate-bounce">
            <ArrowDown className="w-8 h-8 text-cyan-400 mb-2" />
            <div className="w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"></div>
            <p className="text-sm text-gray-400 mt-4 font-medium">Scroll to explore</p>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full float-animation opacity-60`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
