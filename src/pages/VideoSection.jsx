import React, { useState, useRef, useEffect } from 'react';
import { Play, Award, Users, Zap, X, Volume2, VolumeX, Pause } from 'lucide-react';
import logoLebas from '../assets/logo_lebas.png';

const VideoSection = () => {
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [currentVideoSrc, setCurrentVideoSrc] = useState("/src/assets/vd1.mov");
  const videoRef = useRef(null);
  const modalRef = useRef(null);

  const handleVideoClick = (videoSrc = "/src/assets/vd1.mov") => {
    setCurrentVideoSrc(videoSrc);
    setIsVideoPopupOpen(true);
    setIsVideoPlaying(true);
  };

  const closeVideoPopup = () => {
    setIsVideoPopupOpen(false);
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  // Handle click outside modal to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeVideoPopup();
      }
    };

    if (isVideoPopupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isVideoPopupOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isVideoPopupOpen) {
        closeVideoPopup();
      }
    };

    if (isVideoPopupOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isVideoPopupOpen]);

  return (
    <section id="video" className="py-12 md:py-20 bg-gradient-to-br from-charcoal to-deep-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk mb-4 md:mb-6">
            See Our <span className="text-mint-green">Craftsmanship</span> in Action
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 font-dm-sans max-w-3xl mx-auto leading-relaxed px-2">
            Watch how we transform raw materials into premium garments using state-of-the-art machinery 
            and decades of expertise in textile manufacturing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Video Player */}
          <div className="relative group">
            <div 
              className="relative aspect-video bg-gradient-to-br from-mint-green/20 to-deep-teal/50 rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              onClick={handleVideoClick}
            >
              <video 
                src="/src/assets/vd1.mov"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="https://images.pexels.com/photos/7876328/pexels-photo-7876328.jpeg?auto=compress&cs=tinysrgb&w=1200"
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-deep-teal/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-16 h-16 md:w-20 md:h-20 bg-mint-green rounded-full flex items-center justify-center hover:bg-mint-green/90 hover:scale-110 transition-all duration-300">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-deep-teal ml-1" fill="currentColor" />
                </button>
              </div>
              {/* Logo Watermark */}
              <div className="absolute top-4 right-4 z-10">
                <img 
                  src={logoLebas} 
                  alt="Lebas Logo" 
                  className="w-12 h-12 md:w-16 md:h-16 opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 md:p-4">
                  <h4 className="font-bold font-space-grotesk text-white mb-1 text-sm md:text-base">
                    Behind the Scenes of Excellence
                  </h4>
                  <p className="text-white/80 font-dm-sans text-xs md:text-sm">
                    Click to view full video
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold font-space-grotesk mb-4 md:mb-6">
              Behind the Scenes of Excellence
            </h3>
            <p className="text-base md:text-lg text-white/90 font-dm-sans mb-6 md:mb-8 leading-relaxed">
              Take an exclusive look inside our manufacturing facility where skilled craftsmen and 
              advanced machinery work together to create exceptional garments. From initial design 
              to final quality control, every step reflects our commitment to precision and quality.
            </p>

            <div className="grid grid-cols-1 gap-4 md:gap-6">
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-mint-green rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 md:w-6 md:h-6 text-deep-teal" />
                </div>
                <div>
                  <h4 className="font-bold font-space-grotesk text-white mb-1 text-sm md:text-base">Advanced Technology</h4>
                  <p className="text-white/80 font-dm-sans text-xs md:text-sm">
                    State-of-the-art sewing machines and automated cutting systems
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-mint-green rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-deep-teal" />
                </div>
                <div>
                  <h4 className="font-bold font-space-grotesk text-white mb-1 text-sm md:text-base">Skilled Craftsmen</h4>
                  <p className="text-white/80 font-dm-sans text-xs md:text-sm">
                    Expert tailors with decades of experience in garment construction
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-mint-green rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 md:w-6 md:h-6 text-deep-teal" />
                </div>
                <div>
                  <h4 className="font-bold font-space-grotesk text-white mb-1 text-sm md:text-base">Quality Assurance</h4>
                  <p className="text-white/80 font-dm-sans text-xs md:text-sm">
                    Rigorous testing and inspection at every stage of production
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Video Thumbnails */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold font-space-grotesk text-center mb-12">
            More from Our Workshop
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fabric Selection Process",
                duration: "2:15",
                video: "/src/assets/fabric_selection.mov",
                image: "https://images.pexels.com/photos/6479607/pexels-photo-6479607.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Pattern Making & Cutting",
                duration: "4:30",
                video: "/src/pages/0930(1).mov",
                image: "https://images.pexels.com/photos/7876354/pexels-photo-7876354.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                title: "Quality Control Standards",
                duration: "3:20",
                video: "/src/assets/3no.mov",
                image: "https://images.pexels.com/photos/7876365/pexels-photo-7876365.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            ].map((video, index) => (
              <div key={index} className="relative group cursor-pointer" onClick={() => video.video && handleVideoClick(video.video)}>
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  {video.video ? (
                    <video 
                      src={video.video}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img 
                      src={video.image} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-deep-teal/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-mint-green rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-deep-teal ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  {/* Logo Watermark */}
                  <div className="absolute top-2 right-2 z-10">
                    <img 
                      src={logoLebas} 
                      alt="Lebas Logo" 
                      className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <h4 className="font-semibold font-space-grotesk text-white mt-3 group-hover:text-mint-green transition-colors duration-300">
                  {video.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Popup Modal */}
      {isVideoPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div ref={modalRef} className="relative w-full max-w-4xl mx-4">
            {/* Close Button */}
            <button
              onClick={closeVideoPopup}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Video Container */}
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <video 
                ref={videoRef}
                src={currentVideoSrc}
                className="w-full h-full object-cover"
                autoPlay
                muted={isVideoMuted}
                loop
                playsInline
                preload="metadata"
                poster="https://images.pexels.com/photos/7876328/pexels-photo-7876328.jpeg?auto=compress&cs=tinysrgb&w=1200"
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
                onLoadedData={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = isVideoMuted;
                  }
                }}
              >
                Your browser does not support the video tag.
              </video>
              
              {/* Logo Watermark */}
              <div className="absolute top-4 right-4 z-10">
                <img 
                  src={logoLebas} 
                  alt="Lebas Logo" 
                  className="w-16 h-16 opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Custom Controls Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Play/Pause Button */}
                    <button
                      onClick={toggleVideoPlay}
                      className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      {isVideoPlaying ? (
                        <Pause className="w-6 h-6 text-white" />
                      ) : (
                        <Play className="w-6 h-6 text-white ml-1" />
                      )}
                    </button>

                    {/* Mute/Unmute Button */}
                    <button
                      onClick={toggleVideoMute}
                      className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
                    >
                      {isVideoMuted ? (
                        <VolumeX className="w-6 h-6 text-white" />
                      ) : (
                        <Volume2 className="w-6 h-6 text-white" />
                      )}
                    </button>
                  </div>

                  {/* Video Title */}
                  <div className="text-white">
                    <h4 className="font-bold font-space-grotesk text-lg">
                      Behind the Scenes of Excellence
                    </h4>
                    <p className="text-white/80 font-dm-sans text-sm">
                      Professional Garment Manufacturing Process
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;