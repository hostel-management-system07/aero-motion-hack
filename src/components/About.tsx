
import React from 'react';
import { Code, Users, Trophy, BookOpen } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Innovation",
      description: "Push boundaries with cutting-edge solutions",
      gradient: "from-cyan-400 to-blue-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration", 
      description: "Work with diverse teams and perspectives",
      gradient: "from-purple-400 to-pink-600"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Learning",
      description: "Workshops and mentorship sessions",
      gradient: "from-green-400 to-cyan-600"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Competition",
      description: "Compete for amazing prizes and recognition", 
      gradient: "from-pink-400 to-red-600"
    }
  ];

  const stats = [
    { value: "3", label: "Years Running" },
    { value: "50+", label: "Colleges" },
    { value: "100+", label: "Projects" },
    { value: "20+", label: "Mentors" }
  ];

  return (
    <section id="about" className="py-32 relative" data-scroll-section>
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"
          data-scroll
          data-scroll-speed="-1"
        ></div>
        <div 
          className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
          data-scroll
          data-scroll-speed="-2"
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
            About PEC Hacks 3.0
          </h2>
          <p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Join us for 48 hours of innovation, collaboration, and creativity as we bring together 
            the brightest minds to solve real-world problems and shape the future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div 
            data-aos="slide-right"
            data-scroll
            data-scroll-speed="2"
          >
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
                What is <span className="gradient-text">PEC Hacks?</span>
              </h3>
              <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                <p>
                  PEC Hacks is Punjab's premier hackathon that brings together students, developers, 
                  designers, and innovators from across the country. It's more than just a coding 
                  competition – it's a platform for learning, networking, and building solutions 
                  that can change the world.
                </p>
                <p>
                  Whether you're a seasoned developer or just starting your journey, PEC Hacks 
                  provides the perfect environment to showcase your skills, learn new technologies, 
                  and connect with like-minded individuals who share your passion for innovation.
                </p>
              </div>
              
              <div className="flex items-center space-x-4 pt-6">
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
                <span className="text-cyan-400 font-semibold">Building the Future</span>
              </div>
            </div>
          </div>

          <div 
            className="relative"
            data-aos="slide-left"
            data-scroll
            data-scroll-speed="-1"
          >
            <div className="glassmorphism rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/20 to-transparent rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-tr-3xl"></div>
              
              <div className="grid grid-cols-2 gap-8 relative z-10">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="text-center group cursor-pointer"
                    data-aos="zoom-in"
                    data-aos-delay={index * 200}
                  >
                    <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Statistics */}
        <div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          data-scroll
          data-scroll-speed="0.5"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glassmorphism rounded-2xl p-8 text-center card-hover-effect group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium text-lg">
                  {stat.label}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-1/4 left-8 w-3 h-3 bg-cyan-400 rounded-full opacity-60"
            data-scroll
            data-scroll-speed="3"
          ></div>
          <div 
            className="absolute top-3/4 right-12 w-4 h-4 bg-purple-500 rounded-full opacity-50"
            data-scroll
            data-scroll-speed="2"
          ></div>
          <div 
            className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-500 rounded-full opacity-70"
            data-scroll
            data-scroll-speed="4"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default About;
