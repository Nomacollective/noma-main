import SuccsessStoriesCard from "./SuccsessStoriesCard";

const SuccsessStories = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-3 pt-20 pb-20">
      <header>
        <h2 className="text-center text-black font-sergio-trendy font-normal text-[24px] sm:text-[48px] capitalize mb-5">
          Success Stories
        </h2>
      </header>

      <div className="relative w-full h-full">
        <img
          src="/img/pinksun.png"
          alt="cloud"
          className="absolute top-36 -left-28"
        />
      </div>
      <article className="flex xl:flex-row flex-col gap-20">
        <SuccsessStoriesCard
          img="/img/SStorCard1.jpg"
          title="Shuffle Dance Edition"
          text="A week-long shuffling dance retreat in the heart of the jungle in Chemuyil, Mexico."
          color="pastel-yellow"
        />
        <SuccsessStoriesCard
          img="/img/SStorCard2.jpg"
          title="Destination Reinvention"
          text="A 12-week journey of self- discovery, culminating in a transformative week-long retreat in Tulum, Mexico."
          color="light-purple"
        />
      </article>
      <div className="relative w-full h-full">
        <img
          src="/img/pinksun.png"
          alt="cloud"
          className="absolute lg:block hidden -top-5 -right-28"
        />
      </div>
    </section>
  );
};

export default SuccsessStories;
