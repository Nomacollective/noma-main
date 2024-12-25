import CommonButton from "@/components/common/CommonButton";
import Heading from "@/components/common/Heading";
import HeroImage from "@/components/common/HeroImage";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import Subheading from "@/components/common/Subheading";
import VideoComponent from "@/components/common/Videocomponent";
import VideoPlayer from "@/components/common/VideoPlayer";
import Basics from "@/components/how-it-work/Basics";
import Steps from "@/components/how-it-work/Steps";
import { getFaqs } from "@/lib/api";
import React from "react";

export const getServerSideProps = async () => {
  const faqs = await getFaqs();
  return {
    props: {
      title: "How it works",
      faqs: faqs || [],
    },
  };
};

const HowItWork = ({ faqs }) => {
  const faq = faqs.faqCollection.items;
  return (
    <Layout>
      <PageSEO title="How It Works" />
      <HeroImage bg="url(/img/hero-water.png)" />
      <div className="pt-8">
        <Heading heading="How it works" />
      </div>
      <Subheading
        width="730px"
        paragraph="Noma Collective carefully curates your whole adventure, organizing luxury remote friendly accommodation, wellness programmes, experiences, community nights, cultural immersion, give-back programmes and more. Having gained the trust of over 700 alumni, we excel in crafting unmatched and exceptional adventures."
      />
      <div className="mt-8">
        <Steps />
      </div>
      <div className="mt-11 mb-8 sm:mb-0">
        <VideoPlayer url='https://www.youtube.com/watch?v=qrrDPzFlATY&ab_channel=NomaCollective' />
        <Subheading
          width="700px"
          paragraph={`Noma Collective not only brings you the world, but a real community to see it with. Above all else, we recognize that it’s the people who make the experience. Each Edition brings together a unique and diverse community who are united through values of openness, compassion and collaboration. We create a safe space for creative collaboration where you and your community can thrive.`}
        />
      </div>
      <Basics faqs={faq} />
      <h4 className="heading my-4 text-[22px] md:text-[28px] lg:text-4xl m-auto max-w-[1000px] leading-[120%]">
        Still can<span className="font-serif">'</span>
        <span className="lowercase">t</span> decide
        <span className="font-serif font-extrabold">?</span> Let our expert team
        help you craft your dream Edition. Adventure awaits{" "}
        <span className="font-serif font-extrabold">-</span> book a call today
        <span className="font-serif font-extrabold">?</span>
      </h4>

      <div className="mb-24">
        <CommonButton text="GET STARTED" />
      </div>
    </Layout>
  );
};

export default HowItWork;
