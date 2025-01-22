import backgroundImage from "../assets/restnt.jpg"; // Import the new background image
import Footer from "./constant/Footer";
import Nav from "./constant/Nav";
import ContactUs from "./ContactUs";
import Counting from "./Counting";
import MotionClientList from "./MotionClientList";
import StorySection from "./StorySection";

const Hero = () => {
  return (
    <>
      <Nav />
      <div className="relative h-screen w-full flex items-center justify-center text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>

        {/* Overlay for Contrast */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Text Content */}
        <div className="relative z-10 text-center px-5 sm:px-20">
          {/* Company Name */}
          <h1 className="font-satisfy text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8">
            Creativity Hospitality and Cleaning Services
          </h1>

          {/* Slogan */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6">
            Enhancing spaces with creativity, care, and cleanliness.
          </h2>
        </div>
      </div>
      <StorySection />
      <MotionClientList />
      <Counting ></Counting>
      <ContactUs />
      <Footer />
  
    </>
  );
};

export default Hero;
