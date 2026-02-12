import React, { useState, useEffect } from "react";
import { getWhatsIncludedImage, renderOutdoorIcon } from "../common/Helper";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";

const getStylesWhatsIncludedImage = (title) => {
  if (title?.toLowerCase().includes("esim") || title?.toLowerCase().includes("sim")) {
    return "p-1 rounded-full shadow-lg h-auto w-[36px]";
  }
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

const WhatIncluded = ({ d, items, location }) => {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [isFormSuccess, setIsFormSuccess] = useState(false);
  const [showPdfButton, setShowPdfButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if this is Honduras/family edition location
  const isHondurasLocation = location?.heading?.toLowerCase()?.includes("honduras") || 
    location?.city?.toLowerCase()?.includes("honduras") ||
    location?.heading?.toLowerCase()?.includes("monserrat") ||
    location?.city?.toLowerCase()?.includes("monserrat");

  useEffect(() => {
    const fetchEditions = async () => {
      try {
        const allowedLocations = [
          "Buenos Aires",
          "Barcelona",
          "Belize",
          "Brazil",
          "Budapest",
          "Cape Town",
          "Costa Rica",
          "Guatemala",
          "Japan",
          "Kenya",
          "Lisbon",
          "London",
          "Marrakech",
          "Panama",
          "Peru",
          "Sri Lanka",
        ].map((loc) => loc.toLowerCase());

        const heading = location?.heading?.toLowerCase() || "";
        const isLocationAllowed = allowedLocations.some((loc) =>
          heading.includes(loc)
        );

        setShowPdfButton(isLocationAllowed);
      } catch (error) {
        console.error("Failed to check location:", error);
      }
    };

    fetchEditions();
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setShowForm(false);
        setFormSubmitted(false);
        setIsFormSuccess(false);
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  const renderIframe = (
    <div className="bg-[#F7F7F7] p-4 rounded-3xl shadow-md w-full max-w-[500px] mt-4 mx-auto relative min-h-[220px]">
      {isIframeLoading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white rounded-3xl z-10">
          <div className="w-12 h-12 border-4 border-[#FC5B67] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <iframe
        src="https://link.jbenquet.com/widget/form/5DhwvsBVdiF5zlwzXGtS"
        style={{
          width: "100%",
          height: isFormSuccess ? "260px" : "575px",
          border: "none",
          borderRadius: "36px",
          display: isIframeLoading ? "none" : "block",
          transition: "height 0.3s ease-in-out",
        }}
        id="inline-5DhwvsBVdiF5zlwzXGtS"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Download PDF"
        data-height="575"
        data-layout-iframe-id="inline-5DhwvsBVdiF5zlwzXGtS"
        data-form-id="5DhwvsBVdiF5zlwzXGtS"
        title="Download PDF"
        onLoad={() => {
          if (formSubmitted) {
            setIsFormSuccess(true);
          } else {
            setFormSubmitted(true);
          }
          setIsIframeLoading(false);
        }}
      ></iframe>
      <script src="https://link.jbenquet.com/js/form_embed.js"></script>
    </div>
  );

  return (
    <div className="bg-[#FFDA7F] max-sm:mx-0 max-sm:px-0 max-sm:w-full">
      <div className="xl:px-0 sm:px-4 sm:pt-4 pb-8 mx-auto max-w-[950px] w-full flex max-md:flex-col gap-4 md:gap-6 lg:gap-9 xl:gap-[76px] max-sm:px-2 max-sm:gap-4 max-sm:flex-col max-sm:w-full max-sm:max-w-none">
        <div className="sm:max-w-[457px] max-sm:bg-[#F4F1E6] max-sm:w-full flex flex-col justify-between w-full pt-0 sm:pt-0 max-sm:px-2 max-sm:py-4">
          <div className="sm:mb-0 mb-3 text-[#313131] text-center font-Montserrat text-lg md:text-xl font-normal !leading-5 pt-0 py-0 px-4 max-sm:px-2 max-sm:text-sm max-sm:leading-4 max-sm:mb-2">
            {documentToReactComponents(d, {
              renderNode: {
                [BLOCKS.PARAGRAPH]: (_, children) => (
                  <div className="m-0">{children}</div>
                ),
              },
            })}
          </div>

          <div className="flex flex-col justify-center items-center gap-2 pl-[42px] max-sm:pl-0 max-sm:px-2">
            <button
              type="button"
              className="md:max-w-[370px] max-w-[250px] w-full py-2 md:py-4 rounded-full bg-[#FC5B67] border-[2px] border-[#FC5B67] hover:bg-transparent transition duration-300 ease-in-out text-[#F7F7F7] font-Montserrat lg:text-[32px] md:text-2xl text-base font-extrabold leading-normal hover:text-[#FC5B67] max-sm:text-xs max-sm:py-2 max-sm:max-w-[180px]"
              onClick={() =>
                window.open(
                  isHondurasLocation 
                    ? "https://noma-family-edition.carrd.co/"
                    : "https://lp.noma-collective.com/schedule-your-meeting-page",
                  isHondurasLocation ? "_blank" : "_self"
                )
              }
            >
              {isHondurasLocation ? "APPLY NOW" : "GET STARTED"}
            </button>

            {!showForm && showPdfButton && (
              <button
                type="button"
                className="md:max-w-[402px] max-w-[250px] w-full px-6 py-2 md:py-4 rounded-full bg-[#FF9500] border-[2px] border-[#FF9500] hover:bg-transparent transition duration-300 ease-in-out text-[#F7F7F7] font-Montserrat lg:text-[32px] md:text-2xl text-base font-extrabold leading-normal hover:text-[#FC5B67] whitespace-nowrap max-sm:text-xs max-sm:py-2 max-sm:max-w-[180px] max-sm:px-2"
                onClick={() => {
                  setShowForm(true);
                  setIsIframeLoading(true);
                  setIsFormSuccess(false);
                }}
              >
                FREE LOCATION PDF
              </button>
            )}

            {showForm && !isMobile && renderIframe}
          </div>
        </div>

        <div className="w-full sm:max-w-[417px] sm:mx-auto max-sm:mx-0 sm:px-0 px-4 max-sm:px-0 max-sm:w-full max-sm:bg-[#FFDA7F] max-sm:py-4">
          <h1 className="text-[#313131] font-Montserrat text-xl sm:text-2xl font-extrabold leading-normal max-md:text-center max-sm:text-lg">
            What's included
          </h1>
          <div className="flex flex-col gap-2 sm:gap-3 mt-2 sm:mt-3 pb-[20px] max-sm:w-full max-sm:px-1">
            {items.map((item, index) => (
              <div
                key={index}
                className="max-w-[380px] w-full mx-auto rounded-[50px] bg-[#F4F1E6] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] flex items-center gap-1 h-[50px]"
              >
                {/* Conditional icon rendering for Honduras specifically */}
                {((location?.heading?.toLowerCase().includes('honduras') || 
                   location?.city?.toLowerCase().includes('honduras') ||
                   location?.heading?.toLowerCase().includes('monserrat') ||
                   location?.city?.toLowerCase().includes('monserrat')) && 
                  !getWhatsIncludedImage(item?.title, location?.heading).includes('.png')) ? (
                  // Check if item should have white circle or not
                  (item?.title?.toLowerCase().includes("airport") || 
                   item?.title?.toLowerCase().includes("transfer") ||
                   item?.title?.toLowerCase().includes("community") ||
                   item?.title?.toLowerCase().includes("manager") ||
                   item?.title?.toLowerCase().includes("onsite") ||
                   item?.title?.toLowerCase().includes("bar") ||
                   item?.title?.toLowerCase().includes("restaurant") ||
                   item?.title?.toLowerCase().includes("beach") ||
                   item?.title?.toLowerCase().includes("pool") ||
                   item?.title?.toLowerCase().includes("infinity")) ? (
                    // No white circle for these items
                    <div className="w-11 h-11 max-sm:w-10 max-sm:h-10 flex items-center justify-center ml-1">
                      {renderOutdoorIcon(getWhatsIncludedImage(item?.title, location?.heading))}
                    </div>
                  ) : (
                    // White circle for other SVG items
                    <div className="w-11 h-11 max-sm:w-10 max-sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center ml-1">
                      {renderOutdoorIcon(getWhatsIncludedImage(item?.title, location?.heading))}
                    </div>
                  )
                ) : (
                  <Image
                    src={getWhatsIncludedImage(item?.title, location?.heading)}
                    width={44}
                    height={44}
                    alt={item.title}
                    className={`max-sm:w-10 max-sm:h-10 rounded-full ${getStylesWhatsIncludedImage(item?.title)}`}
                  />
                )}
                <div className="flex-col justify-center align-middle items-middle">
                  <p className="text-[#313131] h-4 font-Montserrat text-[9px] sm:text-xs md:text-sm font-bold leading-normal">
                    {item.title}
                  </p>
                  <div className="flex flex-wrap gap-x-1 pr-2">
                    <p className="text-[#313131] font-Montserrat text-[7px] sm:text-xs font-normal h-3">
                      {item.description}
                    </p>
                    <p className="text-[#ADADAD] font-Montserrat text-[7px] font-normal h-4">
                      {item.description1}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile buttons removed - only desktop buttons in yellow section */}
        </div>
      </div>
    </div>
  );
};

export default WhatIncluded;
