import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Plus, Minus } from 'lucide-react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const sectionRefs = useRef({});
  const axiosSecure = useAxiosSecure();

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

  // Toggle FAQ function
  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Client-side validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }
    if (formData.message.length < 10) {
      setError('Message must be at least 10 characters long');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axiosSecure.post('/contacts', formData);
      console.log('Submission response:', response.data);
      setFormData({ name: '', email: '', message: '' });
      Swal.fire({
        title: 'Success!',
        text: 'Thank you for your message! We will get back to you soon.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#064452',
      });
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to submit the form.');
      console.log('Submission error:', error);
      Swal.fire({
        title: 'Error!',
        text: error.response?.data?.message || 'Failed to submit the form.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#B26E63',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Our Office',
      color: 'bg-deep-teal',
      details: [
        'House 16, Road 7, Block B',
        'Ponchoboti, Sector 16, Uttara',
        'Near Sotota Bazaar, Dhaka, Bangladesh'
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      color: 'bg-mint-green',
      details: [
        '+880 1712 345 678',
        '+880 1912 345 678',
        'Mon-Fri: 9AM-6PM'
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      color: 'bg-copper',
      details: [
        'info@lebasbuying.com',
        'orders@lebasbuying.com',
        'support@lebasbuying.com'
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      color: 'bg-soft-sand',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  const faqData = [
    {
      question: "What's your typical turnaround time?",
      answer: "Custom projects typically take 2-4 weeks, while bulk orders vary by quantity and complexity. We provide detailed timelines during the consultation phase.",
      color: "border-mint-green"
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship worldwide with tracking and insurance included for all international orders. We handle all customs documentation and provide real-time tracking updates.",
      color: "border-copper"
    },
    {
      question: "Can I request samples before ordering?",
      answer: "Absolutely! We provide samples for all our services at a minimal cost, which is credited towards your order. This ensures you're completely satisfied with the quality.",
      color: "border-soft-sand"
    },
    {
      question: "What types of garments do you manufacture?",
      answer: "We specialize in all types of garments including shirts, pants, dresses, uniforms, activewear, and custom designs. Our expertise covers everything from basic tees to complex formal wear.",
      color: "border-deep-teal"
    },
    {
      question: "Do you have minimum order quantities?",
      answer: "Our minimum order varies by product type, but we can accommodate both small and large-scale orders. We work with startups and established brands alike.",
      color: "border-light-sky-blue"
    },
    {
      question: "What quality standards do you follow?",
      answer: "We follow international quality standards including ISO 9001 and conduct thorough quality checks at every stage of production. Our quality control team ensures every item meets our high standards.",
      color: "border-mint-green"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="py-12 md:py-20 bg-gradient-to-br from-deep-teal via-mint-green to-light-sky-blue text-white relative overflow-hidden"
        ref={setRef('hero')}
      >
        {/* Background Pattern - hidden on mobile */}
        <div className="hidden md:block absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className={`w-full px-4 sm:px-6 lg:px-8 text-center relative z-10 ${isVisible.hero ? 'animate-fade-in-up' : ''}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-space-grotesk mb-4 md:mb-6">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-dm-sans max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8 px-2">
            Ready to start your next project? Let's discuss how we can bring your vision to life with our expert garment manufacturing services.
          </p>
          <div className="flex justify-center">
            <button className="btn-elevated px-8 py-4 rounded-xl text-lg">
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section
        id="contact-info"
        className="py-20 bg-warm-beige"
        ref={setRef('contact-info')}
      >
        <div className={`w-full px-4 sm:px-6 lg:px-8 ${isVisible['contact-info'] ? 'animate-fade-in-up' : ''}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-charcoal mb-6">
              Connect With Us
            </h2>
            <p className="text-xl font-dm-sans text-charcoal/80 max-w-3xl mx-auto">
              Multiple ways to reach our team. We're here to help with your garment manufacturing needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{info.icon}</div>
                </div>
                <h3 className="text-xl font-bold font-space-grotesk text-charcoal mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-charcoal/70 font-dm-sans">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section
        id="contact"
        className="py-20 bg-white"
        ref={setRef('contact')}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-charcoal mb-6">
              Send Us a Message
          </h2>
            <p className="text-xl font-dm-sans text-charcoal/80 max-w-3xl mx-auto">
              Have a specific project in mind? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`lg:col-span-1 ${isVisible.contact ? 'animate-slide-in-right' : ''}`}>
               <div className="bg-gray-100 rounded-2xl p-8">
                 <h3 className="text-2xl font-bold font-space-grotesk text-charcoal mb-8 text-center">
                   Send Us a Message
                 </h3>
                 <form onSubmit={handleSubmit} className="space-y-6">
                   <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                       <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                       </svg>
                     </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                       className="w-full pl-12 pr-4 py-4 bg-gray-200 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-green transition-all duration-300 font-dm-sans text-gray-700 placeholder-gray-500"
                       placeholder="Full name"
                       required
                    />
                  </div>
                   <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                       <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                         <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                         <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                       </svg>
                     </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                       className="w-full pl-12 pr-4 py-4 bg-gray-200 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-green transition-all duration-300 font-dm-sans text-gray-700 placeholder-gray-500"
                       placeholder="Email address"
                       required
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                       className="w-full p-4 bg-gray-200 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-green transition-all duration-300 font-dm-sans text-gray-700 placeholder-gray-500 h-32 resize-none"
                       placeholder="Message..."
                       required
                    ></textarea>
                  </div>
                   {error && (
                     <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                       <p className="text-red-600 font-dm-sans">{error}</p>
                     </div>
                   )}
                  <button
                    type="submit"
                    disabled={isLoading}
                     className="w-full btn-elevated py-4 rounded-xl text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                   >
                     {isLoading ? (
                       <>
                         <div className="w-5 h-5 border-2 border-charcoal border-t-transparent rounded-full animate-spin"></div>
                         Sending Message...
                       </>
                     ) : (
                       <>
                         <Send className="w-5 h-5" />
                         Send Message
                       </>
                     )}
                  </button>
              </form>
                </div>

                {/* Social Media & Trust Badges */}
                <div className="bg-white rounded-2xl p-8 shadow-lg mt-8">
                  {/* Social Media Links */}
                  <div className="mb-8">
                    <div className="flex justify-center gap-6">
                      <a
                        href="https://facebook.com/lebasbuying"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 group"
                      >
                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a
                        href="https://instagram.com/lebasbuying"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group"
                      >
                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a
                        href="https://youtube.com/lebasbuying"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-300 group"
                      >
                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                      <a
                        href="https://linkedin.com/company/lebasbuying"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300 group"
                      >
                        <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Call-to-Action Line */}
                  <div className="bg-gradient-to-r from-mint-green to-light-sky-blue rounded-xl p-6 mb-6">
                    <p className="text-center text-deep-teal font-semibold font-dm-sans text-lg">
                      Looking for bulk orders or custom designs? Reach out today!
                    </p>
                  </div>

                  {/* Trust Badges */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-warm-beige rounded-xl">
                      <div className="w-12 h-12 bg-deep-teal text-white rounded-full flex items-center justify-center mx-auto mb-3">
                        <Clock className="w-6 h-6" />
                      </div>
                      <p className="font-semibold font-space-grotesk text-charcoal text-sm">
                        We respond within 24 hours
                      </p>
                    </div>
                    <div className="text-center p-4 bg-soft-sand rounded-xl">
                      <div className="w-12 h-12 bg-copper text-white rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="font-semibold font-space-grotesk text-charcoal text-sm">
                        Quality Guaranteed
                      </p>
                    </div>
                    <div className="text-center p-4 bg-light-sky-blue rounded-xl">
                      <div className="w-12 h-12 bg-mint-green text-white rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="font-semibold font-space-grotesk text-charcoal text-sm">
                        Professional Service
                      </p>
                    </div>
                  </div>
                </div>
            </div>

            {/* Map & Additional Info */}
            <div className={`lg:col-span-1 ${isVisible.contact ? 'animate-slide-in-left' : ''}`}>
              <div className="space-y-8">
                {/* Interactive Map */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold font-space-grotesk text-charcoal mb-6 text-center">
                      Our Location
                    </h3>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.5!2d90.4012!3d23.8765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1234567890%3A0x0!2sHouse%2016%2C%20Road%207%2C%20Block%20B%2C%20Ponchoboti%2C%20Sector%2016%2C%20Uttara%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1634567890123!5m2!1sen!2sbd&q=House+16,+Road+7,+Block+B,+Ponchoboti,+Sector+16,+Uttara,+Dhaka,+Bangladesh"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="The Lebas Buying Location - House 16, Road 7, Block B, Ponchoboti, Sector 16, Uttara, Dhaka, Bangladesh"
                      className="w-full h-80 rounded-2xl"
                    ></iframe>
                  </div>
                  <div className="mt-6 text-center">
                    <div className="bg-gradient-to-r from-deep-teal to-mint-green rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-center gap-3 text-white">
                        <MapPin className="w-5 h-5" />
                        <div className="text-left">
                          <p className="font-semibold font-space-grotesk">House 16, Road 7, Block B</p>
                          <p className="text-sm font-dm-sans">Ponchoboti, Sector 16, Uttara, Dhaka, Bangladesh</p>
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://maps.google.com/?q=House+16,+Road+7,+Block+B,+Ponchoboti,+Sector+16,+Uttara,+Dhaka,+Bangladesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-deep-teal text-white px-6 py-3 rounded-xl font-semibold font-dm-sans hover:bg-deep-teal/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Google Maps
                    </a>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold font-space-grotesk text-charcoal mb-4 uppercase">
                    Contact Information
                  </h3>
                  <div className="border-b border-gray-200 mb-6"></div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Phone className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold font-space-grotesk text-charcoal mb-1 uppercase">Phone</p>
                          <a 
                            href="tel:+8801712345678"
                            className="text-gray-600 font-dm-sans hover:text-deep-teal transition-colors duration-300"
                          >
                            +880 1712 345 678
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Mail className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold font-space-grotesk text-charcoal mb-1 uppercase">Email</p>
                          <a 
                            href="mailto:info@lebasbuying.com"
                            className="text-gray-600 font-dm-sans hover:text-deep-teal transition-colors duration-300"
                          >
                            info@lebasbuying.com
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold font-space-grotesk text-charcoal mb-1 uppercase">Address</p>
                          <p className="text-gray-600 font-dm-sans">
                            House 16, Road 7, Block B<br />
                            Ponchoboti, Sector 16, Uttara<br />
                            Near Sotota Bazaar, Dhaka, Bangladesh
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

               </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Centered */}
      <section className="py-20 bg-warm-beige">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-charcoal mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl font-dm-sans text-charcoal/80 max-w-3xl mx-auto">
              Get answers to common questions about our garment manufacturing services and processes.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {faqData.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-8 text-left focus:outline-none focus:ring-2 focus:ring-mint-green focus:ring-opacity-50 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className={`w-1 h-12 ${faq.color} rounded-full flex-shrink-0`}></div>
                        <h4 className="text-lg font-semibold font-space-grotesk text-charcoal pr-4">
                          {faq.question}
                        </h4>
                      </div>
                      <div className="flex-shrink-0">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          expandedFAQ === index 
                            ? 'bg-mint-green text-white' 
                            : 'bg-gray-100 text-charcoal hover:bg-mint-green hover:text-white'
                        }`}>
                          {expandedFAQ === index ? (
                            <Minus className="w-5 h-5 transition-transform duration-300" />
                          ) : (
                            <Plus className="w-5 h-5 transition-transform duration-300" />
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-8 pb-8">
                      <div className="border-t border-gray-100 pt-6">
                        <p className="text-charcoal/70 font-dm-sans leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-deep-teal to-mint-green">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl font-dm-sans text-white/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trust us with their garment manufacturing needs. 
            Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-deep-teal px-8 py-4 rounded-xl font-semibold font-space-grotesk text-lg hover:bg-warm-beige transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold font-space-grotesk text-lg hover:bg-white hover:text-deep-teal transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;