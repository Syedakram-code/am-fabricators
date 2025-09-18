import React from "react";

const BackgroundImage = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/BG_WELD.jpg')",
        }}
      ></div>

      <div className="absolute top-0 left-0 w-full h-full bg-black/75"></div>
    </div>
  );
};

export default BackgroundImage;
