import React from "react";
import storyImage from "../assets/story.jpg"; // Import the image

const StorySection = () => {
  return (
    <div id="our-story" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h2 className="font-satisfy text-3xl md:text-4xl font-bold text-gray-800 mb-11">
            Our Story
          </h2>
          <p className="text-lg text-gray-600">
            It all started while I was visiting my sister upon her childbirth & I noticed a service company managing her hospital room for guest hospitality service. I went exploring the idea in a deeper way & I started with 9 employees back in 2009. I found hard time initiating the first contract.
            <br />
            <br />
            I offered my employees free of charge to Ritz Carlton for training then the 5 stars Hotel became my first customer, i.e. I managed to pull demand for my services offered.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={storyImage}
            alt="Our Story"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default StorySection;
