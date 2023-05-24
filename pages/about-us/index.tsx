import React from "react";
import Head from "next/head";
import AboutUsPage from "../../src/page/pages/AboutUsPage";

const index = () => {
  return (
    <div>
      <Head>
        <title>About us</title>
        <meta name="description" content="About Gluo blogging" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutUsPage />
    </div>
  );
};

export default index;
