import SolutionCommunityCard from "./SolutionCommunityCard";
import SolutionDevelopmentCard from "./SolutionDevelopmentCard";
import SolutionInfrastructureCard from "./SolutionInfrastructureCard";

const SolutionCards = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-around pt-3 w-[70%]">
      <SolutionInfrastructureCard />
      <SolutionCommunityCard />
      <SolutionDevelopmentCard />
    </div>
  );
};

export default SolutionCards;
