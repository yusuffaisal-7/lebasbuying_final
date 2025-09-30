import React, { useState, useEffect, useRef } from 'react';
import { Target, Award, Users, Scissors, Clock, Globe, TrendingUp, CheckCircle, Factory, Heart, Shield, Lightbulb } from 'lucide-react';

const AboutUs = () => {
  const milestones = [
    { year: "2009", title: "Company Founded", description: "Started with a vision to revolutionize garment manufacturing" },
    { year: "2012", title: "First Major Contract", description: "Secured partnership with leading fashion brand" },
    { year: "2015", title: "Facility Expansion", description: "Doubled production capacity with new equipment" },
    { year: "2018", title: "International Recognition", description: "Received industry excellence award" },
    { year: "2021", title: "Sustainable Practices", description: "Implemented eco-friendly manufacturing processes" },
    { year: "2024", title: "500+ Projects", description: "Milestone achievement in project delivery" }
  ];

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

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
      description: "15+ years in textile industry leadership",
      experience: "15+ Years"
    },
    {
      name: "Michael Chen",
      role: "Head of Production",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
      description: "Expert in manufacturing optimization",
      experience: "12+ Years"
    },
    {
      name: "Emily Rodriguez",
      role: "Quality Control Manager",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
      description: "Specialist in quality assurance systems",
      experience: "10+ Years"
    },
    {
      name: "David Kim",
      role: "Design Director",
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
      description: "Creative vision and pattern development",
      experience: "8+ Years"
    },
    {
      name: "Lisa Thompson",
      role: "Operations Manager",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
      description: "Streamlining processes and team coordination",
      experience: "7+ Years"
    },
    {
      name: "James Wilson",
      role: "Technical Director",
      image: "https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
      description: "Advanced manufacturing technology expert",
      experience: "11+ Years"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience", icon: <Clock className="w-8 h-8" /> },
    { number: "500+", label: "Projects Delivered", icon: <CheckCircle className="w-8 h-8" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
    { number: "99%", label: "Quality Rating", icon: <Award className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-deep-teal to-mint-green text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk mb-4 md:mb-6">
            About The Lebas Buying
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-dm-sans max-w-3xl mx-auto leading-relaxed px-2">
            Crafting excellence in garment manufacturing since 2009, we combine traditional craftsmanship 
            with modern technology to deliver superior textile solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-soft-sand">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-deep-teal rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <div className="text-white scale-75 md:scale-100">{stat.icon}</div>
                </div>
                <div className="text-2xl md:text-3xl font-bold font-space-grotesk text-charcoal mb-1 md:mb-2">{stat.number}</div>
                <div className="text-xs md:text-sm text-charcoal/70 font-dm-sans">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-space-grotesk text-charcoal mb-4 md:mb-6">
                Our Story
              </h2>
              <p className="text-base md:text-lg text-charcoal/80 font-dm-sans mb-4 md:mb-6 leading-relaxed">
                Founded in 2009 with a simple yet ambitious vision: to revolutionize the garment manufacturing 
                industry through innovation, quality, and unwavering commitment to excellence. What started as 
                a small workshop has grown into a leading textile manufacturing company.
              </p>
              <p className="text-base md:text-lg text-charcoal/80 font-dm-sans mb-6 md:mb-8 leading-relaxed">
                Today, we serve clients across multiple industries, from high-end fashion brands to corporate 
                uniforms, always maintaining our core values of precision, quality, and customer satisfaction.
              </p>
              
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="text-center p-3 md:p-4 bg-warm-beige rounded-xl">
                  <div className="text-2xl md:text-3xl font-bold font-space-grotesk text-deep-teal mb-1 md:mb-2">15+</div>
                  <div className="text-xs md:text-sm text-charcoal/70 font-dm-sans">Years Experience</div>
                </div>
                <div className="text-center p-3 md:p-4 bg-mint-green/20 rounded-xl">
                  <div className="text-2xl md:text-3xl font-bold font-space-grotesk text-deep-teal mb-1 md:mb-2">500+</div>
                  <div className="text-xs md:text-sm text-charcoal/70 font-dm-sans">Projects Delivered</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 lg:mt-0">
              <div className="rounded-2xl shadow-2xl w-full overflow-hidden aspect-video">
                <img 
                  src="https://images.pexels.com/photos/7876328/pexels-photo-7876328.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                  alt="Our manufacturing facility" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 bg-warm-beige">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-space-grotesk text-charcoal mb-4 md:mb-6">
              Our Core Values
            </h2>
            <p className="text-base md:text-xl text-charcoal/80 font-dm-sans max-w-3xl mx-auto px-2">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Target className="w-6 h-6 md:w-8 md:h-8" />, title: "Precision", desc: "Every stitch, every cut, executed with meticulous attention to detail." },
              { icon: <Award className="w-6 h-6 md:w-8 md:h-8" />, title: "Quality", desc: "Premium materials and rigorous quality control in every production cycle." },
              { icon: <Users className="w-6 h-6 md:w-8 md:h-8" />, title: "Partnership", desc: "Building lasting relationships with clients through trust and reliability." },
              { icon: <Scissors className="w-6 h-6 md:w-8 md:h-8" />, title: "Innovation", desc: "Embracing modern techniques and technology for superior results." }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-deep-teal rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-bold font-space-grotesk text-charcoal mb-3 md:mb-4">{value.title}</h3>
                <p className="text-sm md:text-base text-charcoal/70 font-dm-sans">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            <div className="text-center p-6 md:p-8 bg-gradient-to-br from-deep-teal to-mint-green text-white rounded-2xl">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-space-grotesk mb-3 md:mb-4">Our Mission</h3>
              <p className="text-sm md:text-base text-white/90 font-dm-sans leading-relaxed">
                To deliver exceptional garment manufacturing services that exceed client expectations 
                while maintaining the highest standards of quality, sustainability, and innovation.
              </p>
            </div>
            
            <div className="text-center p-6 md:p-8 bg-gradient-to-br from-copper to-soft-sand text-white rounded-2xl">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-space-grotesk mb-3 md:mb-4">Our Vision</h3>
              <p className="text-sm md:text-base text-white/90 font-dm-sans leading-relaxed">
                To be the global leader in sustainable and innovative garment manufacturing, 
                setting new standards for quality and environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section 
        id="timeline"
        className="py-12 md:py-20 bg-soft-sand"
        ref={setRef('timeline')}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-12 md:mb-16 ${isVisible.timeline ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-space-grotesk text-charcoal mb-4 md:mb-6">
              Our Journey
            </h2>
            <p className="text-base md:text-xl text-charcoal/80 font-dm-sans max-w-3xl mx-auto px-2">
              Key milestones in our growth and development
            </p>
          </div>

          <div className="relative">
            {/* Animated timeline line with gradient */}
            <div className={`absolute left-1/2 transform -translate-x-px h-full w-1 transition-all duration-3000 ${
              isVisible.timeline ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="w-full h-full bg-gradient-to-b from-mint-green via-deep-teal to-mint-green animate-pulse"></div>
            </div>
            
            {/* Floating particles around timeline */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-full h-full transition-all duration-2000 ${
              isVisible.timeline ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="absolute top-10 left-1/2 w-2 h-2 bg-mint-green/60 rounded-full animate-particle-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/4 left-1/2 w-1 h-1 bg-deep-teal/40 rounded-full animate-particle-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-mint-green/50 rounded-full animate-particle-float" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-deep-teal/30 rounded-full animate-particle-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/6 left-1/2 w-1 h-1 bg-mint-green/30 rounded-full animate-particle-float" style={{ animationDelay: '2.5s' }}></div>
              <div className="absolute top-5/6 left-1/2 w-1.5 h-1.5 bg-deep-teal/50 rounded-full animate-particle-float" style={{ animationDelay: '3s' }}></div>
            </div>

            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center transition-all duration-1000 ${
                    isVisible.timeline 
                      ? (index % 2 === 0 ? 'animate-card-slide-in' : 'animate-card-slide-in-right')
                      : 'opacity-0 translate-y-12'
                  } ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  style={{ 
                    transitionDelay: isVisible.timeline ? `${index * 400}ms` : '0ms' 
                  }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-4 md:pr-8 text-right' : 'pl-4 md:pl-8 text-left'}`}>
                    <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:scale-105 hover:-translate-y-2 animate-timeline-glow">
                      {/* Animated border with rotation */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-mint-green via-deep-teal to-mint-green opacity-0 group-hover:opacity-20 transition-all duration-500 group-hover:rotate-1"></div>
                      
                      {/* Sparkle effect */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-mint-green/60 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-deep-teal/40 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
                      
                      <div className="relative z-10">
                        <div className="text-xl md:text-2xl font-bold font-space-grotesk text-deep-teal mb-1 md:mb-2 group-hover:text-mint-green transition-colors duration-300 group-hover:scale-110 transform">
                          {milestone.year}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold font-space-grotesk text-charcoal mb-1 md:mb-2 group-hover:text-deep-teal transition-colors duration-300 group-hover:scale-105 transform">
                          {milestone.title}
                        </h3>
                        <p className="text-sm md:text-base text-charcoal/70 font-dm-sans group-hover:text-charcoal transition-colors duration-300">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced timeline dot with blinking effect */}
                  <div className="relative">
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-mint-green rounded-full border-2 md:border-4 border-white shadow-lg transition-all duration-1000 ${
                      isVisible.timeline ? 'animate-scale-in' : 'scale-0'
                    }`} style={{ 
                      transitionDelay: isVisible.timeline ? `${index * 400 + 200}ms` : '0ms' 
                    }}>
                      {/* Pulsing ring effect */}
                      <div className={`absolute inset-0 rounded-full bg-mint-green animate-ping ${
                        isVisible.timeline ? 'opacity-75' : 'opacity-0'
                      }`} style={{ 
                        transitionDelay: isVisible.timeline ? `${index * 400 + 400}ms` : '0ms' 
                      }}></div>
                      
                      {/* Inner blinking dot */}
                      <div className={`absolute inset-1 md:inset-2 bg-white rounded-full animate-pulse ${
                        isVisible.timeline ? 'opacity-100' : 'opacity-0'
                      }`} style={{ 
                        transitionDelay: isVisible.timeline ? `${index * 400 + 600}ms` : '0ms' 
                      }}></div>
                    </div>
                    
                    {/* Glowing effect */}
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-mint-green/20 rounded-full animate-pulse ${
                      isVisible.timeline ? 'opacity-100' : 'opacity-0'
                    }`} style={{ 
                      transitionDelay: isVisible.timeline ? `${index * 400 + 800}ms` : '0ms' 
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-deep-teal to-mint-green text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-space-grotesk mb-4 md:mb-6">
              Meet Our Team
            </h2>
            <p className="text-base md:text-xl text-white/90 font-dm-sans max-w-3xl mx-auto px-2">
              The talented professionals behind our success
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 hover:bg-white/20 transition-all duration-300">
                <div className="relative mb-4 md:mb-6">
                  <div className="w-24 h-24 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-2 md:border-4 border-white/20 group-hover:border-mint-green/50 transition-colors duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-1 md:-bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-mint-green text-deep-teal px-2 md:px-3 py-1 rounded-full text-xs font-bold font-space-grotesk">
                      {member.experience}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold font-space-grotesk mb-2 text-white">{member.name}</h3>
                <p className="text-mint-green font-semibold font-dm-sans mb-2 md:mb-3 text-base md:text-lg">{member.role}</p>
                <p className="text-white/80 font-dm-sans text-xs md:text-sm leading-relaxed">{member.description}</p>
                
                {/* Social Links Placeholder */}
                <div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-mint-green hover:text-deep-teal transition-colors duration-300 cursor-pointer">
                    <span className="text-xs font-bold">LI</span>
                  </div>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-mint-green hover:text-deep-teal transition-colors duration-300 cursor-pointer">
                    <span className="text-xs font-bold">TW</span>
                  </div>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-mint-green hover:text-deep-teal transition-colors duration-300 cursor-pointer">
                    <span className="text-xs font-bold">IG</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-space-grotesk mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/80 font-dm-sans mb-8 max-w-2xl mx-auto">
            Let's discuss your garment manufacturing needs and create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-elevated px-8 py-4 rounded-xl">
              Get Started
            </button>
            <button className="btn-elevated px-8 py-4 rounded-xl">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;