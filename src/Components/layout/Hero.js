"use client"
import Image from 'next/image';
// import Aos from 'aos';
// import 'aos/dist/aos.css'
// import { useEffect } from 'react';
// import { TypeAnimation } from 'react-type-animation';
// import Image from 'next/image';
// const Hero = () => {
//     useEffect(()=>{
//         Aos.init({duration:2000});
//     }, [])
//     return (
//         <div className="hero min-h-screen bg-blue-950 " >
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
//                 <div className="hero-content text-center">
//                     <div className="max-w-md text-white">
//                     <h1 className='font-bold text-4xl pt-32 text-white' data-aos="fade-right">Money Tracker for <br/> 
//                         <span className='text-red-900 text-3xl font-bold pt-10'>
//                             <TypeAnimation
//                             sequence={['travelers', 500, 'backpackers', 500, 'Soul mates', 500]}
//                             repeat={Infinity}
//                             />
//                         </span>
//                     </h1>
//                     <div className='flex  gap-5 pt-5 px-10'>
//                         <div>
//                             <a href='https://play.google.com/store/apps?hl=en&gl=US'>
//                                 <Image
//                                 src="/Images/pic1.png"
//                                 width={130}
//                                 height={200}
//                                 alt="Picture of the author"
//                                 />
//                             </a>
//                         </div>
//                         <div className=''>
//                             <a href='https://play.google.com/store/apps?hl=en&gl=US'>
//                                 <Image
//                                 src="/Images/pic2.png"
//                                 width={130}
//                                 height={200}
//                                 alt="Picture of the author"
//                                 />
//                             </a>
//                         </div>
//                     </div>
//                     <div className=" rating rating-md pt-3 rating-half">
//                         <input type="radio" name="rating-10" className="rating-hidden" />
//                         <input type="radio" name="rating-10" className="bg-white mask mask-star-2 mask-half-1" />
//                         <input type="radio" name="rating-10" className="bg-white mask mask-star-2 mask-half-2" />
//                         <input type="radio" name="rating-10" className="bg-white mask mask-star-2 mask-half-1"  />
//                         <input type="radio" name="rating-10" className="bg-white mask mask-star-2 mask-half-2" />
//                         <input type="radio" name="rating-10" className="bg-white mask mask-star-2 mask-half-1" />
//                         <input type="radio" name="rating-10" className="bg-white mask mask-star-2 mask-half-2" />
//                         <input type="radio" name="rating-10" className="bg-white mask mask-star-2 mask-half-1" />
//                         <input type="radio" name="rating-10" className="bg-white mask mask-star-2 mask-half-2" />
//                         <input type="radio" name="rating-10" className="bg-white mask mask-star-2 mask-half-1" checked/>
//                         <input type="radio" name="rating-10" className="bg-white mask mask-star-2 mask-half-2" />
//                         </div>
//                         <div>
//                             <h1 className='text-md text-white'>4.8 on the App Store</h1>
//                         </div>
//                     </div>
                    
//                 </div>
//                 <div>
//                     <Image
//                         src="/Images/hero1.png"
//                         width={700}
//                         height={700}
//                         alt="Picture of the author"
//                     />
//                 </div>
//             </div>
                    
//         </div> 

//     );
// };


// --------------------------------------------------------------------



// export default Hero;
// import React, { useRef, useState } from 'react';
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';


// import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';
// import Image from 'next/image';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="h-[700px] w-full"
//       >
//         <SwiperSlide className='pt-10'>
//             <Image
//                 src="/Images/nature1.jpg"
//                 width={700}
//                 height={700}
//                 alt="Picture of the author"
//             />
//         </SwiperSlide>

//         <SwiperSlide>
//             <Image
//                 src="/Images/nature2.jpg"
//                 width={700}
//                 height={700}
//                 alt="Picture of the author"
//             />
//         </SwiperSlide>

//         <SwiperSlide>
//             <Image
//                 src="/Images/nature3.jpg"
//                 width={700}
//                 height={700}
//                 alt="Picture of the author"
//             />
//         </SwiperSlide>

//         <SwiperSlide>
//             <Image
//                 src="/Images/nature4.jpg"
//                 width={700}
//                 height={700}
//                 alt="Picture of the author"
//             />
//         </SwiperSlide>

//         <SwiperSlide>
//             <Image
//                 src="/Images/nature5.jpg"
//                 width={700}
//                 height={700}
//                 alt="Picture of the author"
//             />
//         </SwiperSlide>

        
//       </Swiper>
//     </>
//   );
// }

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Hero() {
  return (
    <div className='text-center'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
          <Image
              className='text-center w-full md:h-[500px] lg:h-[500px] h-[300px]'
              src="/Images/nature1.jpg"
              width={500}
              height={500}
              // style={{width:'100%',height:'300px'}}
              alt="Picture of the author"
            />
            <h1 className='absolute top-0 justify-center'>hellow bangladesh</h1>
        </SwiperSlide>
        <SwiperSlide>
            <Image
            className='text-center w-full md:h-[500px] lg:h-[500px] h-[300px]'
              src="/Images/nature2.jpg"
              width={500}
              height={500}
              // style={{width:'100%',height:'300px'}}
              alt="Picture of the author"
            />
        </SwiperSlide>
        <SwiperSlide>
            <Image
            className='text-center w-full md:h-[500px] lg:h-[500px] h-[300px]'
                src="/Images/nature3.jpg"
                width={500}
                height={500}
                // style={{width:'100%',height:'300px'}}
                alt="Picture of the author"
            />
        </SwiperSlide>
        <SwiperSlide>
            <Image
            className='text-center w-full md:h-[500px] lg:h-[500px] h-[300px]'
              src="/Images/nature4.jpg"
              width={500}
              height={500}
              // style={{width:'100%',height:'300px'}}
              alt="Picture of the author"
            />
        </SwiperSlide>
        <SwiperSlide>
            <Image
            className='text-center w-full md:h-[500px] lg:h-[700px] h-[300px]'
                src="/Images/nature5.jpg"
                width={500}
                height={500}
                // style={{width:'100%',height:'300px'}}
                alt="Picture of the author"
            />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
