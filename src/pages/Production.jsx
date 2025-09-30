import React, { useState, useEffect, useRef } from 'react';
import { Settings, Zap, Shield, Clock } from 'lucide-react';

const Production = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Helper function to set refs
  const setRef = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  const features = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Advanced Machinery",
      description: "State-of-the-art sewing machines and cutting-edge textile equipment for precision manufacturing."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Production",
      description: "Optimized workflows and efficient processes to meet tight deadlines without compromising quality."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous testing and inspection at every stage to ensure superior product standards."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Operations",
      description: "Round-the-clock production capability to handle large orders and urgent requirements."
    }
  ];

  return (
    <section id="production" className="py-12 md:py-20 bg-gradient-to-br from-warm-beige via-white to-light-sky-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          id="header"
          className={`text-center mb-16 ${isVisible.header ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
          ref={setRef('header')}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk text-charcoal mb-4 md:mb-6">
            Our <span className="text-deep-teal">Production Capabilities</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-charcoal/80 font-dm-sans max-w-3xl mx-auto leading-relaxed px-2">
            Discover our advanced manufacturing facilities and professional-grade equipment that enable 
            us to deliver exceptional garment production services.
          </p>
        </div>

        {/* Main production showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div 
            id="showcase-text"
            className={`${isVisible['showcase-text'] ? 'animate-slide-in-left' : 'opacity-0 -translate-x-8'}`}
            ref={setRef('showcase-text')}
          >
            <h3 className="text-3xl font-bold font-space-grotesk text-charcoal mb-6">
              Professional Sewing & Manufacturing
            </h3>
            <p className="text-lg text-charcoal/80 font-dm-sans mb-6 leading-relaxed">
              Our production facility is equipped with industrial-grade sewing machines, automated cutting systems, 
              and quality control stations that ensure consistent, high-quality output.
            </p>
            <p className="text-lg text-charcoal/80 font-dm-sans mb-8 leading-relaxed">
              From pattern making to final finishing, every step of our manufacturing process is optimized 
              for efficiency, precision, and excellence.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-mint-green rounded-full"></div>
                <span className="font-dm-sans text-charcoal">Industrial Sewing Machines</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-mint-green rounded-full"></div>
                <span className="font-dm-sans text-charcoal">Automated Cutting Systems</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-mint-green rounded-full"></div>
                <span className="font-dm-sans text-charcoal">Quality Control Stations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-mint-green rounded-full"></div>
                <span className="font-dm-sans text-charcoal">Finishing & Packaging</span>
              </div>
            </div>
          </div>
          
          <div 
            id="showcase-image"
            className={`${isVisible['showcase-image'] ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'}`}
            ref={setRef('showcase-image')}
          >
            <img 
              src="https://images.pexels.com/photos/7876365/pexels-photo-7876365.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Professional sewing machines and production floor" 
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Production features */}
        <div 
          id="features"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          ref={setRef('features')}
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 ${
                isVisible.features 
                  ? 'animate-fade-in-up opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: isVisible.features ? `${index * 150}ms` : '0ms' 
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-deep-teal to-mint-green rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold font-space-grotesk text-charcoal mb-4">
                {feature.title}
              </h4>
              <p className="text-charcoal/70 font-dm-sans leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Production process */}
        <div 
          id="process"
          className={`mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-lg ${isVisible.process ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
          ref={setRef('process')}
        >
          <h3 className="text-3xl font-bold font-space-grotesk text-charcoal mb-12 text-center">
            Our Production Process
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className={`w-12 h-12 bg-mint-green rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-700 ${
                isVisible.process ? 'animate-scale-in' : 'scale-0'
              }`} style={{ transitionDelay: isVisible.process ? '200ms' : '0ms' }}>
                <span className="text-white font-bold font-space-grotesk">1</span>
              </div>
              <h4 className="text-xl font-bold font-space-grotesk text-charcoal mb-4 text-center">Design & Planning</h4>
              <p className="text-charcoal/70 font-dm-sans text-center">
                Pattern creation, material selection, and production planning with client specifications.
              </p>
              {/* Connecting line */}
              <div className={`hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-mint-green/30 transition-all duration-1000 ${
                isVisible.process ? 'animate-line-grow' : 'w-0'
              }`} style={{ transitionDelay: isVisible.process ? '400ms' : '0ms' }}></div>
            </div>
            
            <div className="relative">
              <div className={`w-12 h-12 bg-copper rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-700 ${
                isVisible.process ? 'animate-scale-in' : 'scale-0'
              }`} style={{ transitionDelay: isVisible.process ? '600ms' : '0ms' }}>
                <span className="text-white font-bold font-space-grotesk">2</span>
              </div>
              <h4 className="text-xl font-bold font-space-grotesk text-charcoal mb-4 text-center">Manufacturing</h4>
              <p className="text-charcoal/70 font-dm-sans text-center">
                Cutting, sewing, and assembly using our advanced machinery and skilled craftsmen.
              </p>
              {/* Connecting line */}
              <div className={`hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-copper/30 transition-all duration-1000 ${
                isVisible.process ? 'animate-line-grow' : 'w-0'
              }`} style={{ transitionDelay: isVisible.process ? '800ms' : '0ms' }}></div>
            </div>
            
            <div className="relative">
              <div className={`w-12 h-12 bg-deep-teal rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-700 ${
                isVisible.process ? 'animate-scale-in' : 'scale-0'
              }`} style={{ transitionDelay: isVisible.process ? '1000ms' : '0ms' }}>
                <span className="text-white font-bold font-space-grotesk">3</span>
              </div>
              <h4 className="text-xl font-bold font-space-grotesk text-charcoal mb-4 text-center">Quality & Delivery</h4>
              <p className="text-charcoal/70 font-dm-sans text-center">
                Final inspection, quality assurance, packaging, and timely delivery to clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;