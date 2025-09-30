


// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', href: '/', isExternal: false },
//     { name: 'About', href: '/about', isExternal: false },
//     { name: 'Production', href: '#production', isExternal: true },
//     { name: 'Why Choose Us', href: '#why-choose-us', isExternal: true },
//     { name: 'Contact', href: '/contact', isExternal: false },
//   ];

//   const handleNavClick = (href, isExternal) => {
//     if (isExternal) {
//       // For external links (sections on home page)
//       if (location.pathname !== '/') {
//         // If not on home page, navigate to home page first
//         window.location.href = `/${href}`;
//       } else {
//         // If on home page, scroll to section
//         const element = document.querySelector(href);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }
//     }
//     setIsOpen(false);
//   };

//   return (
//     <nav className="relative z-50 bg-deep-teal">
//       <div className="w-full px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20 py-2">
//           {/* Logo */}
//           <Link to="/" className="flex-shrink-0 cursor-pointer">
//             <img 
//               src="https://res.cloudinary.com/duh7c5x99/image/upload/v1757758678/lebas_bhx7wl.png" 
//               alt="The Lebas Buying" 
//               className="h-32 w-auto"
//             />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               {navItems.map((item) => (
//                 item.isExternal ? (
//                   <button
//                     key={item.name}
//                     onClick={() => handleNavClick(item.href, item.isExternal)}
//                     className="text-white font-space-grotesk hover:text-mint-green transition-colors duration-300 px-3 py-2 text-sm font-medium relative group"
//                   >
//                     {item.name}
//                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mint-green transition-all duration-300 group-hover:w-full"></span>
//                   </button>
//                 ) : (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     onClick={() => handleNavClick(item.href, item.isExternal)}
//                     className={`text-white font-space-grotesk hover:text-mint-green transition-colors duration-300 px-3 py-2 text-sm font-medium relative group ${
//                       location.pathname === item.href ? 'text-mint-green' : ''
//                     }`}
//                   >
//                     {item.name}
//                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mint-green transition-all duration-300 group-hover:w-full"></span>
//                   </Link>
//                 )
//               ))}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-white hover:text-mint-green transition-colors duration-300"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-deep-teal">
//               {navItems.map((item) => (
//                 item.isExternal ? (
//                   <button
//                     key={item.name}
//                     onClick={() => handleNavClick(item.href, item.isExternal)}
//                     className="text-white hover:text-mint-green block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
//                   >
//                     {item.name}
//                   </button>
//                 ) : (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     onClick={() => handleNavClick(item.href, item.isExternal)}
//                     className={`text-white hover:text-mint-green block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300 ${
//                       location.pathname === item.href ? 'text-mint-green' : ''
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 )
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AuthContext } from '../../Providers/AuthProvider';
import Shuffle from '../../components/Shuffle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, logOut } = useContext(AuthContext); // Access user and logOut from AuthContext

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', isExternal: false },
    { name: 'About', href: '/about', isExternal: false },
    { name: 'Production', href: '#production', isExternal: true },
    { name: 'Products', href: '/products', isExternal: false },
    { name: 'Contact', href: '/contact', isExternal: false },
  ];

  const handleNavClick = (href, isExternal) => {
    if (isExternal) {
      if (location.pathname !== '/') {
        window.location.href = `/${href}`;
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        window.location.href = '/'; // Navigate to home page after logout
      })
      .catch((err) => console.error(err));
  };

  return (
    <nav className="relative z-50 bg-deep-teal">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 py-2">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 cursor-pointer">
            <img 
              src="https://res.cloudinary.com/duh7c5x99/image/upload/v1757758678/lebas_bhx7wl.png" 
              alt="The Lebas Buying" 
              className="h-16 sm:h-20 md:h-24 lg:h-32 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                item.isExternal ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href, item.isExternal)}
                    className="text-white font-space-grotesk hover:text-mint-green transition-colors duration-300 px-3 py-2 text-sm font-medium relative group"
                  >
                    <Shuffle
                      text={item.name}
                      className="text-sm font-medium"
                      shuffleDirection="right"
                      duration={0.35}
                      animationMode="evenodd"
                      shuffleTimes={1}
                      ease="power3.out"
                      stagger={0.03}
                      threshold={0.1}
                      triggerOnce={true}
                      triggerOnHover={true}
                      respectReducedMotion={true}
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mint-green transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleNavClick(item.href, item.isExternal)}
                    className={`text-white font-space-grotesk hover:text-mint-green transition-colors duration-300 px-3 py-2 text-sm font-medium relative group ${
                      location.pathname === item.href ? 'text-mint-green' : ''
                    }`}
                  >
                    <Shuffle
                      text={item.name}
                      className="text-sm font-medium"
                      shuffleDirection="right"
                      duration={0.35}
                      animationMode="evenodd"
                      shuffleTimes={1}
                      ease="power3.out"
                      stagger={0.03}
                      threshold={0.1}
                      triggerOnce={true}
                      triggerOnHover={true}
                      respectReducedMotion={true}
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mint-green transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )
              ))}
            </div>

            {/* Products hover dropdown */}
            <div className="relative group">
              <Link to="/products" className={`hidden ${''}`}></Link>
              <div className="absolute -left-8 mt-2 hidden group-hover:block">
                <div className="bg-deep-teal text-white rounded-xl shadow-2xl p-4 w-64">
                  <Link to="/products/knit" className="block px-4 py-3 hover:text-mint-green">Knit</Link>
                  <Link to="/products/woven" className="block px-4 py-3 hover:text-mint-green">Woven</Link>
                  <Link to="/products/sweater" className="block px-4 py-3 hover:text-mint-green">Sweater</Link>
                  <Link to="/products/prospectus" className="block px-4 py-3 hover:text-mint-green">Prospectus</Link>
                </div>
              </div>
            </div>

            {/* Auth Buttons (Desktop) */}
            {user ? (
              <>
                <NavLink
                  to="/dashboard"
                  className="px-3 py-2 text-sm font-medium text-[#D0A96A] hover:text-[#B8945A] transition-all duration-300 hover:bg-gray-700/50 rounded-md"
                >
                  Dashboard
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="btn-elevated px-6 py-3 rounded-xl"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/signup"
                className="btn-elevated px-6 py-3 rounded-xl"
              >
                Sign Up
              </NavLink>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-mint-green transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-deep-teal">
              {navItems.map((item) => (
                item.isExternal ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href, item.isExternal)}
                    className="text-white hover:text-mint-green block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
                  >
                    <Shuffle
                      text={item.name}
                      className="text-base font-medium"
                      shuffleDirection="right"
                      duration={0.35}
                      animationMode="evenodd"
                      shuffleTimes={1}
                      ease="power3.out"
                      stagger={0.03}
                      threshold={0.1}
                      triggerOnce={true}
                      triggerOnHover={true}
                      respectReducedMotion={true}
                    />
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => handleNavClick(item.href, item.isExternal)}
                    className={`text-white hover:text-mint-green block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300 ${
                      location.pathname === item.href ? 'text-mint-green' : ''
                    }`}
                  >
                    <Shuffle
                      text={item.name}
                      className="text-base font-medium"
                      shuffleDirection="right"
                      duration={0.35}
                      animationMode="evenodd"
                      shuffleTimes={1}
                      ease="power3.out"
                      stagger={0.03}
                      threshold={0.1}
                      triggerOnce={true}
                      triggerOnHover={true}
                      respectReducedMotion={true}
                    />
                  </Link>
                )
              ))}

              {/* Auth Buttons (Mobile) */}
              {user ? (
                <>
                  <NavLink
                    to="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-[#D0A96A] hover:text-[#B8945A] hover:bg-gray-700/50 rounded-md block w-full text-left"
                  >
                    Dashboard
                  </NavLink>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="px-4 py-3 text-sm font-medium text-[#B91C1C] hover:text-[#991B1B] hover:bg-[#FEF2F2] rounded-md block w-full text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <NavLink
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="btn-elevated px-6 py-3 rounded-xl mx-4 mt-2 text-center block w-full"
                >
                  Sign Up
                </NavLink>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;