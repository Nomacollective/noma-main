import Image from "next/image";
import { featuredBlogsBgs } from "../utils/Functions";
export const colorLookup = {
  "Location Lowdowns": "#BBE4D7",
  "Travel Tips": "#FFDA7F",
  "Remote Life": "#D5D1EA",
  "Alum-News": "#BBE4D7",
};

const OpenBlogIntrestedCard = ({ item }) => {
  const BgColor = featuredBlogsBgs({ item });
  return (
    <>
      <div className="w-[328px] cursor-pointer hover:scale-[1.02] transition duration-300 ease-in-out mx-auto">
        <button
          type="submit"
          className={`px-2 py-[7px] rounded-[31px] duration-300 max-w-[169px] w-full text-carbon-Black font-Montserrat text-sm font-normal leding-normal`}
          style={{ backgroundColor: colorLookup[item?.category] || BgColor }}
        >
          {item?.category}
        </button>
        <div className={`w-[328px] ${item?.cardImage?.url ? "" : "invisible"}`}>
          <img
            className="rounded-lg mt-2 object-fit h-[328px] w-[328px] object-cover"
            src={item?.cardImage?.url}
            alt={item?.cardImage?.title}
          />
        </div>

        <h1 className="text-carbon-Black font-Montserrat text-2xl lg:text-2xl font-extrabold mt-2">
          {item.title}
        </h1>
        <p>{item?.excerpt || ""}</p>
      </div>
    </>
  );
};

export default OpenBlogIntrestedCard;
