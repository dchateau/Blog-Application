import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PostsLayout from "../layout/PostsLayout";
import EntriesGrid from "../components/EntriesGrid";
import AppTheme from "../../../theme/AppTheme";

const PostsPage = () => {
  return (
    <AppTheme>
      <PostsLayout>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "calc(100vh - 110px)" }}
        >
          {/* <Typography variant="h5">More content coming soon</Typography> */}
          <EntriesGrid />
        </Grid>
      </PostsLayout>
    </AppTheme>
  );
};

export default PostsPage;
