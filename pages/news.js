import HeroImage from "@/components/common/HeroImage";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import NewsForBlog from "@/components/news/NewsForBlog";
import { getAllBlogs } from "@/lib/api";
import React from "react";

export const getStaticProps = async () => {
  const blogs = await getAllBlogs();
  return {
    props: {
      title: "What's New",
      blogs: blogs || [],
    },
    // Revalidate every 30 minutes for news content
    revalidate: 1800,
  };
};

const News = ({ blogs }) => {
  return (
    <Layout>
      <PageSEO title="What's New" />
      <HeroImage bg="url('/img/news_cover.jpg')" />
      <NewsForBlog blogs={blogs} />
    </Layout>
  );
};

export default News;
