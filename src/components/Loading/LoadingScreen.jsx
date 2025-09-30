import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [loadingText, setLoadingText] = useState('Initializing...');

  const loadingMessages = [
    'Initializing...',
    'Loading assets...',
    'Preparing interface...',
    'Almost ready...',
    'Welcome!'
  ];

  useEffect(() => {
    let progressInterval;
    let messageIndex = 0;

    const updateProgress = () => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsVisible(false);
          }, 800);
          return 100;
        }
        return prev + Math.random() * 12 + 3;
      });
    };

    const updateMessage = () => {
      setLoadingText(loadingMessages[messageIndex]);
      messageIndex = (messageIndex + 1) % loadingMessages.length;
    };

    progressInterval = setInterval(updateProgress, 150);
    const messageInterval = setInterval(updateMessage, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-deep-teal via-mint-green to-light-sky-blue flex items-center justify-center z-50">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-white/10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        {/* Main Logo */}
        <div className="mb-12">
          <div className="relative inline-block">
            {/* Company Logo */}
            <div className="relative mb-8">
              <img 
                src="https://res.cloudinary.com/duh7c5x99/image/upload/v1757997115/Untitled_design_7_sgnnum.png" 
                alt="The Lebas Buying Logo" 
                className="w-80 h-80 md:w-96 md:h-96 mx-auto object-contain animate-pulse"
              />
              
              {/* Glowing effect around logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-mint-green/20 via-transparent to-light-sky-blue/20 rounded-full animate-ping"></div>
            </div>

            {/* Company Name Text */}
            <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-4 animate-pulse">
              The Lebas Buying
            </h1>
            
            {/* Tagline */}
            <div className="text-lg md:text-xl font-dm-sans text-white/90 mb-8">
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>C</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>r</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>a</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>f</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.5s' }}>t</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>i</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.7s' }}>n</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.8s' }}>g</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '0.9s' }}> </span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1.0s' }}>E</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1.1s' }}>x</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1.2s' }}>c</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1.3s' }}>e</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1.4s' }}>l</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1.5s' }}>l</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1.6s' }}>e</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1.7s' }}>n</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1.8s' }}>c</span>
              <span className="inline-block animate-bounce" style={{ animationDelay: '1.9s' }}>e</span>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-mint-green/40 rounded-full animate-ping"></div>
            <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 -right-12 w-6 h-6 bg-light-sky-blue/50 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -left-12 w-4 h-4 bg-mint-green/30 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="mb-8">
          <div className="relative w-24 h-24 mx-auto">
            {/* Outer Ring */}
            <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
            
            {/* Animated Ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-white border-r-white rounded-full animate-spin"></div>
            
            {/* Middle Ring */}
            <div className="absolute inset-2 border-2 border-transparent border-b-mint-green border-l-mint-green rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            
            {/* Inner Dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto mb-6">
          <div className="bg-white/20 rounded-full h-3 overflow-hidden shadow-inner">
            <div 
              className="bg-gradient-to-r from-white via-mint-green to-light-sky-blue h-full rounded-full transition-all duration-500 ease-out relative"
              style={{ width: `${loadingProgress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
          <div className="text-white/60 text-sm mt-2 font-dm-sans">
            {Math.round(loadingProgress)}%
          </div>
        </div>

        {/* Loading Text with Typewriter Effect */}
        <div className="text-white/90 font-dm-sans text-xl mb-8 min-h-[2rem]">
          <span className="animate-pulse">{loadingText}</span>
          <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>.</span>
          <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>.</span>
          <span className="animate-pulse" style={{ animationDelay: '0.6s' }}>.</span>
        </div>

        {/* Tagline */}
        <div className="text-white/70 font-dm-sans text-lg max-w-md mx-auto leading-relaxed">
          Professional Garment Manufacturing Solutions
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      {/* Fade out overlay */}
      <div 
        className={`absolute inset-0 bg-white transition-opacity duration-1000 ${
          loadingProgress >= 100 ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
    </div>
  );
};

export default LoadingScreen;
