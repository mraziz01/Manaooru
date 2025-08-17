import backgroundImage from "../assets/field.jpg"; // Import the new background image
import About from "./About";
import Footer from "./constant/Footer";
import Nav from "./constant/Nav"; 
import StorySection from "./StorySection";
import HtlyServices from "./HtlyServices";

const Hero = () => {
  return (
    <>
      <Nav />
      <div id="/" className="relative h-screen w-full flex items-center justify-center text-white">
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
            మన ఊరు - Manaooru
          </h1>

          {/* Slogan */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6">
           Village where traditions thrive and nature comes alive
          </h2>
        </div>
      </div>
      <StorySection />
      <About />
      <HtlyServices />
      <Footer />
  
    </>
  );
};

export default Hero;
