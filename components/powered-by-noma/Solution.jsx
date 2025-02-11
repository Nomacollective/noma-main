"use client";
import React from "react";
import SolutionCards from "./SolutionCards";

const Solution = () => {
  return (
    <section>
      <div className='bg-cover bg-no-repeat bg-center mt-[-100px] bg-[url("/img/blue_mountains.png")] h-[14vh] w-full ' />

      <article className="w-full bg-[#ECECFD] pb-20">
        <article className="flex flex-col jsutify-center items-center w-full pt-[64px] pb-[64px]  px-2.5 sm:flex flex-col">
          <h2 className="text-center text-black font-sergio-trendy font-normal text-[24px] sm:text-[48px] capitalize mb-5">
            The Problem
          </h2>
          <p className="text-lg sm:text-2xl text-center font-bold text-[#313131] font-Montserrat mb-[40px]">
            Did you know it takes around{" "}
            <span className="text-main-red">80+ hours</span> on average to plan
            a retreat?
          </p>
          <p className="text-lg text-center w-[67%] mb-4">
            Many influencers and entrepreneurs struggle to find authentic ways
            to connect with their audience beyond the digital space. Organizing
            trips for groups of any size or{" "}
            <span className="font-bold">planning events</span> is
            time-consuming, and managing logistics can quickly become{" "}
            <span className="font-bold">overwhelming</span>.
          </p>
          <p className="text-lg text-center w-[67%] sm:w-full">
            Traditional event platforms lack flexibility, often leading to
            cookie-cutter experiences that don’t resonate with followers and
            fans.
          </p>
        </article>
        <article>
          {" "}
          <h2 className="text-center text-black font-sergio-trendy font-normal text-[24px] sm:text-[48px] capitalize sm:mb-5">
            The Solution
          </h2>
        </article>
        <div className="flex justify-center items-center">
          <SolutionCards />
        </div>
      </article>
    </section>
  );
};
export default Solution;
