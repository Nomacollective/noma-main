import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import dynamic from "next/dynamic";

import { Autoplay, Scrollbar } from "swiper/modules";
import { profileMapData } from "../common/Helper";
import ProfileData from "./ProfileData";

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function CardSlider({alumniReviews, location}) {
  // Check if this is the Belize or Honduras location
  const isBelizeLocation = location?.heading?.toLowerCase()?.includes('belize') || 
                          location?.city?.toLowerCase()?.includes('belize') ||
                          location?.id === '2hSGUsxMvlOeqDxQ9hugop'; // Specific Belize location ID

  const isHondurasLocation = location?.heading?.toLowerCase()?.includes('honduras') || 
                            location?.city?.toLowerCase()?.includes('honduras');

  // Show video for both Belize and Honduras locations
  const shouldShowVideo = isBelizeLocation || isHondurasLocation;

  return (
    <div className="w-full sm:bg-[#F4F1E6] pb-[120px] bg-[#FFDA7F]">
      <div className="max-w-[1120px] w-full mx-auto px-4 xl:px-4 sm:pt-[29px] pt-4">
        
        {/* Video Testimonial Section - For Belize and Honduras */}
        {shouldShowVideo && (
          <div className="mb-8">
            <h3 className="text-center text-2xl sm:text-3xl font-bold font-Montserrat text-carbon-Black mb-6">
              Watch Our Community Stories
            </h3>
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
              <p className="text-center text-sm text-gray-600 mt-3 font-Montserrat">
                Belize Family Edition Testimonials
              </p>
            </div>
          </div>
        )}

        {/* Written Testimonials Slider - Only show if NOT Belize/Honduras */}
        {!shouldShowVideo && alumniReviews && alumniReviews.length > 0 && (
          <>
            <div className="mb-4">
              <h3 className="text-center text-2xl sm:text-3xl font-bold font-Montserrat text-carbon-Black mb-6">
                What Our Alumni Say
              </h3>
            </div>
            
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
