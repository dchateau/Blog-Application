import React from "react";
import Head from "next/head";
import ContactPage from "../../src/page/pages/ContactPage";

const index = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact Gluo blogging" />
        <link rel="icon" href="/gluo.ico" />
      </Head>
      <ContactPage />
    </div>
  );
};

export default index;
