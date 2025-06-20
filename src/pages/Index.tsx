
import React, { useEffect, useRef } from 'react';
import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadBasic } from '@tsparticles/basic';
import type { Engine } from '@tsparticles/engine';
import AOS from 'aos';
import LocomotiveScroll from 'locomotive-scroll';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import EventGlimpse from '../components/EventGlimpse';
import Domains from '../components/Domains';
import Prizes from '../components/Prizes';
import Sponsors from '../components/Sponsors';
import Judges from '../components/Judges';
import Timeline from '../components/Timeline';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadBasic(engine);
  }, []);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 100,
      delay: 0,
    });

    // Initialize Locomotive Scroll
    if (scrollRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 0.8,
        class: 'is-revealed',
        lerp: 0.08,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });

      // Update scroll on window resize
      const handleResize = () => {
        locomotiveScroll.update();
      };

      window.addEventListener('resize', handleResize);

      // Refresh AOS when Locomotive Scroll updates
      locomotiveScroll.on('scroll', () => {
        AOS.refresh();
      });

      return () => {
        locomotiveScroll.destroy();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Particles Background with deeper parallax */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="fixed inset-0 z-0"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: {
                enable: true,
              },
            },
            modes: {
              push: {
                quantity: 3,
              },
              grab: {
                distance: 200,
                links: {
                  opacity: 0.8,
                },
              },
            },
          },
          particles: {
            color: {
              value: ["#00d9ff", "#a855f7", "#ec4899", "#4ade80"],
            },
            links: {
              color: "#00d9ff",
              distance: 120,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 60,
            },
            opacity: {
              value: { min: 0.1, max: 0.7 },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
              },
            },
            shape: {
              type: ["circle", "triangle"],
            },
            size: {
              value: { min: 1, max: 3 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 1,
              },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Parallax Background Elements */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          data-scroll
          data-scroll-speed="-2"
        ></div>
        <div 
          className="absolute top-1/3 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          data-scroll
          data-scroll-speed="-1"
        ></div>
        <div 
          className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 rounded-full blur-3xl"
          data-scroll
          data-scroll-speed="-3"
        ></div>
      </div>

      {/* Header */}
      <Header />

      {/* Main Content with enhanced parallax */}
      <main className="relative z-10">
        <Hero />
        <About />
        <EventGlimpse />
        <Domains />
        <Prizes />
        <Sponsors />
        <Judges />
        <Timeline />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
