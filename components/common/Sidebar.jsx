import { useState } from "react";
import { navLinksData } from "./Helper";
import SidebarLinks from "./SidebarLinks";
import { SidebarIcon } from "./Icons";
import Link from "next/link";

const Sidebar = () => {
  const [showInfoDropdown, setShowInfoDropdown] = useState(false);

  return (
    <div className="flex flex-col h-full overflow-auto font-kurdis">
      {navLinksData.map((items, index) => (
        <SidebarLinks item={items} value={index} key={index} />
      ))}
      {/* Info dropdown */}
      <button
        onClick={() => setShowInfoDropdown(!showInfoDropdown)}
        className="w-full flex items-center justify-between gap-[10px] group px-9 py-4 font-kurdis bg-[rgb(255,218,127)] text-md"
      >
        <span
          className={`text-md duration-300 text-[#313131] font-kurdis leading-normal md:hidden ${
            showInfoDropdown ? "font-bold" : "font-normal"
          }`}
        >
          Info
        </span>
        <div
          className={`flex items-center justify-center transition-all duration-300 ${
            showInfoDropdown ? "rotate-90" : "rotate-0"
          }`}
        >
          <SidebarIcon />
        </div>
      </button>
      {showInfoDropdown && (
        <div className="px-9 py-4 w-full bg-white rounded shadow-2xl z-50 flex items-start flex-col justify-center gap-4 text-md text-[#313131] font-Montserrat leading-normal">
          <Link href="/bundles" className="hover:font-bold duration-300">
            Bundles
          </Link>
          <Link href="/team-retreats" className="hover:font-bold duration-300">
            Team retreats
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
