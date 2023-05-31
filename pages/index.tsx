import type { NextPage } from "next";
import Head from "next/head";
import { useMemo, useRouter } from "next/router";
import type { NextRouter } from "next/router";
import { useEffect } from "react";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

import { getCategories, getPosts } from "@post/helpers";
import PostsPage from "../src/post/pages/PostsPage";
import type { CategoryFields, PostFields } from "@typings/contentful";

// const posts = data.filter((item) => item.sys.contentType.sys.id === "post");
// const definedPages = posts.map((post) => post.fields.slug);
let filteredPosts:PostFields[];
const Home = ({
  categories,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router: NextRouter = useRouter();
  filteredPosts= posts;
  

  // console.log("Posts: ", posts)
  // console.log("Defined pages: ", definedPages);
  useEffect(() => {
    const onRouteChange = (url: string): void => {
      let category: string[] | string = url.split("?");

      if (category.length === 1) return;
      category = category[1].split("=");
      category = category[1];
      // console.log("Route changed to: ", url);
      console.log("Filter category: ", category);
      // console.log(posts)

      const filtered = posts.filter((post) => {
        const postCategories = post.categories;
        // console.log(postCategories);
        const isIn = postCategories?.findIndex(
          (cat) => cat.fields.slug === category
        );
        // console.log("Is in? ", isIn, post.slug);
        if (isIn !== -1) return post;
      });

      filteredPosts = filtered;
      // console.log("Filtered", filtered);
    };
    router.events.on("routeChangeStart", onRouteChange);
  }, [router.events]);

  return (
    <div>
      <Head>
        <title>Blog application</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/gluo.ico" />
      </Head>
      <PostsPage posts={filteredPosts} categories={categories} />

      {/* <main >
        <h1>Main application</h1>
      </main>

      <footer >
        
          Powered by{' '}
      </footer> */}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{
  categories: CategoryFields[];
  posts: PostFields[];
}> = async (props) => {
  // const {locale} = props;
  // const { slug } = params;
  // console.log({ slug });
  const posts: PostFields[] = getPosts();
  const categories: CategoryFields[] = getCategories();

  console.log("index props: ", props);

  return {
    props: {
      categories,
      posts,
      ...props,
    },
  };
};
