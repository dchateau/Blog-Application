import Head from "next/head";
import { InferGetStaticPropsType } from "next";

import PostPage from "../src/post/pages/PostPage";
import { getDefinedPages, getPostBySlug } from "@post/helpers";

import type { ReactElement } from "react";
import type { GetStaticProps, GetStaticPaths } from "next";
import type { PostFields } from "@typings/contentful";

const EntryPage = ({
  disqusSiteName,
  post,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  return (
    <>
      <Head>
        <meta name="description" content={post?.metaDescription} />
        <meta name="keywords" content={post?.metaKeywords?.join(", ")} />
        <link rel="icon" href="/gluo.ico" />
        <title>{post?.title}</title>
      </Head>
      <PostPage disqusSiteName={disqusSiteName} post={post} />
    </>
  );
};

export default EntryPage;

export const getStaticProps: GetStaticProps<{
  post: PostFields;
  disqusSiteName: string;
}> = async (props) => {
  const post: PostFields = getPostBySlug(props.params?.slug?.toString() || "");

  return {
    props: {
      post,
      disqusSiteName: process.env.DISQUS_SITENAME || "",
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (props) => {
  return {
    paths: getDefinedPages(),
    fallback: false,
  };
};
