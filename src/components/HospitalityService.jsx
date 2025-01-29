import React from "react";
import hs1 from "../assets/hs1.jpeg";
import hs2 from "../assets/hs2.jpg";
import hs3 from "../assets/hs3.jpg";

const HospitalityService = () => {
  const services = [
    {
      img: hs1,
      desc: "We provide skilled waitstaff and cashiers to ensure smooth service in restaurants, cafes, and event venues.",
    },
    {
      img: hs2,
      desc: "Expert baristas and bartenders who craft beverages and mix drinks to create a great customer experience.",
    },
    {
      img: hs3,
      desc: "Professional chefs, junior chefs, and kitchen staff ensuring high-quality culinary operations.",
    },
  ];

  return (
    <div id="hospitality-services" className="w-full p-0">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full h-[90vh]">
        {services.map((service, index) => (
          <div key={index} className="relative w-full h-full">
            {/* Image with blackened effect */}
            <img
              className="w-full h-full object-cover filter brightness-50"
              src={service.img}
              alt="Hospitality Service"
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

export default HospitalityService;
