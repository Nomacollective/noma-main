"use client";
import React from "react";
import Points from "./Points";

const WhatToExpect = () => {
  return (
    <section className="w-full bg-noma sm:px-4 pb-32 sm:pb-40">
      <article className="w-full sm:pt-[64px] pt-5 pb-2 px-2.5  sm:flex flex-col items-center ">
        <h2 className="text-center text-black font-sergio-trendy font-normal text-[24px] sm:text-[48px] capitalize">
          What to expect
        </h2>
        <p className="text-base sm:text-2xl text-center font-bold text-[#313131] font-Montserrat">
          We handle the logistics so you can focus on what you do best.
        </p>
      </article>
      <Points
        points={[
          "Lead unforgettable personalized experiences",
          "Further your bond with your audience",
          "Elevate your brand",
          "Unlock new revenue streams",
        ]}
      />
    </section>
  );
};
export default WhatToExpect;
