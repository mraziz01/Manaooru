import React from 'react';
import { motion } from "framer-motion";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import CleaningServic from './CleaningServic';
import HospitalityService from './HospitalityService';

export default function Services() {
  return (
    <>
      <div id='Services' className="bg-white min-h-screen p-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Cleaning Services</h2>
            <motion.div
              className="h-[3px] bg-custom-sndclr mb-6"
              initial={{ width: 0 }}
              animate={{ width: "90px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            ></motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <motion.div 
                className="text-gray-700 order-2 md:order-1"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-4">Comprehensive Cleaning</h3>
                <p>
                  Our services include residential cleaning with deep cleaning, routine housekeeping, and move-in/out cleaning. We also offer commercial cleaning for offices, retail spaces, and post-construction sites. Hospitality cleaning covers hotels, restaurants, and public areas. Additionally, we specialize in event cleaning, eco-friendly solutions, and emergency cleaning services. From homes to hotels, we provide thorough cleaning services tailored to your needs.
                </p>
                <p className="mt-4">
                  Our commitment to quality ensures that every cleaning project, big or small, is completed with precision and care, leaving your spaces spotless and inviting.
                </p>
              </motion.div>
              <motion.img 
                src={img1} 
                alt="Cleaning Service" 
                className="rounded-2xl shadow-lg w-3/4 mx-auto order-1 md:order-2"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.5 }}
              />
            </div>
          </section>
        </div>
      </div>
      <CleaningServic />
    </>
  );
}
