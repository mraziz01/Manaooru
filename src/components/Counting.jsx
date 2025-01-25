import React, { useEffect, useState } from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaSmile, FaUserAlt, FaStar } from "react-icons/fa";

const Counting = () => {
  const [meals, setMeals] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [ratings, setRatings] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleView = () => {
      const element = document.querySelector(".stat-item");
      if (element && !hasAnimated) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          const increment = (setter, target, interval) => {
            let count = 0;
            const timer = setInterval(() => {
              count += Math.ceil(target / 100);
              if (count >= target) {
                count = target;
                clearInterval(timer);
              }
              setter(count);
            }, interval);
          };

          increment(setMeals, 400, 20);
          increment(setCustomers, 150, 30);
          increment(setHappyCustomers, 200, 25);
          increment(setRatings, 50, 40);

          setHasAnimated(true);
        }
      }
    };

    handleView();

    window.addEventListener("scroll", handleView);
    return () => {
      window.removeEventListener("scroll", handleView);
    };
  }, [hasAnimated]);

  const stats = [
    {
      icon: <GiForkKnifeSpoon className="text-white text-5xl" />,
      value: meals,
      label: "Meals Delivered",
      border: "border-0 border-b-8 border-b-custom-sndclr",
    },
    {
      icon: <FaSmile className="text-white text-5xl" />,
      value: happyCustomers,
      label: "Happy Customers",
      border: "border-0 border-b-8 border-b-custom-sndclr",
    },
    {
      icon: <FaUserAlt className="text-white text-5xl" />,
      value: customers,
      label: "client's",
      border: "border-0 border-b-8 border-b-custom-sndclr",
    },
    {
      icon: <FaStar className="text-white text-5xl" />,
      value: ratings,
      label: "5-Star Ratings",
      border: "border-0 border-b-8 border-b-custom-sndclr",
    },
  ];

  return (
    <div className="p-6 flex items-center justify-center bg-gray-50">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`stat-item flex flex-col items-center justify-around w-40 h-40 sm:w-56 sm:h-56 bg-custom-bg rounded-md border border-gray-100 shadow-md relative ${stat.border}`}
          >
            {stat.icon}
            <span
              className="num text-white font-bold text-5xl flex items-center justify-center"
            >
              {stat.value}
            </span>
            <span className="text-gray-300 text-base font-medium text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counting;
