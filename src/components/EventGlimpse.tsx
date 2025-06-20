
import React, { useState } from 'react';
import { Eye, Heart, Share2 } from 'lucide-react';

const EventGlimpse = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const images = [
    { 
      src: "/placeholder.svg", 
      alt: "Hackathon coding session", 
      title: "Intense Coding Sessions",
      description: "48 hours of non-stop innovation and creativity",
      category: "Coding"
    },
    { 
      src: "/placeholder.svg", 
      alt: "Team collaboration", 
      title: "Team Collaboration",
      description: "Building bonds while building solutions",
      category: "Teamwork"
    },
    { 
      src: "/placeholder.svg", 
      alt: "Mentorship session", 
      title: "Expert Mentorship",
      description: "Learn from industry veterans and tech leaders",
      category: "Learning"
    },
    { 
      src: "/placeholder.svg", 
      alt: "Prize ceremony", 
      title: "Prize Distribution",
      description: "Celebrating innovation and excellence",
      category: "Awards"
    },
    { 
      src: "/placeholder.svg", 
      alt: "Networking event", 
      title: "Networking",
      description: "Connect with peers and industry professionals",
      category: "Community"
    },
    { 
      src: "/placeholder.svg", 
      alt: "Innovation showcase", 
      title: "Innovation Showcase",
      description: "Presenting groundbreaking solutions",
      category: "Demo"
    },
  ];

  return (
    <section id="glimpse" className="py-32 relative overflow-hidden" data-scroll-section>
      {/* Enhanced Parallax Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-900/5 via-purple-900/5 to-pink-900/5"
          data-scroll
          data-scroll-speed="-2"
        ></div>
        <div 
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          data-scroll
          data-scroll-speed="-1"
        ></div>
        <div 
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          data-scroll
          data-scroll-speed="-3"
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div 
          className="text-center mb-20"
          data-scroll
          data-scroll-speed="1"
        >
          <h2 
            className="text-5xl md:text-7xl font-bold gradient-text mb-8"
            data-aos="fade-up"
          >
            Event Glimpse
          </h2>
          <p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Relive the excitement and energy from our previous hackathons. 
            <br />
            <span className="gradient-text font-semibold">Where innovation meets inspiration.</span>
          </p>
        </div>

        {/* Enhanced Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-3xl card-hover-effect cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-scroll
              data-scroll-speed={index % 2 === 0 ? "1" : "-1"}
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {image.category}
                  </span>
                </div>

                {/* Interaction Icons */}
                <div className="absolute top-4 right-4 z-20 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                    <Share2 className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Enhanced Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-bold text-xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {image.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {image.description}
                    </p>
                  </div>
                </div>

                {/* Gradient Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Border Glow Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/50 rounded-3xl transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced View More Section */}
        <div 
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="800"
          data-scroll
          data-scroll-speed="0.5"
        >
          <div className="glassmorphism rounded-2xl p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to see more?
            </h3>
            <p className="text-gray-300 mb-6">
              Explore our complete gallery with hundreds of moments captured during previous events.
            </p>
            <button className="group relative bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-500 hover:to-pink-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 button-glow overflow-hidden">
              <span className="relative z-10">View All Photos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30`}
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
                animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
              data-scroll
              data-scroll-speed={Math.random() * 2 + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGlimpse;
