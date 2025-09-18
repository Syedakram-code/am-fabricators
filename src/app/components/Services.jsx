import React from "react";

const services = [
  "Steel Doors",
  "Gates",
  "Grills",
  "Shutters",
  "Balcony Railings",
  "Channel Gates",
  "Shed Works",
];

const Services = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-6">
      {services.map((service, index) => (
        <button
          key={index}
          className="px-4 py-1 border rounded-full font-semibold hover-primary-bg-color"
        >
          {service}
        </button>
      ))}
    </div>
  );
};

export default Services;
