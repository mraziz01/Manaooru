import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const clients = [
  "Arabesque Restaurant",
  "Burjal Hamam Restaurant",
  "Parseh Restaurant",
  "Vadakara Kasargod restaurant",
  "Churus cafe",
  "Philly cheesesteak",
  "Maza cafe",
  "Royal catering",
  "Calo catering",
  "Movenpick hotel",
  "Go and back cafe",
  "Bianca’s ice cream",
  "Republic bakery",
  "Bhajat restaurant",
];

const MarqueeItem = ({ items, from, to }) => {
  return (
    <div className="flex MyGradient">
      {/* First marquee line (left to right) */}
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="font-satisfy flex flex-shrink-0"
      >
        {items.map((item, index) => (
          <span className="text-gray-600 text-2xl font-semibold mx-10 mb-4" key={index}>
            {item}
          </span>
        ))}
      </motion.div>

      {/* Second marquee line (right to left) */}
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="font-satisfy flex flex-shrink-0"
      >
        {items.map((item, index) => (
          <span className="text-gray-600 text-2xl font-semibold mx-10 mt-4" key={index}>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const MotionClientList = () => {
  return (
    <div id="customers" className="overflow-hidden bg-gray-50">
    <h2 className="text-center text-2xl md:text-4xl font-satisfy font-bold text-gray-700 m-8">
      Our Customers
    </h2>

    {/* Container for Marquee */}
    <div className="w-full mx-auto py-5 ">
      {/* Upper Marquee Line (Left to Right) */}
      <MarqueeItem items={clients} from={0} to={"-100%"} />

      {/* Lower Marquee Line (Right to Left) */}
      <MarqueeItem items={clients} from={"-100%"} to={0} />
    </div>
  </div>
  );
};

export default MotionClientList;
