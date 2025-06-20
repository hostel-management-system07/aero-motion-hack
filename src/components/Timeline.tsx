
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  const events = [
    {
      date: "March 15",
      time: "9:00 AM",
      title: "Registration & Check-in",
      description: "Team registration, welcome breakfast, and networking session to kick off the event",
      icon: "🎯",
      location: "Main Auditorium",
      duration: "2 hours",
      type: "registration"
    },
    {
      date: "March 15", 
      time: "11:00 AM",
      title: "Opening Ceremony",
      description: "Inspiring keynote speech, hackathon rules briefing, and team formation session",
      icon: "🚀",
      location: "Main Stage",
      duration: "1 hour",
      type: "ceremony"
    },
    {
      date: "March 15",
      time: "12:00 PM", 
      title: "Hacking Begins",
      description: "Start building your amazing projects with full access to mentors and resources",
      icon: "💻",
      location: "Development Labs",
      duration: "Ongoing",
      type: "development"
    },
    {
      date: "March 15",
      time: "6:00 PM",
      title: "Workshop: AI/ML Fundamentals",
      description: "Deep dive into machine learning basics, tools, and practical applications",
      icon: "🤖",
      location: "Workshop Room A",
      duration: "2 hours",
      type: "workshop"
    },
    {
      date: "March 16",
      time: "10:00 AM",
      title: "Workshop: Web3 Development", 
      description: "Comprehensive introduction to blockchain technology and DApp development",
      icon: "⛓️",
      location: "Workshop Room B", 
      duration: "3 hours",
      type: "workshop"
    },
    {
      date: "March 16",
      time: "2:00 PM",
      title: "Mentoring Sessions",
      description: "One-on-one guidance sessions with industry experts and senior developers",
      icon: "👨‍🏫",
      location: "Mentoring Pods",
      duration: "4 hours",
      type: "mentoring"
    },
    {
      date: "March 17",
      time: "10:00 AM",
      title: "Project Submissions",
      description: "Final deadline for project submissions with complete documentation",
      icon: "📤",
      location: "Submission Portal",
      duration: "2 hours",
      type: "submission"
    },
    {
      date: "March 17",
      time: "2:00 PM",
      title: "Presentations",
      description: "Teams present their innovative projects to judges and audience",
      icon: "🎤",
      location: "Presentation Hall",
      duration: "3 hours",
      type: "presentation"
    },
    {
      date: "March 17",
      time: "5:00 PM",
      title: "Closing Ceremony",
      description: "Winner announcements, prize distribution, and celebration",
      icon: "🏆",
      location: "Main Auditorium",
      duration: "2 hours",
      type: "ceremony"
    }
  ];

  const getEventColor = (type: string) => {
    const colors = {
      registration: "from-green-400 to-cyan-600",
      ceremony: "from-purple-400 to-pink-600", 
      development: "from-cyan-400 to-blue-600",
      workshop: "from-orange-400 to-red-600",
      mentoring: "from-indigo-400 to-purple-600",
      submission: "from-yellow-400 to-orange-600",
      presentation: "from-pink-400 to-red-600"
    };
    return colors[type as keyof typeof colors] || "from-gray-400 to-gray-600";
  };

  return (
    <section id="timeline" className="py-32 relative overflow-hidden" data-scroll-section>
      {/* Enhanced Parallax Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/5 via-purple-900/5 to-pink-900/5"
          data-scroll
          data-scroll-speed="-1"
        ></div>
        <div 
          className="absolute top-40 -right-40 w-96 h-96 bg-gradient-to-l from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"
          data-scroll
          data-scroll-speed="-2"
        ></div>
        <div 
          className="absolute bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
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
            Event Timeline
          </h2>
          <p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            48 hours of non-stop innovation, learning, and networking
            <br />
            <span className="gradient-text font-semibold">Your journey to greatness starts here.</span>
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Enhanced Timeline Line */}
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-600 rounded-full"></div>
          
          <div className="space-y-16">
            {events.map((event, index) => (
              <div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-12`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 100}
                data-scroll
                data-scroll-speed={index % 2 === 0 ? "1" : "-0.5"}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div 
                    className="glassmorphism rounded-2xl p-8 card-hover-effect cursor-pointer group relative overflow-hidden"
                    onMouseEnter={() => setActiveEvent(index)}
                    onMouseLeave={() => setActiveEvent(null)}
                  >
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${getEventColor(event.type)} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                    
                    <div className="relative z-10">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                          {event.icon}
                        </div>
                        <div className={index % 2 === 0 ? 'text-right' : 'text-left'}>
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                            {event.title}
                          </h3>
                          <div className="flex items-center gap-2 text-cyan-400 font-semibold text-lg">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                            <Clock className="w-4 h-4 ml-2" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-lg leading-relaxed mb-4">
                        {event.description}
                      </p>
                      
                      <div className={`flex items-center gap-6 text-sm text-gray-400 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{event.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Timeline Node */}
                <div className="relative z-20">
                  <div className={`w-6 h-6 bg-gradient-to-r ${getEventColor(event.type)} rounded-full border-4 border-black shadow-lg group-hover:scale-125 transition-transform duration-300`}>
                    <div className="absolute inset-0 rounded-full animate-ping bg-cyan-400 opacity-20"></div>
                  </div>
                  {activeEvent === index && (
                    <div className="absolute -inset-4 bg-cyan-400/20 rounded-full blur-lg animate-pulse"></div>
                  )}
                </div>

                {/* Spacer */}
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div 
          className="text-center mt-20"
          data-aos="fade-up"
          data-scroll
          data-scroll-speed="0.5"
        >
          <div className="glassmorphism rounded-2xl p-8 max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to be part of this journey?
            </h3>
            <p className="text-gray-300 mb-6">
              Download the detailed schedule and never miss a moment of this incredible experience.
            </p>
            <button className="group relative bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 button-glow overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Download Schedule
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Floating Timeline Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-40"
              style={{
                top: `${15 + i * 15}%`,
                left: `${10 + Math.random() * 80}%`,
                animation: `float ${4 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
              data-scroll
              data-scroll-speed={i % 2 === 0 ? "2" : "-1"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
