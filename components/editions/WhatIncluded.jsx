import React from "react";
import { getWhatsIncludedImage, IncludedCardData } from "../common/Helper";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
// import { FaciltiesIcons } from "../common/Icons";
import Image from "next/image";

const getStylesWhatsIncludedImage = (title) => {
  if (
    title?.toLowerCase().includes("community") ||
    title?.toLowerCase().includes("adventure") ||
    title?.toLowerCase().includes("excursions") ||
    title?.toLowerCase().includes("airport") ||
    title?.toLowerCase().includes("inclusions")
  ) {
    return "p-1 rounded-full shadow-lg h-auto w-[42px]";
  }

  return "";
};

const WhatIncluded = ({ d, items }) => {
  return (
    <>
      <div className="bg-[#FFDA7F]">
        <div className="xl:px-0 sm:px-4 sm:pt-4 pb-8 mx-auto max-w-[950px] w-full flex max-md:flex-col gap-4 md:gap-6 lg:gap-9 xl:gap-[76px]">
          <div className="sm:max-w-[457px] max-sm:bg-[#F4F1E6] flex flex-col justify-between w-full mx-auto pt-4 sm:pt-8">
            <div className="sm:mb-0 mb-5 text-[#313131] text-center font-Montserrat text-lg md:text-xl font-normal !leading-5 pt-4 py-2 px-4">
              {/* <p className="text-[#313131] text-center font-Montserrat text-sm md:text-base font-normal !leading-5 "> */}
              {/* Our explosive Edition in Antigua, Guatemala, has you
                experiencing everything this hidden beauty has to offer. From
                the sacred Lake Atitlan to hiking the unbelievable Volcan
                Acatenango to discovering hidden bars and artisan markets, every
                moment is an opportunity for exploration.{" "} */}
              {documentToReactComponents(d, {
                renderNode: {
                  [BLOCKS.PARAGRAPH]: (node, children) => {
                    return (
                      <>
                        <p>{children}</p>
                        <br />
                      </>
                    );
                  },
                },
              })}
              {/* </p> */}
              {/* <p className="text-[#313131] text-center font-Montserrat text-sm md:text-base font-normal !leading-5 pt-4">
                Antigua's rich volcanic soils produce some of the best quality
                coffee in the world, perfect for coffee enthusiasts. Whether
                you're an adventurous wanderer or a more chilled-out traveler,
                Antigua has it all, boasting colorful Baroque architecture,
                tasty cuisine, cobbled streets to explore, opportunities to
                refine your Spanish skills at a language school and vibrant
                nightlife.
              </p> */}
            </div>
            <div className="flex justify-center max-sm:hidden">
              <button
                type="submit"
                className="md:max-w-[370px] max-w-[250px] mb-5 w-full py-2 md:py-4 mt-4  rounded-full bg-[#FC5B67] border-[2px] border-[#FC5B67] hover:bg-transparent transition duration-300 ease-in-out  text-[#F7F7F7] font-Montserrat lg:text-[32px] md:text-2xl text-base  font-extrabold leading-normal hover:text-[#FC5B67] "
                onClick={() =>
                  window.open(
                    "https://lp.noma-collective.com/schedule-your-meeting-page",
                    "_self"
                  )
                }
              >
                GET STARTED
              </button>
            </div>
          </div>
          <div className="w-full sm:max-w-[417px] mx-auto sm:px-0 px-4 ">
            <h1 className="text-[#313131] font-Montserrat text-2xl sm:text-[32px] font-extrabold leading-normal max-md:text-center">
              What's included
            </h1>
            {/* <div className="flex items-center m-auto pt-5"> */}
            {/* <FaciltiesIcons /> */}
            {/* <p className="text-[#313131] font-Montserrat text-base font-extrabold ">
                Facilities and Amenities
              </p> */}
            {/* </div> */}
            <div className="flex flex-col gap-4 sm:gap-5 mt-2 sm:mt-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="max-w-[417px] w-full mx-auto rounded-[70px] bg-[#F4F1E6] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] flex items-center gap-1 h-[60px]"
                >
                  <Image
                    src={getWhatsIncludedImage(item?.title)}
                    width={56}
                    height={56}
                    alt="img"
                    className={`max-sm:w-12 max-sm:h-12 rounded-full ${getStylesWhatsIncludedImage(
                      item?.title
                    )}`}
                  />
                  <div className="flex-col justify-center align-middle items-middle">
                    <p className="text-[#313131] h-5 font-Montserrat text-[10px] sm:text-sm md:text-base font-bold leading-normal">
                      {item.title}
                    </p>
                    <div className="flex flex-wrap gap-x-1 pr-2">
                      <p className="text-[#313131] font-Montserrat text-[8px] sm:text-sm  font-normal h-4">
                        {item.description}
                      </p>
                      <p className="text-[#ADADAD] font-Montserrat text-[8px] font-normal h-6">
                        {item.description1}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIncluded;
