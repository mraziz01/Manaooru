import React from "react";
import hs1 from "../assets/hs1.jpg";
import hs2 from "../assets/hs2.jpg";
import hs3 from "../assets/hs3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const VillageTraditions = () => {
  const traditions = [
    {
      img: hs1,
      heading: "Harvest Celebrations",
      desc: "Our vibrant harvest festivals feature traditional dances, music, and communal feasts that honor the land's bounty and ancestral farming wisdom."
    },
    {
      img: hs2,
      heading: "Artisan Crafts",
      desc: "Skilled artisans preserve ancient techniques in pottery, weaving, and woodcarving, creating beautiful handcrafted pieces that tell our village's story."
    },
    {
      img: hs3,
      heading: "Rural Cuisine",
      desc: "Experience authentic village cuisine prepared with homegrown ingredients using traditional methods passed down through generations of cooks."
    },
  ];
  return (
    <section className="relative h-[50vh] md:h-[80vh] w-full overflow-hidden bg-black">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={800}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="h-full w-full"
      >
        {traditions.map((traditions, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Optimized image container */}
              <div className="h-full w-full overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center opacity-90"
                  src={traditions.img}
                  alt={traditions.heading}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center p-8 text-center text-white">
                <div className="max-w-4xl space-y-6">
                  <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl font-satisfy">
                    {traditions.heading}
                  </h2>
                  <p className="mx-auto max-w-2xl text-base md:text-lg">
                    {traditions.desc}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
       <div className="absolute md:left-8 left-4 md:top-1/2 bottom-8 md:transform md:-translate-y-1/2 z-10 
                      md:h-12 md:w-12 h-10 w-10 rounded-full bg-[#4A4947] md:p-4 p-3 backdrop-blur-lg 
                      hover:bg-[#4A4947]/80 border md:border-2 border-white/30 flex items-center justify-center
                      transition-all duration-300 hover:scale-105">
         <FaArrowLeft className="text-white md:h-6 md:w-6 h-5 w-5" />
       </div>
       
       <div className="absolute md:right-8 right-4 md:top-1/2 bottom-8 md:transform md:-translate-y-1/2 z-10 
                      md:h-12 md:w-12 h-10 w-10 rounded-full bg-[#4A4947] md:p-4 p-3 backdrop-blur-lg 
                      hover:bg-[#4A4947]/80 border md:border-2 border-white/30 flex items-center justify-center
                      transition-all duration-300 hover:scale-105">
         <FaArrowRight className="text-white md:h-6 md:w-6 h-5 w-5" />
       </div>

        {/* Pagination */}
        <div className="swiper-pagination !bottom-4" />
      </Swiper>
    </section>
  );
};

export default VillageTraditions;
