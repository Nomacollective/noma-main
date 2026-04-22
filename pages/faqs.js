import HeroImage from "@/components/common/HeroImage";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import FaqsWrapper from "@/components/home/faqs-expand/FaqsWrapper";
import { getAllFaqs } from "@/lib/api";

export const getStaticProps = async () => {
  const faqs = await getAllFaqs();
  return {
    props: {
      title: "FAQS",
      faqs:
        faqs?.faqsPageFaqCollection?.items?.sort((a, b) => {
          // If 'order' is missing, treat it as a very high value (e.g., Infinity)
          const orderA = a.order !== undefined ? a.order : Infinity;
          const orderB = b.order !== undefined ? b.order : Infinity;

          return orderA - orderB;
        }) || [],
    },
    // Revalidate every hour
    revalidate: 3600,
  };
};

const FaqsExpand = ({ faqs }) => {
  return (
    <Layout>
      <PageSEO title="Noma - FAQS expand" />
      <HeroImage bg='url("/img/faq-expand-cover-bg.png")' />
      <div className="mb-4 mt-6">
        <h1 className="heading">FAQs</h1>
      </div>
      <FaqsWrapper faqs={faqs} />
    </Layout>
  );
};

export default FaqsExpand;
