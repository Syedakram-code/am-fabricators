import React from "react";

const logos = [
  "/images/Forbes-Marshall.png",
  "/images/K_Raheja.png",
  "/images/Vasavi-groups.png",
];

const Clients = () => {
  return (
    <section className="relative flex align-center flex-col mt-16 py-10 overflow-hidden">
      <h2 className="text-xl font-bold text-center mb-8">
        Our Trusted Partners & Clients
      </h2>



      <div className="relative marquee-viewport lg:w-[50%] self-center" style={{ height: 96 }}>
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-black/50 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-black/50 to-transparent z-10"></div>
        <div className="marquee-track">
          {[...logos, ...logos].map((l, i) => (
            <div
              key={i}
              style={{
                minWidth: 150,
                padding: "0 24px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={l}
                style={{ height: 80, objectFit: "contain" }}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
