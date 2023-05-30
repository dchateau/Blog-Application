import React from "react";
import Grid from "@mui/material/Grid";

import EntryItem from "./EntryItem";
import { Author, PostFields } from "@typings/contentful";

type Props = {
  posts: PostFields[]
}

const EntriesGrid = ({posts}: Props) => {
  // Is this apropriate? -Define type?
  // const posts = data.filter((item) => item.sys.contentType.sys.id === "post");
  // const posts: PostFields[] = getPosts();

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      columnSpacing={{ xs: 1, sm: 1, md: 3, lg: 4 }}
      spacing={1}
    >
      {posts.map((post: PostFields) => {
        const { author, creationDate, entryId, thumbnail } = post;

        const authors: Array<string> = author.map(
          (author: any) => author.fields.fullName
        );

        const props = {
          ...post,
          authors,
          date: new Date(creationDate),
          entryId: entryId || "",
          imageUrl: thumbnail?.fields.file?.url?.toString() || "",
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
