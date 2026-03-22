import Heading from "@/components/common/Heading";
import { heroBtnData } from "@/components/common/Helper";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import Subheading from "@/components/common/Subheading";
import Accomodation from "@/components/editions/Accomodation";
import CardSlider from "@/components/editions/CardSlider";
import GuestGallery from "@/components/editions/GuestGallery";
import HeroBtn from "@/components/editions/HeroBtn";
import HighLights from "@/components/editions/HighLights";
import ProfileMeet from "@/components/editions/ProfileMeet";
import ProgressCircle from "@/components/editions/ProgressCircle";
import WhatIncluded from "@/components/editions/WhatIncluded";
import { getLocationByCity, getLocationById } from "@/lib/api";
import { parseISO, format } from "date-fns";
import React from "react";
import { differenceInDays } from "date-fns";

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDateRange(startDate, endDate) {
  const start = startDate?.split("T")[0];
  const [year, month, date] = start?.split("-");
  const formattedStartDate = `${monthNames[parseInt(month, 10) - 1]} ${parseInt(
    date,
    10
  )}`;
  const end = endDate?.split("T")[0];
  const [endYear, endMonth, endDay] = end?.split("-");
  const endDayMonth = `${monthNames[parseInt(endMonth, 10) - 1]} ${parseInt(
    endDay,
    10
  )}`;

  return `${formattedStartDate} - ${endDayMonth} ${endYear}`;
}

export const CustomText = ({ text }) => {
  const parts = text?.split(/([,()])/);

  return (
    <span>
      {parts.map((part, index) => {
        if (part === "," || part === "(" || part === ")") {
          return (
            <span key={index + "custom-text"} className="font-serif font-extrabold">
              {part}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};

export const getServerSideProps = async ({ params }) => {
  try {
    let location;
    const idPattern = /^[a-zA-Z0-9]+$/;
    
    if (idPattern.test(params.id)) {
      location = await getLocationById({ locationId: params.id });
    } else {
      const city = params.id.substring(0, params.id.length - 12);
      const monthRegex = /-(\w{3})-\d{1,2}-\d{4}$/;
      const monthMatch = params.id.match(monthRegex);
      const startDayRegex = /-(\d{1,2})-\d{4}$/;
      const startDayMatch = params.id.match(startDayRegex);
      const yearMatch = params.id.match(/-\d{4}$/);
      
      if (!monthMatch || !startDayMatch || !yearMatch) {
        console.error('Invalid URL format for location');
        return {
          notFound: true,
        };
      }
      
      const month = monthMatch[1];
      const startDay = Number(startDayMatch[1]);
      const year = yearMatch[0].slice(1);
      
      location = await getLocationByCity(
        { city: city },
        { month: month, year: year, startDay: startDay }
      );
    }
    
    // Check if location data was successfully retrieved
    if (!location || !location.contentTypeLocation) {
      console.error('Location not found or API unavailable');
      return {
        notFound: true,
      };
    }
    
    return {
      props: {
        location,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    return {
      notFound: true,
    };
  }
};

const Editions = ({ location }) => {
  // Handle case where location data is not available
  if (!location?.contentTypeLocation) {
    return (
      <Layout>
        <PageSEO title="Location Not Found" />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-carbon-Black mb-4">Location Not Available</h1>
            <p className="text-lg text-gray-600 mb-6">
              This location is currently unavailable. This might be due to:
            </p>
            <ul className="text-left text-gray-600 mb-6 max-w-md mx-auto">
              <li>• The location has been removed or updated</li>
              <li>• Temporary service unavailability</li>
              <li>• Invalid location URL</li>
            </ul>
            <button
              onClick={() => window.location.href = '/location'}
              className="bg-main-orange text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition duration-300"
            >
              View All Locations
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const locationMapped = {
    id: location?.contentTypeLocation?.sys?.id,
    city: location?.contentTypeLocation?.city,
    timeZone: location?.contentTypeLocation?.timeZone,
    temperature: location?.contentTypeLocation?.temperature,
    heading: `${location?.contentTypeLocation?.city}, ${location?.contentTypeLocation?.country}`,
    dates: formatDateRange(
      location?.contentTypeLocation?.startDate,
      location?.contentTypeLocation?.endDate
    ),
    description: location?.contentTypeLocation?.description,
    foodieHaven: location?.contentTypeLocation?.foodieHaven,
    wellnessAndRelaxation: location?.contentTypeLocation?.wellnessAndRelaxation,
    natureAndWildlife: location?.contentTypeLocation?.natureAndWildlife,
    activityAndFitness: location?.contentTypeLocation?.activityAndFitness,
    nightlifeAndPartying: location?.contentTypeLocation?.nightlifeAndPartying,
    description2: location?.contentTypeLocation?.description2?.json,
    hero: location?.contentTypeLocation?.heroImage?.url,
    whatsIncluded: location?.contentTypeLocation?.facilitiesCollection?.items,
    manager: location?.contentTypeLocation?.managerCollection?.items || [],
    highlights: location?.contentTypeLocation?.highlightsCollection?.items,
    accomodation:
      location?.contentTypeLocation?.accomodationsCollection?.items.sort(
        (a, b) => a?.price - b?.price
      ),
    accomodationsCollection: location?.contentTypeLocation?.accomodationsCollection,
    guestGallery:
      location?.contentTypeLocation?.guestgalleryCollection?.items || [],
    alumniReviews: location?.contentTypeLocation?.alumniReviewCollection?.items,
  };
  return (
    <Layout>
      <PageSEO title="Location" />
      <div
        style={{
          background: `url(${locationMapped?.hero})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        // bg-[url('/img/news-bg-2.png')] sm:bg-[url('/img/news-bg.png')] orignally in classname below
        className="w-full bg-center bg-cover h-[382px] sm:h-[800px] max-sm:mt-[7px] max-sm:px-4"
      >
        <div className="flex gap-2 items-center py-2 px-1 sm:hidden">
          <HeroBtn item={{ btn: locationMapped.timeZone }} value={0} />
          <HeroBtn item={{ btn: locationMapped.temperature }} value={1} />
        </div>
      </div>
      <div className="py-4">
        <Heading heading={<CustomText text={locationMapped?.heading} />} />
      </div>
      <div className="font-kurdis text-center font-bold text-2xl">
        <p>{locationMapped?.dates}</p>
      </div>
      <div className="sm:max-w-[1000px] w-full mx-auto max-xl:px-4 pb-4">
        <Subheading paragraph={locationMapped?.description} />
      </div>
      <ProgressCircle
        foodieHaven={locationMapped?.foodieHaven}
        wellnessAndRelaxation={locationMapped?.wellnessAndRelaxation}
        natureAndWildlife={locationMapped?.natureAndWildlife}
        activityAndFitness={locationMapped?.activityAndFitness}
        nightlifeAndPartying={locationMapped?.nightlifeAndPartying}
      />

      <WhatIncluded
        d={locationMapped?.description2}
        items={locationMapped?.whatsIncluded}
        location={locationMapped}
      />
      {!!locationMapped?.manager?.length && (
        <ProfileMeet managers={locationMapped.manager} />
      )}
      <HighLights highlights={locationMapped?.highlights} />
      <Accomodation accomodation={locationMapped?.accomodation || []} location={locationMapped} />
      {locationMapped?.guestGallery?.length > 0 && (
        <div className="mt-[85px]">
          <GuestGallery guestGallery={locationMapped?.guestGallery} />
        </div>
      )}
      <CardSlider alumniReviews={locationMapped?.alumniReviews} location={locationMapped} />
    </Layout>
  );
};

export default Editions;
