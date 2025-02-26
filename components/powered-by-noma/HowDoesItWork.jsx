import HowDoesItWorkCard from "./HowDoesItWorkCard";

const HowDoesItWork = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-3 pt-20 pb-20">
      <div className="relative w-full h-full">
        <img
          src="/img/cloud.png"
          alt="cloud"
          className="absolute top-0 left-10"
        />
      </div>
      <header>
        <h2 className="text-center text-black font-sergio-trendy font-normal text-[24px] sm:text-[48px] capitalize mb-5">
          How Does It Work
        </h2>
      </header>
      <article>
        <p className="text-lg text-center mb-2 px-5 sm:px-0">
          Powered by Noma offers flexibility, freedom, and full customisation.
          You tell us what you want, and we make it happen.
        </p>
      </article>
      <div className="relative w-full h-full">
        <img
          src="/img/cloud.png"
          alt="cloud"
          className="absolute -top-5 right-0"
        />
      </div>
      <article className="flex xl:flex-row flex-col gap-8 ">
        <HowDoesItWorkCard
          img="/img/HDITCard.jpg"
          headerText="We source the"
          title="Location"
          middleText="All our locations are handpicked, stunning accommodations with private
          spaces for all the team."
          lowerText="You’ll be supported by a local community manager to make sure all
          logistics are handled expertly."
          color="pastel-yellow"
        />
        <HowDoesItWorkCard
          img="/img/HDITCard2.jpg"
          headerText="We build the"
          title="Adventure"
          middleText="Forget the hassle of planning a meetup - we take care of everything, curating each trip around the community’s unique interests."
          lowerText="With insider local knowledge, it’s the best way to explore these amazing places, without lifting a finger."
          color="light-purple"
        />
        <HowDoesItWorkCard
          img="/img/HDITCard3.jpg"
          headerText="We understand"
          title="Community"
          middleText="Today’s thriving online communities have created deep connections around shared interests."
          lowerText="We understand the power of these bonds and want to create opportunities for you to translate them into unforgettable in-person experiences."
          color="light-green"
        />
      </article>
    </section>
  );
};

export default HowDoesItWork;
