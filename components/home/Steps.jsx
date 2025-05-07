import React from "react";
import { stepsCardData } from "../common/Helper";
import CommonCard from "../common/CommonCard";

const Steps = () => {
  return (
    <div className="w-full h-full bg-pastel-yellow flex flex-wrap items-center justify-center gapx-x-4 md:gap-x-10 xl:gap-14">
      {stepsCardData.map((item, index) => (
        <CommonCard item={item} key={index} />
      ))}
    </div>
  );
};

export default Steps;
