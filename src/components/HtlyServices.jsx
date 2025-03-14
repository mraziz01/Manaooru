import React from 'react';
import { motion } from "framer-motion";
import img2 from "../assets/2.webp";
import HospitalityService from './HospitalityService';

export default function HtlyServices() {
  return (
    <>
      <div id='Services' className="bg-white min-h-screen p-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="font-satisfy text-4xl font-bold text-gray-800">Creativity Services</h1>
            <p className="text-lg text-gray-600 mt-2">For Hospitality and Cleaning</p>
          </header>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Hospitality Services</h2>
            <motion.div
              className="h-[3px] bg-custom-sndclr mb-6"
              initial={{ width: 0 }}
              animate={{ width: "90px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            ></motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-10">
              <motion.img 
                src={img2} 
                alt="Hospitality Service" 
                className="rounded-2xl shadow-lg w-3/4 mx-auto"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.5 }}
              />
              <motion.div 
                className="text-gray-700"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-4">Staffing Solutions</h3>
                <p>
                  We provide waitstaff and cashiers to ensure smooth service, baristas and bartenders to craft memorable beverages, and cooks and chefs to meet your culinary needs. Our housekeeping supervisors ensure cleanliness and guest satisfaction, while kitchen admins and stewards maintain kitchen operations efficiently. We ensure your hospitality business is staffed with professionals delivering exceptional service.
                </p>
                <p className="mt-4">
                  Additionally, our tailored staffing solutions are designed to meet specific client needs, whether it's for a busy restaurant, an exclusive event, or long-term support for hotels and offices.
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
      <HospitalityService />
    </>
  );
}
