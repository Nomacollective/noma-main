const Points = ({ points }) => {
  return (
    <div className="flex flex-col sm:items-center justify-start sm:justify-center gap-8 pt-3 px-2.5">
      {points.map((item, key) => (
        <div className="flex gap-2 " key={key}>
          <img src="/img/Point.svg" alt="Point" width="25px" height="25px" />
          <span
            className="text-[#313131] font-Montserrat font-bold  text-base sm:text-xl"
            key={key}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Points;
