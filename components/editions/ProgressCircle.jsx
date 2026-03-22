import Image from "next/image";
import "react-circular-progressbar/dist/styles.css";
import React from "react";
import { progressCardsData, getProgressCardsData } from "../common/Helper";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const getValueOfCircle = (
  title,
  foodieHaven,
  wellnessAndRelaxation,
  natureAndWildlife,
  activityAndFitness,
  nightlifeAndPartying,
  // Honduras-specific parameters
  outdoorAdventures,
  natureWildlife,
  communitySocial,
  wellnessFitness,
  skillsLearning,
  location
) => {
  // Honduras-specific values
  if (location?.toLowerCase().includes('honduras') || location?.toLowerCase().includes('monserrat')) {
    if (title === "Outdoor Adventures") {
      return { value: `${outdoorAdventures || 90}%` };
    }
    if (title === "Nature & Wildlife") {
      return { value: `${natureWildlife || 85}%` };
    }
    if (title === "Community & Social") {
      return { value: `${communitySocial || 95}%` };
    }
    if (title === "Wellness & Fitness") {
      return { value: `${wellnessFitness || 75}%` };
    }
    if (title === "Skills & Learning") {
      return { value: `${skillsLearning || 70}%` };
    }
  }

  // Default values for other locations
  if (title === "Foodie Heaven") {
    return { value: `${foodieHaven}%` };
  }

  if (title === "Wellness & relaxation") {
    return { value: `${wellnessAndRelaxation}%` };
  }

  if (title === "Nature & wildlife") {
    return { value: `${natureAndWildlife}%` };
  }

  if (title === "Activity & fitness") {
    return { value: `${activityAndFitness}%` };
  }

  if (title === "Nightlife & partying") {
    return { value: `${nightlifeAndPartying}%` };
  }

  return { value: "0%" };
};
const ProgressCircle = ({
  value,
  foodieHaven,
  wellnessAndRelaxation,
  natureAndWildlife,
  activityAndFitness,
  nightlifeAndPartying,
  // Honduras-specific props
  outdoorAdventures,
  natureWildlife,
  communitySocial,
  wellnessFitness,
  skillsLearning,
  location,
}) => {
  // const strokeWidth = 2;
  // const radius = (size - strokeWidth) / 2;
  // const circumference = radius * 2 * Math.PI;
  // const offset = circumference - (progress / 100) * circumference;
  return (
    <article className="bg-[#ECECFD] flex gap-2 items-center justify-center pt-4 pb-[29px] w-full sm:gap-6 md:gap-8 lg:gap-12 xl:gap-[67px] px-4 xl:px-0">
      {getProgressCardsData(location?.heading)
        .map((v) => ({
          ...v,
          ...getValueOfCircle(
            v.title,
            foodieHaven,
            wellnessAndRelaxation,
            natureAndWildlife,
            activityAndFitness,
            nightlifeAndPartying,
            outdoorAdventures,
            natureWildlife,
            communitySocial,
            wellnessFitness,
            skillsLearning,
            location?.heading
          ),
        }))
        .map((item, index) => (
          <article key={index} className="flex flex-col w-[66px] sm:w-[102px]">
            <div className="py-1">
              <p className="text-center text-[#313131] text-[10px] sm:text-base font-Montserrat font-normal leading-normal max-sm:italic">
                {item.title}
              </p>
            </div>
            {/* <Image
            src={item.img}
            alt="img"
            width={102}
            height={102}
            className="w-[66px] h-[66px] sm:w-[102px] sm:h-[102px]"
          /> */}
            <div className="w-[66px] h-[66px] lg:w-[102px] bg-[#ECECFD] rounded-full lg:h-[100px] ">
              <CircularProgressbarWithChildren
                value={parseFloat(item.value)} // Parse value to float
                styles={{
                  root: { width: "100%" },
                  path: {
                    stroke: item.color || "#A565FF",
                    borderRadius: "50%",
                    strokeWidth: 8,
                  },
                  trail: { stroke: "##ADADAD", strokeWidth: 8 },
                }}
              >
                <div className="bg-[#F4F1E6] w-14 h-14 lg:h-20 lg:w-20 rounded-full drop-shadow-[(0px_0px_2px_rgba(0,0,0,0.25))] flex items-center justify-center">
                  <Image
                    src={item.img}
                    alt="img"
                    width={102}
                    height={102}
                    className="w-14 h-14 lg:w-20 lg:h-20"
                  />
                </div>
              </CircularProgressbarWithChildren>
            </div>
            <p className="text-[#313131] text-center text-sm sm:text-[32px] font-Montserrat font-extrabold leading-normal">
              {item.value}
            </p>
          </article>
        ))}
    </article>
  );
};
export default ProgressCircle;
