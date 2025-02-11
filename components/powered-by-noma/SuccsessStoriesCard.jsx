import classNames from "classnames";

const SuccsessStoriesCard = ({ img, title, text, color }) => {
  return (
    <section
      className={classNames(
        `flex flex-col rounded-xl pb-[72px] w-[300px] sm:w-[500px] pb-[32px] bg-${color} gap-8 drop-shadow-md`
      )}
    >
      <img
        src={img}
        alt="HDITCard"
        className="w-full h-[150px] sm:h-[250px] rounded-t-xl "
      />
      <div className="flex flex-col px-4 gap-6 ">
        <span className="font-bold text-xl sm:text-4xl font-Montserrat text-center -mt-1">
          {title}
        </span>
        <span className="text-center text-base font-Montserrat">{text}</span>
      </div>
    </section>
  );
};

export default SuccsessStoriesCard;
