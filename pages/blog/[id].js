import BlogOpenHero from "@/components/blogdetail/BlogOpenHero";
import BlogOpenSection from "@/components/blogdetail/BlogOpenSection";
import OpenBlogInterested from "@/components/blogdetail/OpenBlogInterested";
import Layout from "@/components/common/Layout";
import PageSEO from "@/components/common/PageSEO";
import { getBlogById, fetchGraphQL } from "@/lib/api";
import React from "react";

export const getServerSideProps = async ({ params }) => {
  try {
    const blog = await getBlogById({ blogId: params.id });
    
    // Get related blogs from the same category without making another full API call
    // We'll fetch just the blogs we need for the "interesting blogs" section
    const relatedBlogsQuery = `
    {
      blogCollection(where: {category: "${blog?.blog?.category || ''}", sys: {id_not: "${params.id}"}}, limit: 3) {
        items {
          sys {
            id
          }
          title
          category
          excerpt
          cardImage {
            url
            title
          }
        }
      }
    }`;
    
    const relatedBlogs = blog?.blog?.category ? await fetchGraphQL(relatedBlogsQuery) : { data: { blogCollection: { items: [] } } };
    
    return {
      props: {
        blog: blog || { blog: null },
        relatedBlogs: relatedBlogs?.data?.blogCollection?.items || [],
      },
    };
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return {
      props: {
        blog: { blog: null },
        relatedBlogs: [],
      },
    };
  }
}

const Blog = ({ blog, relatedBlogs }) => {
  return (
    <Layout>
      <PageSEO title="Blogs" />
      <BlogOpenHero />
      <BlogOpenSection blog={blog?.blog} />
      <OpenBlogInterested interestingBlogs={relatedBlogs} />
    </Layout>
  );
};

export default Blog;
