import React, { useEffect, useState } from "react";
import img1 from "../assets/farmer-gt.jpg";
import img2 from "../assets/seeding.jpg";
import img3 from "../assets/farmer-an.jpg";

// Reusable Section Component with Animation
const Section = ({ heading, image, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const element = document.getElementById(heading);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [heading]);

  return (
    <div
      id={heading}
      className={`flex flex-col items-center text-center max-w-md opacity-0 transform ${
        isVisible ? "translate-y-0 opacity-100 transition-all duration-1000" : "translate-y-10"
      }`}
    >
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        {heading}
      </h3>
      <img
        src={image}
        alt={heading}
        className="w-[300px] h-[200px] md:w-[350px] md:h-[250px] object-cover my-4 rounded-lg shadow-lg"
      />
      <div className="h-[100px] md:h-[120px] flex items-center">
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

function About() {
  return (
    <>
      <div id="About" className="py-12 bg-gray-50">
        <h2 className="text-center font-satisfy text-3xl md:text-4xl font-bold text-gray-800 mb-12">
         Village Essence
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 items-center justify-center">
          {/* Render Sections */}
          <Section
            heading="Our Culture"
            image={img1}
            description="Manaooru's vibrant traditions come alive through folk dances, harvest festivals, and age-old rituals that bind our community across generations, preserving our unique heritage."
          />
          <Section
            heading="Our People"
            image={img2}
            description="Warm and resilient, Manaooru's residents embody the spirit of rural India - farmers waking with the sun, artisans crafting with ancestral skills, and families rooted in community values."
          />
          <Section
            heading="Our Land"
            image={img3}
            description="Fertile black soil nurtured by monsoon rains yields abundant harvests of rice, sugarcane, and jowar, forming the agricultural heartbeat of our village life and traditions."
          />
        </div>
      </div>
    </>
  );
}

export default About;
