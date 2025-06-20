
import React from 'react';

const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', url: '#', icon: '🐦', color: 'hover:text-blue-400' },
    { name: 'Instagram', url: '#', icon: '📷', color: 'hover:text-pink-400' },
    { name: 'LinkedIn', url: '#', icon: '💼', color: 'hover:text-blue-600' },
    { name: 'Discord', url: '#', icon: '🎮', color: 'hover:text-purple-400' },
    { name: 'YouTube', url: '#', icon: '📺', color: 'hover:text-red-500' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#domains' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <footer id="footer" className="relative py-20 mt-20" data-scroll-section>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo and Description */}
          <div className="md:col-span-2" data-aos="fade-up">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">P</span>
              </div>
              <span className="text-3xl font-bold gradient-text">PEC Hacks 3.0</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Punjab's premier hackathon bringing together the brightest minds to solve real-world 
              problems through innovation and technology. Join us for 48 hours of coding, learning, 
              and networking.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span>→</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-cyan-400 mt-1">📍</span>
                <div>
                  <p className="text-gray-300">Punjab Engineering College</p>
                  <p className="text-gray-400 text-sm">Sector 12, Chandigarh, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">📧</span>
                <p className="text-gray-300">hello@pechacks.in</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">📞</span>
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="glassmorphism rounded-2xl p-8 mb-12" data-aos="fade-up">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-300">Get the latest updates about PEC Hacks 3.0</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-200"
            />
            <button className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 button-glow">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 PEC Hacks 3.0. All rights reserved. Made with ❤️ by PEC Students.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </footer>
  );
};

export default Footer;
