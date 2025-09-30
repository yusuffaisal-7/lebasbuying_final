import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Production', href: '#production' },
    { name: 'Products', href: '#products' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Custom Tailoring',
    'Bulk Manufacturing',
    'Quality Control',
    'Fabric Sourcing',
    'Pattern Making',
    'Finishing Services',
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-deep-teal text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src="https://res.cloudinary.com/duh7c5x99/image/upload/v1757758678/lebas_bhx7wl.png"
              alt="The Lebas Buying"
              className="h-12 md:h-16 w-auto mb-4 md:mb-6"
            />
            <p className="text-sm md:text-base text-white/80 font-dm-sans mb-4 md:mb-6 leading-relaxed">
              Your trusted partner in professional garment manufacturing, delivering quality and precision since 2009.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3 md:space-x-4">
              <a
                href="#"
                className="w-8 h-8 md:w-10 md:h-10 bg-mint-green rounded-lg flex items-center justify-center hover:bg-mint-green/80 transition-colors duration-300 group"
              >
                <Facebook className="w-5 h-5 text-deep-teal group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="w-8 h-8 md:w-10 md:h-10 bg-mint-green rounded-lg flex items-center justify-center hover:bg-mint-green/80 transition-colors duration-300 group"
              >
                <Instagram className="w-5 h-5 text-deep-teal group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="w-8 h-8 md:w-10 md:h-10 bg-mint-green rounded-lg flex items-center justify-center hover:bg-mint-green/80 transition-colors duration-300 group"
              >
                <Twitter className="w-5 h-5 text-deep-teal group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="w-8 h-8 md:w-10 md:h-10 bg-mint-green rounded-lg flex items-center justify-center hover:bg-mint-green/80 transition-colors duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-deep-teal group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold font-space-grotesk mb-4 md:mb-6">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm md:text-base text-white/80 hover:text-mint-green transition-colors duration-300 font-dm-sans"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg md:text-xl font-bold font-space-grotesk mb-4 md:mb-6">Our Services</h3>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm md:text-base text-white/80 font-dm-sans">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-bold font-space-grotesk mb-4 md:mb-6">Contact Us</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-mint-green mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm md:text-base text-white/80 font-dm-sans">123 Textile Avenue</p>
                  <p className="text-sm md:text-base text-white/80 font-dm-sans">Garment District, NY 10018</p>
                </div>
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-mint-green flex-shrink-0" />
                <div>
                  <p className="text-sm md:text-base text-white/80 font-dm-sans">+1 (555) 123-4567</p>
                  <p className="text-sm md:text-base text-white/80 font-dm-sans">+1 (555) 789-0123</p>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-mint-green mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm md:text-base text-white/80 font-dm-sans">info@lebasbuyingco.com</p>
                  <p className="text-sm md:text-base text-white/80 font-dm-sans">orders@lebasbuyingco.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 font-dm-sans text-xs md:text-sm">
              © 2024 The Lebas Buying. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-white/60 hover:text-mint-green transition-colors duration-300 font-dm-sans"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-mint-green transition-colors duration-300 font-dm-sans"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-mint-green transition-colors duration-300 font-dm-sans"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;