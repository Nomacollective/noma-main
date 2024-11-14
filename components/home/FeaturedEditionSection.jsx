import React from "react";
import Heading from "../common/Heading";
import FeaturedEditionSectionSlider from "./FeaturedEditionSectionSlider";
import Button from "../common/CommonButton";

const FeaturedEditionSection = ({ locations }) => {
  return (
    <div className="w-full px-4 pb-8">
      <div className="w-full py-6 sm:py-8 px-1 sm:px-2.5">
        <div className="">
          <Heading heading="Featured" />
        </div>
      </div>
      <FeaturedEditionSectionSlider locations={locations} />
      <div className="block">
        <Button text="SEE ALL TRIPS" link="/location" />
      </div>
    </div>
  );
};

export default FeaturedEditionSection;
