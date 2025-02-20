const WhyNoma = () => {
  return (
    <article className="bg-[#FFDA7F] w-full flex max-xl:flex-col max-sm:gap-5 max-xl:gap-10 max-sm:py-5 gap-9 max-xl:py-10 sm:mb-10">
      <div className="w-full xl:w-1/2 xl:h-[560px] max-xl:px-4 flex items-center xl:justify-end justify-center">
        <img
          src="/img/HDIT_WhyNoma.jpg"
          className="h-full w-[860px]  max-xl:max-h-[568px]"
        />
      </div>
      <div className="xl:h-[560px] flex flex-col items-center justify-center  sm:px-0 px-5 ">
        <h5 className="text-[#070707] text-center font-sergio-trendy text-[28px] md:text-[34px] lg:text-5xl font-normal capitalize">
          Why Noma
        </h5>

        <div className="max-w-[545px] w-full flex flex-col gap-8 pt-3 text-[#070707] text-center text-xs font-Montserrat lg:text-base font-normal">
          <p>
            Why not save the hassle and let us do the work? At Noma, we are
            experts in providing a curated experience that not only promises to
            be enriching, but entertaining and culturally integrated. 
          </p>
          <p>
            We work with local community managers to support your guests
            experience end-to-end, as well as cherry-picking the best, authentic
            local experiences and cultural events. We’ve built amazing
            connections across the globe, enabling us to curate the very best
            trips for you and your community. 
          </p>
          <p>
            We manage the logistics, the programming, and the accommodation, so
            all you’ll have, to do is show up!
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="mailto:info@noma-collective.com"
            className="bg-[#FF9500] rounded-full px-4 lg:px-8 py-2 lg:py-4 border-[2px] border-[#FF9500] text-[#F7F7F7] font-Montserrat text-xs lg:text-base font-extrabold leading-normal hover:bg-transparent hover:text-[#FF9500] duration-300 ease-in-out mx-auto"
          >
            REQUEST A QUOTE
          </a>
        </div>
      </div>
    </article>
  );
};

export default WhyNoma;
