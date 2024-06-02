import React from "react";
import CommonSelector from "../common/CommonSelector";

const ConnectWithUs = () => {
  const data = [
    { id: 1, name: "Reason to getting in touch" },
    { id: 2, name: "Best opportunities" },
    { id: 3, name: "Best service" },
    { id: 4, name: "Option 4" },
    { id: 5, name: "Option 5" },
  ];
  return (
    <div className="text-center m-auto w-full bg-light-purple ">
      <div className="px-4 max-w-[1000px] m-auto py-3">
        <h4 className="py-4 pb-8 text-3xl font-bold font-Montserrat">
          Do you prefer personal assistance? Connect with us
        </h4>
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
          <input
            placeholder="First name"
            className="sm:max-w-[400px] w-full contact-input-style "
          />
          <input
            placeholder="Last name"
            className="sm:max-w-[400px] w-full contact-input-style "
          />
        </div>
        <div className="justify-center mt-2 sm:mt-3">
          <input
            placeholder="Email"
            className="m-auto max-w-[818px] w-full contact-input-style "
          />
        </div>
        <div className="max-w-[818px] mx-auto pt-2 sm:pt-3 pb-4">
          <CommonSelector list={data} />
        </div>

        <div className="flex flex-col sm:flex-row mt-4 justify-center gap-2">
          <button
            type="submit"
            className="p-2 w-full sm:max-w-[250px] h-[42px]  flex items-center justify-center bg-main-orange  rounded-[28px] text-white text-base font-bold font-Montserrat leading-normal hover:text-sweet-Watermelon hover:bg-transparent transition duration-300 ease-in-out  border border-main-orange hover:border-sweet-Watermelon"
            onClick={() =>
              window.open(
                "https://lp.noma-collective.com/schedule-your-meeting-page",
                "_blank"
              )
            }
          >
            SEND INQUIRY VIA EMAIL
          </button>
          <button
            type="submit"
            className="p-2 sm:max-w-[200px] h-[42px] w-full flex items-center justify-center bg-sweet-Watermelon rounded-[28px] text-white text-base font-bold font-Montserrat leading-normal hover:text-main-orange hover:bg-transparent transition duration-300 ease-in-out  border border-sweet-Watermelon hover:border-main-orange"
            onClick={() =>
              window.open(
                "https://lp.noma-collective.com/schedule-your-meeting-page",
                "_blank"
              )
            }
          >
            SCHEDULE A CALL
          </button>
        </div>

        <div className="text-gray-500 text-sm mt-4 pb-8 max-w-[900px] md:pl-[100px] text-center md:text-left ">
          Submitting this form means you opt in to receive communications from
          us and read about our latest updates. You can unsubscribe at any time.
        </div>
      </div>
    </div>
  );
};

export default ConnectWithUs;