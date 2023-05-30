import React from "react";
import Grid from "@mui/material/Grid";
import EntryItem from "./EntryItem";
import data from "../../../public/data.json";
// import type { Fields } from "@typings/globals";
import type {PostFields} from "@typings/contentful";

const EntriesGrid = () => {
  // Is this apropriate? -Define type?
  const posts = data.filter((item) => item.sys.contentType.sys.id === "post");

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      columnSpacing={{ xs: 1, sm: 1, md: 3, lg: 4 }}
      spacing={1}
    >
      {posts.map((post) => {
        const {
          title,
          author,
          thumbnail,
          excerpt,
          creationDate,
          readingTime,
          slug,
        } = post.fields;
        const entryId = post.sys.id;
        const authors: Array<string> =
          author?.["en-US"].map((auth) => auth.fields.fullName["en-US"]) || [];
        const entrySlug = slug?.["en-US"] || "";
        excerpt["en-US"];

        const props = {
          authors,
          date: new Date(creationDate["en-US"]),
          entryId,
          excerpt: excerpt["en-US"],
          imageUrl: thumbnail["en-US"].fields.file["en-US"].url,
          readingTime: readingTime["en-US"],
          title: title["en-US"],
          slug: entrySlug,
        };
        // Better destructuring?
        // const fullName = author?.["en-US"][0].fields.fullName;
        // const imageUrl = thumbnail?.["en-US"].fields.file["en-US"].url;
        // let date = new Date(creationDate?.["en-US"] || "");

        // console.log(posts);
        // console.log(title, fullName);
        return <EntryItem {...props} key={entryId} />;
      })}
    </Grid>
  );
};

export default EntriesGrid;
