import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import logo from "../../assets/Logo.png";

const Nav = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false); // State to track scroll position

  const handleClick = () => setClick(!click);

  // Handle scroll to toggle background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true); // Show background color on scroll
      } else {
        setScroll(false); // Make transparent when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-custom-bg transition">
      <ul className="text-center text-xl cursor-pointer">
        <Link
          to="About"
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => setClick(false)}
        >
          <li className="my-4 py-4 text-white hover:rounded cursor-pointer font-bold">Village Essence</li>
        </Link>
        <Link
          to="our-story"
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => setClick(false)}
        >
          <li className="my-4 py-4 text-white hover:rounded cursor-pointer font-bold">Our Village</li>
        </Link>
        
        <Link
          to="Services"
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => setClick(false)}
        >
          <li className="my-4 py-4 text-white hover:rounded cursor-pointer font-bold">Cultural Heritage</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-400 ${
        scroll ? "bg-custom-bg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center z-50 text-white lg:py-5 px-5 sm:px-20 py-4">
        <div className="flex items-center cursor-pointer">
         <Link className="font-satisfy text-2xl font-bold" to="/" smooth={true} duration={500} offset={-70}>మన ఊరు</Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 items-center justify-end font-normal">
          <ul className="flex gap-8 text-[18px] font-bold">
            <Link to="About" smooth={true} duration={500} offset={-70}>
              <li className="relative group cursor-pointer">
                Village Essence
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-custom-sndclr group-hover:w-full transition-all"></span>
              </li>
            </Link>
            <Link to="our-story" smooth={true} duration={500} offset={-70}>
              <li className="relative group cursor-pointer">
             Our Village
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-custom-sndclr group-hover:w-full transition-all"></span>
              </li>
            </Link>
           
            <Link to="Services" smooth={true} duration={500} offset={-70}>
              <li className="relative group cursor-pointer">
              Cultural Heritage
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-custom-sndclr group-hover:w-full transition-all"></span>
              </li>
            </Link>
            
          </ul>
        </div>

        <div className="lg:hidden">
          <button className="block text-3xl" onClick={handleClick}>
            {click ? <FaTimes /> : <CiMenuFries />}
          </button>
        </div>
      </div>

      {click && content}
    </nav>
  );
};

export default Nav;
