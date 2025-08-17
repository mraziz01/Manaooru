import React from 'react';
import { motion } from "framer-motion";
import img2 from "../assets/farming.jpg";
import VillageTraditions from './VillageTraditions';

export default function HtlyServices() {
  return (
    <>
      <div id='Services' className="bg-white min-h-screen p-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="font-satisfy text-4xl font-bold text-gray-800">Manaooru Village</h1>
            <p className="text-lg text-gray-600 mt-2">Heart of Rural Traditions</p>
          </header>

          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Cultural Heritage</h2>
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
                <h3 className="text-xl font-semibold mb-4">Living Traditions</h3>
                <p>
                  Our village preserves folk dances, harvest festivals, and ancient rituals that connect generations. Artisans practice ancestral crafts while farmers maintain traditional cultivation methods passed down through centuries. These living traditions form the heartbeat of our community, celebrated in daily life and seasonal ceremonies.
                </p>
                <p className="mt-4">
                  From the rhythmic movements of our folk dancers to the sacred rituals performed during harvest season, each tradition tells the story of our land and people. Elders pass down oral histories around evening bonfires, ensuring our heritage remains vibrant for future generations.
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
       <VillageTraditions />
    </>
  );
}
