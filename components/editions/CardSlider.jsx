import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import dynamic from "next/dynamic";

import { Autoplay, Scrollbar } from "swiper/modules";
import { profileMapData } from "../common/Helper";
import ProfileData from "./ProfileData";

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function CardSlider({alumniReviews, location}) {
  // Check if this is the Belize location
  const isBelizeLocation = location?.heading?.toLowerCase()?.includes('belize') || 
                          location?.city?.toLowerCase()?.includes('belize') ||
                          location?.id === '2hSGUsxMvlOeqDxQ9hugop'; // Specific Belize location ID

  return (
    <div className="w-full sm:bg-[#F4F1E6] pb-[120px] bg-[#FFDA7F]">
      <div className="max-w-[1120px] w-full mx-auto px-4 xl:px-4 sm:pt-[29px] pt-4">
        
        {/* Video Testimonial Section - Only for Belize */}
        {isBelizeLocation && (
          <div className="mb-8">
            <div className="max-w-[800px] mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                <ReactPlayer
                  url="https://youtu.be/aBmYhMs9EsU"
                  width="100%"
                  height="100%"
                  controls={true}
                  light={true} // Shows thumbnail until play is clicked
                  playing={false}
                  config={{
                    youtube: {
                      playerVars: {
                        showinfo: 1,
                        modestbranding: 1,
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Written Testimonials Slider - Only show if NOT Belize or if no video */}
        {!isBelizeLocation && alumniReviews && alumniReviews.length > 0 && (
          <>
            
            <Swiper
              scrollbar={{
                hide: false,
              }}
              autoplay={{
                delay: 2700,
              }}
              breakpoints={{
                20: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 52,
                },
              }}
              slidesPerView={3}
              modules={[Autoplay, Scrollbar]}
              className="mySwiper3 w-full h-[500px]"
            >
              {alumniReviews?.map((item, index) => (
                <SwiperSlide key={index}>
                  <ProfileData items={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>
    </div>
  );
}
