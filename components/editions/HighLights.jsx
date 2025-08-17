import React, { useRef } from "react";
import HighLightsCard from "./HighLightsCard";
import {
  FaciltiesIcons,
  SliderLeftArrowIcon,
  SliderRightArrowIcon,
} from "../common/Icons";
import { Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const HighLights = ({ highlights }) => {
  const swiperRef = useRef(null);

  // const goNext = () => {
  //   if (swiperRef.current && swiperRef.current.swiper) {
  //     swiperRef.current.swiper.slideNext();
  //   }
  // };

  // const goPrev = () => {
  //   if (swiperRef.current && swiperRef.current.swiper) {
  //     swiperRef.current.swiper.slidePrev();
  //   }
  // };

  return (
    <div className="bg-[#FCD9DF]">
      <div className="max-w-[1110px] pb-8 sm:pb-[97px] pt-8 w-full mx-auto px-4 xl:px-0">
        <h2 className="flex items-center pb-4 sm:pb-8 text-center justify-center gap-4 text-[32px] text-[#313131] font-extrabold font-Montserrat">
          <span>
            <FaciltiesIcons />
          </span>
          Highlights
        </h2>
        <div className="flex items-center gap-[11px]">
          {/* <div className="prev-btn cursor-pointer" onClick={goPrev}>
            <SliderLeftArrowIcon />
          </div> */}
          <Swiper
            scrollbar={{ hide: false }}
            slidesPerView={3}
            spaceBetween={30}
            loop
            navigation={{
              prevEl: ".prev-btn",
              nextEl: ".next-btn",
            }}
            breakpoints={{
              10: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              // 430: {
              //   slidesPerView: 1.2,
              //   spaceBetween: 5,
              // },
              // 540: {
              //   slidesPerView: 1.5,
              //   spaceBetween: 10,
              // },
              // 640: {
              //   slidesPerView: 1.5,
              //   spaceBetween: 15,
              // },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 22,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            pagination={{
              clickable: true,
            }}
            // paginationType="bullets"
            modules={[Scrollbar]}
            className="mySwiper w-full"
            ref={swiperRef}
          >
            {highlights.map((item, index) => (
              <SwiperSlide key={index + "highlist"}>
                <HighLightsCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="next-btn cursor-pointer" onClick={goNext}>
            <SliderRightArrowIcon />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HighLights;
