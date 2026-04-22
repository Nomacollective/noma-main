import React from "react";

const HeroImage = ({ bg, styles = {} }) => {
  return (
    <div className="max-sm:px-4">
      <div
        className={`w-full bg-center bg-cover h-[282px] sm:h-[582px] max-sm:mt-[7px] max-sm:rounded-lg`}
        style={{ backgroundImage: bg, ...styles }}
      ></div>
    </div>
  );
};

export default HeroImage;
