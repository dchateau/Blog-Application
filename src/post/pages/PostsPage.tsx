import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PostsLayout from "../layout/PostsLayout";

const PostsPage = () => {
  return (
    <PostsLayout>
      <Grid 
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{minHeight: "calc(100vh - 110px)"}}
      >
        <Typography variant="h5">More content coming soon</Typography>
      </Grid>
    </PostsLayout>
  );
};

export default PostsPage;
