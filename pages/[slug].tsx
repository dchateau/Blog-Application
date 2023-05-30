import Head from "next/head";
import { useRouter } from "next/router";
import  { InferGetStaticPropsType } from "next";
import type { ReactElement } from "react";
import type { GetStaticProps, GetStaticPaths } from "next";

import type { EntryProps } from "@typings/globals";
import PostPage from "../src/post/pages/PostPage";
import data from "../public/data.json";

const posts = data.filter(
  (item) => item.sys.contentType.sys.id === "post"
);
const definedPages: Array<string> = posts.map(
  (post) => post.fields.slug?.["en-US"] || ""
);

// interface EntryProps {
//   title: string
//   creationDate: string
//   metaDescription: string
//   metaKeywords: Array<string>
//   readingTime: number
// }

const EntryPage = ({entry}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  const router = useRouter();
  const {
    query: { entryId },
  } = router;
  console.log("Router: ", entryId);
  console.log(entry);
  return (
    <>
      <Head>
        <meta name="description" content={entry.metaDescription}/>
        <meta name="keywords" content={entry.metaKeywords.join(", ")}/>
        <title>{entry.title}</title>
      </Head>
      <PostPage {...entry}/>
      {/* <h1>{entry.title}</h1>
      <p>{entry.readingTime}</p>
      <h4>Entry Id: {entryId}</h4> */}
    </>
  );
};

export default EntryPage;

export const getStaticProps: GetStaticProps<{entry: EntryProps}> = async (props) => {
  // console.log("Slug props: ", props.params);
  const [entry] = posts.filter(
    (post) => post.fields.slug?.["en-US"] === props.params?.slug
  );
  // console.log("Entry from slug: " , entry);
  const { title, creationDate, metaDescription, metaKeywords, readingTime } =
    entry.fields;

  const entryFields: EntryProps = {
    title: title?.["en-US"] || "",
    creationDate:creationDate?.["en-US"] || "",
    metaDescription: metaDescription?.["en-US"] || "",
    metaKeywords: metaKeywords?.["en-US"] || [],
    readingTime: readingTime?.["en-US"] || 1,
  };

  return {
    props: {
      // pages: definedPages,
      entry: entryFields,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (props) => {
  console.log("Slug path props: ", props);
  const paths = definedPages.map((page) => {
    // console.log(page);
    return {
      params: {
        slug: page,
      },
    };
  });

  // console.log(paths);
  return {
    paths,
    fallback: false,
  };
};
