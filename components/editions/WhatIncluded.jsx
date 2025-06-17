import React, { useState, useEffect } from "react";
import { getWhatsIncludedImage } from "../common/Helper";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
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

const WhatIncluded = ({ d, items, location }) => {
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [isFormSuccess, setIsFormSuccess] = useState(false);
  const [showPdfButton, setShowPdfButton] = useState(false);

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
    if (formSubmitted) {
      const timer = setTimeout(() => {
        setShowForm(false);
        setFormSubmitted(false);
        setIsFormSuccess(false);
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [formSubmitted]);

  return (
    <div className="bg-[#FFDA7F]">
      <div className="xl:px-0 sm:px-4 sm:pt-4 pb-8 mx-auto max-w-[950px] w-full flex max-md:flex-col gap-4 md:gap-6 lg:gap-9 xl:gap-[76px]">
        <div className="sm:max-w-[457px] max-sm:bg-[#F4F1E6] flex flex-col justify-between w-full mx-auto pt-0 sm:pt-0">
          <div className="sm:mb-0 mb-5 text-[#313131] text-center font-Montserrat text-lg md:text-xl font-normal !leading-5 pt-0 py-0 px-4">
            {documentToReactComponents(d, {
              renderNode: {
                [BLOCKS.PARAGRAPH]: (node, children) => (
                  <div className="m-0">{children}</div>
                ),
              },
            })}
          </div>

          <div className="flex flex-col gap-2 justify-center pl-[42px] max-sm:hidden">
            <button
              type="button"
              className="md:max-w-[370px] max-w-[250px] w-full py-2 md:py-4 rounded-full bg-[#FC5B67] border-[2px] border-[#FC5B67] hover:bg-transparent transition duration-300 ease-in-out text-[#F7F7F7] font-Montserrat lg:text-[32px] md:text-2xl text-base font-extrabold leading-normal hover:text-[#FC5B67]"
              onClick={() => {
                setShowForm(true);
                setIsIframeLoading(true);
                setIsFormSuccess(false);
              }}
            >
              GET STARTED
            </button>

            {!showForm && showPdfButton && (
              <button
                type="button"
                className="md:max-w-[370px] max-w-[250px] w-full py-2 md:py-4 rounded-full bg-[#FF9500] border-[2px] border-[#FF9500] hover:bg-transparent transition duration-300 ease-in-out text-[#F7F7F7] font-Montserrat lg:text-[32px] md:text-2xl text-base font-extrabold leading-normal hover:text-[#FC5B67]"
                onClick={() => {
                  setShowForm(true);
                  setIsIframeLoading(true);
                  setIsFormSuccess(false);
                }}
              >
                FREE LOCATION PDF
              </button>
            )}
          </div>

          {showForm && (
            <div className="bg-[#F7F7F7] p-8 rounded-3xl shadow-md w-full max-w-[500px] mt-4 mx-auto relative min-h-[220px]">
              {isIframeLoading && (
                <div className="absolute inset-0 flex justify-center items-center bg-white rounded-3xl z-10">
                  <div className="w-12 h-12 border-4 border-[#FC5B67] border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <iframe
                src="https://link.jbenquet.com/widget/form/5DhwvsBVdiF5zlwzXGtS"
                style={{
                  width: "100%",
                  height: isFormSuccess ? "200px" : "519px",
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
                data-height="519"
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
          )}
        </div>

        <div className="w-full sm:max-w-[417px] mx-auto sm:px-0 px-4">
          <h1 className="text-[#313131] font-Montserrat text-2xl sm:text-[32px] font-extrabold leading-normal max-md:text-center">
            What's included
          </h1>
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
                  alt={item.title}
                  className={`max-sm:w-12 max-sm:h-12 rounded-full ${getStylesWhatsIncludedImage(item?.title)}`}
                />
                <div className="flex-col justify-center align-middle items-middle">
                  <p className="text-[#313131] h-5 font-Montserrat text-[10px] sm:text-sm md:text-base font-bold leading-normal">
                    {item.title}
                  </p>
                  <div className="flex flex-wrap gap-x-1 pr-2">
                    <p className="text-[#313131] font-Montserrat text-[8px] sm:text-sm font-normal h-4">
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
  );
};

export default WhatIncluded;
