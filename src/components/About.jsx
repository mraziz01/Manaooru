import React, { useEffect, useState } from "react";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";

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
          About Us
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 items-center justify-center">
          {/* Render Sections */}
          <Section
            heading="Our Aspiration"
            image={img1}
            description="To establish ourselves as the premier provider of hospitality and
            cleaning services in Qatar, setting benchmarks for excellence,
            innovation, and pristine standards."
          />
          <Section
            heading="Our Purpose"
            image={img2}
            description="To elevate hospitality and cleaning standards to their highest
            potential, ensuring we exceed the expectations of all our
            stakeholders."
          />
          <Section
            heading="Our Principles"
            image={img3}
            description="From the beginning of our journey in the hospitality and cleaning
            sectors, our principles have guided our commitment to delivering
            unforgettable experiences, pristine spaces, and unparalleled
            service to our clients."
          />
        </div>
      </div>
    </>
  );
}

export default About;
