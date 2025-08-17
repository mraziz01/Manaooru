import React from "react";
import storyImage from "../assets/farmer-gt2.jpg"; // Import the image

const StorySection = () => {
  return (
    <div id="our-story" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h2 className="font-satisfy text-3xl md:text-4xl font-bold text-gray-800 mb-11">
            Our Village Heritage
          </h2>
          <p className="text-lg text-gray-600">
           Nestled amidst fertile fields and flowing rivers, Manaooru has been a cradle of rural life for centuries. Our village traces its roots back to ancient farming communities that first settled these lands, drawn by the rich black soil and abundant water sources.
            <br />
            <br />
            Generations of farmers have tended these fields, developing unique cultivation techniques passed down through oral traditions. The rhythm of village life flows with the seasons - from the vibrant hues of sowing festivals to the golden celebrations of harvest.
            <br />
            <br />
            At night, our village transforms under starlit skies. Fishermen set out on moonlit waters while elders share folklore around crackling bonfires. This harmony between land, water, and community defines the soul of Manaooru.
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
