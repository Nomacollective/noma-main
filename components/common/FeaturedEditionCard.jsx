import React from "react";
import ImageSwiper from "./Imageswiper";
import { featuredEditionCardBgs } from "../utils/Functions";
import { getLocationCardColor } from "@/pages/location";

const FeaturedEditionCard = ({ item, value }) => {
  const { BgColor1, BgColor2 } = featuredEditionCardBgs({
    value: value % 8,
  });
  return (
    <article className="mx-auto w-[328px] hover:scale-[1.02] transition duration-300 ease-in-out rounded-full cursor-pointer">
      <article
        className="rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] mt-2"
        style={{ backgroundColor: getLocationCardColor(item?.locationColor) }}
      >
        <ImageSwiper item={item} />
        <article className="px-4 py-1">
          <h1 className="imageswiperheading">{item.title},</h1>
          <h1 className="imageswiperheading -mt-2">{item.description}</h1>
          <p className="text-carbon-Black font-Montserrat text-sm font-normal ">
            {item.date}
          </p>
          <article className="flex gap-4 justify-between">
            <p className="text-carbon-Black font-Montserrat text-sm font-normal leading-normal">
              {item.days} days
            </p>
            <p className="text-carbon-Black font-Montserrat text-sm font-extrabold leading-normal">
              From ${item.price}
            </p>
          </article>
        </article>
      </article>
      <article className="flex gap-2 mt-2">
        <button
          type="submit"
          className="px-3 py-2 rounded-full text-carbon-Black font-Montserrat text-sm font-normal"
          style={{ backgroundColor: getLocationCardColor(item?.locationColor) }}
        >
          {item?.firstbtn || "--"}
        </button>
        <button
          type="submit"
          className="px-3 py-2 rounded-full"
          style={{ backgroundColor: "#F7F7F7" }}
        >
          {item.secondbtn}
        </button>
      </article>
    </article>
  );
};

export default FeaturedEditionCard;
