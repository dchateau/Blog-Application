import type { ReactElement } from "react";
import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import type { GetStaticProps, GetStaticPaths } from "next";
import AuthPage from "../../src/page/pages/AuthorPage";
import { getAuthorPages, getAuthorBySlug } from "@post/helpers";
import { AuthorFields } from "@typings/contentful";

const AuthorPage = ({
  author,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  // getAuthorBySlug("jane-doe");
  // console.log("Router: ", entryId);
  // console.log("The post: ", post);
  return (
    <>
      <Head>
        <link rel="icon" href="/gluo.ico" />
        <title>{"About me"}</title>
      </Head>
      <AuthPage author={author}/>
      {/* <PostPage post={post} /> */}
      {/* <h1>{entry.title}</h1>
        <p>{entry.readingTime}</p>
        <h4>Entry Id: {entryId}</h4> */}
      
    </>
  );
};

export default AuthorPage;

export const getStaticProps: GetStaticProps<{ author: AuthorFields }> = async (
  props
) => {
  const author: AuthorFields = getAuthorBySlug(
    props.params?.slug?.toString() || ""
  );

  return {
    props: {
      // pages: definedPages,
      // post,
      author,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (props) => {
  // console.log("Slug path props: ", props);

  // const paths = definedPages.map((page) => {
  //   // console.log(page);
  //   return {
  //     params: {
  //       slug: page,
  //     },
  //   };
  // });

  // console.log(paths);
  return {
    paths: getAuthorPages(),
    fallback: false,
  };
};
