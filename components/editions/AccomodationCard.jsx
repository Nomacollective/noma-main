import React from "react";
import Image from "next/image";
import AccomodationCardBtns from "./AccomodationCardBtns";

const AccomodationCard = ({ item }) => {
  console.log({ item });
  return (
    <div className="mx-auto w-[328px] cursor-pointer hover:scale-[1.02] transition duration-300 ease-in-out flex flex-col gap-2 max-sm:px-2 max-sm:py-4">
      <div className="flex gap-2">
        <AccomodationCardBtns item={{ button: item?.spotsLeft + ' Spots left' }} value={0} />
      </div>
      <Image
        src={item.imagesCollection.items[0]?.url}
        width={328}
        height={328}
        alt="img"
        className="rounded-2xl w-[328px] h-[328px]"
      />
      <h1 className="text-[#313131] font-Montserrat text-xl sm:text-[24px] font-extrabold leading-normal">
        {item.title}
      </h1>
      <p className="text-[#313131] font-Montserrat text-sm sm:text-sm font-normal leading-normal min-h-[100px]">
        {item.description}
      </p>
      <div className="bg-[#ADADAD] w-full h-px"></div>
      <div className="flex items-center justify-between gap-2 5">
        <p className="text-[#313131] text-sm sm:text-base font-Montserrat font-bold leading-normal max-sm:order-2">
         From ${item.price}
        </p>
        <button
          type="submit"
          className="w-[153px] sm:w-[183px] h-[33px] bg-[#ff9500] rounded-2xl text-[#F4F1E6] text-center font-Montserrat text-sm sm:text-base font-extrabold leading-normal hover:text-[#ff9500] border border-[#ff9500] hover:bg-transparent transition duration-300 ease-in-out  max-sm:order-1"
          onClick={() =>
            window.open(
              "https://lp.noma-collective.com/schedule-your-meeting-page",
              "_blank"
            )
          }
        >
          BOOK YOUR TRIP
        </button>
      </div>
    </div>
  );
};

export default AccomodationCard;
