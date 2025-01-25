import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Section = ({ heading, description }) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center text-center md:text-left max-w-md">
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{heading}</h3>

      {/* Animated Line under Heading using Framer Motion */}
      <motion.div
        ref={ref} // Attach ref to the div
        className="h-[3px] bg-custom-sndclr mb-4"
        initial={{ width: 0 }}
        animate={{ width: isInView ? "90px" : 0 }} // Animate only when in view
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>

      <p className="text-gray-600">{description}</p>
    </div>
  );
};

function AboutUs() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 items-center justify-center">
        {/* Render Sections */}
        <Section
          heading="WHO WE ARE"
          description="Creative Hospitality and Cleaning Services is a leading provider committed to delivering exceptional services at affordable prices, backed by years of experience, dedication, and a passion for excellence."
        />
        <Section
          heading="DEDICATION"
          description="We are deeply committed to quality, with a focus on understanding and meeting the unique needs of each client, ensuring excellence and satisfaction at every service level, every time."
        />
        <Section
          heading="CUSTOMERS"
          description="Our customers are the foundation of our business. We prioritize customer satisfaction, offering tailored services to meet their needs, exceed expectations, and create lasting relationships built on trust."
        />
      </div>
    </div>
  );
}

export default AboutUs;
