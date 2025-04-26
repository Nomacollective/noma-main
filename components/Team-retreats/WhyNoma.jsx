import Image from "next/image";

const WhyNoma = () => {
  return (
    <article className="bg-[#FFDA7F] max-w-[1440px] mx-auto w-full flex max-lg:flex-col items-center max-sm:gap-5 max-lg:gap-10 max-sm:py-5 max-lg:py-10">
      <div className="w-full lg:w-1/2 lg:h-[568px] max-lg:px-4 flex items-center justify-center">
        <Image
          src="/img/whynoma.png"
          width={720}
          height={568}
          className="h-full w-full max-lg:max-w-[550px] max-lg:max-h-[568px]"
          alt="why-noma"
        />
      </div>
      <div className="w-full lg:w-1/2 lg:h-[568px] flex flex-col items-center justify-center px-4">
        <h5 className="text-[#070707] text-center font-sergio-trendy text-[28px] md:text-[34px] lg:text-5xl font-normal capitalize">
          Why Noma
        </h5>

        <div className="max-w-[514px] w-full flex flex-col gap-2 pt-3 text-[#070707] text-center text-xs font-Montserrat lg:text-base font-normal">
          <p>
            Did you know it takes around 60+ hours on average to plan a
            corporate retreat if it is handled internally?
          </p>
          <p>
            Why not save your team the hassle and let us do the work? At Noma,
            we are experts in providing a curated experience that not only
            promises to be productive for your team but entertaining and
            culturally integrated.
          </p>
          <p>
            We work with local community managers to support your guests
            experience end-to-end, as well as cherry-picking the best, authentic
            local experiences and cultural events. We've built amazing
            connections across the globe, enabling us to curate the very best
            trips for you and your team.
          </p>
          <p>
            We manage the logistics, the programming, the accommodation, so all
            you'll have, to do is show up!
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-[#FF9500] rounded-full px-4 lg:px-8 py-2 lg:py-4 border-[2px] border-[#FF9500] text-[#F7F7F7] font-Montserrat text-xs lg:text-base font-extrabold leading-normal hover:bg-transparent hover:text-[#FF9500] duration-300 ease-in-out mx-auto"
          >
            REQUEST A QUOTE
          </button>
        </div>
      </div>
    </article>
  );
};

export default WhyNoma;
