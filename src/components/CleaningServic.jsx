import React from "react";
import ab1 from "../assets/cl1.jpg";
import ab2 from "../assets/cl2.jpg";
import ab3 from "../assets/cl3.jpg";

const CleaningServic = () => {
  const services = [
    {
      img: ab1,
      desc: "Deep cleaning, routine housekeeping, and move-in/move-out services to keep homes spotless.",
    },
    {
      img: ab2,
      desc: "Office, retail, and post-construction cleaning for a professional and hygienic workspace.",
    },
    {
      img: ab3,
      desc: "Hospitality cleaning, including hotel rooms, public spaces, and restaurant areas.",
    },
  ];

  return (
    <div id="contact-us" className="w-full p-0 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full h-[90vh]">
        {services.map((service, index) => (
          <div key={index} className="relative w-full h-full">
            {/* Image with black effect */}
            <img
              className="w-full h-full object-cover filter brightness-50"
              src={service.img}
              alt="Cleaning Service"
            />
            
            {/* Text positioned at the bottom left */}
            <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-left text-lg">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CleaningServic;
