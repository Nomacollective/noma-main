import React from "react";

const Teamhero = ({ heading, text, btn }) => {
  return (
    <div
      className={
        "bg-[url('/img/teamretrates_img.png')] bg-no-repeat bg-cover bg-center h-[450px] sm:h-[800px] flex flex-col justify-center items-center md:px-0 px-4"
      }
    >
      <h1 className="text-center text-2xl sm:text-[48px] font-sergio-trendy font-normal text-[#F4F1E6] capitalize leading-normal xl:mt-[120px]">
        {heading}
      </h1>
      <p className="text-center text-base md:text-2xl text-[#F4F1E6] max-w-[735px] w-full mx-auto font-Montserrat font-bold leading-normal md:my-9">
        {text}
      </p>
      <div className="flex justify-center ">
        <button 
          onClick={() => window.open('https://link.jbenquet.com/widget/booking/IxjVdMfKgvhm2xSRSPBV', '_blank')} style={{ cursor: 'pointer' }}
          className="bg-[#FF9500] text-[#F7F7F7] border border-[#FF9500] text-sm md:text-base font-extrabold leading-normal font-Montserrat sm:px-8 px-4 py-[9px] sm:py-4 rounded-[28px] w-fit mx-auto mt-4 hover:bg-transparent  duration-700">
          {btn}
        </button>
      </div>
    </div>
  );
};

export default Teamhero;
