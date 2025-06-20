
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 relative" data-scroll-section>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6" data-aos="fade-up">
            About PEC Hacks 3.0
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Join us for 48 hours of innovation, collaboration, and creativity as we bring together 
            the brightest minds to solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div data-aos="slide-right" data-scroll data-scroll-speed="0.5">
            <h3 className="text-3xl font-bold text-white mb-6">What is PEC Hacks?</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              PEC Hacks is Punjab's premier hackathon that brings together students, developers, 
              designers, and innovators from across the country. It's more than just a coding 
              competition – it's a platform for learning, networking, and building solutions 
              that can change the world.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you're a seasoned developer or just starting your journey, PEC Hacks 
              provides the perfect environment to showcase your skills, learn new technologies, 
              and connect with like-minded individuals.
            </p>
          </div>

          <div className="relative" data-aos="slide-left" data-scroll data-scroll-speed="-0.5">
            <div className="glassmorphism rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Innovation</h4>
                  <p className="text-gray-400">Push boundaries with cutting-edge solutions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Collaboration</h4>
                  <p className="text-gray-400">Work with diverse teams and perspectives</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📚</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Learning</h4>
                  <p className="text-gray-400">Workshops and mentorship sessions</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Competition</h4>
                  <p className="text-gray-400">Compete for amazing prizes and recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="glassmorphism rounded-xl p-6 card-hover-effect" data-aos="fade-up" data-aos-delay="100">
            <div className="text-4xl font-bold gradient-text mb-2">3</div>
            <div className="text-gray-400">Years Running</div>
          </div>
          <div className="glassmorphism rounded-xl p-6 card-hover-effect" data-aos="fade-up" data-aos-delay="200">
            <div className="text-4xl font-bold gradient-text mb-2">50+</div>
            <div className="text-gray-400">Colleges</div>
          </div>
          <div className="glassmorphism rounded-xl p-6 card-hover-effect" data-aos="fade-up" data-aos-delay="300">
            <div className="text-4xl font-bold gradient-text mb-2">100+</div>
            <div className="text-gray-400">Projects</div>
          </div>
          <div className="glassmorphism rounded-xl p-6 card-hover-effect" data-aos="fade-up" data-aos-delay="400">
            <div className="text-4xl font-bold gradient-text mb-2">20+</div>
            <div className="text-gray-400">Mentors</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
