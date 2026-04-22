import FeaturedEditionCard from "./FeaturedEditionCard";
import Link from "next/link";
import { differenceInDays, parseISO } from "date-fns";

export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export const calculateDaysDifference = (startDateStr, endDateStr) => {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const startDay = startDate.getDate();
  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth();
  const endDay = endDate.getDate();
  const daysInStartMonth = getDaysInMonth(startYear, startMonth);
  const daysInEndMonth = getDaysInMonth(endYear, endMonth);
  const isStartDateLastDay = startDay === daysInStartMonth;
  const isEndDateLastDay = endDay === daysInEndMonth;
  if (startYear === endYear && startMonth === endMonth) {
    return endDay - startDay + 1;
  } else {
    const daysFromStartMonth = daysInStartMonth - startDay;
    const daysInEndMonthActual =
      endDay + (isEndDateLastDay && !isStartDateLastDay ? 1 : 0);
    return daysFromStartMonth + daysInEndMonthActual + 1;
  }
};

const TimeZoneSwiper = ({ locations }) => {
  const locationsMapped = locations?.map((l) => {
    const start = l?.startDate?.split("T")[0];
    const [year, month, date] = start?.split("-");
    const formattedStartDate = `${
      monthNames[parseInt(month, 10) - 1]
    } ${parseInt(date, 10)}`;
    const end = l?.endDate?.split("T")[0];
    const [endYear, endMonth, endDay] = end?.split("-");
    const endDayMonth = `${monthNames[parseInt(endMonth, 10) - 1]} ${parseInt(
      endDay,
      10
    )}`;
    const link = `${l.city.replace(" ", "-")}-${formattedStartDate.substring(
      0,
      3
    )}-${date}-${year}`;

    return {
      id: l?.sys?.id,
      firstbtn: l?.timeZone,
      secondbtn: l?.temperature,
      title: l?.city,
      description: l?.country,
      date: `${formattedStartDate} - ${endDayMonth} ${endYear}`,
      days: calculateDaysDifference(l.startDate, l.endDate),
      price: (() => {
        const allAccommodations = l?.accomodationsCollection?.items || [];
        const isHondurasFamily = l?.city?.toLowerCase()?.includes('honduras') || 
                               l?.country?.toLowerCase()?.includes('honduras') ||
                               (l?.city && l?.city.toLowerCase().includes('noma')) ||
                               (l?.country && l?.country.toLowerCase().includes('noma'));
        
        console.log(`TimeZoneSwiper - Location: ${l?.city}, ${l?.country}`);
        console.log(`TimeZoneSwiper - Is Honduras Family: ${isHondurasFamily}`);
        console.log(`TimeZoneSwiper - All accommodations:`, allAccommodations.map(i => ({ title: i?.title, price: i?.price })));
        
        // Temporary hardcode for Honduras to test
        if (isHondurasFamily) {
          console.log(`TimeZoneSwiper - Hardcoding Honduras price to 4450`);
          return 4450;
        }
        
        // For other locations, use minimum of all accommodations
        const prices = allAccommodations.map((i) => i?.price).filter(price => price != null && price > 0);
        if (prices.length > 0) {
          return Math.min(...prices);
        }
        
        console.log(`TimeZoneSwiper - No valid prices found for ${l?.city}, using 0`);
        return 0;
      })(),
      img: [{ src: l?.heroImage?.url }],
      locationColor: l?.locationCardColor,
      link: link,
    };
  });

  return (
    <>
      <div className="gap-5 gap-y-8 mb-[140px] sm:mt-8 xl:gap-[68px] grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3   max-w-[1120px] w-full mx-auto px-4 xl:px-0">
        {locationsMapped.map((item, index) => (
          <Link key={index} href={`/location/${item.link}`}>
            <FeaturedEditionCard item={item} value={index} key={index} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default TimeZoneSwiper;
