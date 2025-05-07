import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import ReadOurReviews from "@/components/home/ReadOurReviews";
import BasicFaqs from "@/components/Team-retreats/BasicFaqs";
import SuggestedLocations from "@/components/Team-retreats/SuggestedLocations";
import Teamhero from "@/components/powered-by-noma/Teamhero";
import WhatToExpect from "@/components/powered-by-noma/WhatToExpect";
import WhyNoma from "@/components/powered-by-noma/WhyNoma";
import Solution from "@/components/powered-by-noma/Solution";
import HowDoesItWork from "@/components/powered-by-noma/HowDoesItWork";
import SuccsessStories from "@/components/powered-by-noma/SuccsessStories";

const PoweredByNoma = () => {
  return (
    <Layout>
      <PageSEO title="Powered by Noma" />
      <main className="mb-28">
        <Teamhero
          heading="Powered by Noma"
          text="We specialize in curating unique, bespoke in person
          retreats that bring online communities together to meet,
          learn, and grow in beautiful locations worldwide."
          btn="REQUEST A QUOTE"
        />
        <WhatToExpect />
        <Solution />
        <HowDoesItWork />
        <WhyNoma />
        <SuccsessStories />
        <BasicFaqs />
      </main>
    </Layout>
  );
};

export default PoweredByNoma;
