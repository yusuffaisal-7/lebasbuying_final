// import React from 'react'
// import VideoSection from '../VideoSection'
// import Production from '../Production'
// import Products from '../Products'
// import WhyChooseUs from '../WhyChooseUs'
// import Hero from '../Hero'

// export default function Home() {
//   return (
//     <div>
//               <Hero></Hero>
//               <VideoSection />
//               <Production />
//               <Products />
//               <WhyChooseUs />
//     </div>
//   )
// }


import React from 'react';

import Hero from '../Hero';
import VideoSection from '../VideoSection';
import Production from '../Production';
import Products from '../Products';
import WhyChooseUs from '../WhyChooseUs';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

export default function Home() {
  return (
    <>
      <div className="m-8">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <Navbar />
          <Hero />
        </div>
      </div>
      <VideoSection />
      <Production />
      <Products />
      <WhyChooseUs />
      <Footer />
    </>
  );
}