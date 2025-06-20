
import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Mail } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who can participate in PEC Hacks 3.0?",
      answer: "Any student from any educational institution can participate. We welcome participants from all skill levels, from beginners to advanced developers. Whether you're studying computer science, engineering, design, or any other field, if you have passion for innovation, you're welcome!",
      category: "Eligibility"
    },
    {
      question: "What is the team size limit?",
      answer: "Teams can have 2-4 members. You can form teams before the event or find teammates during the team formation session at the opening ceremony. We also have a dedicated Discord channel for team formation.",
      category: "Teams"
    },
    {
      question: "Do I need to have prior coding experience?",
      answer: "While coding experience is helpful, it's not mandatory. We have workshops for beginners and mentors to guide you throughout the hackathon. Many successful projects have been built by mixed teams with diverse skills including design, business, and marketing.",
      category: "Skills"
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, charger, any hardware you might need for your project, and most importantly - your enthusiasm! We'll provide food, drinks, workspace, WiFi, and basic hardware components. Don't forget comfortable clothes and personal items for the overnight stay.",
      category: "Preparation"
    },
    {
      question: "Is there any registration fee?",
      answer: "No, PEC Hacks 3.0 is completely free to participate. This includes food, drinks, accommodation (if needed), workshops, mentorship sessions, and all event activities. We believe innovation shouldn't have a price tag!",
      category: "Registration"
    },
    {
      question: "Will accommodation be provided?",
      answer: "Yes, we provide accommodation for outstation participants. Please mention this requirement in your registration form. We have arrangements with nearby hostels and guest houses to ensure comfortable stay for all participants.",
      category: "Accommodation"
    },
    {
      question: "What if I don't have a team?",
      answer: "Don't worry! We have a team formation session where you can meet other participants and form teams based on complementary skills and interests. We also have online platforms and Discord channels active before the event for team formation.",
      category: "Teams"
    },
    {
      question: "Are there any restrictions on the project?",
      answer: "Your project should be original work created during the hackathon period. You can use open-source libraries, APIs, and frameworks. Pre-built projects or significant pre-existing code are not allowed. The project should align with one of our hackathon tracks.",
      category: "Projects"
    }
  ];

  const categories = ["All", "Eligibility", "Teams", "Skills", "Preparation", "Registration", "Accommodation", "Projects"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFAQs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 relative overflow-hidden" data-scroll-section>
      {/* Enhanced Parallax Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/5 via-purple-900/5 to-cyan-900/5"
          data-scroll
          data-scroll-speed="-1"
        ></div>
        <div 
          className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-l from-purple-500/8 to-pink-500/8 rounded-full blur-3xl"
          data-scroll
          data-scroll-speed="-2"
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-3xl"
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
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-12 h-12 text-cyan-400 mr-4" />
            <h2 
              className="text-5xl md:text-7xl font-bold gradient-text"
              data-aos="fade-up"
            >
              FAQ
            </h2>
            <MessageCircle className="w-12 h-12 text-purple-400 ml-4" />
          </div>
          <p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Got questions? We've got answers! 
            <br />
            <span className="gradient-text font-semibold">Everything you need to know about PEC Hacks 3.0</span>
          </p>
        </div>

        {/* Category Filter */}
        <div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          data-aos="fade-up"
          data-aos-delay="500"
          data-scroll
          data-scroll-speed="0.5"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-600 text-white shadow-lg button-glow'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="glassmorphism rounded-2xl overflow-hidden faq-item group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-scroll
                data-scroll-speed={index % 2 === 0 ? "0.5" : "-0.5"}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/20 px-3 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white pr-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="relative">
                    <ChevronDown
                      className={`w-6 h-6 text-cyan-400 transition-all duration-300 ${
                        openFAQ === index ? 'rotate-180 scale-110' : 'group-hover:scale-110'
                      }`}
                    />
                    {openFAQ === index && (
                      <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-lg animate-pulse"></div>
                    )}
                  </div>
                </button>
                
                <div
                  className={`faq-content overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent mb-6"></div>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Contact Section */}
        <div 
          className="text-center mt-20"
          data-aos="fade-up"
          data-scroll
          data-scroll-speed="1"
        >
          <div className="glassmorphism rounded-3xl p-12 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/20 to-transparent rounded-bl-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-tr-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Our team is here to help! Reach out to us and we'll get back to you as soon as possible.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative bg-gradient-to-r from-purple-400 to-pink-600 hover:from-purple-500 hover:to-pink-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 button-glow overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Join Discord
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button className="group relative border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Email Us
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Question Marks */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400/20 text-2xl font-bold"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${5 + Math.random() * 90}%`,
                animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
              data-scroll
              data-scroll-speed={Math.random() * 2 + 1}
            >
              ?
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
