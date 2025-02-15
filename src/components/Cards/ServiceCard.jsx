import React from "react";
import itManagementIcon from "../../assets/images/service-icon1.png";
import cyberSecurityIcon from "../../assets/images/service-icon2.png";
import webDevelopmentIcon from "../../assets/images/service-icon3.png";

// Array of data
const services = [
  {
    title: "IT Management",
    description:
      "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
    image: itManagementIcon,
  },
  {
    title: "Cyber Security",
    description:
      "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
    image: cyberSecurityIcon,
  },
  {
    title: "Web Development",
    description:
      "Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis ut euismod quis sapien.",
    image: webDevelopmentIcon,
  },
];

const ServiceCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 mt-8">
    {services.map((service, index) => (
      <div
        key={index}
        className="relative shadow-Cardshadow bg-white w-full p-10 transform transition-transform group overflow-hidden"
      >
        {/* Background circuit pattern */}
        <div className="absolute inset-0 left-48 top-5 z-0 bg-no-repeat bg-top bg-Card-item opacity-50 group-hover:opacity-0 transition-opacity duration-500"></div>
  
        {/* Hover Background Animation */}
        <div className="absolute inset-0 bg-gradient-custom transform scale-x-0 group-hover:scale-x-100 group-hover:bg-gradient-custom transition-all duration-700 ease-in-out origin-left"></div>
  
        {/* Image Section */}
        <div className="relative z-10 flex justify-center items-center h-16 w-16 bg-blue-50 group-hover:bg-white ">
          <img
            src={service.image}
            alt={service.title}
            className="object-contain"
          />
        </div>
  
        {/* Content Section */}
        <div className="relative z-10 mt-7">
          <h1 className="font-bold text-xl text-gray-800 group-hover:text-white transition-colors duration-500">
            {service.title}
          </h1>
          <p className="text-gray-500 mt-5 mb-3 group-hover:text-white transition-colors duration-500">
            {service.description}
          </p>
        </div>
      </div>
    ))}
  </div>
  
  );
};

export default ServiceCard;
