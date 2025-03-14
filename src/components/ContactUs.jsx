import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section id="contact-us" className="bg-white py-16">
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Get in Touch
          </h2>
          <p className="text-gray-600 md:text-lg max-w-xl mx-auto">
            Reach out to us for any inquiries or to schedule our premium cleaning services
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto p-4 bg-gray-50 rounded-xl border border-gray-200">
  <p className="text-gray-600 text-center md:text-left text-sm md:text-base flex-1">
    For instant assistance, message us directly on WhatsApp
  </p>
  
  {/* WhatsApp Button */}
  <a 
    href="https://wa.me/97450476519" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-sm hover:shadow-md"
    aria-label="Chat with us on WhatsApp"
  >
    <FaWhatsapp className="text-xl shrink-0" />
    <span className="font-semibold text-sm md:text-base">
      Chat Now
    </span>
  </a>
</div>
        {/* Contact Cards Grid */}
        <div className="mt-9 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FaEnvelope className="text-blue-600 text-xl" />
              </div>
              <div className="flex-1 min-w-0"> {/* Added min-w-0 for text truncation */}
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a
                  href="mailto:idrees@creativityservicesforhospitality.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm md:text-base break-words"
                >
                  Idrees@creativityservicesforhospitality.com
                </a>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Our Location</h3>
                <p className="text-gray-600 text-sm md:text-base">Doha, Qatar</p>
                <a
                  href="https://www.google.com/maps?q=Doha,+Qatar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 mt-2 inline-block text-sm md:text-base"
                >
                  View on Map
                </a>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FaPhoneAlt className="text-blue-600 text-xl" />
              </div>
              <div className="w-full">
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium text-gray-700 text-sm md:text-base">Almas Ahmed Mohammad</p>
                    <a href="tel:+97439926663" className="text-gray-600 hover:text-blue-600 text-sm md:text-base">
                      +974 3992 6663
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 text-sm md:text-base">Mohammed Iliyas</p>
                    <a href="tel:+97477830398" className="text-gray-600 hover:text-blue-600 text-sm md:text-base">
                      +974 7783 0398
                    </a>
                  </div>
                  <div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-700 text-sm md:text-base">Idrees Mohammed</p>
                        <a href="tel:+97450476519" className="text-gray-600 hover:text-blue-600 text-sm md:text-base">
                          +974 5047 6519
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;