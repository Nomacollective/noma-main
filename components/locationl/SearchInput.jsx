import { useState } from "react";
import { InputRightSideIcon, SearchIcon } from "../common/Icons";

const SearchInput = ({
  searchInput,
  setSearchInput,
  onSurpriseMeClick,
  setPlaceFilter,
  setDaysFilter,
  setTempFilter,
  setTypeFilter,
  placeFilter,
  daysFilter,
  tempFilter,
  typeFilter,
  continentFilterItems,
  hasLocations = true, // New prop to indicate if locations are available
}) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const filters = {
    "Average Temp": {
      value: tempFilter,
      onSelect: setTempFilter,
      items: [
        {
          label: "Less than 15°C | 59°F",
          value: "Less than 15°C | 59°F",
        },
        {
          label: "15°C | 59°F - 20°C | 68°F",
          value: "15°C | 59°F - 20°C | 68°F",
        },
        {
          label: "20°C | 68°F - 25°C | 77°F",
          value: "20°C | 68°F - 25°C | 77°F",
        },
        {
          label: "25°C | 77°F - 30°C | 86°F",
          value: "25°C | 77°F - 30°C | 86°F",
        },
        {
          label: "More than 30°C | 86°F ",

          value: "More than 30°C | 86°F ",
        },
      ],
    },
    "Length of Trip": {
      value: daysFilter,
      onSelect: setDaysFilter,
      items: [
        { label: "1 Week", value: "1 Week" },
        { label: "2 Weeks", value: "2 Weeks" },
        { label: "3 Weeks", value: "3 Weeks" },
        { label: "4 Weeks", value: "4 Weeks" },
      ],
    },
    Continent: {
      value: placeFilter,
      onSelect: setPlaceFilter,
      items: continentFilterItems,
    },
    "Type of Trip": {
      value: typeFilter,
      onSelect: setTypeFilter,
      items: [
        { label: "Foodie Heaven", value: "Foodie Heaven" },
        { label: "Wellness & relaxation", value: "Wellness & relaxation" },
        { label: "Nightlife & partying", value: "Nightlife & partying" },
        { label: "Nature & wildlife", value: "Nature & wildlife" },
        { label: "Activity & fitness", value: "Activity & fitness" },
      ],
    },
  };
  return (
    <div>
      <article className="flex items-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] mx-auto sm:max-w-[600px] mt-5 max-w-[358px] w-full h-[48px] sm:h-14 rounded-[57px]">
        <article
          onClick={() => setFilterOpen((v) => !v)}
          className="bg-light-green w-[44px] border-r border-light-grey md:w-[98px] cursor-pointer rounded-l-[57px] flex items-center justify-center h-full px-[30px] py-4"
        >
          <span>
            <InputRightSideIcon />
          </span>
        </article>
        <article className="max-w-[200px] sm:max-w-[411px] w-full pl-3 sm:pl-6 sm:py-2.5 bg-romance h-full flex items-center justify-start bg-white">
          <input
            type="search"
            name="search"
            placeholder="Type to search a location"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full mx-2 bg-white text-[#666] placeholder:text-[#666] text-[10px] sm:text-[13px] font-Montserrat font-normal leading-normal  placeholder:text-[10px] sm:placeholder:text-[13px] placeholder:font-Montserrat placeholder:font-normal placeholder:leading-normal bg-transparent h-full outline-none"
          />
        </article>
        <article className="sm:max-w-[200px] sm:w-full w-[110px] border-l border-light-grey bg-pastel-yellow rounded-r-[57px] h-full flex items-center py-4 pr-[15px]">
          <button
            onClick={hasLocations ? onSurpriseMeClick : undefined}
            disabled={!hasLocations}
            className={`text-[#666] text-[10px] gap-1 sm:gap-5 sm:text-[13px] font-Montserrat font-normal leading-normal flex items-center justify-end text-center w-full ${
              !hasLocations ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
            title={!hasLocations ? 'No locations available at the moment' : 'Find a random location'}
          >
            <span className="text-center text-[8px] sm:text-[12px]">
              {hasLocations ? 'Surprise me' : 'No locations'}
            </span>
            <SearchIcon />
          </button>
        </article>
      </article>
      {filterOpen && (
        <div className="block sm:flex sm:justify-around max-w-[1000px] m-auto mt-2 gap-4">
          {Object.entries(filters).map(([key, values], index) => (
            <div key={index} className="mt-4 sm:w-[25%]">
              <h6 className="font-Montserrat ml-4 font-bold">{key}</h6>
              <div className="flex flex-wrap">
                {values.items.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      if (values.value !== "") {
                        values.onSelect("");
                      } else {
                        values.onSelect(item.value);
                      }
                    }}
                    className={`${
                      values.value == item.value ||
                      JSON.stringify(values.value) ===
                        JSON.stringify(item.value)
                        ? "bg-orange-200"
                        : "bg-white"
                    } rounded-full m-2 py-2 px-3 font-Montserrat cursor-pointer shadow-md w-auto`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
