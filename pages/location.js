import CommonButton from "@/components/common/CommonButton";
import Heading from "@/components/common/Heading";
import HeroImage from "@/components/common/HeroImage";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import Subheading from "@/components/common/Subheading";
import TimeZoneSwiper from "@/components/common/TimeZoneSwiper";
import SearchInput from "@/components/locationl/SearchInput";
import { getAllEditions } from "@/lib/api";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import uniq from "lodash/uniq";
import { getLocationById } from "@/lib/api";

export const getLocationCardColor = (color) => {
  const color_map = {
    "light-blue": "#D9E4FC",
    yellow: "#FFC300",
    bone: "#DFD4AD",
    purple: "#D5D1EA",
    "light-purple": "#ECECFD",
    "light-yellow": "#FFDA7F",
    "light-green": "#BBE4D7",
    green: "#80CEB7",
    orange: "#FF9500",
    brown: "#C68443",
    pink: "#FC8B99",
    "deep-purple": "#8196CC",
  };

  return color_map[color] || color_map.yellow;
};

export const getServerSideProps = async () => {
  const locations = await getAllEditions();
  return {
    props: {
      title: "Locations",
      locations: locations || [],
    },
  };
};

const monthNames = [
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

const locations = ({ locations }) => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [tempFilter, setTempFilter] = useState("");
  const [daysFilter, setDaysFilter] = useState("");
  const [placeFilter, setPlaceFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const [locationItems, setLocationItems] = useState(
    locations?.contentTypeLocationCollection?.items || []
  );

  const continentFilterItems = useMemo(() => {
    const continents = uniq(
      locationItems?.map((item) => item?.continent).filter((v) => !!v)
    );

    return continents?.map((c) => ({ label: c, value: c })) || [];
  }, [locationItems]);

  const filteredItems = useMemo(() => {
    const filtered =
      locationItems?.filter((item) => {
        // Filter out if endDate has passed today
        const isValidDate =
          item?.endDate && new Date(item.endDate) > new Date();

        // Filter by search input
        const start = item?.startDate?.split("T")[0];
        const [year, month, date] = start?.split("-");
        const startMonth = monthNames[parseInt(month, 10) - 1];
        const end = item?.endDate?.split("T")[0];
        const [endYear, endMonth, endDay] = end?.split("-");
        const endMonthName = monthNames[parseInt(endMonth, 10) - 1];
        const searchFilter =
          item.city.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.country.toLowerCase().includes(searchInput.toLowerCase()) ||
          item?.continent?.toLowerCase().includes(searchInput.toLowerCase()) ||
          startMonth.toLowerCase().includes(searchInput.toLowerCase()) ||
          endMonthName.toLowerCase().includes(searchInput.toLowerCase());

        // Filter by temperature
        const tempFilterPass =
          !tempFilter || item.temperature.includes(tempFilter);

        // Filter by length of trip
        const tripDuration =
          (new Date(item.endDate) - new Date(item.startDate)) /
          (1000 * 60 * 60 * 24);
        let daysFilterPass = true;
        if (daysFilter) {
          switch (+daysFilter?.split(" ")[0]) {
            case 1:
              daysFilterPass = tripDuration >= 1 && tripDuration <= 7;
              break;
            case 2:
              daysFilterPass = tripDuration >= 8 && tripDuration <= 14;
              break;
            case 3:
              daysFilterPass = tripDuration >= 15 && tripDuration <= 21;
              break;
            case 4:
              daysFilterPass = tripDuration >= 22 && tripDuration <= 28;
              break;
            default:
              daysFilterPass = true;
          }
        }

        // Filter by continent
        const placeFilterPass =
          item.city.toLowerCase().includes(placeFilter.toLowerCase()) ||
          item.country.toLowerCase().includes(placeFilter.toLowerCase()) ||
          item?.continent?.toLowerCase().includes(placeFilter?.toLowerCase());

        // Filter by type of trip
        const typeFilterPass =
          !typeFilter || item.tripType.includes(typeFilter);

        // Combine all filters
        return (
          isValidDate &&
          searchFilter &&
          tempFilterPass &&
          daysFilterPass &&
          placeFilterPass &&
          typeFilterPass
        );
      }) || [];

    // Sort by startDate in ascending order
    return filtered.sort(
      (a, b) => new Date(a.startDate) - new Date(b.startDate)
    );
  }, [
    searchInput,
    locationItems,
    tempFilter,
    daysFilter,
    placeFilter,
    typeFilter,
  ]);

  const onSurpriseMeClick = async () => {
    // Check if we have any locations available
    if (!locationItems || locationItems.length === 0) {
      console.warn('No locations available for Surprise Me feature');
      // Redirect to the location page to show all available options
      router.push('/location');
      return;
    }

    // Filter locations that already have spots available from the data we already have
    const availableLocations = locationItems.filter(location => {
      // Check if we have accommodation data and spots available
      const accommodations = location.accomodationsCollection?.items;
      return accommodations && accommodations.length > 0 && accommodations.some(acc => acc.spotsLeft > 0);
    });

    if (availableLocations.length === 0) {
      // If no locations have spots available, just pick a random one anyway
      const randomIndex = Math.floor(Math.random() * locationItems.length);
      const randomLocation = locationItems[randomIndex];
      
      // Double-check that the location exists and has required data
      if (randomLocation && randomLocation.sys && randomLocation.sys.id) {
        router.push(`/location/${randomLocation.sys.id}`);
      } else {
        console.warn('Selected location is missing required data, redirecting to location page');
        router.push('/location');
      }
      return;
    }

    // Randomly select from available locations (no API call needed!)
    const randomIndex = Math.floor(Math.random() * availableLocations.length);
    const randomLocation = availableLocations[randomIndex];
    
    // Double-check that the location exists and has required data
    if (randomLocation && randomLocation.sys && randomLocation.sys.id) {
      router.push(`/location/${randomLocation.sys.id}`);
    } else {
      console.warn('Selected available location is missing required data, redirecting to location page');
      router.push('/location');
    }
  };

  return (
    <Layout>
      <PageSEO title="Locations" />
      <HeroImage
        bg="url('/img/locations_cover.png')"
        styles={{ backgroundPosition: "bottom" }}
      />
      <div className="pt-8 ">
        <Heading
          heading={
            <>
              Where do you want to go
              <span className="font-serif font-extrabold">?</span>
            </>
          }
        />
      </div>
      <div className="sm:max-w-[500px] w-full mx-auto ">
        <Subheading paragraph="Your remote work journey starts here, check out our specially curated Noma Editions and embrace the freedom to work from anywhere." />
      </div>
      <div className="px-4 xl:px-0 lg:pt-4 mb-3 sm:mb-0">
        <SearchInput
          setPlaceFilter={setPlaceFilter}
          setDaysFilter={setDaysFilter}
          setTempFilter={setTempFilter}
          setTypeFilter={setTypeFilter}
          placeFilter={placeFilter}
          daysFilter={daysFilter}
          tempFilter={tempFilter}
          typeFilter={typeFilter}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onSurpriseMeClick={onSurpriseMeClick}
          continentFilterItems={continentFilterItems}
          hasLocations={locationItems && locationItems.length > 0}
        />
      </div>
      <TimeZoneSwiper locations={filteredItems} />
      <div className="mb-36">
        <CommonButton text="GET STARTED" />
      </div>
    </Layout>
  );
};

export default locations;
