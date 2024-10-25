import BlogOpenHero from "@/components/blogdetail/BlogOpenHero";
import BlogOpenSection from "@/components/blogdetail/BlogOpenSection";
import OpenBlogInterested from "@/components/blogdetail/OpenBlogInterested";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import { getAllBlogs, getBlogById } from "@/lib/api";
import React from "react";

export const getServerSideProps = async ({ params }) => {
  const blog = await getBlogById({ blogId: params.id });
  const allBlogs = await getAllBlogs()
  return {
    props: {
      blog,
      allBlogs,
    },
  };
}

const Blog = ({ blog, allBlogs }) => {
  const sortedBlogs = allBlogs.blogCollection.items.filter((item) => item.title !== blog.blog.title) // Removing an existing blog
  const interestingBlogs = sortedBlogs.filter((item) => item.category === blog.blog.category).slice(0, 3);
  return (
    <Layout>
      <PageSEO title="Blogs" />
      <BlogOpenHero />
      <BlogOpenSection blog={blog?.blog} />
      <OpenBlogInterested interestingBlogs={interestingBlogs} />
    </Layout>
  );
};

export default Blog;
