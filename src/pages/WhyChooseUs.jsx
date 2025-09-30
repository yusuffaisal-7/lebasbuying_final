import React from 'react';
import { CheckCircle, Star, Clock, HeadphonesIcon, Globe, TrendingUp } from 'lucide-react';
import Marquee from '../components/ui/Marquee';
import cn from '../lib/utils';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Uncompromising Quality",
      description: "Every garment undergoes rigorous quality control to meet international standards."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "On-Time Delivery",
      description: "We pride ourselves on meeting deadlines without compromising on quality."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "15+ Years Experience",
      description: "Decades of expertise in textile manufacturing and garment production."
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Dedicated customer service team available around the clock."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Sourcing",
      description: "Access to premium materials and fabrics from around the world."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Competitive Pricing",
      description: "Best value for money without compromising on quality or service."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Fashion Forward Ltd.",
      quote: "The Lebas Buying has been our trusted partner for over 5 years. Their quality and reliability are unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Urban Threads",
      quote: "Exceptional craftsmanship and professional service. They've helped us scale our business significantly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Boutique Designs",
      quote: "From custom pieces to bulk orders, they deliver excellence every time. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <section id="why-choose-us" className="py-12 md:py-20 bg-gradient-to-br from-warm-beige via-white to-light-sky-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk text-charcoal mb-4 md:mb-6">
            Why Choose <span className="text-deep-teal">The Lebas Buying</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-charcoal/80 font-dm-sans max-w-3xl mx-auto leading-relaxed px-2">
            Discover what sets us apart in the textile industry and why leading brands trust us 
            with their garment manufacturing needs.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-mint-green rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-deep-teal transition-colors duration-300">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold font-space-grotesk text-charcoal mb-3 md:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-charcoal/70 font-dm-sans leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-deep-teal rounded-3xl p-6 md:p-8 lg:p-12 text-white mb-16 md:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-space-grotesk mb-3 md:mb-4">
              Our Track Record
            </h3>
            <p className="text-base md:text-xl font-dm-sans text-white/90 px-2">
              Numbers that speak for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk mb-1 md:mb-2">500+</div>
              <div className="text-xs sm:text-sm md:text-base text-white/80 font-dm-sans">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk mb-1 md:mb-2">99%</div>
              <div className="text-xs sm:text-sm md:text-base text-white/80 font-dm-sans">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk mb-1 md:mb-2">50+</div>
              <div className="text-xs sm:text-sm md:text-base text-white/80 font-dm-sans">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk mb-1 md:mb-2">15+</div>
              <div className="text-xs sm:text-sm md:text-base text-white/80 font-dm-sans">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Testimonials (Marquee) */}
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-space-grotesk text-charcoal mb-8 md:mb-12 text-center">
            What Our Clients Say
          </h3>

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:22s]">
              {testimonials.map((t, idx) => (
                <figure
                  key={`row1-${idx}`}
                  className={cn(
                    'relative mx-2 h-full w-72 cursor-pointer overflow-hidden rounded-2xl border p-4',
                    'border-deep-teal/20 bg-white hover:bg-warm-beige/40'
                  )}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <figcaption className="text-sm font-medium text-charcoal">{t.name}</figcaption>
                  </div>
                  <blockquote className="mt-2 text-sm text-charcoal/80">"{t.quote}"</blockquote>
                </figure>
              ))}
            </Marquee>

            <Marquee reverse pauseOnHover className="[--duration:22s] mt-3">
              {testimonials.map((t, idx) => (
                <figure
                  key={`row2-${idx}`}
                  className={cn(
                    'relative mx-2 h-full w-72 cursor-pointer overflow-hidden rounded-2xl border p-4',
                    'border-deep-teal/20 bg-white hover:bg-warm-beige/40'
                  )}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <figcaption className="text-sm font-medium text-charcoal">{t.name}</figcaption>
                  </div>
                  <blockquote className="mt-2 text-sm text-charcoal/80">"{t.quote}"</blockquote>
                </figure>
              ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;