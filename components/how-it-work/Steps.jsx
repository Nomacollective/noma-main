import React from "react";
import CommonCard from "../common/CommonCard";
import { stepsCardData } from "../common/Helper";

const Steps = () => {
  return (
    <div className="w-full h-full bg-pastel-yellow pb-8 lg:pb-0 flex flex-wrap items-center justify-center gap-4 md:gap-10 xl:gap-14 pt-4">
      {stepsCardData.map((item, index) => (
        <CommonCard item={item} key={index} />
      ))}
    </div>
  );
};

export default Steps;
