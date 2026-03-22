import Link from "next/link";
import React from "react";
import {
  FacebookIcon,
  InstaIcon,
  LinkedinIcon,
  TiktokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../common/Icons";
import SocialMediaCardWapper from "./SocialMediaCardWapper";

const SocialConnect = () => {
  return (
    <div className="socials text-center">
      <h4 className="py-4 sm:pb-8 px-4 text-2xl sm:text-3xl font-bold font-Montserrat">
        Wanna see what else we're about? Say hi on our socials!
      </h4>

      <div className="text-white pt-4 sm:pt-8 pb-[100px] sm:pb-[150px]">
        <div className="flex flex-wrap justify-center items-center gap-3 mb-2">
          <Link
            className="max-w-[70px] sm:max-w-[100px]"
            href="https://www.instagram.com/nomacollectivehq"
            target="_blank"
          >
            <InstaIcon />
          </Link>
          <Link
            className="max-w-[70px] sm:max-w-[100px]"
            target="_blank"
            href="https://www.facebook.com/nomacollectiveHQ/"
          >
            <FacebookIcon />
          </Link>
          <Link
            className="max-w-[70px] sm:max-w-[100px]"
            target="_blank"
            href="https://twitter.com/noma_collective?lang=en"
          >
            <TwitterIcon />
          </Link>
          <Link
            className="max-w-[70px] sm:max-w-[100px]"
            target="_blank"
            href="https://www.linkedin.com/company/nomacollective"
          >
            <LinkedinIcon />
          </Link>
          <Link
            className="max-w-[70px] sm:max-w-[100px]"
            target="_blank"
            href="https://www.tiktok.com/@nomacollective"
          >
            <TiktokIcon />
          </Link>
          <Link
            className="max-w-[70px] sm:max-w-[100px]"
            target="_blank"
            href="https://www.youtube.com/channel/UCi_aI11Tz4u8JZMLoF2UMGQ"
          >
            <YoutubeIcon />
          </Link>
        </div>

        {/* SnapWidget Embed (Horizontally Centered) */}
        <div className="flex justify-center w-full overflow-x-auto mt-8 px-4">
          <iframe
            src="https://snapwidget.com/embed/1110872"
            class="snapwidget-widget"
            allowtransparency="true"
            frameborder="0"
            scrolling="no"
            style={{
              border: "none",
              overflow: "hidden",
              width: "980px",
              height: "490px",
            }}
            title="Posts from Instagram"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SocialConnect;
