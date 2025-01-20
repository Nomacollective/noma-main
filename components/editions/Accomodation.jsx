import React from "react";
import AccomodationCard from "./AccomodationCard";
import { accomodationCardData } from "../common/Helper";
import NewsHeading from "./NewsHeading";
import NewsSubheading from "./NewsSubheading";

const Accomodation = ({ accomodation }) => {
  return (
    <div className="px-4 xl:px-0">
      <div className="w-full px-2.5 py-4 sm:pb-4 sm:pt-8 mx-auto">
        <NewsHeading heading="Accommodation" />
      </div>
      {/* <div className="max-w-[794px] w-full px-2.5 py-4 sm:pt-4 sm:pb-8 mx-auto">
        <NewsSubheading subheading="Short description about the hotel or houses or the place, no more than 3 lines, and not describing any amenities " />
      </div> */}
      <div className="flex flex-wrap items-start justify-center sm:gap-y-5 gap-x-6 lg:gap-x-12 xl:gap-x-[68px] max-w-[1120px] w-full mx-auto">
        {accomodation.map((item, index) => (
          <AccomodationCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Accomodation;
