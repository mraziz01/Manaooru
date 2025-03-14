import React from "react";
import hs1 from "../assets/hs1.webp";
import hs2 from "../assets/hs2.webp";
import hs3 from "../assets/hs3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HospitalityService = () => {
  const services = [
    {
      img: hs1,
      desc: "We provide skilled waitstaff and cashiers to ensure smooth service in restaurants, cafes, and event venues.",
      heading: "Skilled Waitstaff & Cashiers",
    },
    {
      img: hs2,
      desc: "Expert baristas and bartenders who craft beverages and mix drinks to create a great customer experience.",
      heading: "Expert Baristas & Bartenders",
    },
    {
      img: hs3,
      desc: "Professional chefs, junior chefs, and kitchen staff ensuring high-quality culinary operations.",
      heading: "Professional Chefs & Kitchen Staff",
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
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              {/* Optimized image container */}
              <div className="h-full w-full overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center opacity-90"
                  src={service.img}
                  alt="Cleaning service"
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
                    {service.heading}
                  </h2>
                  <p className="mx-auto max-w-2xl text-base md:text-lg">
                    {service.desc}
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

export default HospitalityService;
