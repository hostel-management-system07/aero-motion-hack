
import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
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

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Scroll parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const rate = scrolled * -0.5;
      
      // Apply different parallax speeds to different layers
      const parallaxElements = document.querySelectorAll('.parallax-layer');
      parallaxElements.forEach((element, index) => {
        const speed = 0.3 + (index * 0.2);
        (element as HTMLElement).style.transform = `translate3d(0, ${rate * speed}px, 0)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      data-scroll-section
    >
      {/* Advanced Parallax Background Layers */}
      <div className="absolute inset-0">
        {/* Layer 1 - Furthest back */}
        <div 
          className="parallax-layer absolute inset-0"
          style={{
            transform: `translate3d(${mousePosition.x * 10}px, ${mousePosition.y * 10}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-pink-500/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Layer 2 - Middle */}
        <div 
          className="parallax-layer absolute inset-0"
          style={{
            transform: `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 15}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="absolute top-20 right-1/4 w-32 h-32 bg-cyan-400/20 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute bottom-1/3 left-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-bounce delay-500"></div>
          <div className="absolute top-1/2 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-xl animate-bounce delay-1000"></div>
        </div>

        {/* Layer 3 - Geometric shapes */}
        <div 
          className="parallax-layer absolute inset-0"
          style={{
            transform: `translate3d(${mousePosition.x * 30}px, ${mousePosition.y * 20}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-cyan-400/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-12 h-12 border-2 border-purple-500/30 animate-pulse"></div>
          <div className="absolute top-3/4 left-1/2 w-20 h-20 border-2 border-pink-500/30 rounded-full animate-ping"></div>
        </div>

        {/* Layer 4 - Floating particles */}
        <div 
          className="parallax-layer absolute inset-0"
          style={{
            transform: `translate3d(${mousePosition.x * 40}px, ${mousePosition.y * 25}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content - Foreground */}
      <div 
        className="container mx-auto px-6 text-center relative z-10" 
        data-scroll 
        data-scroll-speed="1"
        style={{
          transform: `translate3d(${mousePosition.x * 5}px, ${mousePosition.y * 5}px, 0)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        {/* Main Title with 3D effect */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 relative">
            <span className="gradient-text-hero glow-effect block relative z-10">
              {typedText}
              <span className="animate-ping">|</span>
            </span>
            {/* 3D Shadow layers */}
            <span 
              className="absolute top-1 left-1 text-6xl md:text-8xl font-bold text-cyan-500/20 -z-10"
              style={{
                transform: `translate3d(${mousePosition.x * -2}px, ${mousePosition.y * -2}px, 0)`
              }}
            >
              {typedText}
            </span>
            <span 
              className="absolute top-2 left-2 text-6xl md:text-8xl font-bold text-purple-500/20 -z-20"
              style={{
                transform: `translate3d(${mousePosition.x * -4}px, ${mousePosition.y * -4}px, 0)`
              }}
            >
              {typedText}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2" data-aos="fade-up" data-aos-delay="3500">
            The <span className="gradient-text">Largest</span> Hackathon in Punjab
          </p>
          <p className="text-lg md:text-xl text-gray-400" data-aos="fade-up" data-aos-delay="4000">
            March 15-17, 2024 | Punjab Engineering College
          </p>
        </div>

        {/* Stats with hover parallax */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12" data-aos="fade-up" data-aos-delay="4500">
          {[
            { number: "1000+", label: "Participants" },
            { number: "₹5L+", label: "Prize Pool" },
            { number: "48", label: "Hours" },
            { number: "10+", label: "Tracks" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center group cursor-pointer"
              style={{
                transform: `translate3d(${mousePosition.x * (2 + index)}px, ${mousePosition.y * (1 + index)}px, 0)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons with parallax */}
        <div 
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16" 
          data-aos="fade-up" 
          data-aos-delay="5000"
          style={{
            transform: `translate3d(${mousePosition.x * 3}px, ${mousePosition.y * 2}px, 0)`,
            transition: 'transform 0.15s ease-out'
          }}
        >
          <button className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 button-glow hover:scale-105">
            Register Now
          </button>
          <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105">
            View Tracks
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-aos="fade-in" data-aos-delay="6000">
          <ArrowDown className="w-6 h-6 text-cyan-400" />
          <p className="text-sm text-gray-400 mt-2">Scroll to explore</p>
        </div>
      </div>

      {/* Interactive floating elements that follow mouse */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-4 h-4 bg-cyan-400 rounded-full opacity-60"
          style={{
            left: '10%',
            top: '25%',
            transform: `translate3d(${mousePosition.x * 50}px, ${mousePosition.y * 30}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className="absolute w-3 h-3 bg-purple-500 rounded-full opacity-60"
          style={{
            right: '20%',
            top: '33%',
            transform: `translate3d(${mousePosition.x * -40}px, ${mousePosition.y * 35}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className="absolute w-5 h-5 bg-pink-500 rounded-full opacity-60"
          style={{
            right: '10%',
            bottom: '25%',
            transform: `translate3d(${mousePosition.x * 45}px, ${mousePosition.y * -25}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
