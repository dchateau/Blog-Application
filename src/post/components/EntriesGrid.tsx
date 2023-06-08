import React from "react";
import Grid from "@mui/material/Grid";

import EntryItem from "./EntryItem";

import type { ReactElement } from "react";
import type { PostFields } from "@typings/contentful";
import type { EntryItemProps } from "@typings/globals";

interface Props {
  posts: PostFields[];
}

const EntriesGrid = ({ posts }: Props): ReactElement => {
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

        const authors: string[] = author.map(
          (author: any) => author.fields.fullName
        );

        const props: EntryItemProps = {
          ...post,
          authors,
          date: new Date(creationDate),
          entryId: entryId || "",
          imageUrl: thumbnail?.fields.file?.url?.toString() || "",
        };

        return <EntryItem {...props} key={entryId} />;
      })}
    </Grid>
  );
};

export default EntriesGrid;
