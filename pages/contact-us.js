import Heading from "@/components/common/Heading";
import HeroImage from "@/components/common/HeroImage";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import ConnectWithUs from "@/components/contact-us/ConnectWithUs";
import { FaqsSlider } from "@/components/contact-us/FaqsSlider";
import SocialConnect from "@/components/contact-us/SocialConnect";
import { getFaqs } from "@/lib/api";
import Link from "next/link";
import React, { useEffect } from "react";

export const getServerSideProps = async () => {
  const faqs = await getFaqs();
  return {
    props: {
      title: "Contact",
      faqs: faqs || [],
    },
  };
};

const ContactUs = ({ faqs }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.jbenquet.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <PageSEO title="Noma - Contact-us" />
      <HeroImage bg='url("/img/contact-us-cover.png")' />
      <div className="my-4">
        <Heading heading="Contact Us" />
      </div>
      <h4 className="font-Montserrat my-4 font-bold text-2xl text-center px-4">
        Got a burning question? check our{" "}
        <Link href="/faqs" className="underline">
          FAQs
        </Link>
      </h4>
      <FaqsSlider faqs={faqs?.faqCollection?.items} />
      {/* <ConnectWithUs /> */}
      <div className="h-[400px] bg-[#ECECFD] flex justify-center items-center">
        <div id="embed-form-container"></div>
      </div>
      <SocialConnect />
    </Layout>
  );
};

export default ContactUs;
