import Heading from "@/components/common/Heading";
import HeroImage from "@/components/common/HeroImage";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import ConnectWithUs from "@/components/contact-us/ConnectWithUs";
import { FaqsSlider } from "@/components/contact-us/FaqsSlider";
import SocialConnect from "@/components/contact-us/SocialConnect";
import { getFaqs } from "@/lib/api";
import Link from "next/link";
import Instagram from 'instagram-web-api';

export const getServerSideProps = async () => {
  const faqs = await getFaqs();
  const client = new Instagram({ username: process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME, password: process.env.NEXT_PUBLIC_INSTAGRAM_PASSWORD });

  const response = await client.getPhotosByUsername({
    username: 'INSTAGRAM_USERNAME',
  });
  console.log(client)
  return {
    props: {
      title: "Contact",
      faqs: faqs || [],
      posts: response.user.edge_owner_to_timeline_media.edges,
    },
  };
};


const ContactUs = ({ faqs, posts }) => {
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
      <div className="h-[400px] bg-[#ECECFD]">
        <iframe
          src="https://link.jbenquet.com/widget/form/00dE96FQ6mW7pPN6oRpe"
          className="w-full h-full border-none rounded-[36px]"
          id="inline-00dE96FQ6mW7pPN6oRpe"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="contact us"
          data-height="400"
          data-layout-iframe-id="inline-00dE96FQ6mW7pPN6oRpe"
          data-form-id="00dE96FQ6mW7pPN6oRpe"
          title="contact us"
        ></iframe>
        <script src="https://link.jbenquet.com/js/form_embed.js"></script>
      </div>
      {/* <SocialConnect /> */}
    </Layout>
  );
};

export default ContactUs;
