import AdsSitehero from "@/components/ads-site/AdsSitehero";
import Carmellacard from "@/components/ads-site/Carmellacard";
import DigitalFreedom from "@/components/ads-site/DigitalFreedom";
import OurUniqueDestinations from "@/components/ads-site/OurUniqueDestinations";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import React from "react";
import { getAllEditions } from "@/lib/api";

export const getServerSideProps = async () => {
  const locations = await getAllEditions();
  return {
    props: {
      title: "Locations",
      locations: locations || [],
    },
  };
};

const AdsSite = ({ locations }) => {
  const locationlist = locations.contentTypeLocationCollection.items;
  const validCities = [
    "Buenos Aires",
    "Belize",
    "Barcelona",
    "Brazil",
    "Lisbon",
    "Puerto Escondido",
    "Oaxaca",
  ];
  const uniqueCities = new Set();
  const locationItems = locationlist.filter((location) => {
    if (!uniqueCities.has(location.city)) {
      if (
        validCities.includes(location.city) ||
        validCities.includes(location.country)
      ) {
        uniqueCities.add(location.city);
        return true;
      }
    }
    return false;
  });

  return (
    <Layout>
      <PageSEO title="Ads Site" />
      <main className="mb-20">
        <AdsSitehero
          adsheading="Live, Work and Explore With Our Digital Nomad Community"
          adstext="Bring your job, we’ll do the rest."
        />
        <DigitalFreedom />
        <OurUniqueDestinations locations={locationItems} />
        <Carmellacard />
      </main>
    </Layout>
  );
};

export default AdsSite;
