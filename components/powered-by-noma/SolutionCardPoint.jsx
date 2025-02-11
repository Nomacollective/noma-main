const SolutionCardPoint = ({ title, color }) => {
  return (
    <span className={`bg-[${color}] px-3 py-2 rounded-full drop-shadow-md`}>
      {title}
    </span>
  );
};

export default SolutionCardPoint;
