import classNames from "classnames";
import React from "react";

const Teamhero = ({ text, btn }) => {
  return (
    <div
      className={classNames(
        `bg-[url('/img/background-powered-by-noma.jpg')] bg-no-repeat bg-cover bg-center h-[450px] sm:h-[800px] flex flex-col justify-center items-center md:px-0 px-4`
      )}
    >
      <img
        src="/img/powered-noma.png"
        width={550}
        height={550}
        className="w-[300px] h-[100px] sm:w-[480px] sm:h-[150px]"
      ></img>
      <p className="text-center text-base md:text-2xl text-[#F4F1E6] max-w-[735px] w-full mx-auto font-Montserrat font-bold leading-normal md:my-9">
        {text}
      </p>
      <div className="flex justify-center ">
        <a
          href="mailto:info@noma-collective.com"
          className="bg-romance text-[#000000] border border-[romance] text-sm md:text-base font-extrabold leading-normal font-Montserrat sm:px-8 px-4 py-[9px] sm:py-4 rounded-[28px] w-fit mx-auto mt-4 hover:bg-transparent  duration-700"
        >
          {btn}
        </a>
      </div>
    </div>
  );
};

export default Teamhero;
