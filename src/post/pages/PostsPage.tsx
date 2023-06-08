import React from "react";
import Grid from "@mui/material/Grid";

import PostsLayout from "../layout/PostsLayout";
import EntriesGrid from "../components/EntriesGrid";
import AppTheme from "../../../theme/AppTheme";

import type { ReactElement } from "react";
import type { CategoryFields, PostFields } from "@typings/contentful";

interface Props {
  posts: PostFields[];
  categories: CategoryFields[];
}

const PostsPage = ({ categories, posts }: Props): ReactElement => {
  return (
    <AppTheme>
      <PostsLayout categories={categories}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "calc(100vh - 110px)" }}
        >
          <EntriesGrid posts={posts} />
        </Grid>
      </PostsLayout>
    </AppTheme>
  );
};

export default PostsPage;
