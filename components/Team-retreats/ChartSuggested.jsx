import Image from "next/image";

const Chart = ({ parcent, img, text, color }) => {
  const degrees = (parcent / 100) * 360;
  return (
    <div className="flex flex-col gap-4 items-center">
      <p
        className=" font-Montserrat  font-normal  text-center text-[16px] text-[#313131]"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <div
        className="sm:w-[96px] w-20 h-20 sm:h-[96px] relative  group  shadow-2xl rounded-full p-[11px]"
        style={{
          background: `conic-gradient( ${color} ${degrees}deg , #ADADAD ${degrees}deg)`,
        }}
      >
        <div
          className="w-[60px] max-lg:hidden rounded absolute group-hover:opacity-100 duration-700 opacity-0 text-bold text-white shadow-xl top-3 -right-9 px-4  "
          style={{
            background: `${color}`,
          }}
        >
          {parcent}%{" "}
        </div>{" "}
        <div className="w-full h-full text-white text-[42px] bg-white flex items-center justify-center rounded-full">
          <Image src={img} height={76} width={76} alt="chart"/>
        </div>
      </div>
      <p className="text-[#313131] font-Montserrat font-extrabold text-xl sm:text-[32px] text-center ">
        {parcent}%
      </p>
    </div>
  );
};
export default Chart;
