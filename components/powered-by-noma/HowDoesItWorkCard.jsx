import classNames from "classnames";

const HowDoesItWorkCard = ({
  img,
  headerText,
  title,
  middleText,
  lowerText,
  color,
}) => {
  return (
    <section
      className={classNames(
        `flex flex-col rounded-xl pb-[50px] w-[300px] lg:w-[352px] bg-${color} gap-6 drop-shadow-md`
      )}
    >
      <img
        src={img}
        alt="HDITCard"
        className="w-full h-[120px] rounded-t-xl "
      />
      <div className="flex flex-col row-span-2">
        <span className="text-center">{headerText}</span>
        <span className="font-bold text-4xl font-Montserrat text-center -mt-1">
          {title}
        </span>
      </div>
      <div className="flex flex-col px-4 gap-3 font-Montserrat">
        <span className="text-center text-base">{middleText}</span>
        <span className="text-center">{lowerText}</span>
      </div>
    </section>
  );
};

export default HowDoesItWorkCard;
