import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-5 sm:px-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8 md:mb-0">
          <img src={logo} alt="logo" className="w-28 mb-2" />
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-end">
          <p className="text-lg font-semibold text-gray-600 mb-2">Follow Us</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-custom-sndclr transition text-2xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-500 hover:text-custom-sndclr transition text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-500 hover:text-custom-sndclr transition text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-500 hover:text-custom-sndclr transition text-2xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-custom-sndclr mt-8 pt-4 text-center">
        <p className="text-gray-600 text-sm">Creativity Hospitality and Cleaning Services © 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
