import CommonButton from "@/components/common/CommonButton";
import Heading from "@/components/common/Heading";
import HeroImage from "@/components/common/HeroImage";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import Subheading from "@/components/common/Subheading";
import VideoComponent from "@/components/common/Videocomponent";
import FeaturedEditionSection from "@/components/home/FeaturedEditionSection";
import NewsSection from "@/components/home/NewsSection";
import ReadOurReviews from "@/components/home/ReadOurReviews";
import Waves from "@/components/home/Waves";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import Steps from "@/components/how-it-work/Steps";
import { getAllBlogs, getAllEditions } from "@/lib/api";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const getServerSideProps = async () => {
  const locations = await getAllEditions();
  const blogs = await getAllBlogs();
  return {
    props: {
      title: "Locations",
      locations: locations || [],
      blogs: blogs || [],
    },
  };
};

export default function Home({ locations, blogs }) {
  const locationItems = locations.contentTypeLocationCollection.items;
  return (
    <Layout>
      <PageSEO title="Home" />

      {/* <HeroImage bg="url('/img/hero-bg.png')" /> */}
      <ReactPlayer
        url="/video/noma_header_video.mp4"
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
      <Waves />
      <div className="px-4 py-2">
        <Heading heading="Bring Your Job, Well Do The Rest" />
      </div>
      <div className="sm:max-w-[600px] w-full mx-auto max-xl:px-4 pb-3 sm:pb-0">
        <Subheading
          paragraph="Your remote work, done differently. We curate extraordinary 2-4 week
          trips for remote workers, building a community of like-minded
          professionals. Whether you work fully remotely or you can take time
          away from the office, why not embrace the world with us, and redefine
          your work-life balance."
        />
      </div>
      <VideoComponent video="/video/sample-video.mp4" />
      <div className="sm:mt-8">
        <CommonButton text="BOOK YOUR CALL" />
      </div>
      <div className="max-sm:mt-[7px]">
        <Steps />
      </div>
      <FeaturedEditionSection locations={locationItems} />
      <WhatWeOffer />
      <ReadOurReviews />
      <NewsSection blogs={blogs} />
    </Layout>
  );
}
