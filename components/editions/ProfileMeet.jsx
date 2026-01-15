import Image from "next/image";
import React from "react";
import { FaciltiesIcons } from "../common/Icons";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ProfileMeet = ({ managers = [], location }) => {
  if (!managers.length) return null;

  const isSingle = managers.length === 1;

  return (
    <div className="bg-[#F4F1E6] my-4 py-8">
      <div className="max-w-[1100px] w-full mx-auto px-4 xl:px-0">
        <div className="flex gap-4 items-center mb-6 sm:hidden">
          <FaciltiesIcons location={location?.heading} />
        </div>

        <div
          className={`grid gap-12 ${
            isSingle ? "place-items-center" : "md:grid-cols-2"
          }`}
        >
          {managers.map((manager, index) => (
            <div
              key={manager?.sys?.id || index}
              className="flex gap-6 items-start sm:flex-row flex-col"
            >
              {/* Left section: Title and image inline */}
              <div className="flex flex-col items-center sm:items-start min-w-[265px]">
                <div>
                  <h1 className="text-[#313131] font-Montserrat text-xl sm:text-[32px] font-extrabold leading-normal">
                    Meet {manager?.name}
                  </h1>
                  <p className="text-[#313131] font-Montserrat text-sm sm:text-base font-normal leading-normal mb-2">
                    Your local Community Manager
                  </p>
                </div>
                <div className="w-[247px] h-[350px] rounded-full overflow-hidden">
                  <Image
                    src={manager?.profileImage?.url}
                    alt={`Noma Collective community manager - ${manager?.name}`}
                    width={247}
                    height={247}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right section: Description */}
              <div className="sm:max-w-[298px] w-full flex flex-col gap-2 sm:gap-4 text-left text-[#313131] text-sm sm:text-base font-normal font-Montserrat leading-normal pt-12">
                {documentToReactComponents(manager?.description?.json)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileMeet;
