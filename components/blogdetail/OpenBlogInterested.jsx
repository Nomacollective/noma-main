import React from "react";
import OpenBlogIntrestedCard from "./OpenBlogIntrestedCard";

const OpenBlogInterested = ({ interestingBlogs }) => {
  console.log("pachimu", interestingBlogs);
  return (
    <>
      <div className="bg-light-purple pb-[100px]">
        <div className="max-w-[1120px] w-full mx-auto px-4">
          <h1 className="py-8 text-center text-3xl md:text-5xl font-sergio-trendy capitalize leading-normal font-normal ">
            Blogs You Might Be Interested In
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-9 2xl:gap-[68px]">
            {interestingBlogs.map((item, index) => (
              <OpenBlogIntrestedCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenBlogInterested;
