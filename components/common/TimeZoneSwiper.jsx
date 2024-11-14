import FeaturedEditionCard from "./FeaturedEditionCard";
import Link from "next/link";
import {
  differenceInDays,
  parseISO,
  format,
  utcToZonedTime,
  zonedTimeToUtc,
} from "date-fns";

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

const normalizeDate = (dateString, timeZoneOffset) => {
  const offsetHours = parseInt(
    timeZoneOffset.replace("GMT", "").replace(":", ""),
    10
  );
  const date = new Date(dateString);
  date.setHours(date.getHours() + offsetHours);
  date.setUTCHours(0, 0, 0, 0);
  return format(date, "yyyy-MM-dd");
};

const calculateDaysDifference = (startDate, endDate, timeZoneOffset) => {
  const normalizedStartDate = normalizeDate(startDate, timeZoneOffset);
  const normalizedEndDate = normalizeDate(endDate, timeZoneOffset);
  const start = parseISO(`${normalizedStartDate}T00:00:00Z`);
  const end = parseISO(`${normalizedEndDate}T00:00:00Z`);
  return Math.abs(differenceInDays(start, end));
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
      days: calculateDaysDifference(l.startDate, l.endDate, l.timeZone),
      price: Math.min(
        ...l?.accomodationsCollection?.items?.map((i) => i?.price)
      ),
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
