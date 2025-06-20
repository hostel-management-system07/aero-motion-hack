
import React, { useEffect, useRef, useState } from 'react';
import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadBasic } from '@tsparticles/basic';
import type { Engine } from '@tsparticles/engine';
import AOS from 'aos';
import LocomotiveScroll from 'locomotive-scroll';
import Loader from '../components/Loader';
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
  const [isLoading, setIsLoading] = useState(true);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadBasic(engine);
  }, []);

  useEffect(() => {
    // Simulate loading time and wait for components to be ready
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 second loading screen

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Initialize AOS after loading is complete
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });

      // Initialize Locomotive Scroll after loading is complete
      if (scrollRef.current) {
        const locomotiveScroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          multiplier: 1,
          class: 'is-revealed',
        });

        // Update scroll on window resize
        const handleResize = () => {
          locomotiveScroll.update();
        };

        window.addEventListener('resize', handleResize);

        return () => {
          locomotiveScroll.destroy();
          window.removeEventListener('resize', handleResize);
        };
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div ref={scrollRef} data-scroll-container className="min-h-screen bg-black text-white relative">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: {
                enable: true,
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#00d9ff", "#a855f7", "#ec4899"],
            },
            links: {
              color: "#00d9ff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
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
