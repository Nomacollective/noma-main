import SolutionCardPoint from "./SolutionCardPoint";

const SolutionCommunityCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 pt-3">
      <header className="text-[#313131] font-Montserrat font-bold text-lg">
        Community
      </header>
      <article className="flex flex-col justify-center items-center gap-4">
        <SolutionCardPoint title="Local guide" color="#FFDA7F" />
        <SolutionCardPoint title="Curated social events" color="#FFDA7F" />
        <SolutionCardPoint title="Global network of 1000+" color="#FFDA7F" />
      </article>
    </div>
  );
};

export default SolutionCommunityCard;
