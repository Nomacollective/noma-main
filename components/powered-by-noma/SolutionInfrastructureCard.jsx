import SolutionCardPoint from "./SolutionCardPoint";

const SolutionDevelopmentCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 pt-3">
      <header className="text-[#313131] font-Montserrat font-bold text-lg">
        Infrastructure
      </header>
      <article className="flex flex-col justify-center items-center gap-4">
        <SolutionCardPoint title="Accommodation" color="#FCD9DF" />
        <div className="flex gap-3">
          <SolutionCardPoint title="Quality amenities" color="#FCD9DF" />
          <SolutionCardPoint title="Transport" color="#FCD9DF" />
        </div>
        <SolutionCardPoint title="Activity spaces" color="#FCD9DF" />
      </article>
    </div>
  );
};

export default SolutionDevelopmentCard;
