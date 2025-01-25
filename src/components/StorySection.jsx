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
          Established in 2013, creativity services for hospitality and cleaning has grown into a trusted provider of manpower and cleaning solutions in Doha, Qatar. Initially inspired by the need for reliable and professional services in the hospitality sector, we began with a small but passionate team.
<br />
From our humble beginnings, we focused on delivering exceptional staffing and cleaning services tailored to the unique needs of hotels, restaurants, offices, and homes. Our expertise spans from providing skilled waitstaff and chefs to comprehensive cleaning services, ensuring pristine spaces and smooth operations for our clients.
            <br />
            <br />
            At creativity services for hospitality and cleaning, we take pride in being a part of our clients’ success stories, delivering services that exceed expectations and set new benchmarks in the industry.
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
