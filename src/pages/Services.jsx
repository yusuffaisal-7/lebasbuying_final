import React, { useState, useEffect, useRef } from 'react';
import { Scissors, Package, Palette, Settings, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Custom Tailoring",
      description: "Bespoke garment creation tailored to your exact specifications and measurements.",
      features: ["Individual measurements", "Custom patterns", "Premium fabrics", "Hand-finished details"],
      image: "https://images.pexels.com/photos/7876354/pexels-photo-7876354.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Bulk Manufacturing",
      description: "Large-scale production for retailers and brands with consistent quality standards.",
      features: ["Volume discounts", "Quality consistency", "Fast turnaround", "Global shipping"],
      image: "https://images.pexels.com/photos/7876174/pexels-photo-7876174.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Fabric Sourcing",
      description: "Premium textile materials sourced globally for superior garment construction.",
      features: ["Global suppliers", "Quality testing", "Sustainable options", "Competitive pricing"],
      image: "https://images.pexels.com/photos/6479607/pexels-photo-6479607.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Quality Control",
      description: "Comprehensive testing and inspection services to ensure product excellence.",
      features: ["Multi-stage inspection", "Defect analysis", "Compliance testing", "Detailed reports"],
      image: "https://images.pexels.com/photos/7876365/pexels-photo-7876365.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        id="hero"
        className="py-12 md:py-20 bg-gradient-to-br from-deep-teal to-mint-green text-white"
        ref={setRef('hero')}
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${isVisible.hero ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk mb-4 md:mb-6">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-dm-sans max-w-3xl mx-auto leading-relaxed px-2">
            Comprehensive garment manufacturing solutions tailored to meet your specific needs, 
            from individual custom pieces to large-scale production runs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section 
        id="services-grid"
        className="py-20"
        ref={setRef('services-grid')}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group transition-all duration-700 ${
                  isVisible['services-grid'] 
                    ? 'animate-fade-in-up opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: isVisible['services-grid'] ? `${index * 200}ms` : '0ms' 
                }}
              >
                <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-16 h-16 bg-mint-green rounded-2xl flex items-center justify-center mb-4">
                      <div className="text-deep-teal">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold font-space-grotesk text-charcoal mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-charcoal/80 font-dm-sans mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-mint-green flex-shrink-0" />
                      <span className="font-dm-sans text-charcoal">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="btn-elevated px-6 py-3 rounded-xl flex items-center gap-2 group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        id="process"
        className="py-20 bg-warm-beige"
        ref={setRef('process')}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-16 ${isVisible.process ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-4xl font-bold font-space-grotesk text-charcoal mb-6">
              Our Service Process
            </h2>
            <p className="text-xl text-charcoal/80 font-dm-sans max-w-3xl mx-auto">
              From initial consultation to final delivery, we ensure a smooth and professional experience.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", desc: "Discuss your requirements and specifications" },
              { step: "2", title: "Planning", desc: "Create detailed production plan and timeline" },
              { step: "3", title: "Production", desc: "Execute manufacturing with quality control" },
              { step: "4", title: "Delivery", desc: "Final inspection and timely delivery" }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`text-center transition-all duration-700 ${
                  isVisible.process 
                    ? 'animate-fade-in-up opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: isVisible.process ? `${index * 200}ms` : '0ms' 
                }}
              >
                <div className={`w-16 h-16 bg-deep-teal rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-700 ${
                  isVisible.process ? 'animate-scale-in' : 'scale-0'
                }`} style={{ 
                  transitionDelay: isVisible.process ? `${index * 200 + 100}ms` : '0ms' 
                }}>
                  <span className="text-2xl font-bold font-space-grotesk text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold font-space-grotesk text-charcoal mb-3">{item.title}</h3>
                <p className="text-charcoal/70 font-dm-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;