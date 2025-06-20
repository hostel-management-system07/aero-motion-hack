
import React from 'react';

const Sponsors = () => {
  const sponsors = [
    { name: "TechCorp", logo: "/placeholder.svg", tier: "Platinum" },
    { name: "InnovateLabs", logo: "/placeholder.svg", tier: "Gold" },
    { name: "DevTools Inc", logo: "/placeholder.svg", tier: "Gold" },
    { name: "StartupX", logo: "/placeholder.svg", tier: "Silver" },
    { name: "CodeBase", logo: "/placeholder.svg", tier: "Silver" },
    { name: "TechHub", logo: "/placeholder.svg", tier: "Silver" },
    { name: "BuildFast", logo: "/placeholder.svg", tier: "Bronze" },
    { name: "WebFlow", logo: "/placeholder.svg", tier: "Bronze" },
  ];

  return (
    <section id="sponsors" className="py-20 relative" data-scroll-section>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6" data-aos="fade-up">
            Sponsors & Partners
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Powered by amazing companies that believe in innovation and student talent
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8" data-aos="fade-up">
            Platinum Sponsors
          </h3>
          <div className="flex justify-center">
            {sponsors.filter(s => s.tier === "Platinum").map((sponsor, index) => (
              <div
                key={index}
                className="glassmorphism rounded-2xl p-8 mx-4 card-hover-effect"
                data-aos="zoom-in"
                data-aos-delay={index * 200}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-32 h-16 object-contain filter brightness-0 invert hover:filter-none transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-center text-white mb-8" data-aos="fade-up">
            Gold Sponsors
          </h3>
          <div className="flex justify-center flex-wrap gap-6">
            {sponsors.filter(s => s.tier === "Gold").map((sponsor, index) => (
              <div
                key={index}
                className="glassmorphism rounded-xl p-6 card-hover-effect"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-24 h-12 object-contain filter brightness-0 invert hover:filter-none transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Silver & Bronze Sponsors */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-center text-white mb-8" data-aos="fade-up">
              Silver Sponsors
            </h3>
            <div className="flex justify-center flex-wrap gap-4">
              {sponsors.filter(s => s.tier === "Silver").map((sponsor, index) => (
                <div
                  key={index}
                  className="glassmorphism rounded-lg p-4 card-hover-effect"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-20 h-10 object-contain filter brightness-0 invert hover:filter-none transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-center text-white mb-8" data-aos="fade-up">
              Bronze Sponsors
            </h3>
            <div className="flex justify-center flex-wrap gap-4">
              {sponsors.filter(s => s.tier === "Bronze").map((sponsor, index) => (
                <div
                  key={index}
                  className="glassmorphism rounded-lg p-4 card-hover-effect"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-16 h-8 object-contain filter brightness-0 invert hover:filter-none transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <p className="text-gray-300 mb-6">Interested in sponsoring PEC Hacks 3.0?</p>
          <button className="bg-gradient-to-r from-green-400 to-cyan-600 hover:from-green-500 hover:to-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 button-glow">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
