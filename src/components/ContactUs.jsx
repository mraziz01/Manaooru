import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import ab1 from "../assets/ab1.jpg";
import ab2 from "../assets/ab2.jpg";
import ab3 from "../assets/ab3.jpg";

const ContactUs = () => {
  return (
    <div id="contact-us">
      {/* text */}
      <div className="text-center pt-10 pb-10 space-y-5 p-5 sm:max-w-[520px] sm:m-auto ">
        <h2 className="font-satisfy text-3xl md:text-4xl font-bold text-gray-800">CONTACT US</h2>
        <p>
        For more information about our services or to request a customized quote, please contact us
        </p>
      </div>

      {/* icon and img */}
      <div className="m-0 md:grid md:grid-cols-3 md:max-w-full md:m-auto">

        {/* Contact Email */}
        <div className="w-[100%] h-[100%]">
          <img className="w-[100%] h-[100%]" src={ab1} alt="Contact" />
        </div>

        <div className="bg-custom-bg text-white text-center space-y-2 p-5 lg:pt-[20%]">
          <div className="h-12 w-12  text-center text-4xl p-0.5 m-auto ">
            <a href="mailto:creativityservicesforcleaning@gmail.com">
              <IoIosMail />
            </a>
          </div>
          <h2 className="font-bold text-[#c0c0c0]">CONTACT US</h2>
          <div>
            <a href="mailto:creativityservicesforcleaning@gmail.com">
              creativityservicesforcleaning@gmail.com
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="w-[100%] h-[100%]">
          <img className="w-[100%] h-[100%]" src={ab3} alt="Location" />
        </div>

        <div className="bg-custom-bg text-white text-center space-y-2 p-5 lg:pt-[20%]">
          <div className="h-12 w-12 text-center text-4xl p-0.5 m-auto ">
            <a href="https://www.google.com/maps?q=Doha,+Qatar">
              <IoLocationSharp />
            </a>
          </div>
          <h2 className="font-bold text-[#c0c0c0]">LOCATION</h2>
          <div>
            Doha, Qatar
          </div>
        </div>

        {/* Call Us */}
        <div className="w-[100%] h-[100%]">
          <img className="w-[100%] h-[100%]" src={ab2} alt="Phone" />
        </div>

        <div className="bg-custom-bg text-white text-center space-y-2 p-5 lg:pt-[10%]">
        <div className="h-12 w-12  text-center text-4xl p-0.5 m-auto ">
            <a href="tel:+97439926663">
              <FaPhoneAlt />
            </a>
          </div>
          <h2 className="font-bold text-[#c0c0c0]">CALL US</h2>
  <div className="space-y-2">
    <div>
      <p className="font-semibold">Almas Ahmed Mohammad</p>
      <a href="tel:+97439926663" className="">+974 3992 6663</a>
    </div>
    <div>
      <p className="font-semibold">Mohammed Iliyas</p>
      <a href="tel:+97477830398" className="">+974 7783 0398</a>
    </div>
    <div>
      <p className="font-semibold">Idrees Mohammed</p>
      <a href="tel:+97450476519" className="">+974 5047 6519</a>
    </div>
  </div>
</div>


      </div>
    </div>
  );
};

export default ContactUs;
