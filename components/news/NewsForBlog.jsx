import React, { useMemo, useState } from "react";
import Heading from "../common/Heading";
import { ForBlogBtnData } from "../common/Helper";
import FeatureBlog from "./FeatureBlog";
import { SearchIcon } from "../common/Icons";
import Fourbotton from "./Fourbtns";
import NewsSection from "../home/NewsSection";

const NewsForBlog = ({ blogs }) => {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const b = blogs?.blogCollection?.items || [];

  const bs = useMemo(() => {
    const filtered = b?.filter((i) => {
      if (!search) {
        return true;
      }

      return (
        i.title.toLowerCase().includes(search?.toLowerCase()) ||
        i?.excerpt?.toLowerCase().includes(search?.toLowerCase())
      );
    });

    if (categoryFilter && categoryFilter !== "All") {
      return filtered.filter(
        (i) =>
          i?.category?.toLowerCase()?.trim() ===
          categoryFilter?.toLowerCase()?.trim()
      );
    }

    return filtered;
  }, [b, search, categoryFilter]);

  const highlightedBlogs = b?.filter((i) => i.highlight === true);

  return (
    <>
      <div className="max-w-[1120px] w-full mx-auto pb-10 px-4">
        <div className="px-3 pt-8">
          <Heading
            heading={
              <>
                {" "}
                What<span className="font-serif">'</span>
                <span className="lowercase">s</span> new
              </>
            }
          />
        </div>
        <p className="md:px-24 pt-4 text-center font-Montserrat">
          This is your go-to hub for all things digital nomad. We&apos;re here
          to provide you with the tools to thrive, from finding remote jobs to
          essential top tips to inspiring travel guides. Welcome to your
          one-stop shop for navigating the digital nomad landscape.
        </p>
        <div className="bg-white max-w-[736px] w-full h-12 sm:h-16 mx-auto rounded-[57px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] flex gap-2 items-center justify-between px-4  mt-8 sm:mt-16">
          <input
            type="text"
            className=" text-black outline-none w-full bg-transparent font-Montserrat text-sm font-normal leading-normal sm:pl-4 "
            placeholder="Type to search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <SearchIcon />
        </div>
        <h4 className="text-left font-Montserrat pt-4 font-bold">
          Filter by type
        </h4>
        <div className="block sm:flex sm:flex-wrap gap-x-4 justify-start">
          {ForBlogBtnData.map((items, index) => (
            <Fourbotton
              items={items}
              value={index}
              key={index}
              onFilterSelect={(f) => setCategoryFilter(f)}
              className=""
            />
          ))}
        </div>
      </div>
      {search.trim() === "" && (
        <div className="!bg-main-red">
          <NewsSection
            blogs={{
              blogCollection: {
                items: highlightedBlogs,
              },
            }}
            highlighted
          />
        </div>
      )}
      <FeatureBlog blogs={bs} />
    </>
  );
};

export default NewsForBlog;
