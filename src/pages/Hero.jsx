import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    support: 0
  });
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);
  
  const fullText = "The Lebas Buying specializes in professional sewing, fabric solutions, and modern garment production with cutting-edge technology and expertise.";

  // Typewriter animation effect - runs only once
  useEffect(() => {
    if (!isVisible || isTyping || hasAnimated) return;

    setHasAnimated(true);
    setIsTyping(true);
    let currentIndex = 0;
    
    const typeWriter = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, 50); // 50ms delay between characters
      } else {
        setIsTyping(false);
      }
    };

    // Start typewriter effect after a short delay
    setTimeout(typeWriter, 500);
  }, [isVisible, fullText, isTyping, hasAnimated]);

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animated counter effect
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    const animateCount = (target, key) => {
      let current = 0;
      const increment = target / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepDuration);
    };

    // Start animations with slight delays
    setTimeout(() => animateCount(15, 'years'), 100);
    setTimeout(() => animateCount(500, 'projects'), 200);
    setTimeout(() => animateCount(50, 'clients'), 300);
    setTimeout(() => animateCount(24, 'support'), 400);
  }, [isVisible]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="flex items-center justify-center relative overflow-hidden min-h-screen"
    >
      {/* Deep Teal Background */}
      <div className="absolute inset-0 bg-deep-teal"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      {/* Floating elements - hidden on mobile */}
      <div className="hidden md:block absolute top-20 left-10 w-20 h-20 bg-mint-green/30 rounded-full animate-float"></div>
      <div
        className="hidden md:block absolute bottom-20 right-10 w-16 h-16 bg-white/20 rounded-full animate-float"
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className="hidden md:block absolute top-1/2 left-20 w-12 h-12 bg-mint-green/20 rounded-full animate-float"
        style={{ animationDelay: '4s' }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-1 md:py-16">
        <div className="animate-fade-in-up">
          {/* Mobile-optimized heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-space-grotesk text-white mb-2 md:mb-6 leading-tight">
            <span className="block">Crafting Quality</span>
            <span className="block text-mint-green">Garments</span>
            <span className="block">with Precision</span>
          </h1>

          {/* Mobile-optimized description */}
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/90 font-dm-sans mb-4 md:mb-8 max-w-3xl mx-auto leading-relaxed min-h-[2.5rem] md:min-h-[3.5rem] flex items-center justify-center px-2">
            <span>
              {displayedText}
              {isTyping && <span className="animate-pulse">|</span>}
            </span>
          </p>

          {/* Mobile-optimized buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-6 mb-4 md:mb-12">
            <button
              onClick={() => scrollToSection('#products')}
              className="btn-elevated px-6 py-3 md:px-8 md:py-4 rounded-xl text-sm md:text-lg flex items-center gap-2 group w-full sm:w-auto"
            >
              Explore Our Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={() => scrollToSection('#production')}
              className="btn-elevated px-6 py-3 md:px-8 md:py-4 rounded-xl text-sm md:text-lg flex items-center gap-2 group w-full sm:w-auto"
            >
              <Play size={16} className="group-hover:scale-110 transition-transform duration-300" />
              Watch Production
            </button>
          </div>
        </div>

        {/* Mobile-optimized Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-space-grotesk text-mint-green mb-1 md:mb-2">
              {counts.years}+
            </div>
            <div className="text-xs sm:text-sm md:text-base text-white/80 font-dm-sans">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-space-grotesk text-mint-green mb-1 md:mb-2">
              {counts.projects}+
            </div>
            <div className="text-xs sm:text-sm md:text-base text-white/80 font-dm-sans">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-space-grotesk text-mint-green mb-1 md:mb-2">
              {counts.clients}+
            </div>
            <div className="text-xs sm:text-sm md:text-base text-white/80 font-dm-sans">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-space-grotesk text-mint-green mb-1 md:mb-2">
              {counts.support}/7
            </div>
            <div className="text-xs sm:text-sm md:text-base text-white/80 font-dm-sans">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;