import React from "react";
import Grid from "@mui/material/Grid";
import PostLayout from "../layout/PostLayout";
import AppTheme from "../../../theme/AppTheme";
import type { EntryProps } from "@typings/globals";

// interface EntryProps {
//   title: string;
//   creationDate: string;
//   metaDescription: string;
//   metaKeywords: Array<string>;
//   readingTime: number;
// }

const PostPage = ({ title }: EntryProps) => {
  return (
    <AppTheme>
      <PostLayout>
        <Grid
          container
          spacing={1}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "calc(100vh - 110px)", width: "100%" }}
        >
          <Grid
            container
            spacing={1}
            sx={{
              width: "100%",
              backgroundColor: "secondary.main",
            }}
          >
            <Grid item md={6} lg={8}>
              <h1>{title}</h1>
            </Grid>
            <Grid item md={6} lg={4}>
              <h3>Image</h3>
            </Grid>
          </Grid>
          <Grid container>
            <h5>Body</h5>
          </Grid>
        </Grid>
      </PostLayout>
    </AppTheme>
  );
};

export default PostPage;
