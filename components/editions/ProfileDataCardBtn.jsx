import React from "react";
import { ProfileDataCardBg } from "../utils/Functions";

const ProfileDataCardBtn = ({ item, value }) => {
  const BgColor = ProfileDataCardBg({ value });
  return (
    <>
      <button
        type="submit"
        className="px-3 py-1 rounded-full text-[#313131] font-Montserrat text-sm xl:text-base font-normal leading-normal whitespace-nowrap"
        style={{ backgroundColor: BgColor }}
      >
        {item.btn1}
      </button>
    </>
  );
};

export default ProfileDataCardBtn;
