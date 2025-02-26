import SolutionCardPoint from "./SolutionCardPoint";

const SolutionInfrastructureCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 pt-3">
      <header className="text-[#313131] font-Montserrat font-bold text-lg">
        Professional Development
      </header>
      <article className="flex flex-col justify-center items-center gap-4">
        <div className="flex sm:flex-row flex-col items-center gap-3">
          <SolutionCardPoint title="Workshops" color="#BBE4D7" />
          <SolutionCardPoint title="Cultural immersion" color="#BBE4D7" />
        </div>
        <SolutionCardPoint title="Business connections" color="#BBE4D7" />
        <SolutionCardPoint title="Peer learning" color="#BBE4D7" />
      </article>
    </div>
  );
};

export default SolutionInfrastructureCard;
