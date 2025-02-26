import Heading from "../common/Heading";
import { suggestedLocationsData } from "../common/Helper";
import SuggestedLocationCard from "./SuggestedLocationCard";

const SuggestedLocations = () => {
  return (
    <section className=" bg-[#F4F1E6] ">
      <article className="max-w-[1112px] w-full mx-auto pt-6 sm:pt-10 md:pt-[61px] px-4 xl:px-0">
        <Heading heading="Suggested Locations" />
        <article className="mt-5 sm:mt-10 lg:mt-[56px] flex flex-col gap-5 sm:gap-10 lg:gap-[56px]">
          {suggestedLocationsData.map((locationData) => (
            <SuggestedLocationCard key={locationData.id} data={locationData} />
          ))}
        </article>
      </article>
    </section>
  );
};

export default SuggestedLocations;
